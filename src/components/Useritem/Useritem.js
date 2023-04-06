import  Card  from "../Card/Card"
import "../../styles/Useritem.css"

export default function Useritem(props) {
  return (
    <Card>
      <img src={props.image} alt={props.name} className='image-holder'/>
      <h2 className="image-name">{props.name}</h2>
    </Card> 
  )
}