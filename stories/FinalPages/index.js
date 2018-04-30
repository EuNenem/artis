import React from 'react'
import { storiesOf } from '@storybook/react'

import Error from '../../src/components/MessageInfo/Error'
import Analysis from '../../src/components/MessageInfo/Analysis'
import SuccessInfo from '../../src/components/MessageInfo/Success'
import style from './style.css'

const creditCard = {
  installments: 10,
  installmentValue: 250,
  installmentRate: 1.5,
}

const boleto = {
  barcode: 12345678901234567890,
  name: 'meuboleto',
  url: 'www.pagar.me',
  expireAt: '2017-12-24',
}

const amount = 1500

storiesOf('Final Pages', module)
  .add('Error', () => (
    <div
      className={style.bg}
    >
      <Error />
    </div>
  ))
  .add('Analysis', () => (
    <div
      className={style.bg}
    >
      <Analysis />
    </div>
  ))
  .add('Success', () => (
    <div
      className={style.bg}
    >
      <SuccessInfo
        amount={amount}
        creditCard={creditCard}
      />
      <SuccessInfo
        amount={amount}
        boleto={boleto}
      />
    </div>
  ))
