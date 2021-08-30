import
React, { createContext, useContext, useState }
  from 'react';

export const AuthContext = createContext({});

export function AuthContextProvider({ children }: any) {
  const [userToken, setUserToken] = useState<any>('');
  const [loged, setloged] = useState<Boolean>(false);
  const [userSignedIn, setUserSignedIn] = useState(false);


  return (
    <AuthContext.Provider value={{ setUserToken, userToken, setloged, loged }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
