
import { useContext } from 'react';

function Services() {
  const user = useContext('loggedInUser');
  return (
    <div>
      <h1>Services page  {user}</h1>  
    </div>
  )
}

export default Services
