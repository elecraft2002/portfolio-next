import React from 'react'
import { IHome } from './Homepage'

export default function Form(props:IHome) {
    console.log(props.settings?.data)
  return (
    <div>Form</div>
  )
}
