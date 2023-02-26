import React from 'react'

function Section(props) {
  return (
    <section style={{backgroundImage:`url(teslaimages/${props.backgroundImage})`}}>
      <div className='section'>
        {/* <h1>Model 3</h1> */}
        {/* <p></p> */}
      </div>

    </section>
  )
}

export default Section