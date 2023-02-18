import './chart.scss';
import { LineChart, Line, XAxis,Tooltip,
     ResponsiveContainer, CartesianGrid } from 'recharts'

const Chart = ({title,data,dataKey, grid }) => {
  return (
    <div className='chart'>
    <h3 className="chartTitle">
      {title}
    </h3>
    <ResponsiveContainer width="98%" aspect={4/1}>
      <LineChart data={data}>
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />        
        <XAxis dataKey="name" />
        <Tooltip />
        {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />}
      </LineChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Chart