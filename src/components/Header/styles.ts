import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 170px;

  background: ${colors.header.background};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 768px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${colors.header.primary};

  font-size: 20px;
  font-weight: 400;

  padding: 0 20px;
`;

export const SubTitle = styled.span`
  color: ${colors.header.primary};

  font-size: 18px;
  font-weight: 400;

  padding: 0 20px;
`;

export const ContentButton = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: flex-start;
`;

export const OpacityButton = styled.button`
  width: 100%;
  height: 45px;

  background: ${colors.header.button};
  border: none;
  border-radius: 3px;

  color: ${colors.header.secondary};
  font-size: 16px;
  font-weight: 300;

  text-align: center;

  padding: 0 20px;
  margin: 0 20px;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
