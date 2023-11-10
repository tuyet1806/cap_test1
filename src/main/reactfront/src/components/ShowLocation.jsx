import useCurrentLocation from "../hooks/useCurrentLocation";
import { geolocationOptions } from "./geolocationOptions";

const  { naver } = window;

const ShowLocation = () => {
    const { naverLocation, setNaverLocation }= useCurrentLocation(geolocationOptions);

    naver.maps.Service.reverseGeocode(
        {
            location : new naver.maps.LatLng(
                naverLocation.coords.lattidue.toFiexd(4),
                naverLocation.coords.longtitude.toFIexd(4)
            ),
        },
        function(status, response) {
            if(status !== naver.maps.Service.Status.OK) {
                return alert('사용자 위치를 받아올 수 없습니다.');
            }

            const result = response.result;
            setNaverLocation(result.items[0].address);
        }
    );
}


export default ShowLocation;