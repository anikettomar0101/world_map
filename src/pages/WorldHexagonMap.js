import LSizeContainer from "../components/LSizeContainer";
import Header from "../components/Header";
import EarningsContainer from "../components/EarningsContainer";
import BigCircleChartContainer from "../components/BigCircleChartContainer";
import MapPinContainer from "../components/MapPinContainer";
import ChicagoContainer from "../components/ChicagoContainer";
import "./WorldHexagonMap.css";

const WorldHexagonMap = () => {
  return (
    <div className="world-hexagon-map">
      <LSizeContainer />
      <Header
        iconImageUrl="../icon.svg"
        profileImageUrl="../profile.svg"
        optionImageUrl="../option.svg"
        logoImageUrl="../logo1.svg"
      />
      <div className="footer1">
        <div className="bg1" />
        <b className="description">Orion data visualisation</b>
        <b className="b1">2019</b>
      </div>
      <EarningsContainer iconImageUrl="../icon5.svg" />
      <BigCircleChartContainer
        prop="27"
        progress="../progress.svg"
        amount="92,980"
        detail="Active users"
        propLeft="60px"
        propLeft1="42px"
      />
      <BigCircleChartContainer
        prop="67"
        progress="../progress1.svg"
        amount="22,652"
        detail="New users"
        propLeft="330px"
        propLeft1="0.97px"
      />
      <img className="hex-map-icon" alt="" src="../hex-map.svg" />
      <MapPinContainer
        indicator="../indicator.svg"
        title="Chicago"
        amount="98,320,300"
        propTop="calc(50% - 250px)"
        propRight="1147px"
      />
      <MapPinContainer
        indicator="../indicator1.svg"
        title="Manaus"
        amount="12,320,300"
        propTop="calc(50% - 3px)"
        propRight="1024px"
      />
      <MapPinContainer
        indicator="../indicator2.svg"
        title="Berlin"
        amount="76,541,106"
        propTop="calc(50% - 332px)"
        propRight="692px"
      />
      <MapPinContainer
        indicator="../indicator3.svg"
        title="Giza"
        amount="10,547,980"
        propTop="calc(50% - 116px)"
        propRight="605px"
      />
      <MapPinContainer
        indicator="../indicator4.svg"
        title="Shanghai"
        amount="239,570,110"
        propTop="calc(50% - 184px)"
        propRight="224px"
      />
      <MapPinContainer
        indicator="../indicator5.svg"
        title="Queensland"
        amount="6,097,321"
        propTop="calc(50% + 116px)"
        propRight="113px"
      />
      <div className="footer1">
        <div className="bg1" />
        <b className="description">Orion data visualisation</b>
        <b className="b1">2022</b>
      </div>
      <div className="amount7">2,431,340</div>
      <div className="title5">
        <div className="name7">All users</div>
        <div className="detail1">
          <b className="detail2">Detail</b>
          <img className="arow-icon" alt="" src="../arow.svg" />
        </div>
      </div>
      <div className="widget-l-size-global-stati">
        <div className="header">
          <div className="title6">Sales Figures</div>
          <div className="legend">
            <div className="shape" />
            <div className="marketing-sales">Sales</div>
          </div>
          <div className="legend">
            <div className="shape1" />
            <div className="marketing-sales">Users</div>
          </div>
          <div className="legend">
            <div className="shape2" />
            <div className="marketing-sales">Product</div>
          </div>
          <div className="legend">
            <div className="shape3" />
            <div className="marketing-sales">Team</div>
          </div>
        </div>
        <div className="graph4">
          <div className="chart">
            <div className="y-axis">
              <div className="k">1k</div>
              <div className="div">0</div>
              <div className="div1">200</div>
              <div className="div2">400</div>
              <div className="div3">600</div>
              <div className="div4">800</div>
            </div>
            <div className="x-axis">
              <div className="dec">
                <div className="name8">Dec</div>
                <img className="shape-icon" alt="" src="../shape.svg" />
              </div>
              <div className="nov">
                <div className="name9">Nov</div>
                <img className="shape-icon" alt="" src="../shape1.svg" />
              </div>
              <div className="oct">
                <div className="name10">Oct</div>
                <img className="shape-icon2" alt="" src="../shape2.svg" />
              </div>
              <div className="sep">
                <div className="name11">Sep</div>
                <img className="shape-icon3" alt="" src="../shape3.svg" />
              </div>
              <div className="aug">
                <div className="name12">Aug</div>
                <img className="shape-icon" alt="" src="../shape4.svg" />
              </div>
              <div className="jul">
                <div className="name13">Jul</div>
                <img className="shape-icon5" alt="" src="../shape5.svg" />
              </div>
              <div className="jun">
                <div className="name14">Jun</div>
                <img className="shape-icon6" alt="" src="../shape6.svg" />
              </div>
              <div className="may">
                <div className="name15">May</div>
                <img className="shape-icon7" alt="" src="../shape7.svg" />
              </div>
              <div className="apr">
                <div className="name16">Apr</div>
                <img className="shape-icon8" alt="" src="../shape8.svg" />
              </div>
              <div className="mar">
                <div className="name17">Mar</div>
                <img className="shape-icon9" alt="" src="../shape9.svg" />
              </div>
              <div className="feb">
                <div className="name18">Feb</div>
                <img className="shape-icon10" alt="" src="../shape10.svg" />
              </div>
              <div className="jan">
                <div className="name18">Jan</div>
                <img className="shape-icon11" alt="" src="../shape11.svg" />
              </div>
            </div>
          </div>
          <ChicagoContainer />
        </div>
      </div>
    </div>
  );
};

export default WorldHexagonMap;
