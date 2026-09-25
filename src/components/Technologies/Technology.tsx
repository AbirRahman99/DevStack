import React from 'react';
import type { Itechnologies } from '../../Types/Technologies';

import TechnologyCard from './TechnologyCard';

const Technology = ({ technologies }) => {
    console.log(technologies);

    return (
        <div className="grid grid-cols-3 gap-4">
            {technologies.map((technology:Itechnologies,ind:number) => {
                return <TechnologyCard key={ind} technology={technology}/>
            })}
              </div>  
    );
};

export default Technology;