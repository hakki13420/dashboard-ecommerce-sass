import './TitleWithCreateBtn.scss'
import {Link} from 'react-router-dom'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const TitleWithCreateBtn = ({title, btnTitle, link}) => {
  return (
    <div className="TitleWithCreateBtn">
      <h3>{title}</h3>
      <Link className="link" to={link}>
        <button className="button">
          <AddCircleIcon />
          {btnTitle}
        </button>
      </Link>
    </div>
  )
}

export default TitleWithCreateBtn