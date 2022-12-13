import React from "react"

const Categories = () => {
  const data = [
    {
      cateName: "Pans",
    },
    {
      cateName: "Pots",
    },
    {
      cateName: "Cutleries",
    },
    {
      cateName: "Cookware Set",
    },
    {
      cateName: "Dinnerware Set",
    },
    {
      cateName: "Toasters",
    },
    {
      cateName: "Cutleries",
    },
    {
      cateName: "Kitchen Tools",
    },
    {
      cateName: "Trays",
    },
    {
      cateName: "Jugs",
    },
    {
      cateName: "Tablewares",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
