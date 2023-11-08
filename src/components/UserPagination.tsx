type userPaginationProps = {
    prevClick: () => void,
    nextClick: () => void,
    per_page: number, 
    page: number, 
    total: number
}

function UserPagination(props: userPaginationProps){

    const {prevClick, nextClick, per_page, page, total} = props;

    let max_on_page = (per_page * page > total) ? total : per_page * page

    return(
        <div className="pagination">
            {per_page * page - per_page + 1} - {max_on_page} of {total} 
            <div className="button-container">
                <button onClick={prevClick}>&lt;</button>
                <button onClick={nextClick}>&gt;</button>
            </div> 
        </div>
    )
}

export default UserPagination;