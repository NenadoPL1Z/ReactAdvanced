import React from 'react';
import {useUserCtx} from "../../context/userCTX";

const UserProvider = () => {
    const {id, name, age} = useUserCtx()

    return (
        <div>
            <h1>Context</h1>
            <h1>id: {id}</h1>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
        </div>
    );
};

export default UserProvider;