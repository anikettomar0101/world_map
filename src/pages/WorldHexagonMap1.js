import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import ContainerWidget from "../components/ContainerWidget";
import Header from "../components/Header";
import EarningsContainer from "../components/EarningsContainer";
import BigCircleChartContainer from "../components/BigCircleChartContainer";
import MapPinContainer from "../components/MapPinContainer";
import "./WorldHexagonMap1.css";

const WorldHexagonMap1 = () => {
  return (
    <div className="world-hexagon-map1">
      <ContainerWidget />
      <Header
        iconImageUrl="../icon8.svg"
        profileImageUrl="../profile2.svg"
        optionImageUrl="../option2.svg"
        logoImageUrl="../logo2.svg"
      />
      <div className="footer3">
        <div className="bg3" />
        <b className="orion-data-visualisation2">Orion data visualisation</b>
        <b className="b3">2019</b>
      </div>
      <EarningsContainer iconImageUrl="../icon9.svg" />
      <BigCircleChartContainer
        prop="27"
        progress="../progress.svg"
        amount="92,980"
        detail="Active users"
      />
      <BigCircleChartContainer
        prop="67"
        progress="../progress1.svg"
        amount="22,652"
        detail="New users"
        propLeft="330px"
        propLeft1="0.97px"
      />
      <img className="hex-map-icon1" alt="" src="../hex-map1.svg" />
      <MapPinContainer
        indicator="../indicator6.svg"
        title="Chicago"
        amount="98,320,300"
      />
      <div className="map-pin-pin-with-name">
        <div className="tooltip">
          <img className="indicator-icon" alt="" />
          <div className="info1">
            <div className="title7">Manaus</div>
            <div className="amount8">12,320,300</div>
          </div>
        </div>
        <img className="arrow-icon" alt="" />
      </div>
      <MapPinContainer
        indicator="../indicator7.svg"
        title="Berlin"
        amount="76,541,106"
        propTop="calc(50% - 332px)"
        propRight="692px"
      />
      <MapPinContainer
        indicator="../indicator8.svg"
        title="Giza"
        amount="10,547,980"
        propTop="calc(50% - 116px)"
        propRight="605px"
      />
      <MapPinContainer
        indicator="../indicator9.svg"
        title="Shanghai"
        amount="239,570,110"
        propTop="calc(50% - 184px)"
        propRight="224px"
      />
      <MapPinContainer
        indicator="../indicator10.svg"
        title="Queensland"
        amount="6,097,321"
        propTop="calc(50% + 116px)"
        propRight="113px"
      />
      <div className="footer3">
        <div className="bg3" />
        <b className="orion-data-visualisation2">Orion data visualisation</b>
        <b className="b3">2022</b>
      </div>
      <div className="amount9">2,431,340</div>
      <TextField
        className="title8"
        color="primary"
        variant="filled"
        defaultValue="Detail"
        type="text"
        label="All users"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
    </div>
  );
};

export default WorldHexagonMap1;
