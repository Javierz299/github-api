import React from 'react'

const JobsPagination = ({page, setPage, hasNextPage}) => {
    const adjustPage = (amount) => {
        setPage(prevPage => prevPage + amount)
    }



    return (
        <div>
            {page !== 1 && <span onClick={() => adjustPage(-1)} >{"Prev"}</span>}
            {page !== 1 && <span onClick={() => setPage(1)} >1</span>}

            {page > 2 && <span>{"..."}</span>}
            {page > 2 &&  <span onClick={() => adjustPage(-1)}>{page - 1}</span>}

            <span>{page}</span>

            {hasNextPage && <span onClick={() => adjustPage(1)}>{page + 1}</span>}
            {hasNextPage && <span>{"Next"}</span>}
        </div>
    )
}

export default JobsPagination;