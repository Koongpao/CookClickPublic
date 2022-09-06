import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline
} from 'react-icons/ti';
const MCard = ({ FoodName, FoodImg, Star }) => {
  let starInt = parseInt(Star-0.01) // Hack for 5 star bug
  
  return (
    
    <div className="flex menu-card">
      <div className="food-image">
        <img src={ FoodImg } alt="food"></img>
      </div>
      <div className="food-details">
        <h4>{ FoodName }</h4>
        <span className="hint-star star">
          {
            Array(starInt).fill(1).map((el, i) =>
              <TiStarFullOutline key={i} />,
            )
          }
          {
            (() => {
              if (Star - starInt > 0.8) {
                return <TiStarFullOutline/>
              }
              else if (Star - starInt > 0.3) {
                return <TiStarHalfOutline />
              }
              else {
                return <TiStarOutline />
              }
            })()
          }
          {
            Array(5-(starInt+1)).fill(1).map((el, i) =>
              <TiStarOutline key={i} />,
            )
          }
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