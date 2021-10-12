// import React, { createContext, useContext, useState } from 'react';

// interface AuthState {
//   email: string;
//   senha: string;
// }

// interface SignInCredentials {
//   emailTipo: string;
//   password: string;
// }

// interface AuthContextData {
//   email: string;
//   senha: string;
//   signIn(credentials: SignInCredentials): Promise<void>;
// }

// const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// export function AuthProvider({children}) {
//   const email = localStorage.getItem('LojaVirtual: email');
//   const senha = localStorage.getItem('LojaVirtual: senha');

//   const [data, setData] = useState<AuthState>(() => {
//     // se existir a informação do email e senha no localStorage, retorna eles
//     if (email && senha) {
//       return { email, senha };
//     }

//     // retorna um objeto vazio, caso não foi encontrado o token ou o usuário
//     return {} as AuthState;
//   })

//   function signIn( email, senha) {
//     if (!email && !senha) {
//       localStorage.setItem('LojaVirtual: email', email);
//       localStorage.setItem('LojaVirtual: senha', senha);

//       setData({email, senha} );
//     }    
//   }

//   return (
//     <AuthContext.Provider value={{ email:data.email, senha:data.senha , signIn }}>
//       {children}
//     </AuthContext.Provider>
//   )
  
// }

// // function useAuth(): AuthContextData {
// //   const context = useContext(AuthContext);

// //   // se o conext não foi criado dá uma msg de erro
// //   if (!context) {
// //     throw new Error('useAuth must be used within an AuthProvider');
// //   }

// //   return context;
// // }

// // export { AuthProvider };

import React from 'react'; // só para não dar erro
