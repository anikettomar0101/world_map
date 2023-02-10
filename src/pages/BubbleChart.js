import InvestmentContainer from "../components/InvestmentContainer";
import Header from "../components/Header";
import MSizeContainer from "../components/MSizeContainer";
import "./BubbleChart.css";

const BubbleChart = () => {
  return (
    <div className="bubble-chart">
      <div className="background" />
      <InvestmentContainer />
      <div className="title">Design faster</div>
      <img className="bubble-icon" alt="" src="../bubble.svg" />
      <img className="bubble-icon1" alt="" src="../bubble1.svg" />
      <img className="bubble-icon2" alt="" src="../bubble2.svg" />
      <img className="bubble-icon3" alt="" src="../bubble3.svg" />
      <img className="bubble-icon4" alt="" src="../bubble4.svg" />
      <b className="timeline">Timeline</b>
      <div className="timeline1">
        <div className="background-element" />
        <div className="date-range-picker">
          <div className="time-period">
            <div className="period">1W</div>
          </div>
          <div className="time-period">
            <div className="period">1M</div>
          </div>
          <div className="time-period2">
            <div className="hover" />
            <b className="period2">3M</b>
          </div>
          <div className="time-period">
            <div className="period">1Y</div>
          </div>
          <div className="time-period">
            <div className="period">ALL</div>
          </div>
        </div>
      </div>
      <Header
        iconImageUrl="../icon.svg"
        profileImageUrl="../profile.svg"
        optionImageUrl="../option.svg"
        logoImageUrl="../logo.svg"
      />
      <div className="footer">
        <div className="bg" />
        <b className="orion-data-visualisation">Orion data visualisation</b>
        <b className="b">2022</b>
      </div>
      <div className="informer-trend-goods">
        <div className="value">204</div>
        <b className="title1">Trend goods</b>
        <img className="icon" alt="" src="../icon1.svg" />
      </div>
      <div className="informer-trend-goods1">
        <div className="value1">65,540</div>
        <b className="title2">Shopping views</b>
        <img className="icon" alt="" src="../icon2.svg" />
      </div>
      <div className="informer-trend-goods2">
        <div className="value2">324</div>
        <b className="title3">Store dynamics</b>
        <img className="icon" alt="" src="../icon3.svg" />
      </div>
      <img className="panel-group-icon" alt="" src="../panel-group.svg" />
      <div className="widget-m-size-combined-cir">
        <div className="graph">
          <img
            className="chart-double-big-circle-char"
            alt=""
            src="../chart--double-big-circle-chart.svg"
          />
          <div className="info">
            <div className="title4">
              <div className="name">Total earning</div>
            </div>
            <div className="value3">
              <div className="amount">$12,875</div>
              <div className="indicator">
                <img className="arrow-up-icon" alt="" src="../arrow-up.svg" />
                <div className="percent">2%</div>
              </div>
            </div>
            <div className="detail">Compared to $21,504 last year</div>
          </div>
        </div>
        <div className="table">
          <div className="row">
            <div className="name1">Presentation</div>
            <div className="amount1">862</div>
            <div className="graph1">
              <div className="column" />
              <div className="column1" />
              <div className="column2" />
              <div className="column3" />
              <img className="chart-icon" alt="" src="../chart.svg" />
            </div>
          </div>
          <div className="row">
            <div className="name1">Development</div>
            <div className="amount1">753</div>
            <div className="graph1">
              <div className="column" />
              <div className="column1" />
              <div className="column2" />
              <div className="column3" />
              <img className="chart-icon1" alt="" src="../chart1.svg" />
            </div>
          </div>
          <div className="row">
            <div className="name1">Research</div>
            <div className="amount1">553</div>
            <div className="graph1">
              <div className="column" />
              <div className="column1" />
              <div className="column2" />
              <div className="column3" />
              <img className="chart-icon2" alt="" src="../chart2.svg" />
            </div>
          </div>
        </div>
      </div>
      <MSizeContainer />
      <div className="table-indicator-table">
        <div className="summary">
          <div className="summary">
            <div className="name4">Travel</div>
            <div className="amount4">760</div>
            <div className="summary1">2,540</div>
          </div>
          <div className="status">
            <img className="arrow-up-icon" alt="" src="../arrow-up3.svg" />
            <img className="arrow-up-icon2" alt="" src="../arrow-up4.svg" />
          </div>
        </div>
        <div className="summary">
          <div className="summary">
            <div className="name4">Presentation</div>
            <div className="amount4">650</div>
            <div className="summary1">2,304</div>
          </div>
          <div className="status">
            <img className="arrow-up-icon2" alt="" src="../arrow-up3.svg" />
            <img className="arrow-up-icon" alt="" src="../arrow-up4.svg" />
          </div>
        </div>
        <div className="summary">
          <div className="summary">
            <div className="name4">Business</div>
            <div className="amount4">612</div>
            <div className="summary1">2,140</div>
          </div>
          <div className="status">
            <img className="arrow-up-icon" alt="" src="../arrow-up3.svg" />
            <img className="arrow-up-icon2" alt="" src="../arrow-up4.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleChart;
