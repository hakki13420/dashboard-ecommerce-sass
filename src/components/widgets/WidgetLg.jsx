import './widgetlg.scss'

const Button=({type})=>{
  return(
    <btton className={`wgBtn ${type}`}>{type}</btton>
  )
}


const WidgetLg = () => {
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">
        Latest Users Transactions
      </h3>
      <table className="widgetLgTable">
        <thead>
        <tr className="widgetLgTr">
          <th>Customer</th>
          <th className="dateCell">date</th>
          <th>Amount</th>
          <th>status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="wgTdImage">
            <img className="widgetLgImage" src="https://images.pexels.com/photos/5443335/pexels-photo-5443335.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <span>Jhon Doe</span>
          </td>
          <td className="dateCell">
            <span>24/10/2022</span>
          </td>
          <td>
            <span>180$</span>
          </td>
          <td>
            <Button type='Pending' />
          </td>          
        </tr>

        <tr>
          <td className="wgTdImage">
            <img className="widgetLgImage" src="https://images.pexels.com/photos/5443335/pexels-photo-5443335.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <span>Jhon Doe</span>
          </td>
          <td className="dateCell">
            <span>24/10/2022</span>
          </td>
          <td>
            <span>180$</span>
          </td>
          <td>
            <Button type='Approuved' />
          </td>          
        </tr>

        <tr>
          <td className="wgTdImage">
            <img className="widgetLgImage" src="https://images.pexels.com/photos/5443335/pexels-photo-5443335.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <span>Jhon Doe</span>
          </td>
          <td className="dateCell">
            <span>24/10/2022</span>
          </td>
          <td>
            <span>180$</span>
          </td>
          <td>
            <Button type='Rejected' />
          </td>          
        </tr>

        <tr>
          <td className="wgTdImage">
            <img className="widgetLgImage" src="https://images.pexels.com/photos/5443335/pexels-photo-5443335.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <span>Jhon Doe</span>
          </td>
          <td className="dateCell">
            <span>24/10/2022</span>
          </td>
          <td>
            <span>180$</span>
          </td>
          <td>
            <Button type='Approuved' />
          </td>          
        </tr>

        <tr>
          <td className="wgTdImage">
            <img className="widgetLgImage" src="https://images.pexels.com/photos/5443335/pexels-photo-5443335.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <span>Jhon Doe</span>
          </td>
          <td className="dateCell">
            <span>24/10/2022</span>
          </td>
          <td>
            <span>180$</span>
          </td>
          <td>
            <Button type='Pending' />
          </td>          
        </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default WidgetLg