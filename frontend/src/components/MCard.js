import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline
} from 'react-icons/ti';
const MCard = ({ FoodName, FoodImg }) => {
  return (
    
    <div className="flex menu-card">
      <div className="food-image">
        <img src={ FoodImg } alt="food"></img>
      </div>
      <div className="food-details">
        <h4>{ FoodName }</h4>
        <span className="hint-star star">
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarHalfOutline />
          <TiStarOutline />
        </span>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}

export default MCard