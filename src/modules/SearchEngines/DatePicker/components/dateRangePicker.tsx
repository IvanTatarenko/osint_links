import { Switch, Tooltip, DatePicker } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import locale from 'antd/es/date-picker/locale/uk_UA';
import 'dayjs/locale/uk';


const { RangePicker } = DatePicker;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRngerPicker = styled(RangePicker)`
  width: 220px;
  margin-right: 10px;
`;

interface UniversalUrlParamComponentProps {
  label: string;
  hintText: string;
  hintAnchor: string;
  status: boolean;
  updateStatus: () => void;
  updateValue: (value: string) => void;
}

const extractDateComponents = (value: any) => {
  return value.map((date: any) => ({
    day: dayjs(date).date(),
    month: dayjs(date).month() + 1,
    year: dayjs(date).year(),
  }));
};

const DateRangePikerComponent: React.FC<UniversalUrlParamComponentProps> = ({
  label,
  hintText,
  hintAnchor,
  status,
  updateStatus,
  updateValue,
}) => {
  const ChangeDateValue = (value: any) => {
    if(value == null){
      updateValue('');
      return
    }
    const formattedDates = extractDateComponents(value);
    const reange = `&tbs=cdr:1,cd_min:${formattedDates[0].month}/${formattedDates[0].day}/${formattedDates[0].year},cd_max:${formattedDates[1].month}/${formattedDates[1].day}/${formattedDates[1].year}`;
    updateValue(reange);
  };
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
        <StyledRngerPicker locale={locale} format={'DD/MM/YYYY'} placeholder={['З', 'По']} onChange={(value: any) => ChangeDateValue(value)} />
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

export default DateRangePikerComponent;
