import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';
import { Link, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
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

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const { auth } = useAuth();

    const usernameRef = useRef();
    const errorRef = useRef();

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    useEffect(() => {
        setErrorMessage('');
    }, [username, password, matchPassword])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrorMessage('Invalid Entry');
            return;
        }
        try {
            await axios.post('/auth/register',
                JSON.stringify({ username: username, password: password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setSuccess(true);
            setUsername('');
            setPassword('');
            setMatchPassword('');
        } catch (err) {
            if (!err?.response) {
                setErrorMessage('No Server Response');
            } else if (err.response?.status === 409) {
                setErrorMessage('Username Taken');
            } else {
                setErrorMessage('Registration Failed')
            }
            errorRef.current.focus();
        }
    }

    return (
        auth?.accessToken
            ? <Navigate to='/dashboard' />
            : success
                ? <Navigate to='/login' />
                : (
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
                                Register
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
                                        aria-invalid={validUsername ? 'false' : 'true'}
                                        aria-describedby='uidnote'
                                        onFocus={() => setUsernameFocus(true)}
                                        onBlur={() => setUsernameFocus(false)}
                                    />
                                    <div
                                        id='uidnote'
                                        className={
                                            usernameFocus && username && !validUsername
                                                ? 'instructions'
                                                : 'offScreen'
                                        }
                                    >
                                        4 to 24 characters<br />
                                        Must begin with a letter<br />
                                        Special character allowed: _ - . ! ?
                                    </div>
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
                                        aria-invalid={
                                            validPassword
                                                ? 'false'
                                                : 'true'
                                        }
                                        aria-describedby='passwordnote'
                                        onFocus={() => setPasswordFocus(true)}
                                        onBlur={() => setPasswordFocus(false)}
                                    />
                                    <div
                                        id='passwordnote'
                                        className={
                                            passwordFocus && !validPassword
                                                ? 'instructions'
                                                : 'offScreen'
                                        }
                                    >
                                        <p>Must have at least 8 letters</p>
                                        <ul>
                                            <li>Upper & lower case letters</li>
                                            <li>A symbole (#$&!)</li>
                                            <li>A longer password</li>
                                        </ul>
                                    </div>
                                </div>

                                <div
                                    style={inputStyle}
                                >
                                    <label
                                        style={labelStyle}
                                        htmlFor='password'>
                                        Password Confirmation
                                    </label>
                                    <input
                                        style={{
                                            ...inputStyleInner,
                                            padding: '0 50px 0 15px',
                                        }}
                                        type='password'
                                        id='passwordConfirm'
                                        onChange={(e) => setMatchPassword(e.target.value)}
                                        value={matchPassword}
                                        required
                                        aria-invalid={validMatch ? 'false' : 'true'}
                                        aria-describedby='confirmnote'
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                    />
                                    <div
                                        id='confirmdnote'
                                        className={
                                            matchFocus && !validMatch
                                                ? 'instructions'
                                                : 'offScreen'
                                        }
                                    >
                                        <p>Must match the first password input field.</p>
                                    </div>
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
                                    disabled={
                                        !validUsername || !validPassword || !validMatch
                                            ? true
                                            : false
                                    }
                                    className='background-accent-tertiary'
                                >
                                    Register
                                </button>
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
                                    Already have an account?
                                    <Link
                                        style={{
                                            color: 'var(--accent-primary)',
                                            marginLeft: '0.5rem',
                                        }}
                                        to='/login'
                                    >
                                        Login
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
                    </main>)
    )
}

export default Register