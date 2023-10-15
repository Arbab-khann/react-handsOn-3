import React from "react";

function Display(props) {
  return (
    <div>
      <button onClick={props.value}>Back</button>
      {props.data.length ? (
        <div className="data-box">
          {props.data.map((item, index) => {
            return (
              <div key={index} className="data-box-item">
                <h1>name:{item.name}</h1>
                <h1>dept:{item.dept}</h1>
                <h1> rating:{item.rating}</h1>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Display;
