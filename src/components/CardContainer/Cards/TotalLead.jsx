import React from "react";

const TotalLead = () => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
      <div className="card overflow-hidden">
        <div className="card-body">
          <div className="row">
            <div className="col" style={{ textAlign: 'left' }}>
              <h6 className="">Total Leads</h6>
              <h3 className="mb-2 number-font">56,992</h3>
              <p className="text-muted mb-0">
                <span className="text-secondary">
                  <i className="fa fa-chevron-circle-up text-secondary me-1"></i> 3%
                </span> last month
              </p>
            </div>
            <div className="col col-auto">
              <div className="counter-icon bg-danger-gradient box-shadow-danger brround ms-auto">
                <i className="icon icon-rocket text-white mb-5 "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalLead;
