import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);

  
    if (loading) {
      return (
        <div
          style={{
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <Loading/>
        </div>
      );
    }
    if (!user) {
      return <Navigate to="/login"/>;
    }
    return children;
  };
  

export default RequireAuth;