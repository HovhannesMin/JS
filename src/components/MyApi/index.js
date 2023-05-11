import { useState, useEffect } from "react";
function API() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("https://api.github.com/users").then(res=>res.json()).then(setUsers);
  }, []);
  return (
   <>
    {
        users.map(item=> 
           <div key={item.id}>{item.id}<img src={item.avatar_url} style={{width: 200 + 'px', height: 200 + 'px'}}></img></div>
        )
    }
   </>
  );
}

export default API;
