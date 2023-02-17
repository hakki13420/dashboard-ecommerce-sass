import './widgetsm.scss'
import {Visibility} from '@mui/icons-material';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <h3 className="widgetSmTitle">
          New members
      </h3>
      <div className="widgetSmItem">
        <img className="widgetSmImage" src="https://images.pexels.com/photos/1468376/pexels-photo-1468376.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <div className="widgetSmInfo">
          <div className="name">jhon doe</div>
          <div className="ocupation">doctor</div>
        </div>    
        <button className="widgetSmBtn">
          Display
          <Visibility />
        </button>
      </div>
      <div className="widgetSmItem">
        <img className="widgetSmImage" src="https://images.pexels.com/photos/1468376/pexels-photo-1468376.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <div className="widgetSmInfo">
          <div className="name">jhon doe</div>
          <div className="ocupation">Software engeneer doctor</div>
        </div>    
        <button className="widgetSmBtn">
          Display
          <Visibility />
        </button>
      </div><div className="widgetSmItem">
        <img className="widgetSmImage" src="https://images.pexels.com/photos/1468376/pexels-photo-1468376.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <div className="widgetSmInfo">
          <span className="name">jhon doe</span>
          <span className="ocupation">doctor</span>
        </div>    
        <button className="widgetSmBtn">
          Display
          <Visibility />
        </button>
      </div><div className="widgetSmItem">
        <img className="widgetSmImage" src="https://images.pexels.com/photos/1468376/pexels-photo-1468376.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <div className="widgetSmInfo">
          <span className="name">jhon doe</span>
          <span className="ocupation">doctor</span>
        </div>    
        <button className="widgetSmBtn">
          Display
          <Visibility />
        </button>
      </div>
    </div>
  )
}

export default WidgetSm