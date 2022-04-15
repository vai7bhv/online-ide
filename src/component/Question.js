import React from 'react'
import './Question.css'

function Question() {
  return (
    <div className='question'>
      <div className='que_title'>
        <h1>Kadane’s Algorithm : Maximum Subarray Sum in an Array </h1>
      </div>
      <div className='que_info'></div>
      <div className='que_des'>
        <p>
          Given an integer array arr, find the contiguous subarray (containing
          at least one number) which has the largest sum and return its sum and
          print the subarray.
        </p>
      </div>
      <div className='que_testcase'>
        <h3>Example</h3>
        <div className='que_example'>
          <h3>Input</h3>
          Example 1: Input: arr = [-2,1,-3,4,-1,2,1,-5,4] Output: 6 Explanation:
          [4,-1,2,1] has the largest sum = 6.
          <p>[-2,1,-3,4,-1,2,1,-5,4]</p>
          <h3>Output</h3>
          <p> 6</p>
          <h3>Explanation</h3>
          <p>[4,-1,2,1] has the largest sum = 6.</p>
        </div>
      </div>
    </div>
  )
}

export default Question
