import { Input, Switch } from 'antd';
import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div``;

const StuledInput = styled(Input)`
  width: 200px;
  margin-right: 20px;
`;

interface UniversalDorkComponentProps {
  updateSite: (value: string) => void;
  updateStatusSiteDork: () => void;
  statusSiteDrok: boolean;
  placeholder: string;
  label: string;
}

const UniversalDorkComponent: React.FC<UniversalDorkComponentProps> = ({
  updateSite,
  updateStatusSiteDork,
  statusSiteDrok,
  placeholder,
  label,
}) => {
  return (
    <MainDiv>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <StuledInput placeholder={placeholder} onChange={(e) => updateSite(e.target.value)} />
        <Switch
          checked={statusSiteDrok}
          onChange={() => {
            updateStatusSiteDork();
          }}
        />
      </div>
    </MainDiv>
  );
};

export default UniversalDorkComponent;
