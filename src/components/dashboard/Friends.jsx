import React from 'react'
import Title from '../ui/Title';
import useAuth from '../../hooks/useAuth';
import { useState, useRef, useEffect } from 'react';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import icons from "../ui/Icons";

const Friends = () => {
    const { auth } = useAuth();
    const errorRef = useRef();
    const successRef = useRef();
    const axiosPrivate = useAxiosPrivate();
    
    const [username, setUsername] = useState('');
    const [friends, setFriends] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getFriends = async () => {
            try {
                const response = await axiosPrivate.get(`/users/${auth?.user?.id}/friends`, {
                    signal: controller.signal
                });
                isMounted && setFriends(response.data);
            } catch (err) {
                console.error(err);
            }
        }

        getFriends();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setSuccessMessage('');
            setErrorMessage('');
        }, 5000);
    }, [successMessage, errorMessage])

    useEffect(() => {
        setErrorMessage('');
    }, [username])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const friend = await axiosPrivate.post(`/users/${auth?.user.id}/add`,
                JSON.stringify({ username: auth?.user.username, friend: username }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setUsername('');
            setErrorMessage('');
            setSuccessMessage(friend.data.message);
        } catch (err) {
            if (!err?.response) {
                setErrorMessage('No Server Response');
            } else {
                setErrorMessage(err?.response.data.message);
            }
            errorRef.current.focus();
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100%',
            }}
        >
            <div
                style={{
                    minWidth: '300px',
                    width: '30%',
                    height: '100%',
                    borderRight: '1px solid var(--border-primary)',
                    overflowY: 'auto',
                }}
                className='scrollbar'
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1rem',
                        marginBottom: '1rem',
                    }}
                >
                    <Title
                        size='2rem'
                    >
                        Friend List
                    </Title>
                    <span
                        style={{
                            display: 'block',
                            width: 'fit-content',
                            height: 'fit-content',
                            padding: '0.5rem 1rem',
                            borderRadius: '1rem',
                            fontSize: '.7rem',
                            backgroundColor: 'var(--background-secondary)',
                            color: 'var(--foreground-primary)',
                            textTransform: 'uppercase',
                        }}
                    >
                        {friends?.length === 0 ? 'No Friends' : (friends?.length > 1) ?`${friends?.length} Friends` : `${friends?.length} Friend`}
                    </span>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '1rem',
                    }}
                >
                    {!friends?.length
                        ?
                        (<span
                            style={{
                                display: 'block',
                                width: 'fit-content',
                                height: 'fit-content',
                                fontSize: '.9rem',
                                color: 'var(--foreground-primary)',
                            }}
                        >
                            Oop... It's empty there
                        </span>)
                        :
                        friends.map((friend, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '1rem',
                                    fontSize: '.7rem',
                                    backgroundColor: 'var(--background-secondary)',
                                    color: 'var(--foreground-primary)',
                                    textTransform: 'uppercase',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                <img
                                    style={{
                                        width: '2rem',
                                        height: '2rem',
                                        borderRadius: '50%',
                                        userSelect: 'none',
                                    }}
                                    src={friend?.avatar}
                                    alt="Friend Avatar"
                                />
                                <span>{friend?.username}</span>
                                <span
                                    style={{
                                        display: 'block',
                                        width: 'fit-content',
                                        height: 'fit-content',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '1rem',
                                        fontSize: '.7rem',
                                        backgroundColor: 'var(--background-secondary)',
                                        color: 'var(--foreground-primary)',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Remove
                                </span>
                            </div>
                        ))
                }
                </div>
            </div>

            <div
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '2rem',
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
                        zIndex: '100',
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
                            fill: 'var(--error-secondary)',
                        }}
                    >
                       {icons.error}
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

                <div
                    style={{
                        position: 'absolute',
                        top: '5%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                        backgroundColor: 'var(--success-primary)',
                        padding: '1rem',
                        borderRadius: '4px',
                    }}
                    ref={successRef}
                    className={successMessage ? 'errorMessage' : 'offScreen'}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        style={{
                            width: '24px',
                            height: '24px',
                            fill: 'var(--success-secondary)',
                        }}
                    >
                        {icons.success}
                    </svg>
                    <p
                        aria-live='assertive'
                        style={{
                            color: 'var(--success-tertiary)',
                        }}
                    >
                        {successMessage}
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                >
                    <Title
                        size='1.5rem'
                        weight='500'
                    >
                        Add Friend
                    </Title>
                    <div
                        style={{
                            position: 'relative',
                            width: 'clamp(310px, 90%, 600px)',
                            height: '50px',
                        }}
                    >
                        <input
                            style={{
                                width: '100%',
                                height: '100%',
                                outline: 'none',
                                border: 'none',
                                padding: '0 175px 0 15px',
                                backgroundColor: 'var(--background-secondary)',
                                color: 'var(--foreground-primary)',
                                borderRadius: '4px',
                                fontSize: '1rem',
                                fontWeight: '300',
                            }}
                            type='text'
                            placeholder='Enter a username'
                            value={username}
                            required
                            minLength={4}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <button
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '5px',
                                transform: 'translateY(-50%)',
                                width: '150px',
                                height: '80%',
                                borderRadius: '4px',
                                backgroundColor: 'var(--background-primary)',
                                color: 'var(--foreground-primary)',
                                cursor: 'pointer',
                            }}
                        >
                            Send request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Friends