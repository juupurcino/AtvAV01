import type { Metadata } from "next";

//Internos
import {Card} from "@/components/card";
import {Descricoes} from "@/components/descricoes";

export default function Home() {

  const dados: {id: string; titulo: string; descricao: string; texto: string; imagem:string}[] = [

    {
      id: "1",
      titulo: "React",
      imagem: "react",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      texto: "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps. Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations."
    },
    {
      id: "2",
      titulo: "Tailwind",
      imagem: "tailwind",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      texto: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
    },
    {
      id: "3",
      titulo: "Next",
      imagem: "next",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      texto: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components."
    },
    {
      id: "4",
      titulo: "JQuery",
      imagem: "jquery",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      texto: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript."
    },
    
  ]


  return (

    <>

    <div className="scroll-smooth">

    <div className="flex flex-wrap justify-center">
      {dados.map((item, index) => (
        <div key={index}>
          <Card titulo ={item.titulo} descricao={item.descricao} id={item.id}/>
        </div>
      ))}

    <div className="flex flex-wrap justify-center items-center">

      {dados.map((item, index) => (
        <div key={index}>
          <Descricoes  id={item.id} texto={item.texto} imagem={item.imagem}/>
        </div>
      ))}
    </div>

    </div>
    </div>
    </>

  );
}
