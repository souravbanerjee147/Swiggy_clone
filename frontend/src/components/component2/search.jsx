

function Search({resArr, setAllRest}) {

    function handleSearch(value){
        setAllRest(resArr.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase())));
    }

    return(
        <div>
            <input type="text" className="border rounded mx-20, mt-4, p-4" placeholder="Search Here..." onChange={(e)=>handleSearch(e.target.value)}/>
        </div>
    )
}

export default Search;
