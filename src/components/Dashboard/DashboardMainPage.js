import React from 'react'
import DashboardRight from './DashboardRight'
import DashboardLeft from './DashboardLeft'

const DashboardMainPage = () => {
  return (
    <div className='dashboard-container'>
      <DashboardLeft />
      <DashboardRight />
    </div>
  )
}

export default DashboardMainPage