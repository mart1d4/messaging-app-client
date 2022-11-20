import { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const navItems = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: <path d='M6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.275-.2.575-.3.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-4v-7h-4v7Z'/>,
    },
    {
        path: '/dashboard/friends',
        title: 'Friends',
        icon: <path d='M2 20q-.425 0-.712-.288Q1 19.425 1 19v-1.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q7.35 13 9 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q17 16.35 17 17.2V19q0 .425-.288.712Q16.425 20 16 20Zm16.525 0q.225-.175.35-.438.125-.262.125-.587V17q0-1.1-.612-2.113-.613-1.012-1.738-1.737 1.275.15 2.4.512 1.125.363 2.1.888.9.5 1.375 1.112Q23 16.275 23 17v2q0 .425-.288.712Q22.425 20 22 20ZM9 12q-1.65 0-2.825-1.175Q5 9.65 5 8q0-1.65 1.175-2.825Q7.35 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8q0 1.65-1.175 2.825Q10.65 12 9 12Zm10-4q0 1.65-1.175 2.825Q16.65 12 15 12q-.275 0-.7-.062-.425-.063-.7-.138.675-.8 1.037-1.775Q15 9.05 15 8q0-1.05-.363-2.025Q14.275 5 13.6 4.2q.35-.125.7-.163Q14.65 4 15 4q1.65 0 2.825 1.175Q19 6.35 19 8Z'/>,
    },
    {
        path: '/dashboard/messages',
        title: 'Messages',
        icon: <path d='M7 14h6.025q.425 0 .7-.288Q14 13.425 14 13t-.287-.713Q13.425 12 13 12H6.975q-.425 0-.7.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm0-3h10.025q.425 0 .7-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9H6.975q-.425 0-.7.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0-3h10.025q.425 0 .7-.287Q18 7.425 18 7t-.288-.713Q17.425 6 17 6H6.975q-.425 0-.7.287Q6 6.575 6 7t.287.713Q6.575 8 7 8ZM2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Z'/>,
    },
    {
        path: '/dashboard/servers',
        title: 'Servers',
        icon: <path d='M7 17q-.825 0-1.412-.587Q5 15.825 5 15V4q0-.825.588-1.413Q6.175 2 7 2h4.175q.4 0 .763.15.362.15.637.425L14 4h7q.825 0 1.413.588Q23 5.175 23 6v9q0 .825-.587 1.413Q21.825 17 21 17Zm-4 4q-.825 0-1.412-.587Q1 19.825 1 19V7q0-.425.288-.713Q1.575 6 2 6t.713.287Q3 6.575 3 7v12h16q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 21 19 21Zm7.025-8h7.95q.325 0 .463-.275.137-.275-.063-.525L15.95 9.025q-.15-.2-.4-.2t-.4.2l-1.9 2.475L12.1 10q-.15-.2-.4-.2t-.4.2l-1.675 2.2q-.2.25-.063.525.138.275.463.275Z'/>,
    },
];

export default function DashboardLayout() {
    const { auth, setAuth } = useAuth();
    const [url, setUrl] = useState(window.location.pathname);
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        navigate('/login');
    }

    useEffect(() => {
        setUrl(window.location.pathname);
    },[navigate])

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                background: 'radial-gradient(circle farthest-side, #080820 50px, #050509)',
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
                    <Link to='/'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            style={{
                                width: '50px',
                                height: '50px',
                                fill: '#554f65',
                                stroke: '#554f65',
                            }}
                        >
                            <path d='M2 15.8V3q0-.425.288-.713Q2.575 2 3 2h13q.425 0 .712.287Q17 2.575 17 3v9q0 .425-.288.712Q16.425 13 16 13H6l-3.15 3.15q-.225.225-.538.112Q2 16.15 2 15.8ZM7 18q-.425 0-.713-.288Q6 17.425 6 17v-2h13V6h2q.425 0 .712.287Q22 6.575 22 7v13.8q0 .35-.312.462-.313.113-.538-.112L18 18Z'/>
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
                                        backgroundColor: url === item.path ? 'var(--accent-primary-transparent)' : 'transparent',
                                    }}
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        style={{
                                            width: '22px',
                                            height: '22px',
                                            fill: url === item.path ? 'var(--accent-primary)' : '#554f65',
                                            stroke: url === item.path ? 'var(--accent-primary)' : '#554f65',
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
                        backgroundColor: url === '/dashboard/@me' ? 'var(--accent-secondary-transparent)' : 'transparent',
                    }}
                >
                    <Link to='/dashboard/@me' style={{display: 'flex'}}>
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
                                width: '22px',
                                height: '22px',
                                fill: 'var(--accent-primary)',
                                stroke: 'var(--accent-primary)',
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
                                backgroundColor: '#151525',
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
                                }}
                                type='text'
                                placeholder='Search'
                            />
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                style={{
                                    fill: 'white',
                                    position: 'absolute',
                                    top: '50%',
                                    right: '.5rem',
                                    width: '24px',
                                    height: '24px',
                                    transform: 'translateY(-50%)',
                                }}
                            >
                                <path xmlns="http://www.w3.org/2000/svg" d="m19.475 20.15-6.25-6.25q-.75.625-1.725.975-.975.35-1.95.35-2.425 0-4.087-1.663Q3.8 11.9 3.8 9.5q0-2.4 1.663-4.063 1.662-1.662 4.062-1.662 2.4 0 4.075 1.662Q15.275 7.1 15.275 9.5q0 1.05-.375 2.025-.375.975-.975 1.65L20.2 19.45ZM9.55 14.225q1.975 0 3.35-1.362Q14.275 11.5 14.275 9.5T12.9 6.137q-1.375-1.362-3.35-1.362-2 0-3.375 1.362Q4.8 7.5 4.8 9.5t1.375 3.363q1.375 1.362 3.375 1.362Z"/>
                            </svg>
                        </div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            style={{
                                cursor: 'pointer',
                                width: '24px',
                                height: '24px',
                                stroke: 'none',
                                fill: 'white',
                            }}
                        >
                            <path xmlns="http://www.w3.org/2000/svg" d="M4 19v-2h2v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q2 .5 3.25 2.112Q18 7.925 18 10v7h2v2Zm8-7.5ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-4-5h8v-7q0-1.65-1.175-2.825Q13.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10Z"/>
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            style={{
                                fill: 'white',
                                cursor: 'pointer',
                                width: '24px',
                                height: '24px',
                            }}
                            onClick={logout}
                        >
                            <path xmlns="http://www.w3.org/2000/svg" d="M5.4 21q-.75 0-1.275-.525Q3.6 19.95 3.6 19.2V5.3q0-.75.525-1.275Q4.65 3.5 5.4 3.5h6.725V5H5.4q-.1 0-.2.1t-.1.2v13.9q0 .1.1.2t.2.1h6.725V21Zm10.725-4.475-1.025-1.1L17.525 13h-8.4v-1.5h8.4L15.1 9.075l1.025-1.1L20.4 12.25Z"/>
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