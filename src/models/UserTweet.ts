export interface UserTweet {
    createdByUser: User;
    tweet: Tweet;
}

export interface User {
    name: string;
}

export interface Tweet {
    text: string;
    createdDate: Date;
}
