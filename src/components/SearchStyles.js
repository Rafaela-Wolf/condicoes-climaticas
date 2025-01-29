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
  border: 2px solid #3b7ea1;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 300;
  color: #e0e7ea;
  background-color: #1e3a5f;
  outline: none;
  cursor: pointer;

  ::placeholder {
    color: #acb7bc;
  }
`;

export const SearchButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 400;
  border: none;
  border-radius: 5px;
  color: #1e3a5f;
  background-color: #ffbb33;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0a800;
  }
`;