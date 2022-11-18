import { Outlet, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const navItems = [
    {
        path: '/',
        icon: <path d='M6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.275-.2.575-.3.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-4v-7h-4v7Z'/>,
    },
    {
        path: '/about',
        icon: <path d='M2 20q-.425 0-.712-.288Q1 19.425 1 19v-1.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q7.35 13 9 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q17 16.35 17 17.2V19q0 .425-.288.712Q16.425 20 16 20Zm16.525 0q.225-.175.35-.438.125-.262.125-.587V17q0-1.1-.612-2.113-.613-1.012-1.738-1.737 1.275.15 2.4.512 1.125.363 2.1.888.9.5 1.375 1.112Q23 16.275 23 17v2q0 .425-.288.712Q22.425 20 22 20ZM9 12q-1.65 0-2.825-1.175Q5 9.65 5 8q0-1.65 1.175-2.825Q7.35 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8q0 1.65-1.175 2.825Q10.65 12 9 12Zm10-4q0 1.65-1.175 2.825Q16.65 12 15 12q-.275 0-.7-.062-.425-.063-.7-.138.675-.8 1.037-1.775Q15 9.05 15 8q0-1.05-.363-2.025Q14.275 5 13.6 4.2q.35-.125.7-.163Q14.65 4 15 4q1.65 0 2.825 1.175Q19 6.35 19 8Z'/>,
    },
    {
        path: '/login',
        icon: <path d='M7 14h6.025q.425 0 .7-.288Q14 13.425 14 13t-.287-.713Q13.425 12 13 12H6.975q-.425 0-.7.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm0-3h10.025q.425 0 .7-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9H6.975q-.425 0-.7.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0-3h10.025q.425 0 .7-.287Q18 7.425 18 7t-.288-.713Q17.425 6 17 6H6.975q-.425 0-.7.287Q6 6.575 6 7t.287.713Q6.575 8 7 8ZM2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Z'/>,
    },
    {
        path: '/register',
        icon: <path d='M7 17q-.825 0-1.412-.587Q5 15.825 5 15V4q0-.825.588-1.413Q6.175 2 7 2h4.175q.4 0 .763.15.362.15.637.425L14 4h7q.825 0 1.413.588Q23 5.175 23 6v9q0 .825-.587 1.413Q21.825 17 21 17Zm-4 4q-.825 0-1.412-.587Q1 19.825 1 19V7q0-.425.288-.713Q1.575 6 2 6t.713.287Q3 6.575 3 7v12h16q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 21 19 21Zm7.025-8h7.95q.325 0 .463-.275.137-.275-.063-.525L15.95 9.025q-.15-.2-.4-.2t-.4.2l-1.9 2.475L12.1 10q-.15-.2-.4-.2t-.4.2l-1.675 2.2q-.2.25-.063.525.138.275.463.275Z'/>,
    },
    {
        path: '/dashboard',
        icon: <path d='M4 11q-.425 0-.712-.288Q3 10.425 3 10V4q0-.425.288-.713Q3.575 3 4 3h6q.425 0 .713.287Q11 3.575 11 4v6q0 .425-.287.712Q10.425 11 10 11Zm10 0q-.425 0-.712-.288Q13 10.425 13 10V4q0-.425.288-.713Q13.575 3 14 3h6q.425 0 .712.287Q21 3.575 21 4v6q0 .425-.288.712Q20.425 11 20 11ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-6q0-.425.288-.713Q3.575 13 4 13h6q.425 0 .713.287.287.288.287.713v6q0 .425-.287.712Q10.425 21 10 21Zm13 0q-.425 0-.712-.288Q16 20.425 16 20v-2h-2.025q-.425 0-.7-.288Q13 17.425 13 17t.288-.712Q13.575 16 14 16h2v-2.025q0-.425.288-.7Q16.575 13 17 13t.712.287Q18 13.575 18 14v2h2.025q.425 0 .7.288.275.287.275.712t-.288.712Q20.425 18 20 18h-2v2.025q0 .425-.288.7Q17.425 21 17 21Z'/>,
    },
];

export default function DashboardLayout() {
    const { auth } = useAuth();

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
                    borderRight: '1px solid var(--border-color-primary)',
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
                                    }}
                                    className='backgroundHover'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        style={{
                                            width: '22px',
                                            height: '22px',
                                            fill: '#554f65',
                                            stroke: '#554f65',
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
                    }}
                    className='backgroundHover'
                >
                    <img
                        src={auth.user?.avatar}
                        alt='User Avatar'
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                        }}
                    />
                </div>
            </nav>

            <main
                style={{
                    width: 'calc(100vw - 110px)',
                    height: '100%',
                }}
            >
                <header
                    style={{
                        width: '100%',
                        height: '110px',
                        borderBottom: '1px solid var(--border-color-primary)',
                    }}
                >

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