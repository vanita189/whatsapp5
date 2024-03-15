import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './SideMenu5.css'
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
const SideMenu5 = ({onClose}) => {
    const handleBackClick = () => {
        onClose();
      }
  return (
    <div className='new'>
      
        <div className='profile_navbar' style={{margin:"0 0 10px 0"}}>
        <ArrowBackIcon  onClick={handleBackClick} />
        <p className='prof'>New Chat</p>
        
        </div>
        
        <div className='input_box6'>
          <ArrowBackIcon style={{color:" #075e54"}}/>
          <input type="text" placeholder='Search name or Contact here'/>
        </div>

        <div className='contacts'  style={{  overflowY:"auto",maxHeight: "200px" }}>
                 <div className='new21'>
                  <div  style={{width:"50px",height:"50px",backgroundColor:" #075e54",borderRadius:"100px",padding:"10px 0"}}>
                  <GroupIcon style={{color:"#fff",width:"30px",height:"30px",}}/>
                  </div>
                  <p>New Group</p>
                 </div>
                 <div className='new21'>
                 <div  style={{width:"50px",height:"50px",backgroundColor:" #075e54",borderRadius:"100px",padding:"10px 0"}}>

                  <GroupsIcon style={{color:"#fff",width:"30px",height:"30px",}}/>
                  </div>
                  <p>New Community</p>
                 </div>
        </div>
    </div>
  )
}

export default SideMenu5
