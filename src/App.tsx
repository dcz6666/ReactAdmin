import { useState } from 'react'
import {Button} from 'antd'
import { UpCircleOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Button type="primary">按钮</Button>
      <UpCircleOutlined/>
    </div>
  )
}
export default App
