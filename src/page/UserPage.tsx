import UserTable from "../components/UserTable";
import UserMenu from "../components/UserMenu";
import UserPagination from "../components/UserPagination";
import { Fragment, useState, useEffect } from "react";
import IUserData from "../types/IUserData";
import axios from "axios";

function UserPage(){

    const [page, setPage] = useState(1);
    const [userData, setUserData] = useState<IUserData>();
    const [error, setError] = useState("");
  
    function getData(){
  
      const userAPIURL = `https://reqres.in/api/users?page=${page}&per_page=5`;
  
      axios
        .get(userAPIURL)
        .then(response => setUserData(response.data))
        .catch(error => setError(error.message))
    }
  
    useEffect(() => {
      getData();
      console.log(userData)
    }, [page])

    function handlePrevClick(){
        if(page > 1){
            setPage(page-1)
        }
        return(
            console.log("Prev Clicked")
        )
    }

    function handleNextClick(){
        if(userData && page < userData.total_pages){
            setPage(page + 1)
        }
        return(
            console.log("Prev Clicked")
        )
    }

    return(
        <Fragment>
            <h1>All Users</h1>
            {error && <p className="error-message">{error}</p>}
            {userData && (
                <Fragment>
                    <UserTable users={userData.data}></UserTable>
                    <UserPagination nextClick={handleNextClick} prevClick={handlePrevClick} total={userData.total} per_page={userData.per_page} page={page}></UserPagination>
                </Fragment>
            )}
        </Fragment>
    )

}

export default UserPage;