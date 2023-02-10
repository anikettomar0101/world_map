import "./InformerContainer.css";

const InformerContainer = ({
  totalEarningsText,
  salesEarningsText,
  percentageEarningsText,
}) => {
  return (
    <div className="informer">
      <div className="title13">
        <div className="name20">{totalEarningsText}</div>
      </div>
      <div className="value9">
        <div className="amount10">{salesEarningsText}</div>
        <div className="indicator1">
          <img className="arrow-up-icon7" alt="" src="../arrow-up1.svg" />
          <div className="percent1">{percentageEarningsText}</div>
        </div>
      </div>
      <div className="detail3">Compared to $21,490 last year</div>
    </div>
  );
};

export default InformerContainer;
