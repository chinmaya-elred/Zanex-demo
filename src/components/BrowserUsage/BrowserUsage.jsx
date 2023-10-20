import React from "react";
import './BrowserUsage.css'

const Browserusage = () =>{
    return(
        <div className="col-xl-4 col-md-12">
        <div className="card">
            <div className="card-header">
                <h4 className="card-title fw-semibold">Browser Usage</h4>
            </div>
            <div className="card-body pt-2 pb-2">
                <div className="d-md-flex align-items-center browser-stats">
                    <div className="d-flex me-1">
                        <i className="fa fa-chrome bg-secondary-gradient text-white me-2"></i>
                        <p className="fs-16 my-auto mb-0">Chrome</p>
                    </div>
                    <div className="ms-auto my-auto">
                        <div className="d-flex">
                            <span className="my-auto fs-16">35,502</span>
                            <span className="text-success fs-15"><i className="fe fe-arrow-up"></i>12.75%</span>
                        </div>
                    </div>
                </div>
                <div className="d-md-flex align-items-center browser-stats">
                    <div className="d-flex me-1">
                        <i className="fa fa-opera text-white bg-danger-gradient me-2"></i>
                        <p className="fs-16 my-auto mb-0">Opera</p>
                    </div>
                    <div className="ms-auto my-auto">
                        <div className="d-flex">
                            <span className="my-auto fs-16">12,563</span>
                            <span className="text-danger fs-15"><i className="fe fe-arrow-down"></i>15.12%</span>
                        </div>
                    </div>
                </div>
                <div className="d-md-flex align-items-center browser-stats">
                    <div className="d-flex me-1">
                        <i className="fa fa-firefox text-white bg-purple-gradient me-2"></i>
                        <p className="fs-16 my-auto mb-0">IE</p>
                    </div>
                    <div className="ms-auto my-auto">
                        <div className="d-flex">
                            <span className="my-auto fs-16">25,364</span>
                            <span className="text-success fs-15"><i className="fe fe-arrow-up"></i>24.37%</span>
                        </div>
                    </div>
                </div>
                <div className="d-md-flex align-items-center browser-stats">
                    <div className="d-flex me-1">
                        <i className="fa fa-edge text-white bg-info-gradient me-2"></i>
                        <p className="fs-16 my-auto mb-0">Firefox</p>
                    </div>
                    <div className="ms-auto my-auto">
                        <div className="d-flex">
                            <span className="my-auto fs-16">14,635</span>
                            <span className="text-success fs-15"><i className="fe fe-arrow-up"></i>15.63%</span>
                        </div>
                    </div>
                </div>
                <div className="d-md-flex align-items-center browser-stats">
                    <div className="d-flex me-1">
                        <i className="fa fa-android text-white bg-success-gradient me-2"></i>
                        <p className="fs-16 my-auto mb-0">Android</p>
                    </div>
                    <div className="ms-auto my-auto">
                        <div className="d-flex">
                            <span className="my-auto fs-16">15,453</span>
                            <span className="text-danger fs-15"><i className="fe fe-arrow-down"></i>23.70%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Browserusage