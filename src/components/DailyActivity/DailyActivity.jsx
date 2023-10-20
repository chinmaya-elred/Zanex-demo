import React from "react";
import './DailyActivity.css'

const DailyActivity = () =>{
    return(
        <div className="col-xl-4 col-md-12">
        <div className="card h-100">
            <div className="card-header">
                <h4 className="card-title fw-semibold">Daily Activity</h4>
            </div>
            <div className="card-body pb-0 text-start" >
                <ul className="task-list">
                    <li>
                        <i className="task-icon bg-primary"></i>
                        <h6>Task Finished<span className="text-muted fs-11 mx-2">29 Oct 2020</span></h6>
                        <p className="text-muted fs-12">Adam Berry finished task on <a href="javascript:void(0);" className="fw-semibold">Project Management</a></p>
                    </li>
                    <li>
                        <i className="task-icon bg-secondary"></i>
                        <h6>New Comment<span className="text-muted fs-11 mx-2">25 Oct 2020</span></h6>
                        <p className="text-muted fs-12">Victoria commented on Project <a href="javascript:void(0);" className="fw-semibold">AngularJS Template</a></p>
                    </li>
                    <li>
                        <i className="task-icon bg-primary"></i>
                        <h6>New Comment<span className="text-muted fs-11 mx-2">25 Oct 2020</span></h6>
                        <p className="text-muted fs-12">Victoria commented on Project <a href="javascript:void(0);" className="fw-semibold">AngularJS Template</a></p>
                    </li>
                    <li>
                        <i className="task-icon bg-secondary"></i>
                        <h6>Task Overdue<span className="text-muted fs-11 mx-2">14 Oct 2020</span></h6>
                        <p className="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="javascript:void(0);" className="fw-semibold">Integrated management</a></p>
                    </li>
                    <li>
                        <i className="task-icon bg-primary"></i>
                        <h6>Task Overdue<span className="text-muted fs-11 mx-2">29 Oct 2020</span></h6>
                        <p className="text-muted mb-0 fs-12">Petey Cruiser finished task <a href="javascript:void(0);" className="fw-semibold">Integrated management</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default DailyActivity