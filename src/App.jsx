
import React from 'react';
import { Route, Routes, redirect } from "react-router-dom";
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { Hub } from 'aws-amplify/utils';
import { fetchAuthSession } from 'aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';
import { setToken, deleteToken, getToken } from "./api/cookies.js"
import awsExports from './configuration.js';
import Layout from "./Pages/Layout"
import NotFound from "./Pages/NotFound/NotFound.jsx"
import UploadFilesPage from "./Pages/UploadFiles/UploadFilesPage"
import "./app.css"

Amplify.configure(awsExports);

const checkSession = async () => {
  const session = await fetchAuthSession();
  console.log("session", session)
  console.log("sessiondet", session.tokens.accessToken.toString())
  await setToken(session.tokens.accessToken.toString())
  return session.tokens.accessToken.toString()
}

function App() { 

Hub.listen('auth', (data) => { 
  if(data.payload.event == 'signedOut'){
    console.log("datita",data)
    deleteToken();
  }
  else if(data.payload.event == 'signedIn'){
    const AuthToken = checkSession();
    console.log("datita",data)
    console.log("toki",getToken())
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





