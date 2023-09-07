import { useAppDispatch, useAppSelector } from "../../apps/hooks"
import { useEffect } from "react"
import { fetchUsers } from "./userSlice"

export const UserView = () => {
    const user = useAppSelector(state => state.user)
    const { loading, users, error } = user

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <h2>List of Users</h2>
            {loading && <div>Loading...</div>}
            {!loading && error ? <div>Error: {error.message}</div> : null}
            {!loading && users.length ? (
                <ul>
                {users.map((user) => (
                  <li key={user.id}>
                    <strong>Name:</strong> {user.name}<br />
                    <strong>Username:</strong> {user.username}<br />
                    <strong>Email:</strong> {user.email}<br />
                  </li>
                ))}
              </ul>
            ) : null}
        </div>
    )
}