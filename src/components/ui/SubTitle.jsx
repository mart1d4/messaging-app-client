export default function SubTitle({ children }) {
    return (
        <p
            style={{
                fontSize: '0.7rem',
                lineHeight: '0.7rem',
                fontWeight: '400',
                textTransform: 'uppercase',
                color: 'var(--foreground-tertiary)',
            }}
        >
            {children}
        </p>
    );
}