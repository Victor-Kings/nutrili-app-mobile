import
  React,{ createContext, useContext,useState}
 from 'react';

export const AuthContext = createContext({});

export function AuthContextProvider({ children }:any) {
    const [userToken, setUserToken] = useState("null");
    const [userSignedIn, setUserSignedIn] = useState(false);

    const signIn = () => {
      setUserSignedIn(true);
      setUserToken(() => "asdf");
    }
  
    const signUp = () => {
      setUserToken(() => "asdf");
    }
  
    const signOut = () => {
      setUserToken(() => '');
    }
    
  return (
    <AuthContext.Provider value={{signIn, signUp, signOut, userToken}}>
      {children}
    </AuthContext.Provider> 
  );
}

 export const useAuthContext = () => useContext(AuthContext);
