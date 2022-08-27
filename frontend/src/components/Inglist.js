import React from "react"
import Ing from "./Ing"

const Inglist = ({ inglist }) => {
  return (
    <div>
      {inglist.map((ing) => {
        return <Ing ing={ing} />
      })}
    </div>
  )
}

export default Inglist
