import { ComponentProps } from 'react'

import s from './avatar.module.scss'

import defAva from '@/shared/assets/images/default-ava.jpg'

export type AvatarProps = {
  name?: string
  src?: ComponentProps<'img'>['src']
  size?: ComponentProps<'img'>['width']
}
export const Avatar = ({ name, src, size = 36 }: AvatarProps) => {
  return (
    <img
      className={s.avatar}
      src={src ?? defAva}
      alt={`${name} avatar`}
      width={size}
      height={size}
    />
  )
}
