import { NavBar, Form, Input, List, Button } from 'antd-mobile'
import styles from './index.module.scss'

type LoginForm = {
  mobie: string
  code: string
}

const Login = () => {
  const onFinish = (values: LoginForm) => {
    console.log(values)
  }

  return (
    <div className={styles.root}>
      <NavBar></NavBar>
      <div className="login-form">
        <h2 className="title">账号登录</h2>
        <Form onFinish={onFinish}>
          <List.Item>
            <Form.Item
              name="mobie"
              className="login-item"
              rules={[
                { required: true, message: '请输入手机号' },
                { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误' }
              ]}
            >
              <Input placeholder="请输入姓名" />
            </Form.Item>
          </List.Item>
          <List.Item className="login-code-extra">
            <Form.Item
              name="code"
              className="login-item"
              rules={[{ required: true, message: '请输入验证码' }]}
            >
              <Input placeholder="请输入验证码" autoComplete="off"></Input>
            </Form.Item>
          </List.Item>
          <Form.Item noStyle>
            <Button
              block
              type="submit"
              color="primary"
              className="login-submit"
            >
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
