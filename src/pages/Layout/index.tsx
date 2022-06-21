import styles from './index.module.scss'
import { TabBar } from 'antd-mobile'
import Icon from '@/components/Icon'

const Layout = () => {
  const tabs = [
    { path: '/', icon: 'iconbtn_home', text: '首页' },
    { path: '/profile', icon: 'iconbtn_mine', text: '我的' }
  ]

  return (
    <div className={styles.root}>
      <TabBar className="tab-bar">
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
