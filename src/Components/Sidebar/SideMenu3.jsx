import React from 'react'
import { IconButton } from '@mui/material';
import {Avatar} from '@mui/material';
import {people} from '../Whatsappchat/Data'
import './SideMenu3.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const SideMenu3 = ({onClose}) => {
    const handleBackClick = () => {
        onClose();
      }
  return (
    <div className='status'>
    
      <div className='profile_navbar'>
        <ArrowBackIcon onClick={handleBackClick} />
        <p className='prof'>Status</p>
      </div>
      <div className='my_status'>
      <Avatar sx={{ width: 45, height: 45, border: '2px solid grey'}} alt="Remy Sharp" src="https://cdn4.sharechat.com/compressed_gm_40_img_749687_19114326_1695627746781_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=781_sc.jpg" />
          <div className='my_stat'>
              <p className='class1'>My Status</p>
              <p className='class2'>yesterday at 4:09Pm</p>
          </div>

      </div>
      <div className='recent' style={{ height:"400px",overflow: 'auto' }}>
        <p style={{color:'#128c7e',fontSize:"15px",textAlign:"left",margin:"15px 0 15px 30px"}}>RECENT</p>

     
      <div className='status2'>

      {people.map(person=>(

        <div key={person.id}className='status3'>

            <Avatar sx={{width:40,height:40,border:"2px solid grey"}} src={person.avatarSrc} style={{marginTop:"15px"}}/>
          <div className='mapping'>
          <div className='horizontal_line3'></div>

          <p style={{fontSize:"17px",color:"var(--color1)"}}>{person.name}</p>
          <p style={{color:'grey'}}>{person.time}</p>            
          </div>

          </div>

      ))}

      </div>
      </div>
    </div>
  )
}

export default SideMenu3
