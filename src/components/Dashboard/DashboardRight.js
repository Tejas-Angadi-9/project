import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
import vector from './images/box-icons/Vector.png'
import label from './images/box-icons/transaction.png'
import like from './images/box-icons/like.png'
import users from './images/box-icons/users.png'
import arrow from './images/box-icons/arrow.png'
import downarrow from './images/box-icons/downarrow.png'
import piechart from './images/box-icons/Pie Chart.png'

const DashboardRight = () => {
  return (
    <div className='dashBoard-right'>
      <nav className='navbar'>
        <h2>Dashboard</h2>

        <div className='search-container'>
          <input type="text" placeholder='Search...' />
          {/* Bell icon and profile icon */}
          <span className='search-icon'>
            <AiOutlineSearch />
          </span>
        </div>
      </nav>

      {/* four boxes */}

      <div className='four-boxes'>
        <div className='each-box' id='box1'>
          <img src={vector} alt="" width={"25px"} height={"25px"} />
          <div>
            <p>Total Revenues</p>
            <h2>$2,129,430</h2>
          </div>
        </div>
        <div className='each-box' id='box2'>
          <img src={label} alt="" width={"25px"} height={"25px"} />
          <div>
            <p>Total Transactions</p>
            <h2>1,520</h2>
          </div>
        </div>
        <div className='each-box' id='box3'>
          <img src={like} alt="" width={"25px"} height={"25px"} />
          <div>
            <p>Total Likes</p>
            <h2>9,721</h2>
          </div>
        </div>
        <div className='each-box' id='box4'>
          <img src={users} alt="" width={"35px"} height={"25px"} />
          <div>
            <p>Total Users</p>
            <h2>892</h2>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="activity-container">
        <div className="activity-navbar">
          <div className="activity-header">
            <h3>Activities</h3>
            <p>May - June 2021 </p>
          </div>

          <div className='activity-colors'>
            <div id='pink-color' className='circle'></div>
            <p>Guest</p>
            <div id='green-color' className='circle'></div>
            <p>User</p>
          </div>
        </div>
      </div>

      <div className='bottom-section'>

        {/* top products container */}
        <div className="bottom-container">
          <div className="top-products-container">

            <div className="header">
              <h3>Top products</h3>
              <div className='p-container'>
                <p>May - June 2021 <img src={downarrow} alt="" className='arrows' /></p>
              </div>
            </div>

            <div className="details">
              <img src={piechart} alt="" />

              <div className="three-details">
                <div className="inner-containers">
                  <div className='list'>
                    <div className='small-circle' id='green-dot'></div>

                    <div className='text'>
                      <h4>Basic Tees</h4>
                      <p>55%</p>
                    </div>
                  </div>
                </div>
                <div className="inner-containers">
                  <div className='list'>
                    <div className='small-circle' id='yellow-dot'></div>
                    <div className='text'>
                      <h4>Custom Short Pants</h4>
                      <p>31%</p>
                    </div>
                  </div>
                </div>
                <div className="inner-containers">
                  <div className='list'>
                    <div className='small-circle' id='pink-dot'></div>
                    <div className='text'>
                      <h4>Super Hoodies</h4>
                      <p>14%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* today's Schedule container */}
          <div className="schedule-container">

            <div className="activity-header cont">
              <h3>Today's Schedule</h3>
              <p>See more <img src={arrow} alt="" className='arrows' /></p>
            </div>

            <div className="remaining-container">
              <div className='schedule-details' id='green-bar'>
                <h5>Meeting with suppliers from Kuta Bali</h5>
                <p>14.00-15.00</p>
                <p>at Sunset Road, Kuta, Bali</p>
              </div>

              <div className='schedule-details' id='violet-bar'>
                <h5>Check operation at Giga Factory 1</h5>
                <p>18:00 - 20:00</p>
                <p>at Central Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardRight