import React from 'react'
import './styles.css'
import moduleStyles from './Modulestyles.module.css'

const StylingsComp = () => {
    // Inline css
    // Internal css
    // External css
    // module css

    const internalstyle = {
        headstyle:{
            backgroundColor:'blue',
            marginTop:'2px',
            color:'red'
        },
        paraStyle:{}
    }

  return (
    <>
        <h2>StylingsComp</h2>
        <h3 style={{backgroundColor:'green', border:'1px solid red'}}>This is Inline Stylings</h3>
        <h3 style={internalstyle.headstyle}>This is Internal Stylings</h3>
        <h3 className='exthead'>This is External Styles</h3>
        <h3 className={moduleStyles.modulehead}>This is Module Stylings</h3>
        <button className='btn btn-primary'>Bootstrap Working</button>
    </>
  )
}

export default StylingsComp