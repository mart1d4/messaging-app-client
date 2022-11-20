import { useState } from 'react';
import Title from './Title';
import SubTitle from './SubTitle';

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