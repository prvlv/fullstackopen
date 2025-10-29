const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content data={[[part1, exercises1], [part2, exercises2], [part3, exercises3]]} />
      <Total data={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  const arr = props.data
  return (
    <>
      <Part part={arr[0][0]} exercises={arr[0][1]}/>
      <Part part={arr[1][0]} exercises={arr[1][1]}/>
      <Part part={arr[2][0]} exercises={arr[2][1]}/>
    </>
  )
}

const Total = (props) => {
  const arr = props.data
  return (
    <>
      <p>Number of exercises {arr[0] + arr[1] + arr[2]}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

export default App