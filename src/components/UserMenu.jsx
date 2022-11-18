import { Link } from 'react-router-dom';

export default function UserMenu() {
    return (
        <Link
            to='/dashboard/@me'
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
            Start messaging
        </Link>
    );
}
