import './App.css'
import { CakeView } from './features/cake/CakeView'
import { IcecreamView } from './features/icecream/IcecreamView'
import { UserView } from './features/user/UserView'

function App() {
  return (
    <main className='App'>
      <CakeView />
      <IcecreamView />
      <UserView /> 
    </main>
  )
}

export default App
