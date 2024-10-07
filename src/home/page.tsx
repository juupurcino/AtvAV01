import type { Metadata } from "next";

//Internos
import {Card} from "@/components/card";

export default function Home() {

  const dados: {titulo: string; descricao: string;}[] = [

    {

      titulo: "Post One",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {

      titulo: "Post One",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {

      titulo: "Post One",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    {

      titulo: "Post One",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

    },
    
  ]


  return (

    <>

    <div className="flex flex-wrap justify-center">
      {dados.map((item, index) => (
        <div key={index}>
          <Card titulo ={item.titulo} descricao={item.descricao}/>
        </div>
      ))}
        <div>
            <h1>ooooooooola</h1>
        </div>
    </div>
    </>

  );
}
