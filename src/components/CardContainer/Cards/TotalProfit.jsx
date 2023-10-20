import React from "react";

const TotalProfit = () => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
      <div className="card overflow-hidden">
        <div className="card-body">
          <div className="row">
            <div className="col" style={{ textAlign: 'left' }}>
              <h6 className="">Total Profit</h6>
              <h3 className="mb-2 number-font">34,516</h3>
              <p className="text-muted mb-0">
                <span className="text-primary">
                  <i className="fa fa-chevron-circle-up text-primary me-1"></i> 0.5%
                </span> last month
              </p>
            </div>
            <div className="col col-auto">
              <div className="counter-icon bg-secondary-gradient box-shadow-secondary brround ms-auto">
                <i className="fe fe-dollar-sign text-white mb-5 "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalProfit;
