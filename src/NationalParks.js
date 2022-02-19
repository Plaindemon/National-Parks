
import React, { useState, useEffect } from 'react';

// var to connect to input in search 
import Body from './Body'



function NationalParks() {
    var directionsInfoBtn = document.querySelector('#directions-btn')
    var weatherInfoBtn = document.querySelector('#weather-info-btn')
    var searchCityBtn = document.querySelector("#search-city-btn");
    var inputContainerEl = document.querySelector("#input-container");
    var inputSearchName = document.querySelector("#input-state");
   console.log(inputSearchName)
    // code using nps.gov API - use to get info from about places near the location desired 
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const apiKeyNps = "4fxi1Pok4kgde26ywgQnyEaaxknpMlmKw3svW5lP";
    var [parksResults, setParks] = useState([]);
    // var [weatherInfo, setWeatherInfo] = useState([]);
    // var [directionsInfo, setDirectionsInfo] = useState([]);
    // var [directionsUrl, setDirectionsUrl] = useState([]);


    // fetch a response from nps 
    let queryURL = fetch("https://developer.nps.gov/api/v1/parks?stateCode=" + inputSearchName + "&api_key=" + apiKeyNps + "&fields=description,fullName,url,activities,latitude,longitude,directionsInfo,addresses,weatherInfo,name,directionsUrl,operatingHours", requestOptions)
    console.log(queryURL)

    var activitySearchBtn = document.querySelector("#activities-btn");
    // function handleClick(activitySearchBtn) {

        function getOptionsInfo(res) {
            queryURL
                .then((res) => {
                    return res.json();
                })
                .then(result => {
                    console.log(result);
                    console.log(result.data.length)
                    for (let i = 0; i < result.data.length; i++) {
                        parksResults = result.data[i];
                        console.log(parksResults)

                    }



                })
            // .catch(error => console.log('error', error));

        }
        getOptionsInfo()
        // setParks(parks)
            // setWeatherInfo(weatherInfo),
            // setDirectionsInfo(directionsInfo),
            // setDirectionsUrl(directionsUrl)


        

    // }
    return (
        <div>
            <div className="app-activities">
                <div className="app-activities">
                <div className="panel-block">
                    <div className="control">
                        <input id="input-state" className="input" type="text" placeholder="Search using state acronym"></input>
                        <button id="search-city-btn" className="button" onClick={e => setParks(e.target.value)}>Search</button>
                        <p className="btn">Click links added to each result for more info from the National Parks Website</p>
                    </div>

                </div>
                    <Body />
                    {parksResults.map((parks) => {
                        return (
                            <>
                                <div className="activity-name" id="activity-name">{parks.id}</div>
                                {/* <div className="activity-distance" id="activity-distance">{data.distance}</div>
                    <div className="averageSpeed" id="averageSpeed">{data.average_speed}</div>
                    <div className="totalTime" id="totalTime">{data.elapsed_time}</div>
                    <div className="elevationGain" id="elevationGain">{data.total_elevation_gain}</div> */}



                            </>
                        )




                    })}
                    <div>
                    {parksResults.map((data) => {
                        return (
                            <>
                                <div className="activity-name" id="activity-name">{data.weatherInfo}</div>
                                {/* <div className="activity-distance" id="activity-distance">{data.distance}</div>
                    <div className="averageSpeed" id="averageSpeed">{data.average_speed}</div>
                    <div className="totalTime" id="totalTime">{data.elapsed_time}</div>
                    <div className="elevationGain" id="elevationGain">{data.total_elevation_gain}</div> */}



                            </>
                        )




                    })}
                    </div>
                    

                </div>
            </div>
        </div>

        // <button onClick={() => setParks()}
    )
}

export default NationalParks;