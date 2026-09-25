import React, {use} from "react";
import type { Itechnologies } from "../../Types/Technologies";
import Technology from "./Technology";

interface Technologiesprops {
  technologiesPromise: Promise<Itechnologies[]>
}
const Technologies = ({ technologiesPromise }:Technologiesprops) => {
    
    const technologies = use(technologiesPromise);
    console.log(technologies);
    return (
        <div className=" container mx-auto ">
         <div className="mb-10 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-3 tracking-tight">
        Explore the {' '}
        <span className="bg-linear-to-r from-gradient-vividrose  to-gradient-mediumslateblue bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-text-h text-base">
        Pick one technology per category to build your ideal stack.
      </p>
    </div>
         <div>
            <div className="w-3/4">
            <Technology technologies={technologies}/>
            </div>

            <div className="w-1/4"></div>
         </div>
            
            
            
        </div>
    );
};

export default Technologies;