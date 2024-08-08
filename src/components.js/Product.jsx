import React from 'react'

export const Product = ({imgUrl, name, usage, description}) => {
  return (
    <div className='product-card'>
        <div className='product-img'>
            <img src={imgUrl} alt="" />
        </div>
        <div className='produst-description'>
            <div className='product-name'>{name}</div>
            <div className='product-description'>{description}</div>
            <div className='product-usage'><h3>Хэрэглэх заавар:</h3>{usage}</div>
        </div>
    </div>
  )
}
