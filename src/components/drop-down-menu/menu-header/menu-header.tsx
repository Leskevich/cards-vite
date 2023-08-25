import s from './menu-header.module.scss'

import { ProfileIcon, SingOutIcon } from '@/assets/icons'
import { Typography, Dropdown, DropdownItem, DropdownItemWithIcon } from '@/components/ui'
import { Avatar } from '@/components/ui/avatar'

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
    <div className={s.container}>
      <Typography variant={'subtitle1'}>name</Typography>
      <Dropdown trigger={trigger}>
        <>
          <DropdownItem className={s.itemInformation}>
            <Avatar src={srs} />
            <div>
              <Typography variant={'subtitle2'}>{name}</Typography>
              <Typography variant={'caption'}>{email}</Typography>
            </div>
          </DropdownItem>
          <DropdownItemWithIcon icon={<ProfileIcon />} text={'My Profile'} />
          <DropdownItemWithIcon icon={<SingOutIcon />} text={'Sign Out'} />
        </>
      </Dropdown>
    </div>
  )
}
