import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;

  cursor: pointer;
`;

export const Content = styled.div`
  width: 450px;

  background: ${colors.header.primary};

  border-radius: 10px;

  display: flex;

  flex-direction: column;
  align-items: center;

  padding: 10px 0;
  margin: 0 10px;
`;

export const CloseContainer = styled.div`
  width: 100%;
  height: 5%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding-right: 10px;
`;

export const Form = styled.form`
  width: 85%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;

  margin: 8px 0;
`;

export const Label = styled.label`
  font-size: 16px;

  color: ${colors.card.title};
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;

  border: 1px solid #c4c4c4;
  border-radius: 10px;

  padding-left: 10px;

  outline: 0;
`;

export const Btn = styled.button`
  background: ${colors.header.background};
  color: ${colors.header.primary};

  font-size: 16px;

  width: 60%;
  height: 50px;

  border-radius: 15px;

  margin: 10px 0;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: 0.3s;
  }
`;
