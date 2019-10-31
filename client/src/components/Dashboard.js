import React from "react";

const Dashboard = props => {
  const resetCount = () => {
    props.updateCount({
      balls: 0,
      strikes:0
    })
  }

  const addStrike = () => {
    if (props.count.strikes < 2) {
      props.updateCount({...props.count, strikes: props.count.strikes + 1})
    } else {
      resetCount()
    }
  }

  const addBall = () => {
    if (props.count.balls < 3) {
      props.updateCount({...props.count, balls: props.count.balls + 1})
    } else {
      resetCount()
    }
  }

  const addFoul = () => {
    if (props.count.strikes < 2) {
      props.updateCount({...props.count, strikes: props.count.strikes + 1})
    }
  }

  return (
    <div>
      <button onClick={() => addStrike()}>Strike</button>
      <button onClick={() => addBall()}>Ball</button>
      <button onClick={() => addFoul()}>Foul</button>
      <button onClick={() => resetCount()}>Hit</button>
    </div>
  )
}

export default Dashboard;