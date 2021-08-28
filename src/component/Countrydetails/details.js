import React from 'react';
import  {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";

const Details = () => {

    const [country,setCountry]=useState([]);
    const {DetailCountry}=useParams();
    const [mode,setMode]=useState(false)
    const [togglebtn,settogglebtn]=useState("<i class=' fas fa-sun '></i>Light Mode")
    console.log(DetailCountry);
    let history = useHistory()

    const goHomeBtn = () => history.push('/')
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


    useEffect(async ()=>{
     fetch(`https://restcountries.eu/rest/v2/name/${DetailCountry}?fullText=true`)
            .then(res=>res.json())
            .then(res=>{setCountry(res)
            console.log(country.name)})


    },[])




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

            <div className="container mx-auto mb-16">
                <button className="px-8 py-2 bg-white text-gray-600 shadow-md dark:bg-gray-700 dark:text-white rounded-lg" onClick={() => goHomeBtn()}>
                    <i className="fa fa-arrow-left"></i> Back</button>
            </div>
            {country.map(country=>
            <div className="container bg-white mx-auto rounded-lg shadow-lg dark:bg-gray-800  dark:text-white pb-4 ">
                 <img src={country.flag} className="h-1/2 w-full rounded-lg rounded-tr-lg"/>
                <h2 className="font-bold text-lg">Name:{DetailCountry}</h2>
                <h3 className="text-lg">Capital:{country.capital}</h3>
                <h4 className="text-lg">Population:{country.population}</h4>
                <h4 className="text-lg">Area:{country.area}</h4>
                <h4 className="text-lg">region:{country.region}</h4>

            </div>)}

        </div>

            );
};

export default Details;