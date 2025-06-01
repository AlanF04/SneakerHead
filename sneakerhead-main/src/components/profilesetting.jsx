import React from 'react'
import img1 from '../components/banner.png';
import myImage4 from '../components/p4.png'
import './profilesetting.css'

const Profilesetting = (props) => {
  return (
    <div className="profilesetting-container">
      <div className="profilesetting-profilesetting">
        <span className="profilesetting-text">
          <span>Full Name</span>
        </span>
        <span className="profilesetting-text02">
          <span>Gender</span>
        </span>
        <span className="profilesetting-text04">
          <span>Language</span>
        </span>
        <span className="profilesetting-text06">
          <span>Nick Name</span>
        </span>
        <span className="profilesetting-text08">
          <span>Country</span>
        </span>
        <span className="profilesetting-text10">
          <span>Time Zone</span>
        </span>
        <img
          src={img1}
          alt="Rectangle6691192"
          className="profilesetting-rectangle6691"
        />
        <img
          src={myImage4}
          alt="Ellipse11193"
          className="profilesetting-ellipse11"
        />
        <div className="profilesetting-group239179">
          <span className="profilesetting-text12">
            <span>sneakerlover375</span>
          </span>
          <span className="profilesetting-text14">
            <span>abc@gmail.com</span>
          </span>
        </div>
        <div className="profilesetting-group239180">
          <span className="profilesetting-text16">
            <span>abc@gmail.com</span>
          </span>
          <span className="profilesetting-text18">
            <span>1 month ago</span>
          </span>
        </div>
        <div className="profilesetting-group47736">
          <span className="profilesetting-text20">
            <span><button style={{width:'50px',height:'30px'}}>edit</button></span>
          </span>
        </div>
        <div className="profilesetting-group239181">
          <span className="profilesetting-text22">
            <span><button>+Add Email Address</button></span>
          </span>
        </div>
        <div className="profilesetting-vuesaxlineararrowdown">
          <div className="profilesetting-vuesaxlineararrowdown1">
            <div className="profilesetting-arrowdown">
            </div>
          </div>
        </div>
        <span className="profilesetting-text24">
          <span>alan</span>
        </span>
        <span className="profilesetting-text26">
          <span>Male</span>
        </span>
        <span className="profilesetting-text28">
          <span>English</span>
        </span>
        <span className="profilesetting-text30">
          <span>sneaker36</span>
        </span>
        <span className="profilesetting-text32">
          <span>India</span>
        </span>
        <span className="profilesetting-text34">
          <span>indian timezone</span>
        </span>
        <div className="profilesetting-vuesaxlineararrowdown2">
          <div className="profilesetting-vuesaxlineararrowdown3">
            <div className="profilesetting-arrowdown1">
            </div>
          </div>
        </div>
        <div className="profilesetting-vuesaxlineararrowdown4">
          <div className="profilesetting-vuesaxlineararrowdown5">
            <div className="profilesetting-arrowdown2">
            </div>
          </div>
        </div>
        <div className="profilesetting-vuesaxlineararrowdown6">
          <div className="profilesetting-vuesaxlineararrowdown7">
            <div className="profilesetting-arrowdown3">
            </div>
          </div>
        </div>
        <span className="profilesetting-text36">
          <span>My email Address</span>
        </span>
        <img
          src={myImage4}
          alt="Ellipse16971123"
          className="profilesetting-ellipse1697"
        />
        <div className="profilesetting-vuesaxboldsms">
          <div className="profilesetting-vuesaxboldsms1">
            <div className="profilesetting-sms">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profilesetting
