import React,{ useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>;

const Statistic = ({text, value}) => {
    return (
        <tr><td>{text}</td><td>{value}</td></tr>
    );
};

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad;

    return (
        <div>
            {

                <table>
                    <tbody>
                        <Statistic text='good' value={good} />
                        <Statistic text='neutral' value={neutral} />
                        <Statistic text='bad' value={bad} />
                        <Statistic text='all' value={total} />
                        <Statistic text='average' value={(good - bad) / total} />
                        <Statistic text='positive' value={`${(good / total) * 100} %`} />
                    </tbody>
                </table>

            }
        </div>
    );
};

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give Feedback</h1>
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
      
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )

  
  /*const course = {
    name: 'Half Stack application development',
    parts:[{
      topic: 'Fundamentals of React',
      exercises: 10
    },
    {
      topic: 'Using props to pass data',
      exercises: 7
    },
    {
      topic: 'State of a component',
      exercises: 14
    }
    ]
}
    return (
      <div>
        <Header course ={course.name} />
        <Content parts = {course.parts} />
        <Total parts={course.parts} />
      </div>
    )
    */
  }

const Header = props => {
  return (
    <div>
      <h1>
      {props.course}
      </h1>
    </div>
  )
}

const Content = props => {
  var topic=[]
  props.parts.forEach(element=>{   
      topic.push(element.topic+" - ")
    })  
  return (
    <div>
      <p>{topic} </p>
    </div>
  )
}
const Total = props => {
  var total=0
  props.parts.forEach(element => {
    console.log(element.exercises)
    total += element.exercises
  })
  return (
    <div>
      <p>
      Number of exercises {total}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))