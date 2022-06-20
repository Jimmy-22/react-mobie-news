// 组件props的类型
type Props = {
  // icon的类型
  type: string
  onClick?: () => void
}

const Icon = ({ type, onClick }: Props) => {
  return (
    <svg className="icon" aria-hidden="true" onClick={onClick}>
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}

export default Icon
