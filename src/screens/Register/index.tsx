import { Button } from '@/src/components/Button'
import { Highlight } from '@/src/components/Highlight'
import { Input } from '@/src/components/Input'
import React from 'react'
import { Container, Header, Icon } from './styles'

export function Register() {
  return (
    <Container>
      <Header>
        <Icon name='address-card' />

        <Highlight
          title='Crie sua conta'
          subtitle='Preencha os campos abaixo'
        />
      </Header>

      <Input placeholder='Nome completo' />
      <Input placeholder='CPF' keyboardType='number-pad' />
      <Input placeholder='E-mail' keyboardType='email-address' />
      <Input placeholder='Senha' secureTextEntry />

      <Button activeOpacity={0.8} title='Registar' icon='edit' />
    </Container>
  )
}
