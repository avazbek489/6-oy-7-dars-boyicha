// import React, { useEffect, useState } from "react";

// function App() {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(0);
//   const [counter3, setCounter3] = useState(0);
//   // useEffect(function(){
//   //   console.log("Sahifa yangilandi");

//   // },[])
//   // useEffect(
//   //   function () { 
//   //     console.log("counter1 yoki counter3 ishladi");
//   //   },
//   //   [counter1, counter3]
//   // );

// useEffect(function () {
//     console.log("Component render boldi");
//   });
//   return (
//     <>
//       <span>{counter1}</span>
//       <span>{counter2}</span>
//       <span>{counter3}</span> <br />
//       <div className="flex gap-3">
//         <button
//           onClick={() => {
//             setCounter1(counter1 + 1);
//           }}
//         >
//           count1
//         </button>
//         <button
//           onClick={() => {
//             setCounter2(counter2 + 1);
//           }}
//         >
//           count2
//         </button>
//         <button
//           onClick={() => {
//             setCounter3(counter3 + 1);
//           }}
//         >
//           count3
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { useEffect } from "react";
// import { http } from "./axios";

// function App() {
//   const [photos, setPhotos] = useState({});
//   useEffect(function () {
//     http
//       .get("photos")
//       .then((response) => {
//         console.log(response);
//         if (response.status == 200) {
//           setPhotos(response.data);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   return <></>;
// }

// export default App;
