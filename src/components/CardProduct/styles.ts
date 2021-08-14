import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 230px;
  height: 220px;

  margin: 12px 12px;

  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 12px -1px #000000;
  box-shadow: 0px 0px 4px 0.5px #c4c4c4;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  text-align: center;

  font-size: 16px;
  color: ${colors.card.title};

  margin-top: 20px;
`;

export const DescriptionIten = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;
`;

export const Brand = styled.span`
  color: #b6b6b6;
  font-size: 14px;
  margin-top: 10px;
`;

export const Quantity = styled.span`
  color: #b6b6b6;
  font-size: 14px;
  margin-top: 10px;
`;

export const Price = styled.span`
  color: #b6b6b6;
  font-size: 14px;
  margin-top: 10px;
`;

export const Category = styled.span`
  color: #b6b6b6;
  font-size: 14px;
  margin-top: 10px;
`;
