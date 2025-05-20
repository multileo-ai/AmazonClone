import React from 'react'
import './Box4.css'


const name = [
    {
      "productName": "Smart LED Bulb",
      "image": "https://m.media-amazon.com/images/I/61zuKtrnxZL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Portable Blender",
      "image": "https://m.media-amazon.com/images/I/617RX9sUnUL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Noise Cancelling Headphones",
      "image": "https://m.media-amazon.com/images/I/51k0ihjuRyL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Electric Kettle",
      "image": "https://m.media-amazon.com/images/I/71WBIhxYlZL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Bluetooth Tracker",
      "image": "https://m.media-amazon.com/images/I/8139T8YbdkL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Foldable Laptop Stand",
      "image": "https://m.media-amazon.com/images/I/51o1Z2jERIL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Rechargeable Hand Warmer",
      "image": "https://m.media-amazon.com/images/I/618-45t0P5L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "USB Desk Fan",
      "image": "https://m.media-amazon.com/images/I/518Rt7wLhXL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Waterproof Backpack",
      "image": "https://m.media-amazon.com/images/I/71I5REkmEyL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Wireless Mouse",
      "image": "https://m.media-amazon.com/images/I/616jdfyhw8L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Mini Projector",
      "image": "https://m.media-amazon.com/images/I/612lOJ8eUqL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Magnetic Phone Holder",
      "image": "https://m.media-amazon.com/images/I/71AuOwlDeaL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Fitness Smartwatch",
      "image": "https://m.media-amazon.com/images/I/81NW6KAHS2L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      "productName": "Adjustable Phone Tripod",
      "image": "https://m.media-amazon.com/images/I/618g6oBXGCL._AC_SY175_.jpg"
    },
    {
      "productName": "Ergonomic Office Chair",
      "image": "https://m.media-amazon.com/images/I/7145BVorn3S._AC_SY200_.jpg"
    },
    {
      "productName": "Compact Tool Kit",
      "image": "https://m.media-amazon.com/images/I/41moKL3us0L._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      "productName": "Desktop Organizer",
      "image": "https://m.media-amazon.com/images/I/71-WfaMPocL._AC_SR230,210_CB1169409_QL70_.jpg"
    },
    {
      "productName": "Air Purifier",
      "image": "https://m.media-amazon.com/images/I/71m8EO4VzfL._AC_SY200_.jpg"
    },
    {
      "productName": "Travel Mug",
      "image": "https://m.media-amazon.com/images/I/71UEM43FlwL._AC_SY200_.jpg"
    },
    {
      "productName": "Cordless Vacuum Cleaner",
      "image": "https://m.media-amazon.com/images/I/81DAHk4AK2L._AC_SY200_.jpg"
    }
  ]

const Box4 = () => {
  return (
    <div>
        <div className='Compo5'>
            <h1 className='title'>Continue shopping for</h1>
            <img className='mainImg' src="https://m.media-amazon.com/images/I/41kK3roaPGL._AC_SY175_.jpg" alt="" />   
            <p>Boult K10 Truly Wireless Bluetooth in Ear Earbuds with 50H Playtime, 4 Mic Clear Calling, 45ms Low…</p>
            <p className="price"><h4>₹699</h4> M.R.P <strike>₹1,499.00</strike></p>

            <div className="wrap">
                <div>
                    <img src="https://m.media-amazon.com/images/I/41kK3roaPGL._AC_SY175_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/41kK3roaPGL._AC_SY175_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/41kK3roaPGL._AC_SY175_.jpg" alt="" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/41kK3roaPGL._AC_SY175_.jpg" alt="" />
                </div>
            </div>
            <p className='see'>See more</p>
        </div>
    </div>
  )
}

export default Box4
