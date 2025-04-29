import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 15px;
`

export const Header = styled.View`
  flex-direction: column;
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_500,
}))`
  align-self: center;
`
