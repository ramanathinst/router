import React, { useId } from 'react'
import {useParams} from 'react-router-dom'


export default function User() {

    const { userid } = useParams()
  return (
    <div>user id: {userid} </div>
  )
}
