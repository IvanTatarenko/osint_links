import { Input, Switch, Tooltip } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
  hintText: string;
  hintAnchor: string;
}

const UniversalDorkComponent: React.FC<UniversalDorkComponentProps> = ({
  updateText,
  updateStatus,
  status,
  placeholder,
  label,
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
