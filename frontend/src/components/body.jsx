// body.jsx

import React from 'react';
import { useEffect,useState } from 'react';
import Biryani from './varity/biryani';
import Cake from './varity/cake';
import Chinese from './varity/chinese';
import Desserts from './varity/desserts';
import Rolls from './varity/rolls';
import Resturant from './resturant';
import resturantAPI from './resturantAPI';
import Search from './component2/search';
// import KFC from './restraunt/kfc';
// import Karims from './restraunt/karims';
// import PizzaHut from './restraunt/pizzahut';
// import Dominos from './restraunt/dominos';


const Body = () => {

    let resArr = resturantAPI()
    const [restra, setAllRest] = useState(resArr);
    const [isClicked, setIsClicked] = useState(false);
    const [searchText, setSearchText] = useState("");


    useEffect(()=>{
        if(resArr && resArr.length > 0){
        setAllRest(resArr);
    }
    }, [resArr]);

    function handleRating() {
        // setAllRest.filter((item) => item.info.avgRating >= 4.3)
        if(!isClicked){
            setAllRest(restra.filter((item) => item?.avgRatingString > 4.4));
            setIsClicked(true)
        }
        else if(isClicked){
            setAllRest(resArr);
            setIsClicked(false);

        }
    }
    
    return (
        <>
        
        {/*SUGGESTIONS*/}
        <div> 
            <p className="text-lg font-bold m-4">Sourav, what's on your mind?</p>
            {/* <button className="border-[1.5px] border-gray-400 rounded-full px-6 py-2 m-2 text-xl overflow-hidden">Sort By</button> */}
            <div className='flex flex-wrap justify-center'>
                <Biryani />
                <Cake />
                <Chinese />
                <Desserts />
                <Rolls />   
            </div>
        </div>

        {/*MEAALS*/}
        <div> 
            <p className="text-lg font-bold m-4">Meal</p>
            <button className="border-[1.5px] border-gray-400 rounded-full px-6 py-2 m-2 text-xl overflow-hidden">Sort By</button>
        
        </div>

        {/*RESTAURANTS*/}
        <div> 
            <p className="text-lg font-bold m-4">Restaurants</p>
            <button onClick={handleRating} className={isClicked ? "bg-green-500 border-[1.5px] border-gray-400 rounded-full px-6 py-2 m-2 text-xl overflow-hidden" : "bg-blue-500 border-[1.5px] border-gray-400 rounded-full px-6 py-2 m-2 text-xl overflow-hidden"}>Sort By Rating {">="} 4.3</button>
            <div>
                <Search resArr={resArr} setAllRest={setAllRest}/>
                </div>
            <div className='flex flex-wrap justify-center'>
                <Resturant resArr={restra} />
            </div>  

        </div>
        {/* <Restraunt /> */}
        

        {/*DESSERTS*/}
        <div> 
            <p className="text-lg font-bold m-4">Desserts</p>
            <button className="border-[1.5px] border-gray-400 rounded-full px-6 py-2 m-2 text-xl overflow-hidden">Sort By</button>
        </div>

        <div className="mt-8">
                {restra.length > 0 ? (
                    <Resturant resArr={restra} />
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-sm">No restaurant matching your filter criteria found.</p>
                    </div>
                )}
            </div>

            
        </>
    )
}

export default Body
