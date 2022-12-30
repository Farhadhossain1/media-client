import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './route/route';




function App() {
  return (
    <div className='max-w-[1240px] mx-auto'> 
     <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
      <RouterProvider router={router}></RouterProvider> 
      <Toaster></Toaster>
    </div>
  );
}

export default App;
