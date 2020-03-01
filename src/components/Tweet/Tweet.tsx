import React, { useState } from 'react';
import './Tweet.scss';

interface TweetProps {
    onTweetClick: (tweetText: string) => void;
}

const Tweet: React.FC<TweetProps> = (props) => {
    const [tweetText, setTweetText] = useState<string>("");
    const [isTweetEnabled, setIsTweetEnabled] = useState<boolean>(false);

    // const textArea = document.querySelector('textarea')
    // const textRowCount = textArea ? textArea.value.split("\n").length : 0
    // const rows = textRowCount + 1

    return (
        <div className="tweet">
            <div className="tweet-create">
                <textarea
                    className="mb-sm mt-sm tweet-draft-editor"
                    placeholder="What's happening?"
                    // rows={rows}
                    value={tweetText}
                    onChange={(e) =>
                    {
                        const tweetText =e.target.value;

                        setTweetText(tweetText);

                        if (tweetText.length > 0)
                            setIsTweetEnabled(true);
                        else
                            setIsTweetEnabled(false);
                    }}
                />
                <div className="mr-sm tweet-create-footer">
                    <div
                        className={`${isTweetEnabled ? "button-primary-med" : "button-primary-med-disabled"}`}
                        onClick={() =>
                        {
                            if (isTweetEnabled)
                                props.onTweetClick(tweetText)
                        }}
                    >
                        Tweet
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet;
