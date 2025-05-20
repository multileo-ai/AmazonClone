import React from 'react'
import './FooterBar.css'

const FooterBar = () => {
  return (
    <div>
      <div className="movetop">
        <p>Back to top</p>
      </div>

      <div className="footer">
        <div>
            <h1>Get to Know Us</h1>
            <div className="wrapper1">
                <p>About Amazon</p>
                <p>Careers</p>
                <p>Press Release</p>
                <p>Amazon Science</p>
            </div>
        </div>
        <div>
            <h1>Connect with Us</h1>
            <div className="wrapper1">
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
        <div>
            <h1>Make Money with Us</h1>
            <div className="wrapper2">
                <p>Sell on Amazon</p>
                <p>Sell under Amazon Accelerator</p>
                <p>Protect and Build Your Brand</p>
                <p>Amazon Global Selling</p>
                <p>Supply to Amazon</p>
                <p>Become an Affiliate</p>
                <p>Fulfilment by Amazon</p>
                <p>Advertise Your Products</p>
                <p>Amazon Pay on Merchants</p>
            </div>

        </div>
        <div>
            <h1>Let Us Help You</h1>
            <div className="wrapper2">
                <p>Your Account</p>
                <p>Return Centre</p>
                <p>Recalls and Product Safety Alerts</p>
                <p>100% Purchase Protectione</p>
                <p>Amazon App Download</p>
                <p>Help</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBar
