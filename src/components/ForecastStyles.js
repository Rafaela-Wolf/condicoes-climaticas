import styled from "styled-components";

export const ForecastContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const ForecastTitle = styled.h4`
    font-size: 18px;
    font-weight: 400;
    color:  #acb7bc;
    text-align: center;
`

export const ForecastList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 15px 20px 15px;
    gap: 15px;
`

export const ForecastItem = styled.li`
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const ForecastImg = styled.img`
    width: 30px;
    height: 30px;
`

export const ForecastTemp = styled.span`
    font-size: 14px;
    font-weight: 400;
    color:  #acb7bc;
    text-align: center;
`

export const ForecastDescription = styled.span`
    font-size: 12px;
    font-weight: 400;
    padding: 3px;
    color:  #acb7bc;
    text-align: center;
`