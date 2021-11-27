import React from 'react';
import {UserCTX} from "../../context/userCTX";

const UserConsumer = () => {

    return (
        <UserCTX.Consumer>
            {value => {
                return (
                    <h1>Consumer ID: {value.id}</h1>
                )
            }}
        </UserCTX.Consumer>
    );
};

export default UserConsumer;