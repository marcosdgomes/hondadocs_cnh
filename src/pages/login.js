import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';

// Configuração do Amplify
Amplify.configure(config);

// Componente Wrapper do Authenticator
const AuthenticatorWrapper = () => {
  return (
    <Authenticator
      variation='modal' 
      loginMechanism={['email','username']}
      signUpAttributes={['email']}
    >
      {({ signOut, user }) => (
        <main>
          <h1>Olá {user.username}</h1>
          <button onClick={signOut}>Faça logout</button>
        </main>
      )}
    </Authenticator>
  );
}

export default AuthenticatorWrapper;
