import './featureInfo.scss'
import {ArrowDownwardOutlined, ArrowUpwardOutlined} from '@mui/icons-material';

const FeatureInfo = () => {
  return (
    <div className="FeatureInfo">

      <div className="featureInfoItem">
        <h4 className='featureInfoTitle'>Revanues</h4>
        <div className="featureInfoMoney">
          <span className="money">
            456$
          </span>
          <span className="rate rateRed">
            -3% <ArrowDownwardOutlined className='arrow'/>
          </span>
        </div>
        <span className="comparedText">compared to last month</span>
      </div>

      <div className="featureInfoItem">
        <h4 className='featureInfoTitle'>Sales</h4>
        <div className="featureInfoMoney">
          <span className="money">
            456$
          </span>
          <span className="rate rateRed">
            -3% <ArrowDownwardOutlined className='arrow'/>
          </span>
        </div>
        <span className="comparedText">compared to last month</span>
      </div>

      <div className="featureInfoItem">
        <h4 className='featureInfoTitle'>Costs</h4>
        <div className="featureInfoMoney">
          <span className="money">
            456$
          </span>
          <span className="rate rateGreen">
            2.5% <ArrowUpwardOutlined className='arrow'/>
          </span>
        </div>
        <span className="comparedText">compared to last month</span>
      </div>


    </div>
  )
}

export default FeatureInfo