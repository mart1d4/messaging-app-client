export default function Title({ children, type, size, weight, color, margin, align }) {
    const switchTitle = (type) => {
        switch (type) {
            case 'h1':
                return <h1 style={style}>{children}</h1>;
            case 'h2':
                return <h2 style={style}>{children}</h2>;
            case 'h3':
                return <h3 style={style}>{children}</h3>;
            case 'h4':
                return <h4 style={style}>{children}</h4>;
            case 'h5':
                return <h5 style={style}>{children}</h5>;
            case 'h6':
                return <h6 style={style}>{children}</h6>;
            default:
                return <h1 style={style}>{children}</h1>;
        }
    };

    const style = {
        fontSize: size || '4rem',
        fontWeight: weight || '200',
        color: color || 'var(--foreground)',
        marginBottom: margin || '0',
        textAlign: align || 'left',
    }
    
    return (
        switchTitle(type)
    );
}