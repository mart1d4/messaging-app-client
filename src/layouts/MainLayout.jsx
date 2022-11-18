import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
    const firstWrappeStyle = {
        height: '68px',
        width: '100%',
        padding: '0',
    };

    const secondWrappeStyle = {
        height: '100%',
        width: 'clamp(330px, 100%, 1200px)',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    return (
        <>
            <div
                style={{
                    ...firstWrappeStyle,
                    boxShadow: 'var(--boxshadow-primary)',
                }}
            >
                <header
                    style={{
                        ...secondWrappeStyle,
                        position: 'relative'
                    }}
                >
                    <Header />
                </header>
            </div>

            <div
                style={{
                    ...firstWrappeStyle,
                    minHeight: 'calc(100vh - 136px)',
                    height: 'fit-content'
                }}
            >
                <main
                    style={{
                        ...secondWrappeStyle,
                        flexDirection: 'column',
                        padding: '7rem clamp(1rem, 5rem, 10rem) 7rem clamp(1rem, 5rem, 10rem)',
                    }}
                >
                    <Outlet />
                </main>
            </div>

            <div
                style={
                    firstWrappeStyle
                }
            >
                <footer
                    style={{
                        ...secondWrappeStyle,
                        position: 'relative',
                        borderTop: '1px solid var(--border-color-primary)'
                    }}
                >
                    <Footer />
                </footer>
            </div>
        </>
    )
}
