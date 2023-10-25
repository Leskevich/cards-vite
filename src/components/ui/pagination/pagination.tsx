import { FC } from 'react'

import { clsx } from 'clsx'

import { Select, Typography } from '..'

import s from './pagination.module.scss'
import { usePagination } from './usePagination'

import { ArrowBack } from '@/assets/icons/arrow-back.tsx'
import { ArrowNext } from '@/assets/icons/arrow-next.tsx'

export type PaginationProps = {
  count: number
  page: number
  onChange: (page: number) => void
  siblings?: number
  showPerPageSelect?: {
    perPage: string
    perPageOptions: string[]
    setPerPage: (itemPerPage: string) => void
  }
}

const classNames = {
  root: s.root,
  container: s.container,
  selectBox: s.selectBox,
  select: s.select,
  item: s.item,
  dots: s.dots,
  icon: s.icon,
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && s.selected)
  },
}

export const Pagination: FC<PaginationProps> = ({
  onChange,
  count,
  page,
  siblings,
  showPerPageSelect,
}) => {
  const {
    paginationRange,
    isLastPage,
    isFirstPage,
    handlePreviousPageClicked,
    handleNextPageClicked,
    handleMainPageClicked,
  } = usePagination({
    page,
    count,
    onChange,
    siblings,
  })

  debugger

  return (
    <div className={classNames.root}>
      <div className={classNames.container}>
        <PrevButton onClick={handlePreviousPageClicked} disabled={isFirstPage} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton onClick={handleNextPageClicked} disabled={isLastPage} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          perPageOptions={showPerPageSelect.perPageOptions}
          perPage={showPerPageSelect.perPage}
          setPerPage={showPerPageSelect.setPerPage}
        />
      )}
    </div>
  )
}

type NavigationButtonProps = {
  onClick: () => void
  disabled?: boolean
}

type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}

const Dots: FC = () => {
  return <span className={classNames.dots}>&#8230;</span>
}
const PageButton: FC<PageButtonProps> = ({ onClick, disabled, selected, page }) => {
  return (
    <button
      onClick={onClick}
      disabled={selected || disabled}
      className={classNames.pageButton(selected)}
    >
      {page}
    </button>
  )
}
const PrevButton: FC<NavigationButtonProps> = ({ onClick, disabled }) => {
  return (
    <button className={classNames.item} onClick={onClick} disabled={disabled}>
      <ArrowNext className={classNames.icon} size={16} />
    </button>
  )
}

const NextButton: FC<NavigationButtonProps> = ({ onClick, disabled }) => {
  return (
    <button className={classNames.item} onClick={onClick} disabled={disabled}>
      <ArrowBack className={classNames.icon} size={16} />
    </button>
  )
}

type MainPaginationButtonsProps = {
  paginationRange: (number | string)[]
  currentPage: number
  onClick: (pageNumber: number) => () => void
}

const MainPaginationButtons: FC<MainPaginationButtonsProps> = ({
  paginationRange,
  currentPage,
  onClick,
}) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} page={page} selected={isSelected} onClick={onClick(page)} />
      })}
    </>
  )
}

export type PerPageSelectProps = {
  perPage: string
  perPageOptions: string[]
  setPerPage: (itemPerPage: string) => void
}

export const PerPageSelect: FC<PerPageSelectProps> = ({ perPage, perPageOptions, setPerPage }) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value: value,
  }))

  return (
    <div className={classNames.selectBox}>
      <Typography variant={'body2'}>Показать</Typography>
      <Select
        variant={'pagination'}
        className={classNames.select}
        value={perPage}
        selectOptions={selectOptions}
        onValueChange={setPerPage}
      />
      <Typography variant={'body2'}>на странице</Typography>
    </div>
  )
}
