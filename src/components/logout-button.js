import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from "reactstrap"

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <Button 
      onClick={() =>
      logout({
        returnTo: window.location.origin,
      })
      }
      color="secondary"
      >
      Log out
      </Button>
    </div>
    
    
    // <button
    //   className="btn btn-primary btn-block"
    //   onClick={() => 
    //     logout({
    //       returnTo: window.location.origin,
    //     })
    //   }
    // >
    //   Log Out
    // </button>
  );
};

export default LogoutButton;