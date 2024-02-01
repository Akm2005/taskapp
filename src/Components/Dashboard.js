import React, { useEffect, useState } from 'react';
import { auth } from "../auth.js";
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // This function will be called whenever the authentication state changes
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Only run this effect once, when the component mounts

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Signout successful');
      window.sessionStorage.clear();
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="welcome-message">
        {user ? `Welcome ${user.email}!` : 'Welcome!'}
      </div>
      <div className="logout-button-container">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
