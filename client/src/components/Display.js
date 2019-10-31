import React from "react";

const Display = props => {
  return (
    <div>
      <p>Balls: {props.count.balls}</p>
      <p data-testid="strike">Strikes: {props.count.strikes}</p>
    </div>
  )
}

export default Display;