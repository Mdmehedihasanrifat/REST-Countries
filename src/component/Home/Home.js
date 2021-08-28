import React, {useEffect, useState} from 'react';
import Country from "../Country/country";

const Home = () => {

    const [country,setCountry]=useState([]);
    const [mode,setMode]=useState(false)
    const [togglebtn,settogglebtn]=useState("<i class=' fas fa-sun '></i>Light Mode")
  const toggle = () => {


        if(mode){
            document.documentElement.classList.add("dark");
            settogglebtn("<i class='fas fa-moon '></i>Dark Mode");
            setMode(!mode);
        }
        if(!mode){
            document.documentElement.classList.remove("dark");
            settogglebtn("<i class=' fas fa-sun'></i>Light Mode");
            setMode(!mode);
        }
  }

  const searchCountry=(country)=>{
      fetch(`https://restcountries.eu/rest/v2/name/${country}`)
          .then(res=>res.json())
          .then(res=>setCountry(res))


  }
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res=>res.json())
            .then(res=>setCountry(res))


    },[])


    const filterByRegion = async region => {
        if(region === '') return
        const res = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        const data = await res.json()
        await setCountry(data)
    }
    return (
        <div className="bg-gray-100  dark:bg-gray-800  dark:text-white ">

            <div className="w-screen  shadow-md py-6 px-3 bg-white  dark:bg-gray-700 dark:text-white mb-16">

                <div className="flex container mx-auto">
                     <h1 className="font-bold text-xl ">Where is the World</h1>

                    <div className="ml-auto text-medium">
                        <button className=""  onClick={()=>toggle()} dangerouslySetInnerHTML={{__html:togglebtn}}></button>
                    </div>
                </div>
            </div>
            <div className="flex container mx-auto mb-16">

                <i className="fa fa-search my-auto -mr-9 z-10 py-5 pr-2 pl-3  text-black rounded-md"></i>
                <input type="text" onChange={(country)=>searchCountry(country.target.value)} placeholder="search country...." className="pl-10 mx-2 p-2 shadow-md  md:w-1/2 lg:w-1/3  rounded-md " />

                <select className="ml-auto my-2  md:w-1/2  p-2 shadow-md rounded-md font-medium dark:bg-gray-700" onChange={ val => filterByRegion(val.target.value)}>
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>


            <div className="container grid md:grid-cols-2  lg:grid-cols-4 gap-4 mx-auto sm:grid-cols-1">
                {
                    country.map((country,index)=><Country country={country} key={index}></Country>)
                }


            </div>


        </div>
    );
};

export default Home;