import React from "react";
import './Timeline.css'

const Timeline = () =>{
    return(
        <div className="col-xl-4 col-md-12">
        <div className="card overflow-hidden">
            <div className="card-header">
                <div>
                    <h3 className="card-title">Timeline</h3>
                </div>
            </div>
            <div className="card-body pb-0 pt-4">
                <div className="activity1">
                    <div className="activity-blog">
                        <div className="activity-img brround bg-primary-transparent text-primary">
                            <i className="fa fa-user-plus fs-20"></i>
                        </div>
                        <div className="activity-details d-flex">
                            <div>
                                <b><span className="text-dark"> Mr John </span></b>
                                Started following you
                                <span className="d-flex text-muted fs-11">01 June 2020</span>
                            </div>
                            <div className="ms-auto fs-13 text-dark fw-semibold">
                                <span className="badge bg-primary text-white">1m</span>
                            </div>
                        </div>
                    </div>
                    <div className="activity-blog">
                        <div className="activity-img brround bg-secondary-transparent text-secondary">
                            <i className="fa fa-comment fs-20"></i>
                        </div>
                        <div className="activity-details d-flex">
                            <div>
                                <b><span className="text-dark"> Lily </span></b>
                                1 Commented applied
                                <span className="d-flex text-muted fs-11">01 July 2020</span>
                            </div>
                            <div className="ms-auto fs-13 text-dark fw-semibold">
                                <span className="badge bg-danger text-white">3m</span>
                            </div>
                        </div>
                    </div>
                    <div className="activity-blog">
                        <div className="activity-img brround bg-success-transparent text-success">
                            <i className="fa fa-thumbs-up fs-20"></i>
                        </div>
                        <div className="activity-details d-flex">
                            <div>
                                <b><span className="text-dark"> Kevin </span></b>
                                liked your site
                                <span className="d-flex text-muted fs-11">05 July 2020</span>
                            </div>
                            <div className="ms-auto fs-13 text-dark fw-semibold">
                                <span className="badge bg-warning text-white">5m</span>
                            </div>
                        </div>
                    </div>
                    <div className="activity-blog">
                        <div className="activity-img brround bg-info-transparent text-info">
                            <i className="fa fa-envelope fs-20"></i>
                        </div>
                        <div className="activity-details d-flex">
                            <div>
                                <b><span className="text-dark"> Andrena </span></b>
                                posted a new article
                                <span className="d-flex text-muted fs-11">09 October 2020</span>
                            </div>
                            <div className="ms-auto fs-13 text-dark fw-semibold">
                                <span className="badge bg-info text-white">5m</span>
                            </div>
                        </div>
                    </div>
                    <div className="activity-blog-last">
                        <div className="activity-img brround bg-danger-transparent text-danger">
                            <i className="fa fa-shopping-bag fs-20"></i>
                        </div>
                        <div className="activity-details d-flex">
                            <div>
                                <b><span className="text-dark"> Sonia </span></b>
                                Delivery in progress
                                <span className="d-flex text-muted fs-11">12 October 2020</span>
                            </div>
                            <div className="ms-auto fs-13 text-dark fw-semibold">
                                <span className="badge bg-warning text-white">5m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Timeline