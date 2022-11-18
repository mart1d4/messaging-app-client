import { useState } from 'react';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';

export default function About() {
    const [messages, setMessages] = useState([]);

    return (
        <>
            <div style={{ marginBottom: '7rem' }}>
                <Title>Messages</Title>
                <SubTitle>
                    {
                        messages?.length
                            ? messages.length +
                            (messages.length > 1
                                ? ' messages'
                                : ' message'
                            ) : 'No messages'
                    }
                </SubTitle>
            </div>
        </>
    );
}