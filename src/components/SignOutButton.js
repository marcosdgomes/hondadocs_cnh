import React from 'react';
import { signOut } from 'aws-amplify/auth';

async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

const SignOutButton = () => {
  return (
    <button onClick={handleSignOut}>SE SAIA MEU AMIGO</button>
  );
};

export default SignOutButton;
