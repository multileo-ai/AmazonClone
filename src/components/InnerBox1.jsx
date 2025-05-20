import React from 'react'
import './InnerBox1.css'

const InnerBox1 = (elem) => {
  return (
    <div>
      <div className="inner">
          <img src={elem.p} alt="" />
          <p>{elem.n}</p>
      </div>
    </div>
  )
}

export default InnerBox1
