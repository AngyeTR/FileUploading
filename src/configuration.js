const awsExports = {
    Auth: {
    Cognito:{
      userPoolId: import.meta.env.VITE_USER_POOL_ID ,
      userPoolClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID ,
      // loginWith: { // Optional
      //   email: 'true', // Optional
      // }
    }
    
  },}

export default awsExports;