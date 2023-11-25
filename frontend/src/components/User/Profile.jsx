import { useEffect, useState } from 'react';
import '../../css/form.css';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getUser = async () => {

            const response = await fetch(`http://localhost:8000/user/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
    
            const message = await response.json();
            setUsername(message.username);
        };
    
        getUser();
    })
    return (
        <>
            <h4 className='display'>Profile</h4>
            <b>Name: </b> {username}
        </>
    );
}

export default Profile;
