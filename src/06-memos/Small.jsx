/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
// import { memo } from "react"
import React from "react"


export const Small = React.memo(({ value }) => {
    console.log("sasdas");
  return (
    <small>{ value }</small>
  )
})
