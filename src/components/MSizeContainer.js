import InformerContainer from "../components/InformerContainer";
import "./MSizeContainer.css";

const MSizeContainer = () => {
  return (
    <div className="widget-m-size-omposite-in">
      <InformerContainer
        totalEarningsText="Total earning"
        salesEarningsText="$12,875"
        percentageEarningsText="10%"
      />
      <img className="divider-icon" alt="" src="../divider.svg" />
      <InformerContainer
        totalEarningsText="Sales"
        salesEarningsText="$43,123"
        percentageEarningsText="12%"
      />
    </div>
  );
};

export default MSizeContainer;
