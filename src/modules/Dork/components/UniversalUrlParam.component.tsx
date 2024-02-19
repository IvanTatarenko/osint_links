import { Select, Switch } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div``;

const StyledSelect = styled(Select)`
  width: 100px;
  margin-right: 10px;
`;

interface UniversalUrlParamComponentProps {
  label: string;
  options: DefaultOptionType[];
}

const UniversalUrlParamComponent: React.FC<UniversalUrlParamComponentProps> = ({ label, options }) => {
  return (
    <MainDiv>
      <label>{label}</label>
      <StyledSelect options={options} defaultValue={options[0]}/>
      <Switch />
    </MainDiv>
  );
};

export default UniversalUrlParamComponent;
