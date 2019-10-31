import React from "react";

const Display = props => {
  return (
    <div>
      <p>Ball: {props.count.balls}</p>
      <p>Strike: {props.count.strikes}</p>
    </div>
  )
}

export default Display;