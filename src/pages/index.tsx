import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
    const [ session, loading ] = useSession()

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {session && (
                <>
                    <div id="signed">Signed in as</div>
                    <div>{session.user.name}</div>
                    <button onClick={signOut}>Sign out</button>
                </>
            )}
            {!session && (
                <>
                    <div id="not-signed">Not signed in</div>
                    <button onClick={signIn}>Sign in</button>
                </>
            )}
        </div>
    )
}
