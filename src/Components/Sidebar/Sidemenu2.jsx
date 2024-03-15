import React from 'react'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './SideMenu2.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const SideMenu2 = ({onClose}) => {
    const handleBackClick = () => {
        onClose();
      }
  return (
    <div  className='sidemenu2'>
      <div className='profile_navbar'>
        <ArrowBackIcon onClick={handleBackClick} />
        <p className='prof'>Communities</p>
        </div>

        <div className='image2'>
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFudc7jWwW1n9aIgENM3IwWC2Xk8xoHUjDkpcI9hkfRDcDlgIa"/>
        </div>
        <div className='information'>
          <h2>Stay connected with a community </h2>
          <p  className='community'>A community is a social unit (a group of living things) with a shared socially significant characteristic, such as place, set of norms, culture, religion, values, customs, or identity.</p>

          <div className='see'>
          <p>See example communities</p>
          <ChevronRightIcon/>
          </div>
          <button className='community_button'>Start your community</button>
        </div>
    </div>
  )
}

export default SideMenu2
