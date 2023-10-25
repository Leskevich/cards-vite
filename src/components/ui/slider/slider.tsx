import { FC, useState } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import { Typography } from '@/components/ui'

export type SliderPropsType = {
  minValue: number
  maxValue: number
  step?: number
  label?: string
  className?: string
  onValueCommit: (values: number[]) => void
}

export const Slider: FC<SliderPropsType> = props => {
  const { minValue = 0, maxValue = 100, label, className, step = 1, onValueCommit } = props

  const [sliderValues, setSliderValues] = useState<number[]>([minValue, maxValue])
  const onChangeHandler = (values: number[]) => setSliderValues(values)

  const classNames = {
    container: clsx(s.container, className),
    wrapper: clsx(s.wrapper),
    values: clsx(s.values),
    root: clsx(s.root),
    track: clsx(s.track),
    range: clsx(s.range),
    thumb: clsx(s.thumb),
  }

  return (
    <div className={classNames.container}>
      {label && <Typography variant={'body2'}>{label}</Typography>}
      <div className={classNames.wrapper}>
        <div className={classNames.values}>{sliderValues[0]}</div>
        <SliderRadix.Root
          value={sliderValues}
          max={maxValue}
          className={classNames.root}
          step={step}
          onValueCommit={onValueCommit}
          onValueChange={onChangeHandler}
        >
          <SliderRadix.Track className={classNames.track}>
            <SliderRadix.Range className={classNames.range} />
          </SliderRadix.Track>
          <SliderRadix.Thumb className={classNames.thumb} />
          <SliderRadix.Thumb className={classNames.thumb} />
        </SliderRadix.Root>
        <div className={classNames.values}>{sliderValues[1]}</div>
      </div>
    </div>
  )
}
