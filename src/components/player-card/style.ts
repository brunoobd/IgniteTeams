import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  padding: 0 0 0 16px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
  gap: 10px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.GRAY_200};
    `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;
