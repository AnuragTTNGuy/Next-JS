import { DefaultSession } from "next-auth";

export function UserCard( { user } : { user: DefaultSession['user'] }) {
    return (
        <div>
            Current User: {user?.name} {user?.email}
        </div>
    )
}