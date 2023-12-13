import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M25.48 12.25a17.8 17.8 0 0 0-3.64-5.26l-1.47 1.48A15.53 15.53 0 0 1 23.52 13c-2.4 5-5.84 7.37-10.52 7.37-1.4 0-2.7-.22-3.88-.65l-1.6 1.6c1.64.76 3.47 1.14 5.48 1.14 5.58 0 9.74-2.9 12.48-8.72a1.75 1.75 0 0 0 0-1.5Zm-1.84-9.3L22.4 1.7a.23.23 0 0 0-.33 0L18.9 4.88A12.78 12.78 0 0 0 13 3.54c-5.58 0-9.74 2.9-12.48 8.71a1.75 1.75 0 0 0 0 1.5 17.43 17.43 0 0 0 3.96 5.55L1.4 22.37a.23.23 0 0 0 0 .33l1.24 1.24a.23.23 0 0 0 .32 0L23.64 3.27a.23.23 0 0 0 0-.33ZM2.48 13C4.89 8 8.32 5.63 13 5.63c1.58 0 3.02.27 4.33.82L15.29 8.5a5.1 5.1 0 0 0-6.91 6.91l-2.42 2.42A15.06 15.06 0 0 1 2.48 13Zm7.15 0a3.25 3.25 0 0 1 4.25-3.1L9.78 14c-.1-.32-.15-.66-.15-1Z"
    />
    <path
      fill="#ff"
      d="m12.88 16.25-.3-.01-1.53 1.53a5.11 5.11 0 0 0 6.6-6.6l-1.53 1.53a3.25 3.25 0 0 1-3.24 3.55Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
