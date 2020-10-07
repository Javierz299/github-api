import React from 'react'

const JobsPagination = ({page, setPage, hasNextPage}) => {
    return (
        <div>
            {page !== 1 && <span>{"Prev"}</span>}
            {page !== 1 && <span>1</span>}
            {page > 2 && <span>{"..."}</span>}
            {page > 2 &&  <span>{page - 1}</span>}
            <span>{page}</span>
            {hasNextPage && <span>{page + 1}</span>}
            {hasNextPage && <span>{"Next"}</span>}
        </div>
    )
}

export default JobsPagination;