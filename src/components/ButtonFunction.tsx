import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  className: string;
  fuction: void;
};

const ButtonWrapper = styled.button`
  background-color: #ad0003;
  user-select: none;
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 14px 24px;
`;

export const ButtonFunction: FC<Props> = ({ text, className, fuction }) => {
    return <>
    <ButtonWrapper type='button' className={className} onClick={() => fuction}>
      {text}
    </ButtonWrapper>
    </>;
};
