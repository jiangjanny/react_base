

import React, {useState, useEffect} from "react";
function App() {
  let [name, setName] = useState("Mike Huang")
  const changeName = () => {
    setName("Peter Wang")
  }

  // useEffect
  useEffect(()=> {
    console.log('useEffect function is running.');
  }, [name])
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}

export default App;
