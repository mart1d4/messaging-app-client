import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const menuEntries = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Contact',
        path: '/contact',
    },
];

export default function PhoneMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef();
    const buttonRef = useRef();

    document.body.addEventListener('click', (e) => {
        if (
            menuRef.current
            && !menuRef.current.contains(e.target)
            && buttonRef.current
            && !buttonRef.current.contains(e.target)
        ) {
            setShowMenu(false);
        }
    });

    return (
        <div
            style={{
                marginRight: '1rem',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '52px',
                    height: '52px',
                    borderRadius: '100%',
                    cursor: 'pointer',
                }}
                className='backgroundHover'
                onClick={() => setShowMenu(!showMenu)}
                ref={buttonRef}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    style={{
                        width: '32px',
                        height: '32px',
                        strokeWidth: '1.5',
                    }}
                >
                    <line x1='4' y1='6' x2='20' y2='6' />
                    <line x1='4' y1='12' x2='20' y2='12' />
                    <line x1='4' y1='18' x2='20' y2='18' />
                </svg>
            </div>

            <div
                style={{
                    display: showMenu ? 'block' : 'none',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    height: '100vh',
                    width: 'clamp(100vw, 70vw, 20vw)',
                    padding: '5px',
                    backgroundColor: 'var(--background-primary)',
                    boxShadow: 'var(--boxshadow-primary)',
                    zIndex: '100',
                }}
                ref={menuRef}
            >
                <ul
                    style={{
                        listStyle: 'none',
                    }}
                >
                    {menuEntries.map((entry, index) => (
                        <li key={index}>
                            <Link
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '6px 12px',
                                    color: 'var(--foreground-primary)',
                                    textDecoration: 'none',
                                    borderRadius: '4px',
                                    fontWeight: '300',
                                    userSelect: 'none',
                                }}
                                to={entry.path}
                            >
                                {entry.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );   
}