import React from 'react'

async function getData(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

export default function page({ params}) {
    const data = getData(params.id)
    console.log(data)
  return (
    <div>page {params.id}</div>
  )
}
