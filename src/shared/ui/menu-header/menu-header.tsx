import s from './menu-header.module.scss'

import { ProfileIcon, SingOutIcon } from '@/shared/assets'
import { Avatar, Dropdown, DropdownItem, DropdownItemWithIcon, Typography } from '@/shared/ui'

type Props = {
  name: string
  email: string
  srs?: string
}

export const MenuHeader = (props: Props) => {
  const { srs, name, email } = props
  const trigger = (
    <button className={s.trigger}>
      <Avatar src={srs} />
    </button>
  )

  return (
    <Dropdown trigger={trigger}>
      <DropdownItem className={s.itemInformation}>
        <Avatar src={srs} />
        <div>
          <Typography variant={'subtitle2'}>{name}</Typography>
          <Typography variant={'caption'}>{email}</Typography>
        </div>
      </DropdownItem>
      <DropdownItemWithIcon icon={<ProfileIcon />} text={'My Profile'} />
      <DropdownItemWithIcon icon={<SingOutIcon />} text={'Sign Out'} />
    </Dropdown>
  )
}
