// body2.jsx

import React, { useEffect, useState } from 'react';
import Biryani from './varity/biryani';
import Cake from './varity/cake';
import Chinese from './varity/chinese';
import Desserts from './varity/desserts';
import Rolls from './varity/rolls';
import Resturant from './resturant';
import resturantAPI from './resturantAPI';

const Body = () => {
    const resArr = resturantAPI();
    const [rest, setAllRest] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [searchText, setSearchText] = useState("");

    // Sync your local state array hook whenever the custom API call payload updates
    useEffect(() => {
        if (resArr && resArr.length > 0) {
            setAllRest(resArr);
        }
    }, [resArr]);

    // Safe filtering lookup loop aligned flatly with your Mongoose model fields layout mapping
    function handleRating() {
        if (!isClicked) {
            const filteredList = resArr.filter((item) => {
                const rating = parseFloat(item.avgRatingString);
                return !isNaN(rating) && rating >= 4.3;
            });
            setAllRest(filteredList);
            setIsClicked(true);
        } else {
            setAllRest(resArr);
            setIsClicked(false);
        }
    }

    // Handles user parameter filters inside your custom input box search fields strings layout
    const handleSearch = () => {
        const searchedList = resArr.filter((item) => 
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setAllRest(searchedList);
    };

    return (
        <div className="w-full">
            {/* Varity / Suggestions Food Carousels Section */}
            <div className="p-4 max-w-6xl mx-auto">
                <p className="text-lg font-bold m-4">Sourav, what's on your mind?</p>
                <div className="flex flex-wrap justify-center space-x-4">
                    <Biryani />
                    <Cake />
                    <Chinese />
                    <Desserts />
                    <Rolls />
                </div>
            </div>

            <hr className="my-6 border-gray-100" />

            {/* Filter and Interactive Live Search Sections */}
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2">
                    <input 
                        type="text" 
                        placeholder="Search your favorite food or restaurant..." 
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="border rounded-md px-4 py-1.5 text-sm outline-hidden w-64 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                    />
                    <button 
                        onClick={handleSearch}
                        className="bg-indigo-600 text-white font-semibold text-sm px-4 py-1.5 rounded-md hover:bg-indigo-500 transition cursor-pointer"
                    >
                        Search
                    </button>
                </div>

                <button 
                    onClick={handleRating} 
                    className={`border border-gray-300 rounded-full px-6 py-1.5 font-semibold text-sm transition cursor-pointer ${
                        isClicked ? "bg-green-600 text-white border-green-600" : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                >
                    Sort By Rating &ge; 4.3
                </button>
            </div>

            {/* Restaurant Mapping Grid Layout Component Entry Rendering Pipeline */}
            <div className="mt-8">
                {rest.length > 0 ? (
                    <Resturant resArr={rest} />
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-sm">No restaurant matching your filter criteria found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Body;
