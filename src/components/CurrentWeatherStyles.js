import styled from 'styled-components';

export const CurrentWeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CurrentWeatherTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: #acb7bc;
    padding-top: 15px;
    text-transform: uppercase;
    text-align: center;

    @media(max-width: 600px) {
       font-size: 16px;
    }
`

export const ImgDescContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;
`

export const Img = styled.img`
    width: 40px;
    height: 40px;
`

export const WeatherDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    color:  #acb7bc;
    text-align: center;
`

export const Temp = styled.p`
    font-size: 60px;
    font-weight: 100;
    color:  #acb7bc;
    margin-bottom: 10px;
`