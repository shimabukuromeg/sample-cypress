import { signIn, signOut, useSession } from 'next-auth/client'
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  height: 100vh;
  color: #666;
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
                    <AccountCircleOutlinedIcon fontSize="large" />
                    <AuthText id="signed">Signed in as</AuthText>
                    <UserNameText>{session.user.name}</UserNameText>
                    <Button onClick={signOut} size="large" variant="outlined" color="primary">
                        Sign out
                    </Button>
                </>
            )}
            {!session && (
                <>
                    <AuthText id="not-signed">Not signed in</AuthText>
                    <Button onClick={signIn} size="large" variant="outlined" color="primary">
                        Sign in
                    </Button>
                </>
            )}
        </Main>
    )
}
