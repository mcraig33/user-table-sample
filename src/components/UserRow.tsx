import IUser from "../types/IUser";

function UserRow(props: {user: IUser}){
    const { user } = props;
    return (
        <tr>
            <td>
                <img className="user-avatar-image" src={user.avatar} />
                <p className="user-name">
                    {user.first_name} {user.last_name}
                </p>
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

export default UserRow;