import './topbar.scss'
import {NotificationsNone, SettingsOutlined, AccountCircleOutlined} from '@mui/icons-material';
import {Link} from 'react-router-dom'

const TopBar = () => {
  return (
    <div className='topBar'>
      <div className="topBarLeft">
        <Link className="link" to="/">
          <div className="logo">
              <span className="firstText">
                  New
              </span>
              <span className="secondText">
                  Textilles
              </span>
          </div>
        </Link>
      </div>
      <div className="topBarRight">
          <div className="containerIcons">            
              <div className="icon">
                  <NotificationsNone/>
                  <div className="badge">4</div>
              </div>                
              <div className="icon">
                  <AccountCircleOutlined/>
              </div>
              <div className="icon">
                  <SettingsOutlined/>
              </div>                
          </div>
      </div>
    </div>
  )
}

export default TopBar