import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import IUser from "../types/IUser";
import UserRow from "./UserRow";


function UserTable(props: {users: IUser[], error: string}) {

    const{ users, error } = props;

    return(
        <Fragment>
            {error && <p>{error}</p>}
            <table className="user-table">
                <tr>
                    <th>
                        <td>Name</td>
                    </th>
                    <th>
                        <td>Email</td>
                    </th>
                </tr>
            {users && users.map((user: IUser) => (
                <UserRow user={user}></UserRow>
            ))}
            </table>
        </Fragment>
    )

}

export default UserTable;