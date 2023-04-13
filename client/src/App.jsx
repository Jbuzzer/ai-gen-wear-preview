import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <main className="app transition-all ease-in absolute top-0 w-full h-full">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
