import React from "react"

const Catg = () => {
  const data = [
    {
      cateName: "",
    },
    {
      cateName: "",
    },
    {
      cateName: "",
    },
    {
      cateName: "",
    },
    {
      cateName: "",
    },
    {
      cateName: "",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1> </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button></button>
        </div>
      </div>
    </>
  )
}

export default Catg
