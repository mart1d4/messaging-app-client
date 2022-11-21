import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import icons from '../components/ui/Icons';

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
                    {icons.appicon}
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