import styled from 'styled-components';
// import { colors } from '../../styles/colors';

type PropsButton = {
  active: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5px;
`;

export const Button = styled.button`
  height: 30px;

  color: ${(props: PropsButton) => (props.active ? 'gren' : `red`)};
  font-weight: 300;
  font-size: 12px;

  border-radius: 10px;

  background: none;

  border: 1.5px solid ${(props: PropsButton) => (props.active ? 'gren' : `red`)};
  padding: 0 5px;

  opacity: 0.6;
`;
