import React,{ Fragment,useState} from 'react'


const Job = ({job}) => {
    const [toggle, setDescription] = useState(false)


    return (
            <div className="job-card">
                <div className="job-title">
                    <h2>{job.company}</h2>
                    <p>{job.title}</p>
                </div>
                <div className="job-link">
                    <p><a href={job.how_to_apply}>{job.how_to_apply}</a></p>
                    <button onClick={() => setDescription(!toggle)}>
                        {!toggle ? "view details" : "hide detailes"}
                    </button>
                    {toggle && (
                    <Fragment>
                        <p className="job-details">Description: {job.description} </p> 
                        <button onClick={() => setDescription(!toggle)} >close</button>
                    </Fragment>
                    )}
                </div>
            </div>
    )
}

export default Job;
