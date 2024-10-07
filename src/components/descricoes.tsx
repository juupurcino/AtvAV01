import Image from "next/image";

import react from "@/assets/react.webp";
import tailwind from "@/assets/tailwind.png";
import next from "@/assets/next.png";
import jquery from "@/assets/jquery.png";

export const Descricoes = ({texto, id, imagem} : {

    id : string;
    texto: string;
    imagem: string;

}) => {

    return (
        <>  

        <div id={`${id}`} className="flex items-center justify-center text-center flex-col m-12">
                <div className="flex justify-center items-center">
                <Image src={imagem === "react" ? react : imagem === "tailwind" ? tailwind : imagem === "jquery" ? jquery : next} alt="imagem" className="w-72 h-auto"/>
                </div>
                <div>
                    <p className="text-lg mx-8">{texto}</p>
                </div>
        </div>

        </>
      );
}   
