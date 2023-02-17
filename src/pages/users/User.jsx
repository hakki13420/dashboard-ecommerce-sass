import './user.scss'
import {PermIdentity, CalendarToday, PhoneAndroid, LocationSearching, MailOutline} from '@mui/icons-material'


const User = () => {
  return (
    <div className="user">
      <h3 className="title">User Edition</h3>
      <div className="userContainer">
        <div className="userShow">
          <h3 className="title">Show User</h3>
          <div className="userShowTop">
            <img src="https://images.pexels.com/photos/1468376/pexels-photo-1468376.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <div className="userShowTopInfo">
              <span className="name">Jhon Doe</span>
              <span className="ocupation">Softwarte engeener doctor</span>
            </div>
          </div>
          <div className="userShowBottom">
            <h3 className="userShowBottomTitle">Acount Details</h3>
            <div className="userShowBottomDetails">
              <div className="userShowBottomItem">
                <PermIdentity className="icon" />
                <span className="item">Jhon Doe</span>
              </div>
              <div className="userShowBottomItem">
                <CalendarToday className="icon" />
                <span className="item">19 Oct 1988</span>
              </div>
              <h3 className="userShowBottomTitle">Acount Details</h3>
              <div className="userShowBottomItem">
                <PhoneAndroid className="icon" />
                <span className="item">+213 66 55 66 44</span>
              </div>
              <div className="userShowBottomItem">
                <MailOutline className="icon" />
                <span className="item">jhon.doe@gmail.com</span>
              </div>
              <div className="userShowBottomItem">
                <LocationSearching className="icon" />
                <span className="item">Tlemcen | Algeria</span>
              </div>
            </div>
          </div>
        </div>
        <div className="userEdit">
          <h3 className="title">Edit User</h3>
          <form className="userEditForm">
            <div className="userEditLeft">
              <div className="userEditLeftItem">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
              </div>
              <div className="userEditLeftItem">
                <label htmlFor="fullName">fullname</label>
                <input type="text" name="fullName" placeholder="fullname" />
              </div>
              <div className="userEditLeftItem">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" />
              </div>
              <div className="userEditLeftItem">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" placeholder="phone" />
              </div>
              <div className="userEditLeftItem">
                <label htmlFor="adress">Adress</label>
                <input type="text" name="adress" placeholder="Adress" />
              </div>
            </div>
            <div className="userEditRight">
              <div className="userEditRightUpload">
                <span className="textInfo">click in the image to upload other file</span>
                <label htmlFor="avatar">
                  <img src="https://images.pexels.com/photos/1468376/pexels-photo-1468376.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                </label>
                <input type="file" id="avatar" name="avatar" style={{display:"none"}} />
                <button>Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User