import classnames from 'classnames'
import { useState } from 'react'
import './index.css'

function ClassNames() {
  const [showFlag, setShowFlag] = useState(true)
  return (
    <div className={classnames({ active: showFlag })}>
      <svg className="icon" aria-hidden="true">
        {/* 使用时，只需要将此处的 iconbtn_like_sel 替换为 icon 的名称即可*/}
        <use xlinkHref="#iconbtn_like_sel"></use>
      </svg>
      this is test color
      <button onClick={() => setShowFlag(!showFlag)}>switch</button>
    </div>
  )
}

export default ClassNames
