
import { Route, Routes } from "react-router-dom";
import UploadFilesPage from "./Pages/UploadFiles/UploadFilesPage"
import Layout from "./Pages/Layout"
import "./app.css"
import { setToken, deleteToken } from "./api/cookies.js"
import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Hub } from 'aws-amplify/utils';
import { fetchAuthSession } from 'aws-amplify/auth';
import NotFound from "./Pages/NotFound/NotFound.jsx"

import awsExports from './configuration.js';
import { redirect } from "react-router-dom";
Amplify.configure(awsExports);
const checkSession = async () => {
  const session = await fetchAuthSession();
  console.log("session", session)
  console.log("sessiondet", session.tokens.accessToken.toString())
  return session.tokens.accessToken.toString()
}

function App() { 

Hub.listen('auth', (data) => {
  const AuthToken = checkSession();
  if(data.payload.event == 'signedOut'){
    console.log("datita",data)
    deleteToken();
  }
  else if(data.payload.event == 'signedIn'){
    // setToken(data.payload.data.userId)
    setToken(AuthToken)
    console.log("datita",data)
    redirect("/")
  }
});

  return (
    <>
    <Layout >
    <Authenticator className="auth-container" signUpAttributes={['email']}>
    {
    ({ user, signOut }) => {
    return (
      <>
      <Routes>
        <Route path="/" element={<UploadFilesPage user={user}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
      </>
       )}
      }
    </Authenticator>
    
    </Layout>
    
    </>
  )
}
export default App





