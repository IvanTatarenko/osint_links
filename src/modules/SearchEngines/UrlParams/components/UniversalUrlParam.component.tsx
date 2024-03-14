import { Select, Switch, Tooltip } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';
import styled from 'styled-components';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  hintText: string;
  hintAnchor: string;
}

const UniversalUrlParamComponent: React.FC<UniversalUrlParamComponentProps> = ({
  label,
  options,
  status,
  updateStatus,
  updateValue,
  hintText,
  hintAnchor,
}) => {
  return (
    <MainDiv>
      <div>
        <label>
          {label}{' '}
          <Tooltip
            title={
              <span>
                {hintText} <Link to={`/help/#${hintAnchor}`}>Детальніше</Link>
              </span>
            }
          >
            <FaRegQuestionCircle />
          </Tooltip>
        </label>
      </div>
      <div>
        <StyledSelect options={options} defaultValue={options[0]} onChange={(value: any) => updateValue(value)} />
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

export default UniversalUrlParamComponent;
