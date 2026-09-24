import React, {use} from "react";
import type { Itechnologies } from "../../Types/Technologies";
interface Technologiesprops {
   technologies:  Promise<Itechnologies[]>
}
const Technologies = ({ technologiesPromise }:Technologiesprops) => {
    
    const technologies = use(technologiesPromise);
    console.log(technologies, "technologies");
    return (
        <div>
            
            
            
        </div>
    );
};

export default Technologies;