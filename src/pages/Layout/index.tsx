import styles from './index.module.scss'
import { TabBar } from 'antd-mobile'
import Icon from '@/components/Icon'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Layout = () => {
  const tabs = [
    { path: '/', icon: 'iconbtn_home', text: '首页' },
    { path: '/profile', icon: 'iconbtn_mine', text: '我的' }
  ]
  const navigate = useNavigate()
  const tabChange = (key: string) => {
    navigate(key)
  }
  const location = useLocation()

  return (
    <div className={styles.root}>
      <Outlet />
      <TabBar
        className="tab-bar"
        onChange={tabChange}
        activeKey={location.pathname}
      >
        {tabs.map((item) => (
          <TabBar.Item
            key={item.path}
            icon={(active) => (
              <Icon type={active ? `${item.icon}_sel` : item.icon} />
            )}
            title={item.text}
          />
        ))}
      </TabBar>
    </div>
  )
}

export default Layout
