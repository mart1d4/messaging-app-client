import { useState } from 'react';
import '../index.css';
import ThemeSwitcher from '../components/ThemeSwitcher';

function Footer() {
    const [state, setState] = useState({
        show: false
    });

    const currentTheme = window.localStorage.getItem('preferredTheme');

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: '300',
                    marginLeft: '1rem',
                }}
            >
                <a
                    href='mailto:contact@mart1d4.com'
                    style={{
                        color: currentTheme === 'light' ? 'var(--foreground-primary)' : 'var(--accent-secondary)',
                        textDecoration: 'none',
                        width: 'fit-content',
                    }}
                >
                    contact@mart1d4.com
                </a>
                <p>mart1d4 &copy; {new Date().getFullYear()} Messaging App, Inc</p>
            </div>

            <button
                style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0.5rem 1rem',
                    background: 'var(--accent-secondary-transparent)',
                    border: '1px solid var(--accent-primary)',
                    borderRadius: '4px',
                    gap: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--foreground)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    marginRight: '1rem',
                    userSelect: 'none',
                }}
                className='backgroundHover'
                onMouseEnter={() => setState(({ show: true }))}
                onMouseLeave={() => setState(({ show: false }))}
            >
                Theme Switcher
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    style={{
                        width: '16px',
                        height: '16px',
                        strokeWidth: '2px',
                        transform: 'rotate(90deg)',
                    }}
                    className='rotateOnHover'
                >
                    <polyline points='6 15 12 9 18 15' />
                </svg>
                <ThemeSwitcher show={state.show} />
            </button>
        </>
    );
}

export default Footer;