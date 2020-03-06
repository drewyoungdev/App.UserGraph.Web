import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface ProfileProps extends RouteComponentProps<{ username: string }> {
}

const Profile: React.FC<ProfileProps> = (props) => {
    const username = props.match.params.username;

    return (
        <>
            Profile {username}
        </>
    )
}

export default Profile;
