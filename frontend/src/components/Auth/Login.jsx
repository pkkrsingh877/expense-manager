import { useState } from 'react';
import '../../css/form.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Add the expense to your backend here
        const response = await fetch('http://localhost:8000/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, password
            }),
            credentials: 'include'
        });

        const message = await response.json();
        console.log(message);
        // navigate(`/user/${message.userId}`);
    };

    return (
        <>
            <h4 className='display-4'>Login: </h4>
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
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;
