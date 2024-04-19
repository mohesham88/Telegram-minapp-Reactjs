import React , {useState} from 'react'
import './Card.css'
import Button from '../Button/Button';


function Card({kit}) {
  const [count , setCount] = useState(0);


  const {title , Image , price , id} = kit;


  const handleIncrement = () => {
    setCount(count + 1);
  }
  
  const handleDecrement = () => {
    setCount(count - 1);
  }


  return (
    <div className="card">
      <span className={`
        ${count !== 0 ? 'card_badge' : 'card_badge--hiden'}
      `}>
        {count}
      </span>

      <div className="image_container">
        <img src={Image} alt={title}/>
      </div>


      <h4 className="card_title">{title} 
        <span className="card_price"> ${price}</span>
      </h4>


      <div className="btn-container">
        <Button title={'+'} type={'add'} onClick={handleIncrement}/>


        {(count !== 0  ? (
          <Button title={'-'} type={'remove'} onClick={handleDecrement}/>
        )
        : ""
        )}

      </div>

    </div>
  )
}

export default Card
