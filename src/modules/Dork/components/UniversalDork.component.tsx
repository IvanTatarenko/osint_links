import { Input, Switch } from 'antd';
import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div``;

const StuledInput = styled(Input)`
  width: 200px;
  margin-right: 20px;
`;

interface UniversalDorkComponentProps {
  updateText: (value: string) => void;
  updateStatus: () => void;
  status: boolean;
  placeholder: string;
  label: string;
}

const UniversalDorkComponent: React.FC<UniversalDorkComponentProps> = ({ updateText, updateStatus, status, placeholder, label }) => {
  return (
    <MainDiv>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <StuledInput placeholder={placeholder} onChange={(e) => updateText(e.target.value)} />
        <Switch
          checked={status}
          onChange={() => {
            updateStatus();
          }}
        />
      </div>
    </MainDiv>
  );
};

export default UniversalDorkComponent;
