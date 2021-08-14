import styled from 'styled-components';
// import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5px;
`;

export const ActivatedButton = styled.button`
  height: 30px;

  color: ${(props) => props.color};
  font-weight: 300;
  font-size: 12px;

  border-radius: 10px;

  background: none;

  border: 1.5px solid ${(props) => props.color};
  padding: 0 5px;

  opacity: 0.6;
`;

export const DesactivedButton = styled.button`
  width: 90px;
  height: 30px;

  color: ${(props) => props.color};
  font-weight: 300;
  font-size: 12px;

  border-radius: 10px;

  background: none;

  border: 1.5px solid ${(props) => props.color};

  opacity: 0.6;
`;
