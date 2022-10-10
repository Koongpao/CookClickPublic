import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
  TiHeartFullOutline,
} from "react-icons/ti"
const MCard = ({ FoodName, FoodImg, Star, Fav, Desc }) => {
  const addStar = (nowStar) => {
    nowStar = nowStar - 1
    if (Star - nowStar > 0.8) {
      return <TiStarFullOutline />
    } else if (Star - nowStar > 0.3) {
      return <TiStarHalfOutline />
    } else {
      return <TiStarOutline />
    }
  }

  return (
    <div className="flex menu-card">
      <div className="food-image">
        <img src={FoodImg} alt="food"></img>
      </div>
      <div className="food-details">
        <h4>{FoodName}</h4>
        <span className="hint-star star">
          {addStar(1)}
          {addStar(2)}
          {addStar(3)}
          {addStar(4)}
          {addStar(5)}
          <span className="text-muted text-sm"> ({Star.toFixed(1)})</span>
        </span>
        <span className="heart text-sm">
          <TiHeartFullOutline /> {Fav}
        </span>
        <p>{Desc}</p>
      </div>
    </div>
  )
}

export default MCard
