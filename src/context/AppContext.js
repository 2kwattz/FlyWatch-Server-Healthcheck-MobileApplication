import React, { useState } from "react";
import { useSafeAreaFrame } from "react-native-safe-area-context";

const AppContext = React.createContext();

// export const AppProvider = ({ children }) =>{
//     const [passwordContext, setPasswordContext] = useState('')

//     return(
//         <AppContext.Provider value={{passwordContext,setPasswordContext}}>
//             {children}
//         </AppContext.Provider>

//     )
// }


export {AppContext}
