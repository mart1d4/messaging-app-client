import { useState } from 'react';
import '../index.css';
import ThemeSwitcher from '../components/ThemeSwitcher';

function Footer() {
    const [state, setState] = useState({
        show: false
    });

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
                        color: 'var(--foreground-primary)',
                        width: 'fit-content',
                    }}
                >
                    contact@unthrust.com
                </a>
                <p>Unthrust &copy; {new Date().getFullYear()} Unthrust, Inc</p>
            </div>

            <button
                style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0.5rem 1rem',
                    background: 'var(--transparent-quaternary)',
                    border: '1px solid var(--accent-primary)',
                    borderRadius: '4px',
                    gap: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--foreground-primary)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    marginRight: '1rem',
                    userSelect: 'none',
                }}
                className='hover transparent-tertiary rotateChild'
                onMouseEnter={() => setState(({ show: true }))}
                onMouseLeave={() => setState(({ show: false }))}
            >
                Theme Switcher
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    style={{
                        display: 'inline-block',
                        width: '16px',
                        height: '16px',
                        strokeWidth: '2px',
                        fill: 'none',
                        stroke: 'var(--foreground-primary)',
                        transform: 'rotate(90deg)',
                    }}
                    className='hover rotateLeft'
                >
                    <polyline points='6 15 12 9 18 15' />
                </svg>
                <ThemeSwitcher show={state.show} />
            </button>
        </>
    );
}

export default Footer;