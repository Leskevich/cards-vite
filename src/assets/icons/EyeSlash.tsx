import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} ref={ref} {...props}>
    <path
      d="M3.93 2.74a.86.86 0 0 0-.28-.18.9.9 0 0 0-.32-.06.9.9 0 0 0-.32.06.85.85 0 0 0-.51.77c0 .22.09.44.24.6l4.7 4.69a2.92 2.92 0 0 0 3.94 3.95l4.7 4.69a.82.82 0 0 0 .6.25.82.82 0 0 0 .58-.25.82.82 0 0 0 .25-.59.82.82 0 0 0-.25-.6ZM10 11.25A1.25 1.25 0 0 1 8.75 10v-.06l1.3 1.3Zm0 0"
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fillOpacity: 1,
      }}
    />
    <path
      d="M10.18 14.17c-3.58.08-5.93-3-6.66-4.17.52-.83 1.15-1.6 1.86-2.27L4.17 6.56c-.94.89-1.75 1.9-2.4 3.02a.88.88 0 0 0-.1.42c0 .14.03.29.1.42.53.9 3.34 5.41 8.25 5.41h.2a7.87 7.87 0 0 0 2.7-.56l-1.32-1.31c-.46.12-.94.19-1.42.2Zm8.05-4.59c-.54-.92-3.48-5.56-8.46-5.41-.92.03-1.83.21-2.69.56L8.4 6.04c.46-.12.94-.19 1.42-.2 3.57-.1 5.92 2.98 6.66 4.16-.53.84-1.17 1.6-1.9 2.27l1.25 1.17c.96-.88 1.77-1.9 2.43-3.02a.8.8 0 0 0 .1-.42.82.82 0 0 0-.13-.42Zm0 0"
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fillOpacity: 1,
      }}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
