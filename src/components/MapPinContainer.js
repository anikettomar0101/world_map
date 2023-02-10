import { useMemo } from "react";
import "./MapPinContainer.css";

const MapPinContainer = ({ indicator, title, amount, propTop, propRight }) => {
  const mapPinPinWithNameStyle = useMemo(() => {
    return {
      top: propTop,
      right: propRight,
    };
  }, [propTop, propRight]);

  return (
    <div className="map-pin-pin-with-name1" style={mapPinPinWithNameStyle}>
      <div className="tooltip1">
        <img className="indicator-icon1" alt="" src={indicator} />
        <div className="info7">
          <div className="title18">{title}</div>
          <div className="amount15">{amount}</div>
        </div>
      </div>
      <img className="arrow-icon1" alt="" src="../arrow.svg" />
    </div>
  );
};

export default MapPinContainer;
