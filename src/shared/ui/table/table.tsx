import { ComponentProps, ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

import { Sort } from '@/features/decks/model'
import { Chevron } from '@/shared/assets'
import { Typography } from '@/shared/ui'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      table: clsx(className, s.table),
    }

    return <table className={classNames.table} {...rest} ref={ref} />
  }
)
export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ ...rest }, ref) => {
    return <thead {...rest} ref={ref} />
  }
)

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...rest }, ref) => {
    return <tbody {...rest} ref={ref} />
  }
)

export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ ...rest }, ref) => {
    return <tr {...rest} ref={ref} />
  }
)

export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, children, ...rest }, ref) => {
    const classNames = {
      headCell: clsx(className, s.headCell),
    }

    return (
      <th className={classNames.headCell} {...rest} ref={ref}>
        <span>{children}</span>
      </th>
    )
  }
)
export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      cell: clsx(className, s.tableCell),
    }

    return <td className={classNames.cell} {...rest} ref={ref} />
  }
)

export const TableEmpty: FC<ComponentProps<'div'> & { mt?: string; mb?: string }> = ({
  className,
  mt = '89px',
  mb,
}) => {
  const classNames = {
    empty: clsx(className, s.empty),
  }

  return (
    <Typography
      variant={'h2'}
      className={classNames.empty}
      style={{ marginTop: mt, marginBottom: mb }}
    >
      Пока тут еще нет данных! :(
    </Typography>
  )
}

export type Column = {
  title: string
  key: string
  sortable?: boolean
}
type Props = Omit<
  {
    columns: Column[]
    sort?: Sort
    onSort?: (sort: Sort) => void
  } & ComponentPropsWithoutRef<'thead'>,
  'children'
>

export const HeaderTable = (props: Props) => {
  const { onSort, sort, columns, ...restProps } = props

  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) return

    if (sort?.key !== key) return onSort({ key, direction: 'asc' })

    if (sort.direction === 'desc') return onSort(null)

    return onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  const classNames = {
    chevron: sort?.direction === 'asc' ? '' : s.chevronDown,
  }

  return (
    <TableHead {...restProps}>
      <TableRow>
        {columns.map(({ title, key, sortable }) => (
          <TableHeadCell key={key} onClick={handleSort(key, sortable)}>
            {title}
            {sort?.key === key ? <Chevron className={classNames.chevron} /> : ''}
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
