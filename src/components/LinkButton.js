import React from 'react'

const linkButton = ({ url, title }) => {
  return (
    <>
      <a href={url} className='  text-btn' target='blank'>
        {title} <span aria-hidden='true'>&rarr;</span>
      </a>
    </>
  )
}

export default linkButton
