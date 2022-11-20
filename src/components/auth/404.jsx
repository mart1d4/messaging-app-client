import { Link } from 'react-router-dom';
import SubTitle from '../ui/SubTitle';
import Title from '../ui/Title';

export default function FourOFour() {
    return (
        <>
            <div
                style={{
                    marginBottom: '3rem',
                }}
            >
                <Title>Page not found</Title>
                <SubTitle>404</SubTitle>
            </div>
            <section>
                <p
                    style={{
                        fontSize: '1rem',
                        fontWeight: '300',
                        color: 'var(--foreground-primary)',
                    }}
                >
                    Return to the <Link to='/' style={{color: 'var(--accent-primary)'}} >homepage</Link>.
                </p>
            </section>
        </>
    );
}