import './sidebar.scss'
import MenuItem from './MenuItem'
import { Dashboard, PeopleOutline, BarChartOutlined, SettingsOutlined} from '@mui/icons-material';



const SideBar = () => {  

  return (          
    <div className="sidebar">
      {        
        [ {id:1,title:"Dashboard", icon:Dashboard,
            items:[
              {id:1,title:'Home',link:'/'},
              {id:2,title:'Analytics'},
              {id:3,title:'Sales'}
            ]},
          {id:2, title:"Collections", icon:PeopleOutline,
            items:[
              {id:1,title:'Users',link:'/users'},
              {id:2,title:'Products',link:'/products'},
              {id:3,title:'Transactions'},
              {id:4,title:'Reports'}
            ]},
          {id:3,title:"Notificationss", icon:BarChartOutlined,
            items:[
              {id:1,title:'Mails'},
              {id:2,title:'Feedbacks'},
              {id:3,title:'Messages'},              
            ]},
          {id:4,title:"settings", icon:SettingsOutlined,
            items:[
              {id:1,title:'Manage'},
              {id:2,title:'Analytics'},
              {id:3,title:'Reports'}
            ]}
        ].map(element=>{
            return <MenuItem key={element.id}  element={element} />
        })
      }
      
    </div>
  )
}

export default SideBar