import { useState } from "react";
// style
import "../styles/Pricing.scss";
// components
import Slider from "./Slider";
import Switch from "./Switch";

// interfaces
interface dataObject {
  pageviews: string;
  price: string;
}
interface IPricingProps {
  data: Array<dataObject>;
  yearlyDiscount: number;
}

const Pricing = ({ data, yearlyDiscount }: IPricingProps) => {
  const [period, setPeriod] = useState("monthly");
  const [pageviews, setPageviews] = useState(Math.floor(data.length / 2));
  // set sliderData based on input data
  const sliderData = data.map((item) => {
    return item.pageviews;
  });
  // toggle period between monthly and yearly
  const togglePeriod = () => {
    if (period === "monthly") setPeriod("yearly");
    else setPeriod("monthly");
  };
  // update pageviews state
  const updatePageviews = (p: number) => {
    setPageviews(p);
  };
  // set price based on period and discount
  const price: number =
    period === "monthly"
      ? Number(data[pageviews].price)
      : Number(data[pageviews].price) * (1 - yearlyDiscount / 100) * 12;

  return (
    <div className="pricing-component">
      <div className="pricing-component__header">
        <div className="pricing-component__pageviews">
          <span id="pageviews">{data[pageviews].pageviews}</span> Pageviews
        </div>
        <div className="pricing-component__price-range">
          <Slider updatePageviews={updatePageviews} data={sliderData} />
        </div>
        <div className="pricing-component__price">
          <span id="price">${price.toFixed(2)}</span>
          <span id="period">month</span>
        </div>
      </div>
      <div className="pricing-component__period-selection">
        <span style={{ opacity: period === "yearly" ? "0.5" : "inherit" }}>
          Monthly Billing
        </span>
        <span className="pricing-component__toggle">
          <Switch
            togglePeriod={togglePeriod}
            checked={period === "monthly" ? false : true}
          />
        </span>
        <span style={{ opacity: period === "monthly" ? "0.5" : "inherit" }}>
          Yearly Billing
        </span>
        <div
          className="pricing-component__yearly-discount"
          style={{ opacity: period === "monthly" ? "0.5" : "inherit" }}
        >
          -{yearlyDiscount}%<span className="hidden-mobile"> discount</span>
        </div>
      </div>
      <hr className="pricing-component__separator" />
      <div className="pricing-component__footer">
        <ul className="pricing-component__perks">
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button className="pricing-component__button">Start my trial</button>
      </div>
    </div>
  );
};

export default Pricing;
