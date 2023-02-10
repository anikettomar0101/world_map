import { useMemo } from "react";
import "./BigCircleChartContainer.css";

const BigCircleChartContainer = ({
  prop,
  progress,
  amount,
  detail,
  propLeft,
  propLeft1,
}) => {
  const widgetMSizeBigCircleCStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const progressIconStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className="widget-m-size-big-circle-c"
      style={widgetMSizeBigCircleCStyle}
    >
      <div className="chart2">
        <div className="percent2">
          <span className="span1">{prop}</span>%
        </div>
        <img className="background-icon" alt="" src="../background.svg" />
        <img
          className="progress-icon"
          alt=""
          src={progress}
          style={progressIconStyle}
        />
      </div>
      <div className="info6">
        <div className="amount14">{amount}</div>
        <div className="detail4">{detail}</div>
      </div>
    </div>
  );
};

export default BigCircleChartContainer;
