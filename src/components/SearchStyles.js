import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  gap: 10px;
`;

export const SearchInput = styled.input`
  width: 70%;
  padding: 5px 10px;
  border: 1px solid #acb7bc;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  background-color: #2f363b;
  outline: none;

  ::placeholder {
    color: #acb7bc;
  }
`;

export const SearchButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  color: #272c2f;
  background-color: #ffbb33;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0a800;
  }
`;