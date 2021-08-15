import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5px 0 10px 0;
`;

export const BtnSold = styled.button`
  height: 30px;

  font-weight: 300;
  font-size: 12px;

  border-radius: 5px;

  background: ${colors.sales.background};
  color: ${colors.sales.title};

  padding: 0 5px;

  opacity: 0.6;

  cursor: pointer;

  &:hover {
    background: ${colors.sales.secondary};

    transition: 0.3s;
  }
`;
