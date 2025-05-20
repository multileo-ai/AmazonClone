import React from 'react'
import './Box1.css'
import InnerBox1 from './InnerBox1'

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


console.log(name[1])






const Box1 = (prop) => {
  console.log(prop.num)
  return (
    <div>
        <div className='Compo4'>
              <h1>{prop.t}</h1>
              <div className="wrap">
                <div className='b1'>
                  
                  <InnerBox1 n={name[prop.num.n1].productName} p={name[prop.num.n1].image}/>
                  <InnerBox1 n={name[prop.num.n2].productName} p={name[prop.num.n2].image}/>
                </div>
                <div className='b1'>
                  <InnerBox1 n={name[prop.num.n3].productName} p={name[prop.num.n3].image}/>
                  <InnerBox1 n={name[prop.num.n4].productName} p={name[prop.num.n4].image}/>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Box1
