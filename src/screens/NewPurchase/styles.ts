import FontAwesome from '@expo/vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const Icon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_500,
}))`
  align-self: center;
`
