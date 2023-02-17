import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import {AddCircleOutline, RemoveCircleOutline} from '@mui/icons-material';

const MenuItem = ({element}) => {
  const [slideUp, setSlideUp]=useState(false)

  const slideHandl=()=>{
    setSlideUp(!slideUp)
  }

  console.log('items', element)

  return (
    <>
        <div className="sideBarItem">
        <div className="sideBarItemTitle">
          <div className="title">
            <element.icon />
            <h5>{element.title}</h5>
          </div>
          <div className="arrowSlide">
            {            
              slideUp && <AddCircleOutline onClick={slideHandl} />
            }
            {
              !slideUp && <RemoveCircleOutline onClick={slideHandl} />
            }
          </div>
        </div>
        <ul className={slideUp?'menu active':'menu'}>
          {              
            element.items.map(item=>{
              return <li className="menuItem" key={item.id}>
                {
                  item?.link
                    ?(<Link to={item?.link} className="link" >
                      {item.title}
                      </Link>
                    ):(
                      <>                      
                        {item.title}
                      </>
                    )
                }
                
              </li>                            
            })
              
          }          
        </ul>    
      </div>

    </>
  )
}

export default MenuItem