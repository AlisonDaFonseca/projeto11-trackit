import Habito from "../components/Habito";
import HabitoSalvo from "../components/HabitoSalvo";
import { useState } from "react";

export default function CardHabito(){
    const [card, setCard] = useState(false);

    return(
        <>
        {card === false && 
            <>
                <Habito setCard={setCard}/>
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
            </>
            }

            {card === true &&
                <HabitoSalvo />
            }
        </>
    );
}