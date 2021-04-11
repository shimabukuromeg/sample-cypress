import { signIn, signOut, useSession } from 'next-auth/client'
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  height: 100vh;
  color: #666;
  background-color: black;
`;

const AuthText = styled.div`
  margin-bottom: .25rem;
`;

const UserNameText = styled.div`
  margin-bottom: .25rem;
`;

export default function Home() {
    const [ session, loading ] = useSession()

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <Main>
            {session && (
                <>
                    <AuthText id="signed">Signed in as</AuthText>
                    <UserNameText>{session.user.name}</UserNameText>
                    <button onClick={signOut}>Sign out</button>
                </>
            )}
            {!session && (
                <>
                    <AuthText id="not-signed">Not signed in</AuthText>
                    <button onClick={signIn}>Sign in</button>
                </>
            )}
        </Main>
    )
}
