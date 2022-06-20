import classnames from 'classnames'
import { useState } from 'react'
import './index.css'
function ClassNames() {
  const [showFlag, setShowFlag] = useState(true)
  return (
    <div className={classnames({ active: showFlag })}>
      this is test color
      <button onClick={() => setShowFlag(!showFlag)}>switch</button>
    </div>
  )
}

export default ClassNames
