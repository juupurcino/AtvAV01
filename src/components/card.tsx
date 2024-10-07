import Image from "next/image";

export const Card = ({titulo, descricao, id} : {
    titulo : string;
    descricao: string;
    id : string;

}) => {

    const style = {

       
    }

    return (
        <>  

            <div className="m-6 flex justify-center items-center flex-wrap flex-row border shadow-lg pb-5 w-72 my-8">
                <div className=" bg-gradient-to-r to-red-500 from-pink-500 text-branco font-bold  w-full text-center h-44 p-10 text-2xl flex items-center justify-center">
                    <h1>{titulo}</h1>
                </div>
                <div className="text-center p-2 m-2 font-normal py-5">
                    <p>{descricao}</p>
                </div>
                <a href={`#${id}`} className="bg-gradient-to-r to-red-500 from-pink-500 text-branco mx-4 py-2 font-medium hover:scale-110 transition ease-in-out w-52 underline-offset-8 text-center cursor-pointer">Read More</a>
            </div>

        </>
      );
}   
