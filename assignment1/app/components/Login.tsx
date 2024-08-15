"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./UserCard";

export default function Login() {
    //if User Exists -> Sign out
    //else Sign In
    const { data: session, status } = useSession();

    const googleLogin = async () => {
        await signIn('google', {
            callbackUrl: '/blog',
            redirect: true
        })
    }

    if(session){
        return (
            <>
                <button type="button" onClick={() => signOut()}>Sign Out Google</button>
                <UserCard user={session?.user} />
            </>
        )
    }
    else{
        return (
            <>
                <button type="button"  onClick={() => googleLogin()}>Sign In Google</button>
            </>
        )
    }
}