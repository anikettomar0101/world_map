import "./EarningsContainer.css";

const EarningsContainer = ({ iconImageUrl }) => {
  return (
    <div className="side-indicators">
      <div className="informer-info-with-icon">
        <img className="icon4" alt="" src={iconImageUrl} />
        <div className="info3">
          <div className="title15">Total earning</div>
          <div className="amount11">
            <div className="value13">540,549</div>
            <div className="indicator2">
              <img className="up-icon" alt="" src="../up.svg" />
              <div className="div5">145</div>
            </div>
          </div>
        </div>
      </div>
      <div className="informer-info-with-icon">
        <img className="icon4" alt="" src="../icon6.svg" />
        <div className="info3">
          <div className="title15">Sales</div>
          <div className="amount11">
            <div className="value13">1,205,677</div>
            <div className="indicator2">
              <img className="up-icon" alt="" src="../up.svg" />
              <div className="div5">145</div>
            </div>
          </div>
        </div>
      </div>
      <div className="informer-info-with-icon">
        <img className="icon4" alt="" src="../icon7.svg" />
        <div className="info3">
          <div className="title15">Purchase</div>
          <div className="amount11">
            <div className="value13">48,430,039</div>
            <div className="indicator2">
              <img className="up-icon" alt="" src="../up.svg" />
              <div className="div5">145</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsContainer;
