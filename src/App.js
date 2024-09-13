import { useOutlet } from 'react-router';
import './App.css'
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';



function App() {

  //현재 route 된 정보를 출력해주는 hook
  const currentOutlet = useOutlet()
  return (

    <>
      <Navbar/>
      <div className='content-area'>
        <Sidebar/>
        <div className='maincontent'>{currentOutlet}</div>
      </div>
    </>
  );
}

export default App;
