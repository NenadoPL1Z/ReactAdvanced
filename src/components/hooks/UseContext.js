import React, {useContext} from 'react';
import ContextValue from "../ContextValue";


const TestCTX = React.createContext();

export const useTestCtx = () => {
  return useContext(TestCTX);
}


const UseContext = ({children}) => {
  return (
   <TestCTX.Provider value={{name: 'test', age: 'test1'}}>
     {children}
   </TestCTX.Provider>
  );
};

export default UseContext;