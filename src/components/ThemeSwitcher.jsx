export default function ThemeSwitcher({ show }) {
    window.addEventListener('theme', () => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.style.setProperty('--background-primary', '#151515');
            document.documentElement.style.setProperty('--background-secondary', '#202020');
            document.documentElement.style.setProperty('--foreground-primary', '#eeeeee');
            document.documentElement.style.setProperty('--boxshadow-primary', '0 0 10px rgba(0, 0, 0, 0.5)');
            document.documentElement.style.setProperty('--border-color-primary', 'rgba(255, 255, 255, 0.15)');
        } else {
            document.documentElement.style.setProperty('--background-primary', '#EEEEEE');
            document.documentElement.style.setProperty('--background-secondary', '#E5E5E5');
            document.documentElement.style.setProperty('--foreground-primary', '#151515');
            document.documentElement.style.setProperty('--boxshadow-primary', '0 0 5px rgba(0, 0, 0, 0.3)');
            document.documentElement.style.setProperty('--border-color-primary', 'rgba(0, 0, 0, 0.15)');
        }
    });

    const themes = [
        'light',
        'dark'
    ];

    const colors = [
        'mint',
        'blues',
        'custard',
        'pink',
        'neon',
        'lavender'
    ];

    const liStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30px',
        borderRadius: '4px',
        aspectRatio: '1/1',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: '0.6rem',
        cursor: 'pointer',
    }

    const changeTheme = (theme) => {
        window.localStorage.setItem('preferredTheme', theme);
        window.dispatchEvent(new Event('theme'));
    }

    const changeColor = (color) => {
        window.localStorage.setItem('preferredColor', color);
        window.dispatchEvent(new Event('theme'));
    }

    return (
        <div
            style={{
                display: show ? 'block' : 'none',
                position: 'absolute',
                bottom: '100%',
                right: '0',
                width: '150px'
            }}
        >
            <div
                style={{
                    fontSize: '0.8rem',
                    fontWeight: '300',
                    background: 'var(--background-secondary)',
                    boxShadow: 'var(--boxshadow-primary)',
                    borderRadius: '4px',
                    padding: '5px',
                    cursor: 'default',
                }}
            >
                <ul
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '5px',
                    }}
                >
                    {themes.map((theme) => (
                        <li
                            key={theme}
                            style={liStyle}
                            onClick={() => changeTheme(theme)}
                            className='hover background-primary'
                        >
                            {theme}
                        </li>
                    ))}
                </ul>
                
                {/* Border separator */}
                <div
                    style={{
                        width: '80%',
                        height: '1px',
                        background: 'var(--border-primary)',
                        margin: '5px auto',
                    }}
                ></div>

                <ul
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '5px',
                    }}
                >
                    {colors.map((color) => (
                        <li
                            key={color}
                            style={liStyle}
                            onClick={() => changeColor(color)}
                            className='hover background-primary'
                        >
                            {color}
                        </li>
                    ))}
                </ul>
            </div>
            <div
                style={{
                    width: '100%',
                    height: '15px',
                    cursor: 'default',
                }}
            >
            </div>
        </div>
    );
}
