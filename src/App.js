import './App.css'
import Code from './component/Code'
import Question from './component/Question.js'
// const container = styled.div``

function App() {
  return (
    <div className='app'>
      <div className='app_heading'>Online IDE</div>
      <div className='app_body'>
        <Question />
        <Code />
      </div>
    </div>
  )
}

export default App
