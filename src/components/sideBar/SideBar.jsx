import './sidebar.scss'
import MenuItem from './MenuItem'
import {sideBarItems} from '../../data/fakeData'
import MenuIcon from '@mui/icons-material/Menu';



const SideBar = () => {  

  return (          
    <div className="sidebar">
      <MenuIcon className="menuIcon" />
      { 
        sideBarItems.map(element=>{
            return <MenuItem key={element.id}  element={element} />
        })
      }
      
    </div>
  )
}

export default SideBar