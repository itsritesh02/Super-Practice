import { useState } from "react";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!email) {
      alert("Email is Required")
      return;
    }

    if(!email.includes("@")){
      alert("Enter Valid Emial")
      return;
    }
    if(!password){
      alert("Password is required");
      return;
    }

    if(password.length<6){
      alert("password must be at least 6 characters")
    }

    alert("Loginn Successful")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="emaiil" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default App;