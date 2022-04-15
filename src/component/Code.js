import React, { useState } from 'react'
import './Code.css'
import axios from 'axios'

function Code() {
  const [codeBody, setCodeBody] = useState('')
  const [inputParam, setInputParam] = useState('')
  const [progressVal, setProgressVal] = useState(0)
  const [output, setOutput] = useState('')
  const [compileStatus, setCompileStatus] = useState(false)
  const API_KEY = 'a49b5da6famsh32fc715af5cb33ap194e17jsnab161998789f'
  const API_HOST = 'judge0-ce.p.rapidapi.com'

  const handleCompile = async () => {
    setCompileStatus(true)

    let token
    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: 'false', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': API_HOST,
        'X-RapidAPI-Key': API_KEY,
      },
      data: JSON.stringify({
        language_id: 54,
        source_code: codeBody,
        stdin: inputParam,
      }),
    }

    await axios
      .request(options)
      .then((res) => {
        console.log(options.data.stdin)
        token = res.data.token
        console.log(res)
      })
      .catch((err) => {
        console.log('error ', err)
      })

    // console.log(codeBody)

    //view output
    const op2 = {
      method: 'GET',
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=false`,
      params: { fields: '*' },
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': API_HOST,
        'X-RapidAPI-Key': API_KEY,
      },
    }
    console.log(op2.url)
    await axios
      .request(op2)
      .then((res) => {
        if (res.data.status.description !== 'Accepted') {
          setOutput(res.data.status.description)

          console.log(res.data)
        } else {
          setProgressVal(100)
          setOutput(res.data.stdout.toString())
          console.log(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='code'>
      <div className='code_header'>
        <h3>language c++</h3>
      </div>

      <textarea
        placeholder='Your code here'
        className='code_body'
        onChange={(e) => setCodeBody(e.target.value)}
      ></textarea>

      <div className='code_btn'>
        <button className='code_button' onClick={() => handleCompile()}>
          Compile
        </button>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h4>Input</h4>
          <textarea
            className='code_input'
            onChange={(e) => setInputParam(e.target.value)}
          />
        </div>
      </div>

      {compileStatus && (
        <div className='code_progress'>
          <h4>Code compiling</h4>
          <progress
            className='code_progressbar'
            value={progressVal}
            max='100'
          ></progress>
        </div>
      )}

      <div className='code_output'>
        <h4>Output</h4>
        <textarea className='code_output_body' value={output}></textarea>
      </div>
    </div>
  )
}

export default Code
