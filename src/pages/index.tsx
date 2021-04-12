import { signIn, signOut, useSession } from 'next-auth/client'
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Link from 'next/link';

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

const ExtendButton = styled(Button)`
  width: 115px;
  height: 45px;
`;

const ExtendButtonContainer = styled.div`
    margin-bottom: 10px;
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
                    <Link href="/mypage">
                        <a>
                            <ExtendButtonContainer>
                                <ExtendButton size="large" variant="outlined" color="secondary">
                                    MyPage
                                </ExtendButton>
                            </ExtendButtonContainer>
                        </a>
                    </Link>
                    <ExtendButton onClick={signOut} size="large" variant="outlined" color="primary">
                        Sign out
                    </ExtendButton>
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
