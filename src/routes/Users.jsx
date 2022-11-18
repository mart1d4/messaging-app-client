import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

export default function About() {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <>
            <div style={{ marginBottom: '7rem' }}>
                <Title>User List</Title>
                <SubTitle>
                    {users?.length
                        ? users.length +
                        (users.length > 1
                            ? ' Users'
                            : ' User'
                        ) : 'No Users'}
                </SubTitle>
            </div>
            {
                users?.length
                    ? (
                        <ul>
                            {users.map((user) => (
                                <li key={user.id}>{user?.username}</li>
                            ))}
                        </ul>
                    ) : <p>No users to display.</p>
            }
        </>
    );
}