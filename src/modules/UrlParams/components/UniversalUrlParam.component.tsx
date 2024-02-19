import { Select, Switch } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div``;

const StyledSelect = styled(Select)`
  width: 150px;
  margin-right: 10px;
`;

interface UniversalUrlParamComponentProps {
  label: string;
  options: DefaultOptionType[];
  status: boolean;
  updateStatus: () => void;
  updateValue: (value: string) => void;
}

const UniversalUrlParamComponent: React.FC<UniversalUrlParamComponentProps> = ({ label, options, status, updateStatus, updateValue }) => {
  
  return (
    <MainDiv>
      <label>{label}</label>
      <StyledSelect options={options} defaultValue={options[0]} onChange={(value: any) => updateValue(value)}/>
      <Switch
          checked={status}
          onChange={() => {
            updateStatus();
          }}
        />
    </MainDiv>
  );
};

export default UniversalUrlParamComponent;
