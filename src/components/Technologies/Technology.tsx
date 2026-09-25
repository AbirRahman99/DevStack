import React from 'react';
import type { Itechnologies } from '../../Types/Technologies';

import TechnologyCard from './TechnologyCard';
interface TechnologyProps {
  technologies: Itechnologies[];
  selectedTechnologies: Itechnologies[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<Itechnologies[]>>;
}

const Technology = ({ technologies, selectedTechnologies, setSelectedTechnologies }: TechnologyProps) => {
    console.log(technologies);

    return (
        <div className="grid grid-cols-3 gap-4">
            {technologies.map((technology:Itechnologies,ind:number) => {
                return (
                  <TechnologyCard
                    key={ind}
                    technology={technology}
                    selectedTechnologies={selectedTechnologies}
                    setSelectedTechnologies={setSelectedTechnologies}
                  />
                )
            })}
              </div>  
    );
};

export default Technology;