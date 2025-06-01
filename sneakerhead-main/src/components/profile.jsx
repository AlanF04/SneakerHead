import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../context/UserContext';

const Profile = () => {
    // const [user, setUser] = useState(null);
    // const navigate = useNavigate();
    const { username, logout } = useUser();

    const {user} = useUser();
    const navigate = useNavigate();
    if(!user)
    {
      navigate('/login');
      return null;
    }
    function handleLogout()
    {
        logout();
    }
  

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //         try {
    //             const response = await axios.get('https://sn-backend-gq6u.onrender.com/profile', {
    //                 params: { username }
    //             });
    //             if (response.data.success) {
    //                 setUser(response.data.usr);
    //             } else {
    //                 alert('Failed to fetch profile');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching profile:', error);
    //         }
    //     };

    //     fetchProfile();
    // }, [username]);

    // const handleLogout = () => {
    //     logout(); 
    //     navigate('/login'); // Redirect to login page
    // };

    // if (!user) {
    //     return <p>Loading...</p>;
    // }

    return (
        <div style={{ padding: '20px', textAlign: 'center',marginTop:'100px',height:'1000px' }}>
            <h1>Profile Page</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={handleLogout} style={{ padding: '10px', marginTop: '20px' }}>
                Logout
            </button>
        </div>
    );
};

export default Profile;
