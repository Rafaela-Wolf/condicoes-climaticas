import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const MainContainer = styled.div`
    background-color: #1e3a5f;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width: 40%;
    font-family: 'Poppins', sans-serif;
    border-radius: 10px;
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.4);

    @media(max-width: 900px) {
        width: 60%;
    }

    @media(max-width: 768px) {
        width: 80%;
    }

    @media(max-width: 600px) {
        width: 90%;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    width: 80%;
    font-weight: 500;
    text-align: center;
    color: #acb7bc;
    padding: 15px;
    line-height: 1.5;

    @media(max-width: 600px) {
        font-size: 16px;
    }
`