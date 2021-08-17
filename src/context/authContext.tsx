import {
  React, createContext, useContext,useMemo,useState
} from 'react';

export const AuthContext = createContext({});

// export function AuthContextProvider({ children }:any) {
//     const [userToken, setUserToken] = useState("");
//     const [userSignedIn, setUserSignedIn] = useState(false);
  
//     const authContext = useMemo(() => {
//       return {
//         signIn: () => {
//           setUserSignedIn(true);
//           setUserToken("asdf");
//         },
//         signUp: () => {
//           setUserToken("asdf");
//         },
//         signOut: () => {
//           setUserToken("");
//         }
//       };
//     }, []);

//   return (
//     <AuthContext.Provider value={{authContext, userSignedIn}}>
//       {children}
//     </AuthContext.Provider> 
//   );
// }

// export const useAuthContext = () => useContext(AuthContext);
