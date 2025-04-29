import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

export const Header = styled.View`
  flex-direction: column;
`

export const Icon = styled(FontAwesome5).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_500,
}))`
  align-self: center;
`
