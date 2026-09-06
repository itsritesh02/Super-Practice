import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {
      const response = await fetch("http://localhost:5000/api/users");
      const data = await response.json();
      setUsers(data)
    };
    fetchUsers()
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
           return(
             <tr key={user.id}>
               <td>{user.name}</td>
               <td>{user.email}</td>
             </tr>
           )

          }
          )}
        </tbody>

      </table>
    </div>
  )
}
export default App;