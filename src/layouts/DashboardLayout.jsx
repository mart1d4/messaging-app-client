import { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const navItems = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: <path d='M13 8V4q0-.425.288-.713Q13.575 3 14 3h6q.425 0 .712.287Q21 3.575 21 4v4q0 .425-.288.712Q20.425 9 20 9h-6q-.425 0-.712-.288Q13 8.425 13 8ZM3 12V4q0-.425.288-.713Q3.575 3 4 3h6q.425 0 .713.287Q11 3.575 11 4v8q0 .425-.287.712Q10.425 13 10 13H4q-.425 0-.712-.288Q3 12.425 3 12Zm10 8v-8q0-.425.288-.713Q13.575 11 14 11h6q.425 0 .712.287.288.288.288.713v8q0 .425-.288.712Q20.425 21 20 21h-6q-.425 0-.712-.288Q13 20.425 13 20ZM3 20v-4q0-.425.288-.713Q3.575 15 4 15h6q.425 0 .713.287.287.288.287.713v4q0 .425-.287.712Q10.425 21 10 21H4q-.425 0-.712-.288Q3 20.425 3 20Z'/>,
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
        icon: <path d='M1 18q-.425 0-.712-.288Q0 17.425 0 17v-.575q0-1.1 1.1-1.763Q2.2 14 4 14q.325 0 .613.025.287.025.562.075-.35.5-.513 1.075Q4.5 15.75 4.5 16.4V18Zm6 0q-.425 0-.713-.288Q6 17.425 6 17v-.6q0-1.625 1.663-2.638Q9.325 12.75 12 12.75q2.7 0 4.35 1.012Q18 14.775 18 16.4v.6q0 .425-.288.712Q17.425 18 17 18Zm12.5 0v-1.6q0-.65-.175-1.225-.175-.575-.5-1.075.275-.05.563-.075Q19.675 14 20 14q1.8 0 2.9.662 1.1.663 1.1 1.763V17q0 .425-.288.712Q23.425 18 23 18ZM4 13q-.825 0-1.412-.588Q2 11.825 2 11t.588-1.413Q3.175 9 4 9t1.412.587Q6 10.175 6 11q0 .825-.588 1.412Q4.825 13 4 13Zm16 0q-.825 0-1.413-.588Q18 11.825 18 11t.587-1.413Q19.175 9 20 9q.825 0 1.413.587Q22 10.175 22 11q0 .825-.587 1.412Q20.825 13 20 13Zm-8-1q-1.25 0-2.125-.875T9 9q0-1.25.875-2.125T12 6q1.25 0 2.125.875T15 9q0 1.25-.875 2.125T12 12Z'/>,
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
                                fill: 'var(--foreground-primary)',
                            }}
                        >
                            <path d='M3.25 17.625v-1.5h17.5v1.5Zm0-4.875v-1.5h17.5v1.5Zm0-4.875v-1.5h17.5v1.5Z'/>
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
                                    fill: 'var(--foreground-primary)',
                                    position: 'absolute',
                                    top: '50%',
                                    right: '.5rem',
                                    transform: 'translateY(-50%)',
                                }}
                            >
                                <path d='m19.475 20.15-6.25-6.25q-.75.625-1.725.975-.975.35-1.95.35-2.425 0-4.087-1.663Q3.8 11.9 3.8 9.5q0-2.4 1.663-4.063 1.662-1.662 4.062-1.662 2.4 0 4.075 1.662Q15.275 7.1 15.275 9.5q0 1.05-.375 2.025-.375.975-.975 1.65L20.2 19.45ZM9.55 14.225q1.975 0 3.35-1.362Q14.275 11.5 14.275 9.5T12.9 6.137q-1.375-1.362-3.35-1.362-2 0-3.375 1.362Q4.8 7.5 4.8 9.5t1.375 3.363q1.375 1.362 3.375 1.362Z'/>
                            </svg>
                        </div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            style={{
                                cursor: 'pointer',
                                fill: 'var(--foreground-primary)',
                            }}
                        >
                            <path d='M4.25 18.875v-1.5h2v-7.25q0-2.05 1.263-3.613Q8.775 4.95 10.75 4.5v-.7q0-.525.363-.888.362-.362.887-.362t.887.362q.363.363.363.888v.7q1.975.45 3.238 2.012 1.262 1.563 1.262 3.613v7.25h2v1.5Zm7.75-7.25ZM12 21.8q-.75 0-1.275-.525Q10.2 20.75 10.2 20h3.6q0 .75-.525 1.275-.525.525-1.275.525Zm-4.25-4.425h8.5v-7.25q0-1.775-1.238-3.013Q13.775 5.875 12 5.875T8.988 7.112Q7.75 8.35 7.75 10.125Z'/>
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            style={{
                                fill: 'var(--foreground-primary)',
                                cursor: 'pointer',
                            }}
                            onClick={logout}
                        >
                            <path d='M5.4 21q-.75 0-1.275-.525Q3.6 19.95 3.6 19.2V5.3q0-.75.525-1.275Q4.65 3.5 5.4 3.5h6.725V5H5.4q-.1 0-.2.1t-.1.2v13.9q0 .1.1.2t.2.1h6.725V21Zm10.725-4.475-1.025-1.1L17.525 13h-8.4v-1.5h8.4L15.1 9.075l1.025-1.1L20.4 12.25Z'/>
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