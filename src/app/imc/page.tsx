"use client"
import { useState } from 'react'

const Imc: React.FC = () => {
    const [peso, setPeso] = useState<string>("")
    const [altura, setAltura] = useState<string>("")
    
    const [resposta, setResposta] = useState<number | undefined>()
    const erro = "Insira um número válido"

    const handleAll = ({a,b}:  {a: string, b: string}) => {
        const peso = parseFloat(a)
        const altura = parseFloat(b)
        const imc = peso / (altura * altura)

        if(!isNaN(peso) && !isNaN(altura)){
            setResposta(peso !== 0 && altura!== 0 ? imc : undefined)

        } else{
            setResposta(undefined)

        }
    }

    return (
        <div className="flex flex-col mt-10 items-center w-full h-screen">
            <h1 className='font-bold text-[3em] text-azul'>Calculo IMC</h1>
            <div className='bg-branco border-8 rounded-2xl p-6 m-4 border-bege w-2/4'>

                <h5 className='text-preto text-2xl font-semibold'>IMC</h5>
                <div>
                    <input className='text-gray-500 font-semibold p-2 border-b-2  border-b-azul outline-none w-full mt-4' type="text" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)}/>
                </div>
                <div>
                    <input className='text-gray-500 font-semibold p-2 border-b-2  border-b-azul outline-none w-full mt-4' type="text" placeholder="Altura (m)" value={altura} onChange={(e) => setAltura(e.target.value)}/>
                </div>
                <div>
                    <div className='bg-white flex flex-col items-center text-[1.2em] font-bold rounded-md m-4 mt-8'>
                        <h2 className='text-preto text-lg font-normal'>Resultado</h2>
                        <p className='text-2xl font-normal text-center'>{!isNaN(resposta ?? NaN) ? resposta?.toFixed(2) : erro}</p>
                    </div>
                </div>
                
            </div>
                <div className='flex justify-center w-6/12'>
                    <button className='bg-bege text-branco font-extrabold m-2 p-3 text-[1.2em] rounded-md hover:scale-110 transition ease-in-out w-52 underline-offset-8' onClick={() => handleAll({a: peso, b: altura})}>Calcular</button>
                </div>
        </div>
    )
}

export default Imc;