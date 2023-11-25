import { useState } from 'react';
import '../../css/form.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Add the expense to your backend here
        const response = await fetch('http://localhost:8000/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, password
            }),
        });

        const message = await response.json();
        navigate(`/user/${message.userId}`);
    };

    return (
        <>
            <h4>Create Account: </h4>
            <form className='form' onSubmit={handleSubmit}>
                Username:
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                Password:
                <input
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
        </>
    );
}

export default Signup;
