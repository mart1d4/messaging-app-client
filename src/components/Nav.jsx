import { Link } from 'react-router-dom';

export default function Nav() {
    const navEntries = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const linkStyle = {
        display: 'block',
        fontSize: '0.9rem',
        padding: '8px 16px',
        borderRadius: '4px',
        color: 'var(--foreground)',
        userSelect: 'none',
        textDecoration: 'none',
        fontWeight: '300',
    }

    return (
        <nav
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <ul
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    listStyle: 'none',
                    gap: '10px',
                }}
            >
                {navEntries.map((entry) => (
                    <li key={entry.name}>
                        <Link
                            to={entry.path}
                            style={linkStyle}
                            className='backgroundHover2'
                        >
                            {entry.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

    );
}
