import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;

}

export const Menu: React.FC<IMenu> = ({op1, op2, op3}) => {

    const style = {
        nav: "w-auto p-1 w-2/5 text-preto text-lg m-1 bg-verde"
    }

    return(
        
        <div className="font-robFont text-large flex flex-row align-center justify-start text-center border shadow-2xl p-2 bg-verde font-semibold">
            <Link href={ROUTES.home} className={style.nav}>{op1}</Link>
            <Link href={ROUTES.imc} className={style.nav}>{op2}</Link>
            <Link href={ROUTES.media} className={style.nav}>{op3}</Link>
        </div>
    
    )

}