import React from "react";
import Rotate from "react-reveal/Rotate"; 

function Section(props) {
  return (
    <section
      style={{ backgroundImage: `url(teslaimages/${props.backgroundImage})` }}>
       <div className="section">
       <Rotate top left><h1>{props.name}</h1>
        <p>{props.para}</p> </Rotate>
        <Rotate right top><div className="anchor">
          {props.rightbtn && <a href="">{props.rightbtn}</a>}
          <a href="">{props.leftbtn}</a>
        </div></Rotate>
        <div className="image">
          {props.icon && <img className="icon" src="teslaimages/down-arrow.svg"></img>}
          </div>
      </div>
    </section>
  );
}

export default Section;
