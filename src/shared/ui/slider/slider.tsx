import { FC, useState } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'

import { Typography } from '@/shared/ui'

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

  return (
    <div className={s.container}>
      {label && <Typography variant={'body2'}>{label}</Typography>}
      <div className={s.wrapper}>
        <div className={s.values}>{sliderValues[0]}</div>
        <SliderRadix.Root
          value={sliderValues}
          max={maxValue}
          className={clsx(className, s.root)}
          step={step}
          onValueCommit={onValueCommit}
          onValueChange={onChangeHandler}
        >
          <SliderRadix.Track className={s.track}>
            <SliderRadix.Range className={s.range} />
          </SliderRadix.Track>
          <SliderRadix.Thumb className={s.thumb} />
          <SliderRadix.Thumb className={s.thumb} />
        </SliderRadix.Root>
        <div className={s.values}>{sliderValues[1]}</div>
      </div>
    </div>
  )
}
