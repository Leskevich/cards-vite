import { forwardRef } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import { Typography } from '..'

import style from './slider.module.scss'

export const Slider = forwardRef<HTMLSpanElement, RadixSlider.SliderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={clsx(style.SliderWrapper, className)}>
        <div className={style.cardNumber}>
          <Typography
            aria-label="minValue"
            variant="body1"
            as="span"
            style={{ position: 'absolute' }}
          >
            {props.value?.[0]}
          </Typography>
        </div>
        <RadixSlider.Root
          minStepsBetweenThumbs={1}
          className={style.SliderRoot}
          {...props}
          ref={ref}
        >
          <RadixSlider.Track className={style.SliderTrack}>
            <RadixSlider.Range className={style.SliderRange} />
          </RadixSlider.Track>
          <RadixSlider.Thumb key={1} className={style.SliderThumb} />
          <RadixSlider.Thumb key={2} className={style.SliderThumb} />
        </RadixSlider.Root>
        <div className={style.cardNumber}>
          <Typography
            aria-label="maxValue"
            variant="body1"
            as="span"
            style={{ position: 'absolute' }}
          >
            {props.value?.[1]}
          </Typography>
        </div>
      </div>
    )
  }
)
