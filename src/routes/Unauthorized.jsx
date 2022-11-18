import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';

export default function Unauthorized () {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <>
            <div>
                <Title>Unauthorized</Title>
                <SubTitle>401</SubTitle>
            </div>
            <section>
                <Title type='h2' size='3rem' margin='1rem'>Unauthorized access</Title>
                <button
                    onClick={goBack}
                >
                    Go back
                </button>
            </section>
        </>
    )
}
