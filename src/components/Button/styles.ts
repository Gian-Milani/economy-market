import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  gap: 10px; 
  width: 100%;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY'
      ? theme.COLORS.GREEN_500
      : type === 'SECONDARY'
        ? theme.COLORS.RED_DARK
        : type === 'TERTIARY'
          ? theme.COLORS.GRAY_600
          : theme.COLORS.GRAY_500};

  border-radius: 6px;
  border: 1px solid ${({ theme, type }) =>
    type === 'TERTIARY' ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_600};
  
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``
