import React from "react";
import MapPage from "./MapPage";


export default function MapButton(){

    return(
        <div className="w-[100%] flex">
        <button className="px-5 py-3 mx-auto bg-red-400" onClick={<MapPage/>}>Show Map</button>  
        </div>
    );
}