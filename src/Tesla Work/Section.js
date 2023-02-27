import React from "react";

function Section(props) {
  return (
    <section
      style={{ backgroundImage: `url(teslaimages/${props.backgroundImage})` }}>
      <div className="section">
        <h1>{props.name}</h1>
        <p>{props.para}</p>
          <div className="anchor">
             {props.rightbtn && <a href="">{props.rightbtn}</a>}
            <a href="">{props.leftbtn}</a>
          </div>
      </div>
    </section>
  );
}

export default Section;
