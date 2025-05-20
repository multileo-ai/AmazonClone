import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Box4 from './components/Box4'
import FooterBar from './components/FooterBar'

function randomize() {
  var n1=Math.floor(Math.random() * 20)
  var n2=Math.floor(Math.random() * 20)
  var n3=Math.floor(Math.random() * 20)
  var n4=Math.floor(Math.random() * 20)

  return {n1, n2, n3, n4} 
}

function randomize2() {
  var n1=Math.floor(Math.random() * 20)
  var n2=Math.floor(Math.random() * 20)
  var n3=Math.floor(Math.random() * 20)
  var n4=Math.floor(Math.random() * 20)
  var n5=Math.floor(Math.random() * 20)
  var n6=Math.floor(Math.random() * 20)
  var n7=Math.floor(Math.random() * 20)

  return {n1, n2, n3, n4, n5, n6, n7} 
}


const App = () => {
  return (
    <div>
      
      <Navbar />
      <div className="row1">
        <Box1 t={"Essential Home Gear"} num={randomize()}/>
        <Box1 t={"Tech & Devices"} num={randomize()}/>
        <Box1 t={"Study & Stationery"} num={randomize()}/>
        <Box2 />
      </div>

      <div className="row2">
        <Box1 t={"Essential Home Gear"} num={randomize()}/>
        <Box1 t={"Tech & Devices"} num={randomize()}/>
        <Box1 t={"Study & Stationery"} num={randomize()}/>
        <Box1 t={"Outdoor & Events"} num={randomize()}/>
      </div>

      <div className="row3">
        <Box3 num={randomize2()}/>
      </div>

      <div className="row4">
        <Box3 num={randomize2()}/>
      </div>

      <div className="row5">
        <Box4 />
        <Box4 />
        <Box4 />
        <Box4 />
      </div>

      <div className="row6">
        <Box3 num={randomize2()}/>
      </div>

      <div className="row7">
        <Box3 num={randomize2()}/>
      </div>

      <div className="row5">
        <Box4 />
        <Box4 />
        <Box4 />
        <Box4 />
      </div>

      <div className="row7">
        <Box3 num={randomize2()}/>
      </div>

      <div className="row2">
        <Box1 t={"Essential Home Gear"} num={randomize()}/>
        <Box1 t={"Tech & Devices"} num={randomize()}/>
        <Box1 t={"Study & Stationery"} num={randomize()}/>
        <Box1 t={"Outdoor & Events"} num={randomize()}/>
      </div>

      <div className="rowend">
        <FooterBar />
      </div>

    </div>
  )
}

export default App
