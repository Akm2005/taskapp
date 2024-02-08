import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleFetchUser = async () => {
        try {
            setLoading(true);
            const querySnapshot = await getDocs(collection(db, 'user' ));
            querySnapshot.forEach(doc => {
                setUser(doc.data()); // Assuming doc.data() returns an object containing user information
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            {loading ? (
                <p>Loading user data...</p>
            ) : (
                <div>
                    {user ? (
                        <div>
                            <h2>Name: {user.name}</h2> {/* Assuming 'name' is a field in the user data */}
                            {/* Display other user information as needed */}
                        </div>
                    ) : (<div>
                        <p>No user data available</p>
                        <p><i>site under the development!</i></p>
                        </div>
                    )}
                    <button onClick={handleFetchUser}>Check User Data</button>
                    <button onClick={handleSignOut}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
