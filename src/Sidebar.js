import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
           <div className="sidebar__top">
               <img src='data:image/jpeg;base64,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' 
               alt=''/>
               <Avatar src={user.photoUrl} className="sidebar__avatar">
                   {user.email[0]}
               </Avatar>
               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>
           </div>
           <div className="sidebar__stats">
               <div className="sidebar__stat">
                   <p>who viewed you</p>
                   <p className="sidebar__statNumber">2,543</p>
               </div>
               <div className="sidebar__stat">
                   <p>views on post</p>
                   <p className="sidebar__statNumber">2,543</p>
               </div>
               
           </div>

           <div className="sidebar__bottom">
               <p>Recent</p>
               {recentItem("reactjs")}
               {recentItem("programming")}
               {recentItem("software")}
               {recentItem("developing")}
               {recentItem("design")}
           </div>
        </div>
    )
}

export default Sidebar;
