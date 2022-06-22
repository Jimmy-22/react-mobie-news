import { useStore } from '@/store'
import { useEffect } from 'react'
// import { observer } from 'mobx-react-lite'

const Profile = () => {
  const { userStore } = useStore()
  useEffect(() => {
    // 触发action
    userStore.getUser()
  }, [userStore])
  return <div></div>
}

// export default observer(Profile)
export default Profile
