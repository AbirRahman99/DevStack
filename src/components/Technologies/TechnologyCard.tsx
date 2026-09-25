import React from 'react';
import { FaStar } from 'react-icons/fa';
import type { Itechnologies } from '../../Types/Technologies';


const TechnologyCard = ({technology}:{technology: Itechnologies}) => {
    return (
        <div>
            
                     <div 
                      key={technology.id} 
                      className="border border-frontend-bg rounded-3xl p-6 bg-background hover:shadow-md transition-shadow duration-300 flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-5">
                        <img 
                          src={technology.icon} 
                          alt={technology.name} 
                          className="w-12 h-12 object-contain" 
                        />
                        <span className="bg-badge-bg text-badge text-xs font-semibold px-3 py-1.5 rounded-full">
                          {technology.badge}
                        </span>
                      </div>
            
                      <h3 className="text-xl font-bold text-text mb-2">
                        {technology.name}
                      </h3>
                      <p className="text-text-h text-sm leading-relaxed mb-6 grow">
                        {technology.description}
                      </p>
            
                      <div className="border-t border-border-line pt-4 mb-5 flex justify-between items-center text-sm text-text-h">
                        <span className="bg-frontend-bg text-frontend-text px-3 py-1 rounded-md font-medium text-xs">
                          {technology.category}
                        </span>
                        
                        <span className="text-xs font-medium">
                          {technology.difficulty}
                        </span>
                        
                        <div className="flex items-center gap-1">
                          
                          <FaStar className="text-rating w-4 h-4" />
                          <span className="font-bold text-rating-text text-xs">
                            {technology.rating}
                          </span>
                        </div>
                      </div>
                      <button className="w-full bg-text text-background py-3.5 rounded-xl font-medium hover:bg-learnmore transition-all duration-200 mt-auto">
                        Add to Stack
                      </button>
                    </div>
                
                            </div>
            

    );
  };

  export default TechnologyCard;