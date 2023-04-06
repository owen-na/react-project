import './App.css';
import Users from './components/Users/Users';

const DUMMY_USERS = [
 {
   id: '1',
   name: 'Lexus',
   image:
     'https://1000logos.net/wp-content/uploads/2020/02/Lexus-Logo-1989.png'
 },
 {
    id: '2',
    name: 'Honda',
    image: 
      'https://listcarbrands.com/wp-content/uploads/2016/03/Logo-Honda.png'
  }, 
  {
    id: '3',
    name: 'Toyota',
    image: 
      'https://1000logos.net/wp-content/uploads/2021/04/Toyota-logo.png'
  }
]

function App() {
  return (
    <div className='main'>
      <Users user_list={DUMMY_USERS} />
    </div>
  )
}

export default App;
