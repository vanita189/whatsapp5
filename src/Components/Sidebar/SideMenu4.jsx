import React from 'react'
import { Avatar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import './SideMenu4.css'
import {channels} from '../Whatsappchat/Data'
const SideMenu4 = ({onClose}) => {
    const handleBackClick = () => {
        // Call the onClose function passed from the parent component
        onClose();
      }
  return (
    <div className='sidemenu4'>
        
      <div className='profile_navbar'>
        <ArrowBackIcon  onClick={handleBackClick} />
        <p className='prof'>Status</p>
        <div className='prof10' style={{textAlign: "right", position: "absolute", right: "30px"}}>
            <AddIcon/>
        </div>

      </div>

      <div className='channels'>
        <p className='topic'>Stay Updated on your favourite topics</p>
        <p  className='topic2'> Find channels to follow below</p>
          <div className='hello'>
            {channels.map(item =>(
              <div className='box'>
                <Avatar sx={{width:60,height:60,border:"1px solid lightgrey"}} src={item.image}/>
                <p style={{fontSize:"15px",color:"var(--color1)"}}>{item.name}</p>
                <p  style={{fontSize:"13px",color:"var(--color2)"}}>{item.action}</p></div>
            ))}
          </div>
      </div>
      <button className='find'>Find Channels</button>
    </div>
  )
}

export default SideMenu4
