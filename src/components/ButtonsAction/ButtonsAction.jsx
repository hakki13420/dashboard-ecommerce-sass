import './ButtonsAction.scss'
import {Link} from 'react-router-dom'
import {EditOutlined, DeleteOutline} from '@mui/icons-material';
import useRemove from '../../hooks/useRemove';

const ButtonsAction = ({rows, setRows, link,id}) => {
  const remove= useRemove()

  return (
    <div className='actionField'>          
      <Link to={`${link}${id}`}>
        <EditOutlined className="editBtn"/>
      </Link>
      <DeleteOutline className="deleteBtn" onClick={()=>remove(rows, setRows,id)} />
  </div>
  )
}

export default ButtonsAction