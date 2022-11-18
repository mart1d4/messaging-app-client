export default function SubTitle({ children }) {
    return (
        <p
            style={{
                fontSize: '0.7rem',
                lineHeight: '0.7rem',
                fontWeight: '200',
                textTransform: 'uppercase',
                opacity: '0.6',
            }}
        >
            {children}
        </p>
    );
}