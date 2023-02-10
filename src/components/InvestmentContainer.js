import "./InvestmentContainer.css";

const InvestmentContainer = () => {
  return (
    <div className="big-widget-bubble-chart">
      <img className="bg-lines-icon" alt="" src="../bg-lines.svg" />
      <img className="bg-lines-icon1" alt="" src="../bg-lines1.svg" />
      <img className="bubble-chart-icon" alt="" src="../bubble-chart.svg" />
      <div className="investments">
        <div className="time">3 month</div>
        <div className="tittle">Investments</div>
        <div className="value4">$76,644</div>
      </div>
      <div className="design">
        <div className="time1">3 month</div>
        <div className="value5">$32,982</div>
        <div className="title9">Design</div>
      </div>
      <div className="finance">
        <div className="value6">
          <span> $</span>
          <span className="span">23,657</span>
        </div>
        <div className="title10">Finance</div>
      </div>
      <div className="business">
        <div className="value7">$21,987</div>
        <div className="title11">Business</div>
      </div>
      <div className="development">
        <div className="value8">$31,657</div>
        <div className="title12">Development</div>
      </div>
    </div>
  );
};

export default InvestmentContainer;
