import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Pagination } from '.'

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta<typeof Pagination>

export const Default = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState('7')
  const TOTAL_PAGES_COUNT = 10

  return (
    <Pagination
      onChange={setPage}
      count={TOTAL_PAGES_COUNT}
      page={page}
      showPerPageSelect={{ perPage, setPerPage, perPageOptions: ['7', '10', '15'] }}
    />
  )
}

export const DefaultWithTwoPages = () => {
  const [page, setPage] = useState(1)
  const TOTAL_PAGE_COUNT = 2

  return <Pagination onChange={setPage} count={TOTAL_PAGE_COUNT} page={page} />
}

export const DefaultWithOnePages = () => {
  const [page, setPage] = useState(1)
  const TOTAL_PAGE_COUNT = 1

  return <Pagination onChange={setPage} count={TOTAL_PAGE_COUNT} page={page} />
}
