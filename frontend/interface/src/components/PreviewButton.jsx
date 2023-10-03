import React from 'react'

export default function PreviewButton() {
  return (
    <div className='preview-buttons'>
        <button className='d-block my-2 btn btn-custom btn-primary'>Btn Primary</button>
        <button className='d-block my-2 btn btn-custom btn-secondary'>Btn Secondary</button>
        <div><a href="g#" className='link-primary'>Link Primary</a></div>
        <div><a href="g#" className='link-secondary'>Link Secondary</a></div>
        <div><a href="g#" className='link-tertiary'>Link Tertiary</a></div>
        <div><a href="g#" className='link-inline'>Link Inline</a></div>
        <div><a href="g#" className='link-pd-banner'>Link Pd Banner</a></div>
    </div>
  )
}
