import { Button } from 'antd-mobile'
import Icon from '../../components/Icon'

const Login = () => (
  <div>
    <Icon
      type="iconbtn_like_sel"
      onClick={() => {
        console.log('图标事件触发')
      }}
    />
    <Button color="primary">按钮</Button>
  </div>
)

export default Login
