import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import IUser from "../types/IUser";
import UserRow from "./UserRow";


function UserTable(props: {users: IUser[]}) {

    const{ users } = props;

    return(
        <Fragment>
            <table className="user-table">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            {users && users.map((user: IUser) => (
                <UserRow user={user}></UserRow>
            ))}
            </table>
        </Fragment>
    )

}

export default UserTable;