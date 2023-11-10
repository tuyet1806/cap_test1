import GetUserLocation from "../components/getUserLocation";
import styled from 'styled-components';
import { FaLocationDot } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`

    position: relative;
    width: 1440px;
    height: 1024px;
    margin: 0 auto;
    //border: 1px solid #000000;
`;

const Logo = styled.img`

    position: absolute;
    width: 210.8px;
    height: 160.2px;
    left: 230.1px;
    top: 56.4px;
`;

const Texts = styled.div`

    position: absolute;
    width: 1000px;
    height: 102px;
    left: 250px;
    top: 142px;

    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 300px;
    font-size: 25.336px;
    line-height: 55px;

    color: #111010;

`;

const Inputs = styled.input`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 26.136px;
    gap: 8.71px;

    position: absolute;
    width: 750.67px;
    height: 50.12px;
    left: 290px;
    top: 320px;
    font-size: 20px;

    filter: drop-shadow(0px 8.712px 8.712px rgba(0, 0, 0, 0.25));
`;


const Outside = styled.div`

    position: absolute;
    width: 295.5px;
    height: 52.5px;
    left: 256px;
    top: 607.75px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 25.92px;
    line-height: 35px;

    color: #000000;

`;

const Halal = styled.div`

    position: absolute;
    width: 136.08px;
    height: 132.72px;
    left: 259.08px;
    top: 427px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20.16px;
    line-height: 27px;
    border-radius:45px;
    background: #F4F0EB;
    
`;

const Vegun = styled.div`

    position: absolute;
    width: 157.2px;
    height: 145.2px;
    left: 490px;
    top: 421px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21.6px;
    line-height: 29px;
`;

const Spicy = styled.div`

    position: absolute;
    width: 165.6px;
    height: 142.2px;
    left: 760px;
    top: 426px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21.6px;
    line-height: 29px;

`;

const Dessert = styled.div`
    position: absolute;
    width: 178.2px;
    height: 142.2px;
    left: 996.15px;
    top: 426.15px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21.6px;
    line-height: 29px;

`;

const Inside = styled.div`
    
    position: absolute;
    width: 295.5px;
    height: 298.5px;
    left: 788px;
    top:607.75px;

`;

const UserLocation = styled.div`
    
    position: absolute;
    width: 981px;
    height: 63px;
    left: 300px;
    top: 225px;

    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 47px;

    color: #A08E8E;
`;

const LocationIcon = styled.div`
    position: absolute;
    left: 250px;
    top: 265px;
    bottom: 4.17%;

`;

const SearchIcon = styled.div`
    position: absolute;
    left: 235px;
    top: 320px;
`;

const Main = () => {
    const logo = "/img/logo.png";
    const outside = "/img/outsidereas.png";
    const inside = "/img/insiderest.png";
    const halal = "/img/HalalFood.png";
    const spicy = "/img/SpicyFood.png";
    const vegun = "/img/VegunFood.png";
    const dessert = "/img/dessert.png";

    const navigate = useNavigate();

    const gotoPicture = () => {
        navigate("picture");
    }


    return (
        <Wrapper>
            <Logo img src={logo} alt=""/>
            <Texts>
                <h1>what would you like to eat today?</h1>
            </Texts>
            <LocationIcon>
                <FaLocationDot size="30" color="grey" />
            </LocationIcon>
            <UserLocation>
                <GetUserLocation />
            </UserLocation>
            <div>
                <Inputs placeholder="Restruant, cuisines, dishes"></Inputs>
            </div>
            <SearchIcon>
                <FcSearch size="50"/>
            </SearchIcon>
            <Halal>
                <img src={halal} alt=" "/>
            </Halal>
            <Vegun>
                <img src={vegun} alt=" "/>
            </Vegun>
            <Spicy>
                <img src={spicy} alt=" " />
            </Spicy>
            <Dessert>
                <img src={dessert} alt=" "/>
            </Dessert>
            
            <Outside>
                <img src={outside}  alt=' ' />
            </Outside>
            <Inside>
                <img src={inside} onClick={gotoPicture} alt=' '/>
            </Inside>
        </Wrapper>
            
  
    );
};

export default Main;