import React from 'react';
import { FaStar } from 'react-icons/fa';
import type { Itechnologies } from '../../Types/Technologies';
import { toast } from 'react-toastify';

interface TechnologyCardProps {
  technology: Itechnologies;
  selectedTechnologies: Itechnologies[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<Itechnologies[]>>;
}
const TechnologyCard = ({ technology, selectedTechnologies, setSelectedTechnologies }: TechnologyCardProps) => {
    const isSelected = selectedTechnologies?.some((item) => item.id === technology.id);
    const handleSelect = () => {
    if (isSelected) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }
    setSelectedTechnologies((prev) => [...(prev || []), technology]);
    toast.success(`${technology.name} added to your stack!`);
  };
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
                      <button
                        onClick={handleSelect}
                        disabled={isSelected}
                        className={`w-full py-3.5 rounded-xl font-medium transition-all duration-200 mt-auto ${
                          isSelected
                            ? 'bg-frontend-bg text-text- cursor-not-allowed'
                            : 'bg-text text-background hover:bg-learnmore'
                        }`}
                      >
                        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
                      </button>
                    </div>
                
                            </div>
            

    );
  };

  export default TechnologyCard;