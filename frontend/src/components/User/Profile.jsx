import { useState } from 'react';
import '../../css/form.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Add the expense to your backend here
        const response = await fetch('http://localhost:8000/user/:id', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const message = await response.json();
        console.log(message)
    };

    return (
        <>
            <h4 className='display'>Profile</h4>
            <b>Name: </b> {username}
        </>
    );
}

export default Profile;
