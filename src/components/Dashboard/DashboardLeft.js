import React from 'react'
import Dashboard from './images/dashboard_icon.png'
import transaction from './images/transaction_icon.png'
import schedules from './images/schedule_icon.png'
import Users from './images/user_icon.png'
import settings from './images/setting_icon.png'


const DashboardLeft = () => {
  return (
    <div className='left-main-container'>
      <div className='dashBoard-left'>
        <div className="board-heading">Board.</div>
        <div className="board-contents">
          <ul>
            <li> <span><img src={Dashboard} alt="a" /></span> Dashboard</li>
            <li> <span><img src={transaction} alt="a" /></span> Transactions</li>
            <li> <span><img src={schedules} alt="a" /></span> Schedules</li>
            <li>  <span><img src={Users} alt="a" /></span> Users</li>
            <li> <span><img src={settings} alt="a" /></span> Settings</li>
          </ul>
        </div>


        <div className='help-section'>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>

  )
}

export default DashboardLeft