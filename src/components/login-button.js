
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "reactstrap"

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <div>
      <Button 
      onClick={() =>
        loginWithRedirect()
      }
      color="primary"
      >
      Log In
      </Button>
    </div>


    // <button
    // className='btn btn-primary btn-block'
    // onClick={() => loginWithRedirect()}
    // >
    //   Log In
    // </button>
  );
};

export default LoginButton;