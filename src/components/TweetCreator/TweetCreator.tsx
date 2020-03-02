import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './TweetCreator.scss';

interface TweetCreatorProps {
    onTweetClick: (tweetText: string) => void;
}

const TweetCreator: React.FC<TweetCreatorProps> = (props) => {
    // If additional components need re-sizable textarea then move into separate component
    const minRows = 1;
    const maxRows = 10;
    const maxCharacters = 280;
    const remainingCharactersWarning = 20;

    const [tweetText, setTweetText] = useState<string>('');
    const [isTweetEnabled, setIsTweetEnabled] = useState<boolean>(false);
    const [textAreaRows, setTextAreaRows] = useState<number>(1);
    const [percentageCharsUsed, setPercentageCharsUsed] = useState<number>(0);
    const [remainingChars, setRemainingChars] = useState<number | null>(null);
    // const [highlightedText, setHighlightedText] = useState<string>('');

    const calculateRemainingChars = (charsUsed: number) => {
        setRemainingChars(maxCharacters - charsUsed);

        const percentage = charsUsed / maxCharacters;

        setPercentageCharsUsed(percentage * 100);

        // charsUsed > maxCharacters
        //     ? setHighlightedText(event.target.value.substring(maxCharacters - 1, charsUsed - 1))
        //     : setHighlightedText("");
    }

	const updateRows = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const textareaLineHeight = 24;

		const previousRows = event.target.rows;
  	    event.target.rows = minRows; // reset number of rows in textarea

		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }

		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
        }

        setTextAreaRows(currentRows < maxRows ? currentRows : maxRows);
    };

    const checkIfTweetEnabled = (charsUsed: number) => {
        if (charsUsed > 0 && maxCharacters >= charsUsed) {
            setIsTweetEnabled(true);
        }
        else {
            setIsTweetEnabled(false);
        }
    }

    const getChartColor = () => {
        if (remainingChars != null && remainingChars <= 0) {
            return 'red';
        }

        if (remainingChars != null && remainingChars <= remainingCharactersWarning) {
            return 'orange';
        }

        return '';
    }

    return (
        <div className="tweet">
            <div className="tweet-create">
                <textarea
                    className="mb-sm mt-sm tweet-draft-editor"
                    placeholder="What's happening?"
                    rows={textAreaRows}
                    value={tweetText}
                    onChange={(e) =>
                    {
                        updateRows(e);

                        calculateRemainingChars(e.target.value.length);

                        checkIfTweetEnabled(e.target.value.length);

                        const tweetText = e.target.value;

                        setTweetText(tweetText);
                    }}
                />
                <div className="mr-sm tweet-create-footer">
                    <div
                        className={`${isTweetEnabled ? "button-primary-med" : "button-primary-med-disabled"} tweet-footer-item`}
                        onClick={() =>
                        {
                            if (isTweetEnabled) {
                                props.onTweetClick(tweetText);

                                setTweetText('');

                                calculateRemainingChars(0);

                                checkIfTweetEnabled(0);

                                setTextAreaRows(1);
                            }
                        }}
                    >
                        Tweet
                    </div>
                    {
                        <div className="tweet-footer-item char-circular-progress-bar">
                            <CircularProgressbar
                                value={percentageCharsUsed}
                                text={remainingChars != null && remainingChars <= remainingCharactersWarning ? remainingChars.toString() : ''}
                                styles={buildStyles({
                                    pathTransitionDuration: 0.1,
                                    textSize: '2.25rem',
                                    textColor: getChartColor(),
                                    pathColor: getChartColor()
                                })}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TweetCreator;
