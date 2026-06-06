// resturant.jsx

import React from 'react'
import { Link } from 'react-router-dom'

function Resturant({ resArr }) {

  return (
    <div className="flex flex-wrap justify-center">
      {resArr.map((item, index) => {
        const id = item._id || item.id;
        return (
          // Safely extract properties out of your MongoDB model fields layout mapping
          <div key={id} className="m-8 flex w-58 flex-col transform hover:scale-95 transition duration-200">
            <Link to={`/resturant/${id}`} className="no-underline text-inherit">
              {/* Updated item.cloudinaryImageId string binding */}
              <img
                className="w-64 h-40 object-cover rounded-xl shadow-md"
                src={item.cloudinaryImageId}
                alt={item.name}
              />
              <h1 className="font-bold text-lg mt-2 text-gray-800 truncate">{item.name}</h1>
              <div className="flex items-center text-sm text-gray-600 space-x-1 mt-1">
                <span className="text-green-600"><i className="bi bi-star-fill"></i></span>
                <span className="font-semibold">{item.avgRatingString}</span>
                <span>•</span>
                <span>{item.slaString?.[0] || item.slaString || "20 mins"}</span>
              </div>
              {/* Cuisines array handler parser mapping logic wrapper */}
              <p className="text-sm text-gray-500 truncate mt-1">
                {Array.isArray(item.cuisines) ? item.cuisines.join(", ") : item.cuisines}
              </p>
              <p className="text-sm text-gray-400 truncate">{item.locality}</p>
            </Link>
          </div>
          
        )
      })}
    </div>
    )
  
}


export default Resturant









  // return (
  //         <div className="flex flex-wrap justify-center">
  //             {resArr.map((item, index) => {
  //                 // Safely extract properties out of your MongoDB model fields layout mapping
  //                 const id = item._id || item.id; // MongoDB defaults unique primary keys to _id

  //                 return (
  //                     <div key={id} className="m-8 flex w-58 flex-col transform hover:scale-95 transition duration-200">
  //                         <Link to={`/resturant/${id}`} className="no-underline text-inherit">
  //                             {/* Updated item.cloudinaryImageId string binding */}
  //                             <img 
  //                                 className="w-64 h-40 object-cover rounded-xl shadow-md" 
  //                                 src={item.cloudinaryImageId} 
  //                                 alt={item.name} 
  //                             />
  //                             <h1 className="font-bold text-lg mt-2 text-gray-800 truncate">{item.name}</h1>
  //                             <div className="flex items-center text-sm text-gray-600 space-x-1 mt-1">
  //                                 <span className="text-green-600"><i className="bi bi-star-fill"></i></span>
  //                                 <span className="font-semibold">{item.avgRatingString}</span>
  //                                 <span>•</span>
  //                                 <span>{item.slaString?.[0] || item.slaString || "20 mins"}</span>
  //                             </div>
  //                             {/* Cuisines array handler parser mapping logic wrapper */}
  //                             <p className="text-sm text-gray-500 truncate mt-1">
  //                                 {Array.isArray(item.cuisines) ? item.cuisines.join(", ") : item.cuisines}
  //                             </p>
  //                             <p className="text-sm text-gray-400 truncate">{item.locality}</p>
  //                         </Link>
  //                     </div>
  //                 );
  //             })}
  //         </div>











//   < div key = { id } className = "m-8 flex w-58 flex-col transform hover:scale-95 transition duration-200" >
//     <Link to={`/resturant/${id}`} className="no-underline text-inherit">
//       {/* Updated item.cloudinaryImageId string binding */}
//       <img
//         className="w-64 h-40 object-cover rounded-xl shadow-md"
//         src={item.cloudinaryImageId}
//         alt={item.name}
//       />
//       <h1 className="font-bold text-lg mt-2 text-gray-800 truncate">{item.name}</h1>
//       <div className="flex items-center text-sm text-gray-600 space-x-1 mt-1">
//         <span className="text-green-600"><i className="bi bi-star-fill"></i></span>
//         <span className="font-semibold">{item.avgRatingString}</span>
//         <span>•</span>
//         <span>{item.slaString?.[0] || item.slaString || "20 mins"}</span>
//       </div>
//       {/* Cuisines array handler parser mapping logic wrapper */}
//       <p className="text-sm text-gray-500 truncate mt-1">
//         {Array.isArray(item.cuisines) ? item.cuisines.join(", ") : item.cuisines}
//       </p>
//       <p className="text-sm text-gray-400 truncate">{item.locality}</p>
//     </Link>
//  </div >