import { Link } from 'react-router-dom';

export default function AuthHeader() {
    return (
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
                    color: 'var(--accent-primary)',
                    textDecoration: 'none',
                }}
            >
                Login
            </Link>
            <Link
                to='/register'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '12px 32px',
                    fontSize: '0.9rem',
                    color: 'var(--background-primary)',
                    backgroundColor: 'var(--accent-primary)',
                    borderRadius: '100vw',
                    textDecoration: 'none',
                    fontWeight: '500',
                }}
            >
                Register
            </Link>
        </div>
    );
}