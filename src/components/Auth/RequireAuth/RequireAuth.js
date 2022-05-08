import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
  
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
    //   return <Navigate to="/login"/>;
    return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };
  

export default RequireAuth;