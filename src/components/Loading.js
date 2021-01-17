import React, { useState, useEffect } from 'react'

const Loading = ({ text = "Loading"}) => {
  const [ content, setContent ] = useState(text)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setContent(content => {
        return content === `${text}...`
        ? text
        : `${content}.`
      })
    }, 300)

    return () => window.clearInterval(interval)
  })

  return (
    <div style={{ margin: '0 auto', width: '90%'}}>
      <p style={{ textAlign: 'center'}}>
        {content}
      </p>
    </div>
  )
}

export default Loading