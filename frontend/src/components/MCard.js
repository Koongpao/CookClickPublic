import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline
} from 'react-icons/ti';
const MCard = ({ FoodName, FoodImg, Star }) => {
  
  const addStar = (nowStar) => {
    nowStar = nowStar - 1
    if (Star - nowStar > 0.8) {
      return <TiStarFullOutline className='inline'/>
    }
    else if (Star - nowStar > 0.3) {
      return <TiStarHalfOutline className='inline'/>
    }
    else {
      return <TiStarOutline className='inline'/>
    }
  }
  
  return (
    
    <div className="flex menu-card">
      <div className="food-image">
        <img src={ FoodImg } alt="food"></img>
      </div>
      <div className="food-details">
        <h4>{ FoodName }</h4>
        <span className="hint-star star">
          {addStar(1)}
          {addStar(2)}
          {addStar(3)}
          {addStar(4)}
          {addStar(5)}
          <span className="text-muted text-sm"> ({Star})</span>
        </span>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}

export default MCard