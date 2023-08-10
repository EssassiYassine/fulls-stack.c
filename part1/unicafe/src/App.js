
import { useState } from 'react'



const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, bad: 0,neutral:0
  })

  const handlebadtClick = () =>
  {setClicks({ ...clicks, bad: clicks.bad + 1 })
    console.log(clicks)}

const handleGoodClick = () =>
  setClicks({ ...clicks, good: clicks.good + 1 })

const handleneutralClick = () =>
  setClicks({ ...clicks, neutral: clicks.neutral + 1 })



  const sum = Object.values(clicks).reduce((e,sum) => e+sum,0);



  return (
    <div>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleneutralClick}>neutral</button>
      <button onClick={handlebadtClick}>bad</button>
     <header>Stastistics</header>
    <p>bad :{clicks.bad}</p>
    <p>neutral :{clicks.neutral}</p>
    <p>good :{clicks.good}</p>
    <p>all : {sum}</p>
    <p>avarage : {(clicks.good-clicks.bad)/sum}</p>
    <p>positive : {100*(clicks.good)/sum}% </p>


    </div>
  )
}

export default App;