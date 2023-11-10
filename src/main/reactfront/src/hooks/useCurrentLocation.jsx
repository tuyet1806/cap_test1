import { useState, useEffect } from 'react';

const useCurrentLocation = (options={} ) => {
    const [location, setLocation] = useState();
    
    const handleSuccess = (position) => {
        const { latitude, longitude } = position.coords;

        setLocation({
            latitude,
            longitude,
        });
    };

    const handleError = () => {
        alert('서비스 이용을 위해 위치 정보 제공에 동의해주세요.');
    };

    useEffect(()=> {
        const {geolocation} = navigator;

        if(!geolocation) {
            alert("Geolocation is not supporeted");
            return;
        }

        geolocation.getCurrentPosition(handleSuccess, handleError, options);
    },[options]);

    return { location };
};

export default useCurrentLocation;