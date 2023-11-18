import { useEffect, useState } from 'react';

const GetUserLocation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(()=> {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition (
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    console.log(error);
                }
            );
        }else {
            console.log('Geolocation is not supported by this browser');  
        }
    },[]);

    return (
        <div>
            <p>현재 위치는 Latitude : {latitude}, Longitude : {longitude} </p>
        
        </div>
    )
}

export default GetUserLocation;