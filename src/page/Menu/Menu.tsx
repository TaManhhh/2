import React, { useState } from 'react'
import "./Menu.css"
import { AiOutlineHeart } from 'react-icons/ai';

const items = [
  {
    id: 1,
    name: "Burger",
    image: "https://dr.savee-cdn.com/things/thumbnails/6/1/17383586fb277c7c4a3f09.webp",
    description: "A classic burger with lettuce",
  },
  {
    id: 2,
    name: "Pizza",
    image: "https://dr.savee-cdn.com/things/5/9/763cbb704f5b7a7c6638e6.webp",
    description: "A classic burger with lettuce"
  },
  {
    id: 3,
    name: "Taco",
    image: "https://dr.savee-cdn.com/things/6/2/7b8e306b353a86fc9e6987.webp",
    description: "A spicy taco with ground beef",
  },
];
const Menu = () => {
    const [hoverHeart,setHoverHeart] = useState(false)
    const handleHeart =()=>{
        setHoverHeart(!hoverHeart);
    }

  return (
    <div>
      <div className='header-menu'>
        Wild Restaurant Menu
      </div>
      {items.map((items)=>(
         <div className='menu'>
         <div className='item-menu'>
             <img className='img-menu' src={items.image} alt=''/>
             <div className='title-menu'>
                 <p style={{fontWeight:700 , fontSize:20}}>{items.name}</p>
                 <p style={{opacity:0.8}}>{items.description}</p>
             </div>
             <div className='price-menu'>
                12 URE
             </div>
             <div onClick={handleHeart}
              className='heart-menu'>
                 {hoverHeart?<AiOutlineHeart size={20} className='heart'/> :<AiOutlineHeart size={20}/>}
              </div>
              
         </div>
       </div>
      ))}


      
    </div>
  )
}

export default Menu
