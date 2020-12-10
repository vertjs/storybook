import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

export const Primary = () => <Button variant = 'primary'>Primary</Button>
export const Secodary = () => <Button variant = 'secodary'>Secodary</Button>
export const Success = () => <Button variant = 'success'>Success</Button>
export const Danger = () => <Button variant = 'danger'>Danger</Button>