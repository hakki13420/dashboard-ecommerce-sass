import FeatureInfo from '../../components/featureInfo/FeatureInfo'
import Chart from '../../components/chart/chart';
import './home.scss'
import {data} from '../../data/fakeData'
import WidgetSm from '../../components/widgets/WidgetSm';
import WidgetLg from '../../components/widgets/WidgetLg';

const Home = () => {
  return (
    <div className='home'>
        <FeatureInfo />
        <Chart  title="User Analytics" 
                data={data}
                dataKey="data user"
                grid
        />
        <div className="widgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home