import React, {useState, useMemo} from 'react'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <div className='h-screen relative'>
      {orbMemo}
      <div className='p-[2rem] h-full flex gap-[2rem]'>
        <Navigation active={active} setActive={setActive} />
        <main className='flex-1 backdrop-blur-sm rounded-[32px] overflow-x-hidden border-2 border-[#fff] bg-[rgba(252, 246, 249, 0.78)] bg-background'>
          {displayData()}
        </main>
      </div>
    </div>

  );
}

export default App;
