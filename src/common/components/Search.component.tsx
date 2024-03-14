import { Input } from "antd";
import React from "react";
import styled from "styled-components";

const MainInputDiv = styled.div<{width: string}>`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: ${({ width }) => width};
  margin-top: 50px;
  margin-bottom: 5px;
  @media (max-width: 1024px) {
  }
  @media (max-width: 600px) {
    width: 300px;
  }
`;

const SearchComponent: React.FC<{ width: string, placeholder: string, searchText: string; setSearchText: (text: string) => void }> = ({
  width,
  placeholder,
  searchText,
  setSearchText,
}) => {

  return (
    <MainInputDiv width={width}>
      <Input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        placeholder={placeholder}
      />
    </MainInputDiv>
  );
};

export default SearchComponent;
