import React, {useState} from 'react';

export const UserCTX = React.createContext();

export const useUserCtx = () => React.useContext(UserCTX)

const UserContext = ({children}) => {

    const [mokUser, setMokUser] = useState({id: 1, name: 'Rodion', age: '18'})

    const handleClick = () => {
        setMokUser({id: Math.round(Math.random() * 100), name: 'Egor', age: '15'})
    }

    return (
        <UserCTX.Provider value={mokUser}>
            <>
                <button onClick={handleClick}>Change mokUser</button>
                {children}
            </>
        </UserCTX.Provider>
    );
};

export default UserContext;