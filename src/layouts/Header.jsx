import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 32px',
    fontSize: '0.9rem',
    color: 'var(--foreground-primary)',
    backgroundColor: 'var(--accent-primary)',
    borderRadius: '100vw',
    textDecoration: 'none',
    fontWeight: '400',
}

function Header() {
    const { auth } = useAuth();

    return (
        <>
            <Link
                to='/'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '1rem',
                }}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    style={{
                        width: '48px',
                        height: '48px',
                        fill: 'var(--accent-primary)',
                    }}
                >
                    <path d="M4 34V6.1q0-.7.65-1.4T6 4h25.95q.75 0 1.4.675Q34 5.35 34 6.1v17.8q0 .7-.65 1.4t-1.4.7H12Zm10.05 2q-.7 0-1.375-.7T12 33.9V29h25V12h5q.7 0 1.35.7.65.7.65 1.45v29.8L36.05 36Z"/>
                </svg>
            </Link>

            <Nav />

            {auth?.user ? (
                    <Link
                        to='/dashboard'
                        style={{
                            ...buttonStyle,
                            marginRight: '1rem',
                        }}
                        className='hover background-accent-secondary'
                    >
                        Start messaging
                    </Link>
                ) : (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem',
                            marginRight: '1rem',
                        }}
                    >
                        <Link
                            to='/login'
                            style={{
                                fontSize: '0.8rem',
                                color: 'var(--foreground-primary)',
                                textDecoration: 'none',
                                fontWeight: '400',
                            }}
                            className='hover accent-primary'
                        >
                            Login
                        </Link>
                        <Link
                            to='/register'
                            style={buttonStyle}
                            className='hover background-accent-secondary'
                        >
                            Register
                        </Link>
                    </div>
                )}
        </>
    );
}

export default Header;