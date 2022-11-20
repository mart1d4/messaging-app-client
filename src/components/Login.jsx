import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, Navigate } from 'react-router-dom';
import axios from '../api/axios';
import Title from './ui/Title';

const inputStyle = {
    position: 'relative',
    width: 'clamp(310px, 60%, 500px)',
    height: '50px',
    margin: '0 0 2rem 0',
};

const inputStyleInner = {
    width: '100%',
    height: '100%',
    outline: 'none',
    border: 'none',
    padding: '0 15px',
    backgroundColor: 'var(--background-primary)',
    color: 'var(--foreground-primary)',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: '300',
}

const labelStyle = {
    position: 'absolute',
    top: '-15%',
    left: '5%',
    fontSize: '0.8rem',
    fontWeight: '500',
    color: 'var(--foreground-primary)',
}

export default function Login() {
    const { auth, setAuth, persist, setPersist } = useAuth();

    const usernameRef = useRef();
    const errorRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/auth/login',
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const accessToken = response?.data?.accessToken;
            const user = response?.data?.user;
            setAuth({ accessToken, user });
            setUsername('');
            setPassword('');
        } catch (err) {
            if (!err?.response) {
                setErrorMessage('No Server Response');
            } else if (err.response?.status === 400) {
                setErrorMessage('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrorMessage('Unauthorized');
            } else {
                setErrorMessage('Login Failed');
            }
            errorRef.current.focus();
        }
    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem('persist', persist);
    }, [persist])

    return (
        auth?.accessToken? <Navigate to='/dashboard' /> :
            <main
                style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '5%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                        backgroundColor: 'var(--error-primary)',
                        padding: '1rem',
                        borderRadius: '4px',
                    }}
                    ref={errorRef}
                    className={errorMessage ? 'errorMessage' : 'offScreen'}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        style={{
                            width: '24px',
                            height: '24px',
                            stroke: 'var(--error-secondary)',
                            strokeWidth: '2',
                        }}
                    >
                        <circle cx='12' cy='12' r='9' />
                        <line x1='12' y1='8' x2='12' y2='12' />
                        <line x1='12' y1='16' x2='12.01' y2='16' />
                    </svg>
                    <p
                        aria-live='assertive'
                        style={{
                            color: 'var(--error-tertiary)',
                        }}
                    >
                        {errorMessage}
                    </p>
                </div>

                <form
                    style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        alignItems: 'center',
                        width: 'clamp(350px, 45%, 500px)',
                        aspectRatio: '1 / 1.3',
                        backgroundColor: 'var(--background-secondary)',
                        padding: '5rem 3rem 7rem 3rem',
                        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
                        borderRadius: '4px',
                    }}
                    onSubmit={handleSubmit}
                >
                    <Title
                        size='2rem'
                        weight='500'
                        margin='3rem'
                        align='center'
                    >
                        Login
                    </Title>
                        
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={inputStyle}
                        >
                            <label
                                style={labelStyle}
                                htmlFor='username'>
                                Username
                            </label>
                            <input
                                style={inputStyleInner}
                                type='text'
                                id='username'
                                ref={usernameRef}
                                autoComplete='off'
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                            />
                        </div>

                        <div
                            style={inputStyle}
                        >
                            <label
                                style={labelStyle}
                                htmlFor='password'>
                                Password
                            </label>
                            <input
                                style={{
                                    ...inputStyleInner,
                                    padding: '0 50px 0 15px',
                                }}
                                type='password'
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />
                        </div>

                        <button
                            style={{
                                width: 'clamp(310px, 60%, 500px)',
                                height: '50px',
                                margin: '0 0 0.5rem 0',
                                backgroundColor: 'var(--accent-primary)',
                                color: 'var(--foreground-primary)',
                                border: 'none',
                                outline: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: '700',
                            }}
                            className='background-accent-tertiary'
                        >
                            Login
                        </button>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            userSelect: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <input
                            type='checkbox'
                            id='checkbox'
                            style={{
                                cursor: 'pointer',
                            }}
                            onChange={togglePersist}
                            checked={persist}
                        />
                        <label
                            htmlFor='checkbox'
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            Remember Me
                        </label>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            bottom: '2rem',
                            width: '80%',
                        }}
                    >
                        <p
                            style={{
                                color: 'var(--foreground-secondary)',
                                fontSize: '0.9rem',
                                fontWeight: '300',
                            }}
                        >
                            Don't have an account?
                            <Link
                                style={{
                                    color: 'var(--accent-primary)',
                                    marginLeft: '0.5rem',
                                }}
                                to='/register'
                            >
                                Register
                            </Link>
                        </p>

                        <p
                            style={{
                                color: 'var(--foreground-secondary)',
                                fontSize: '0.9rem',
                                fontWeight: '300',
                            }}
                        >
                            Go back
                            <Link
                                style={{
                                    color: 'var(--accent-primary)',
                                    marginLeft: '0.5rem',
                                }}
                                to='/'
                            >
                                home
                            </Link>
                        </p>
                    </div>
                </form>
        </main>
    )
}
