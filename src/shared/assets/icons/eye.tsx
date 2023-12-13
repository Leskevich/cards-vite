import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M25.48 12.25c-2.75-5.8-6.9-8.7-12.48-8.7S3.27 6.44.52 12.24a1.75 1.75 0 0 0 0 1.5c2.75 5.8 6.9 8.71 12.48 8.71s9.73-2.91 12.48-8.71c.23-.47.23-1.02 0-1.5ZM13 20.37C8.32 20.37 4.9 18 2.48 13 4.89 8 8.32 5.63 13 5.63S21.1 8 23.52 13c-2.4 5-5.84 7.37-10.52 7.37ZM12.88 7.9a5.1 5.1 0 1 0 0 10.22 5.1 5.1 0 0 0 0-10.22Zm0 8.36a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
