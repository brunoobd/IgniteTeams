import styled from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  flex: 1;
  gap: 30px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Form = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 6px;
`;
