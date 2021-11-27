import React, {useState, useEffect} from 'react'
import axios from "axios";

//Higher order component
const withUserId = Component => {
  const NewComponent = ({userId, ...props}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => setUser(res.data))
    }, []);

    if (!user) return 'Loading...'

    return <Component {...props} user={user} />
  }

  return NewComponent
}

export default withUserId