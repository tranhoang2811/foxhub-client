// *INFO: Cannot use env for vercel
// *INFO: There are some issues with vercel and env variables
// *INFO: https://github.com/orgs/vercel/discussions/1338
// *INFO: https://github.com/vercel/vercel/discussions/5015
export const environment = {
  apiUrl: 'https://foxhub-server.onrender.com',
  nodeEnv: 'production',
  firebase: {
    apiKey: 'AIzaSyCsLvwwZQG9x9ljmZZJAdE874XSM1EYr9k',
    authDomain: 'foxhubproduction.firebaseapp.com',
    projectId: 'foxhubproduction',
    storageBucket: 'foxhubproduction.appspot.com',
    messagingSenderId: '463286685572',
    appId: '1:463286685572:web:24ce06bd2c3a552a7b57d1',
    measurementId: 'G-PSGSNKW4B2',
  },
};
