import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    var data = [
        {name: "CSSDesignAwards", number:"48"},
        {name: "No-Code-Com", number:"2"},
        {name: "awwwards", number:"11"},
        {name: "CSSDesignAwards", number:"48"},
        {name: "No-Code-Com", number:"2"},
        {name: "awwwards", number:"11"},
    ]

    
  return (
    <div className='flex items-center mt-14'>
        {data.map((elem, index) => (
            <Stripe key={index} val={elem}/>
        ))}
    </div>
  )
}

export default Stripes