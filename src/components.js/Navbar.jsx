import React from 'react'
import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"
import text from "./assets/text.png"
import cover from "./assets/cover photo.jpg"

export const Navbar = () => {
  return (<>
    <div className='Navbar'>
        <div className='left-bar'>
            <h2>Logo</h2>
        </div>
        <div className='center-bar'>
            <a href="#">Нүүр хуудас</a>
            <a href="#">Бүтээгдэхүүн</a>
            <a href="#">Бидний тухай</a>
            <a href="#">Бидэнтэй холбогдох</a>
        </div>
        <div className='right-bar'>
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={instagram} alt="" /></a>
        </div>
    </div>
    <img src={cover} alt="" className='cover'/>
    <div className='header-container'>
        <img src={text} alt="text" />
    </div>
    </>
  )
}
