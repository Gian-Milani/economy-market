import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 24px;
`
export const Form = styled.View`
  width: 100%;
  height: 26%;
  gap: 10px;
  border-radius: 6px;
`

export const ListContainer = styled.View`
  height: 40%;
  padding-bottom: 30px;
  gap: 5px;
`

export const NumberOfProducts = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`

export const ButtonsContainer = styled.View`
  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  flex-direction: column;
  gap: 10px
`
