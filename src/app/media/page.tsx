"use client"
import { useState } from 'react'

const Media: React.FC = () => {
    const [num1, setNum1] = useState<string>("")
    const [num2, setNum2] = useState<string>("")
    const [num3, setNum3] = useState<string>("")
    const [num4, setNum4] = useState<string>("")
    const [num5, setNum5] = useState<string>("")
    
    const [resposta, setResposta] = useState<number | undefined>()
    const erro = "Insira um número válido"
    const passou = "Passou"
    const reprovado = "Reprovado"

    const handleAll = ({a,b,c,d,e}:  {a: string, b: string, c: string, d: string, e: string}) => {
        const num1 = parseFloat(a)
        const num2 = parseFloat(b)
        const num3 = parseFloat(c)
        const num4 = parseFloat(d)
        const num5 = parseFloat(e)
        

        if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4) && !isNaN(num5)){
            setResposta((num1 + num2 + num3 + num4 + num5) / 5)

        } else{
            setResposta(undefined)

        }
    }

    return (
        <div className="flex flex-col mt-10 items-center w-full h-screen">
            <h1 className='font-bold text-[3em] text-azul'>Calculo de Média</h1>
            <div className='bg-branco border-8 rounded-2xl p-6 m-4 border-bege w-2/4'>

                <h5 className='text-preto text-2xl font-semibold'>MÉDIAS</h5>
                <div>
                    <input className='text-gray-500 font-semibold p-2 border-b-2  border-b-azul outline-none w-full mt-4' type="text" placeholder="Número 1" value={num1} onChange={(e) => setNum1(e.target.value)}/>
                </div>
                <div>
                    <input className='text-gray-500 font-semibold p-2 border-b-2  border-b-azul outline-none w-full mt-4' type="text" placeholder="Número 2" value={num2} onChange={(e) => setNum2(e.target.value)}/>
                </div>
                <div>
                    <input className='text-gray-500 font-semibold p-2 border-b-2  border-b-azul outline-none w-full mt-4' type="text" placeholder="Número 3" value={num3} onChange={(e) => setNum3(e.target.value)}/>
                </div>
                <div>
                    <input className='text-gray-500 font-semibold p-2 border-b-2  border-b-azul outline-none w-full mt-4' type="text" placeholder="Número 4" value={num4} onChange={(e) => setNum4(e.target.value)}/>
                </div>
                <div>
                    <input className='text-gray-500 font-semibold p-2 border-b-2  border-b-azul outline-none w-full mt-4' type="text" placeholder="Número 5" value={num5} onChange={(e) => setNum5(e.target.value)}/>
                </div>
                
                <div>
                    <div className='bg-white flex flex-col items-center text-[1.2em] font-bold rounded-md m-4 mt-8'>
                        <h2 className='text-preto text-lg font-normal'>Resultado</h2>
                        <p className='text-2xl font-normal text-center'>{!isNaN(resposta ?? NaN) ? resposta?.toFixed(2) : erro}</p>
                        <p className='text-2xl font-normal text-center'>{resposta && resposta >= 7 ? passou : reprovado}</p>
                    </div>
                </div>
                
            </div>
                <div className='flex justify-center w-6/12'>
                    <button className='bg-bege text-branco font-extrabold m-2 p-3 text-[1.2em] rounded-md hover:scale-110 transition ease-in-out w-52 underline-offset-8' onClick={() => handleAll({a: num1, b: num2, c: num3, d: num4, e: num5})}>Calcular</button>
                </div>
        </div>
    )
}

export default Media;