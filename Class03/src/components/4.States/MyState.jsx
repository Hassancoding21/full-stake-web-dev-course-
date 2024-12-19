
// import { useState } from "react"

// const MyState = () => {

//     const [first, setfirst] = useState("Hassan")

//   return (
//     <div>My name {first}  </div>
//   )
// }

// export default MyState



// import { useState } from "react"

// const MyState = () => {

//     const [priceofe, setpriceofe] = useState(30)

//   return (
//     <div>egg price {priceofe}  </div>
//   )
// }

// export default MyState


// import { useState } from "react"

// const MyState = () => {

//     const [fruit, setfirst] = useState(["Banana" , "apple" , "mango"])

//   return (
//     <div>My name {fruit}  </div>
//   )
// }

// export default MyState


import { useEffect, useState } from "react"

const MyState = () => {

    const [fruit, setfirst] = useState(["Banana" , "apple" , "mango"])


    useEffect(() => {
      setfirst(["B" , "A" , "M"])
    }, []);
    
  return (
    <div>fruits are {fruit}  </div>
  )
}

export default MyState










