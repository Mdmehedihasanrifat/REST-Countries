import React from 'react';
import {Link} from "react-router-dom";

const Country = (props) => {
    const{name,capital,population,flag}=props.country
    console.log(props)


    return (
        <div className="container bg-white rounded-lg shadow-lg dark:bg-gray-800  dark:text-white pb-4 ">
             <Link to={`/details/${name}`}> <img src={flag} className="h-2/3 w-full rounded-tl-lg rounded-tr-lg"/></Link>
            <h2 className="font-bold">Name:{name}</h2>
              <h3>Capital:{capital}</h3>
            <h4>Population:{population}</h4>
        </div>
    );
};

export default Country;
