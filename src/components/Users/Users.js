import Useritem from "../Useritem/Useritem";
import "../../styles/Users.css"

export default function Users(props) {
  return (
    <div className="test"> 
      {props.user_list.map((user) => (
        <Useritem
        id={user.id}
        name={user.name}
        image={user.image}
        />
      ))}
      </div>
  )
}
