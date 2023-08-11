
import { useState } from 'react'


const Button = (props)=><button onClick={props.fn}>{props.text}</button>

const StatisticLine = (props)=>  <table><tfoot><tr><td>{props.text} {props.value}</td></tr></tfoot></table>


/*a table for each stat line, didnt really find a way to make a good table */

const Statistics = (props) => {

  let stats =<p>no feedback given </p>
  const clicks = props.clicks
  const sum = Object.values(clicks).reduce((e,sum) => e+sum,0);
  if(sum>0){
    stats =   
    <div>
      <header>Satistics</header>
    <StatisticLine text="good" value={clicks.good}></StatisticLine>
    <StatisticLine text="neutral" value={clicks.neutral}></StatisticLine>
    <StatisticLine text="bad" value={clicks.bad}></StatisticLine>
    <StatisticLine text="all" value={sum}></StatisticLine>
    <StatisticLine text="avarage" value={(clicks.good-clicks.bad)/sum}></StatisticLine>
    <StatisticLine text="positive" value={100*(clicks.good)/sum}></StatisticLine>
   </div>
  }
  return stats
}




const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, bad: 0,neutral:0
  })

  const handlebadtClick = () =>
  {setClicks({ ...clicks, bad: clicks.bad + 1 })}

const handleGoodClick = () =>
  setClicks({ ...clicks, good: clicks.good + 1 })

const handleneutralClick = () =>
  setClicks({ ...clicks, neutral: clicks.neutral + 1 })






  return (
    <div>
      <header>give feedback</header>

    <Button text ="good" fn = {handleGoodClick} />
    <Button text ="neutral" fn = {handleneutralClick} />
    <Button text ="bad" fn = {handlebadtClick} />
    <Statistics clicks= {clicks} />

    </div>
  )
}

export default App;