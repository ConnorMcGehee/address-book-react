import { useEffect, useState } from 'react'
import './App.css'
import User from './User'

interface UserData {
  name: {
    first: string,
    last: string
  }
  phone: string,
  email: string,
  picture: {
    large: string
  }
}

function App() {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api?results=25")
          .then(res => res.json());
        setUserData(response.results);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h1>Address Book</h1>
      <div id="users">
        {userData.map((user, index) => {
          return (
            <User
              key={index}
              fullName={`${user.name.first} ${user.name.last}`}
              phone={user.phone}
              email={user.email}
              pictureUrl={user.picture.large} />
          );
        })}
      </div>
    </>
  )
}

export default App
