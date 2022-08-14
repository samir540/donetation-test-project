import React from 'react'

function BasePartner({partner}) {
  return (
    <div className='base-partner'>
<img src={partner.image} alt="" />
    </div>
  )
}

export default BasePartner