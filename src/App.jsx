import { useState } from "react"

export function App() {
  let [count, setCount] = useState(0)

  function Contagem(){
    setCount(count + 1)
  }
  function Reiniciar(){
    setCount(count = 0)
  }

  return(
    <>
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-center text-3xl font-bold">Melhor Contador de Clicks do Brasil</h1>
        <div className="flex gap-2 mt-2">
        <button
        className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-4xl p-2 text-blue-300 cursor-pointer"
        onClick={Contagem}
        >Clique em mim</button>
        <button
        className="p-2 rounded-4xl border-1 cursor-pointer"
        onClick={Reiniciar}
        >
        Reiniciar Contagem
        </button>
      </div>
      <p className="mt-2 text-2xl">{count}</p>
    </div>
    </>
  )
}
