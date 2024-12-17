// import React from 'react'
// import User from './User'
// import Login from './Login'

// const App = () => {
//   // function Apple(){
//   //   return(
//   //     <p>Apple this is</p>
//   //   )
//   // }

//   return (
//     <div>
//       <User/>
//       <Login/>
//       {/* <Apple/> */}
//     </div>
//   )
// }

// export default App

////=======================================State=========================================================

import React, { useState } from 'react'
const App = () => {
  const [data, setData] = useState("shweta")
function updateData(){
  setData("Chhoti")
}
  return (
    <>
       <h1>{data}</h1>
       <button onClick={updateData}>Click me</button>
    </>
  )
}

export default App


