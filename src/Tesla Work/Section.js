import React from "react";

function Section(props) {
  return (
    <section
      style={{ backgroundImage: `url(teslaimages/${props.backgroundImage})` }}
    >
      <div className="section">
        <h1>Model 3</h1>
        <p>Order Online for Touchless Delivery</p>
          <div className="anchor">
            <a href="">Custom Order</a>
            <a href="">Existing Order</a>
            {/* <img src="teslaimages.down-arrow.svg"></img> */}
          </div>
      </div>
    </section>
  );
}

export default Section;
