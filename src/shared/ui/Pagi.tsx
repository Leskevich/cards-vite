import { useState } from 'react'

import { Pagination } from '@/shared/ui/index.ts'

export const Pagi = () => {
  const [count, SetCount] = useState(1)
  const [perPage, setPerPage] = useState<string>('1')

  return (
    <>
      <Pagination
        count={50}
        page={count}
        onChange={SetCount}
        showPerPageSelect={{ perPage, setPerPage, perPageOptions: ['1', '2'] }}
      />
    </>
  )
}
