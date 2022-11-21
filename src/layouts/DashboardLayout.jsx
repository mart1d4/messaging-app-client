import { useEffect, useRef, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import icons from '../components/ui/Icons';

const navItems = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: icons.dashboard,
    },
    {
        path: '/dashboard/friends',
        title: 'Friends',
        icon: icons.friends,
    },
    {
        path: '/dashboard/messages',
        title: 'Messages',
        icon: icons.messages,
    },
    {
        path: '/dashboard/servers',
        title: 'Servers',
        icon: icons.groups,
    },
];

export default function DashboardLayout() {
    const { auth, setAuth } = useAuth();
    const [url, setUrl] = useState(window.location.pathname);
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();

    const bellRef = useRef(null);
    const notificationsRef = useRef(null);

    const [notifications, setNotifications] = useState([]);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    document.body.addEventListener('click', (e) => {
        if (notificationsRef.current && !bellRef.current.contains(e.target) && !notificationsRef.current.contains(e.target)) {
            setNotificationsOpen(false);
        }
    });

    const logout = async () => {
        setAuth({});
        navigate('/login');
    }

    useEffect(() => {
        setUrl(window.location.pathname);
    }, [navigate])
    
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getNotifications = async () => {
            try {
                const response = await axiosPrivate.get(`/users/${auth?.user?.id}/notifications`, {
                    signal: controller.signal
                });
                isMounted && setNotifications(response.data);
            } catch (err) {
                console.error(err);
            }
        }

        getNotifications();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    const handleAcceptFriendRequest = async (id) => {
        try {   
            await axiosPrivate.post(`/users/${auth?.user?.id}/accept`,
            JSON.stringify({ friend: id })
            );
            setNotifications(notifications.filter(notification => notification.sender._id !== id));
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                background: 'var(--background-primary)',
            }}
        >
            <nav
                style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '110px',
                    height: '100%',
                    borderRight: '1px solid var(--border-primary)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        position: 'absolute',
                        top: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <Link
                        to='/'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 'calc(8px + 0.3rem)',
                            borderRadius: '50%',
                        }}
                        className='hover transparent-quaternary'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            style={{
                                width: '24px',
                                height: '24px',
                                fill: 'var(--foreground-secondary)',
                            }}
                        >
                            {icons.hamburger}
                        </svg>
                    </Link>
                </div>


                <ul
                    style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path}>
                                <div
                                    style={{
                                        display: 'flex',
                                        padding: '.8rem',
                                        borderRadius: '25%',
                                        cursor: 'pointer',
                                        backgroundColor: url === item.path ? 'var(--transparent-quaternary)' : 'transparent',
                                    }}
                                    className='hover transparent-quaternary'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        style={{
                                            fill: url === item.path ? 'var(--accent-primary)' : 'var(--foreground-tertiary)',
                                        }}
                                    >
                                        {item.icon}
                                    </svg>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>


                <div
                    style={{
                        display: 'flex',
                        position: 'absolute',
                        bottom: 'calc(40px - .5rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        padding: '.3rem',
                        borderRadius: '100%',
                        cursor: 'pointer',
                        backgroundColor: url === '/dashboard/@me' ? 'var(--transparent-tertiary)' : 'transparent',
                    }}
                    className='hover transparent-tertiary'
                >
                    <Link to='/dashboard/@me' style={{ display: 'flex' }}>
                        <img
                            src={auth.user?.avatar}
                            alt='User Avatar'
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                userSelect: 'none',
                            }}
                        />
                    </Link>
                </div>
            </nav>

            <main
                style={{
                    position: 'relative',
                    width: 'calc(100vw - 110px)',
                    height: '100%',
                }}
            >
                <header
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        height: '110px',
                        borderBottom: '1px solid var(--border-primary)',
                    }}
                >
                    <div
                        style={{
                            width: 'fit-content',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            marginLeft: '2rem',
                        }}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            style={{
                                fill: 'var(--accent-primary)',
                            }}
                        >
                            {navItems.find(item => item.path === url)?.icon}
                        </svg>
                        <h1
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '500',
                            }}
                        >
                            {navItems.find(item => item.path === url)?.title || 'Settings'}
                        </h1>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                            marginRight: '2rem',
                        }}
                    >
                        <div
                            style={{
                                position: 'relative',
                                width: '200px',
                                height: '40px',
                                borderRadius: '5px',
                                backgroundColor: 'var(--background-secondary)',
                            }}
                        >
                            <input
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    borderRadius: '5px',
                                    outline: 'none',
                                    padding: '0 2.5rem 0 1rem',
                                    color: 'var(--foreground-primary)',
                                    userSelect: 'none',
                                }}
                                type='text'
                                placeholder='Search'
                            />
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '.5rem',
                                    transform: 'translateY(-50%)',
                                }}
                            >
                                {icons.search}
                            </svg>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                position: 'relative',
                            }}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                style={{
                                    fill: 'var(--foreground-secondary)',
                                    cursor: 'pointer',
                                }}
                                onClick={() => setNotificationsOpen(!notificationsOpen)}
                                ref={bellRef}
                            >
                                {icons.bell}
                            </svg>

                            <div
                                style={{
                                    position: 'absolute',
                                    right: '0',
                                    top: '150%',
                                    width: '150px',
                                    height: '200px',
                                    borderRadius: '4px',
                                    backgroundColor: 'var(--background-secondary)',
                                    boxShadow: '0 0 10px rgba(0, 0, 0, .2)',
                                    zIndex: 100,
                                }}
                                className={
                                    notificationsOpen ? 'hover menu' : 'offScreen'
                                }
                                ref={notificationsRef}
                            >
                                {notifications?.length ? (
                                    notifications.map((notification, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1rem',
                                                padding: '1rem',
                                                borderBottom:
                                                    '1px solid var(--border-primary)',
                                            }}
                                            onClick={() => handleAcceptFriendRequest(notification.sender._id)}
                                        >
                                            <p>
                                                {notification.content}
                                            </p>
                                            <p>
                                                {notification.sentAt}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                height: '100%',
                                            }}
                                        >
                                            <p
                                                style={{
                                                    color: 'var(--foreground-secondary)',
                                                }}
                                            >
                                                No notifications
                                            </p>
                                        </div>
                                )}
                            </div>
                        </div>
                
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            style={{
                                fill: 'var(--foreground-secondary)',
                                cursor: 'pointer',
                            }}
                            onClick={logout}
                        >
                            {icons.logout}
                        </svg>
                    </div>
                </header>

                <div
                    style={{
                        width: '100%',
                        height: 'calc(100% - 110px)',
                    }}
                >
                    <Outlet />
                </div>
            </main>
        </div>
    );
}