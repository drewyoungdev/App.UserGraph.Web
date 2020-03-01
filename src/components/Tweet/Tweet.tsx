import React, { useState } from 'react';
import './Tweet.scss';

interface TweetProps {
    onTweetClick: (tweetText: string) => void;
}

const Tweet: React.FC<TweetProps> = (props) => {
    // If additional components need re-sizable textarea then move into separate component
    const minRows = 1;
    const maxRows = 10;
    const maxCharacters = 280;

    const [tweetText, setTweetText] = useState<string>("");
    const [isTweetEnabled, setIsTweetEnabled] = useState<boolean>(false);
    const [textAreaRows, setTextAreaRows] = useState<number>(1);
    const [charsUsed, setCharsUsed] = useState<number>(0);
    const [percentageCharsUsed, setPercentageCharsUsed] = useState<number>(0);
    const [remainingChars, setRemainingChars] = useState<number>(0);

    const calculateRemainingChars = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const charsUsed = event.target.value.length;

        setCharsUsed(charsUsed);

        setRemainingChars(maxCharacters - charsUsed);

        const percentage = event.target.value.length / maxCharacters;

        setPercentageCharsUsed(Math.round((percentage * 100)));
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

    const checkIfTweetEnabled = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const charsUsed = event.target.value.length;

        if (event.target.value.length > 0 && maxCharacters >= charsUsed) {
            setIsTweetEnabled(true);
        }
        else {
            setIsTweetEnabled(false);
        }
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

                        calculateRemainingChars(e);

                        checkIfTweetEnabled(e);

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
                                props.onTweetClick(tweetText)
                            }
                        }}
                    >
                        Tweet
                    </div>
                    {
                        maxCharacters - charsUsed <= 10
                        ?
                        <div className={`${maxCharacters - charsUsed > 0 ? "char-limit-warning" : "char-limit-error"}  $tweet-footer-item`}>
                            {remainingChars}
                        </div>
                        :
                        <div className="tweet-footer-item">
                            {percentageCharsUsed}%
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Tweet;
