import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-accent animate-pulse">
        Portafolio en Construcción 🚀
      </h1>
    </div>
    </>
  )
}

export default App
