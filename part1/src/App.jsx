import Content from "./Components/Content.jsx";
import Total from "./Components/Total.jsx";
import Header from "./Components/Header.jsx";


const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header titulo = {course}/>
            <Content part1 = {part1} exercises1 = {exercises1} part2 = {part2} exercises2 = {exercises2} part3 = {part3} exercises3 = {exercises3}/>
            <Total total = {exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

export default App