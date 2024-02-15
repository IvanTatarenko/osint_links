import { Input } from "antd";
import React from "react";
import styled from "styled-components";



const MainInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 250px;
  margin-top: 50px;
  margin-bottom: 50px;
`;


const SearchComponent: React.FC<{ placeholder: string, searchText: string; setSearchText: (text: string) => void }> = ({
  placeholder,
  searchText,
  setSearchText,
}) => {
  return (
    <MainInputDiv>
      <Input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        placeholder={placeholder}
      />
    </MainInputDiv>
  );
};

export default SearchComponent;
