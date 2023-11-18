import React from 'react';
import Camera from '../components/Camera';
import styled from 'styled-components';

const Wrapper = styled.div`
    
    position: relative;
    width: 1440px;
    height: 1024px;
    margin: 0 auto;

`;

const Texts = styled.div`
    font-size: 70px;
    font-weight:bold;
    width:1300px;
    margin:0 auto;

`;

const UserPicture = () => {

    return (
        <Wrapper>
            <Texts>
                <p>Please take a picture of the menu</p>
            </Texts>
            <Camera />
        </Wrapper>
    );
};

export default UserPicture;
