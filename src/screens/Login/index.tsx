import { Highlight } from '@/src/components/Highlight'
import { router } from 'expo-router'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Header, Icon } from './styles'

export function Login() {
  return (
    <Container>
      <Header>
        <Icon name='emoji-people' />

        <Highlight
          title='Bem-vindo de volta'
          subtitle='Faça o login para continuar'
        />
      </Header>

      <Input placeholder='E-mail' keyboardType='email-address' />
      <Input placeholder='Senha' secureTextEntry />

      <Button
        type='PRIMARY'
        activeOpacity={0.8}
        title='Entrar'
        icon='login'
        onPress={() => router.replace('/(tabs)/home')}
      />
      <Button
        type='TERTIARY'
        activeOpacity={0.8}
        title='Registrar'
        icon='edit'
        onPress={() => router.push('/(modals)/register')}
      />
    </Container>
  )
}
