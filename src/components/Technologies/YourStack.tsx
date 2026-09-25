import React from 'react';
import type { Itechnologies } from '../../Types/Technologies';
import { toast } from 'react-toastify';
import { FaTimes } from 'react-icons/fa';

interface YourStackProps {
  technologies: Itechnologies[];
  setSelectedTechnologies: React.Dispatch<React.SetStateAction<Itechnologies[]>>;
}

const YourStack = ({ technologies, setSelectedTechnologies }: YourStackProps) => {
  const count = technologies.length;

  const removeYourStack = (id: string) => {
  const technology = technologies.find((tech) => tech.id === id);

  setSelectedTechnologies(
    technologies.filter((tech) => tech.id !== id)
  );

  if (technology) {
    toast.info(`${technology.name} removed from your stack!`);
  }
};

  const removeAll = () => {
  setSelectedTechnologies([]);

  toast.info("All technologies removed from your stack!");
};

  return (
    <div className="border border-text-h rounded-3xl p-6 sm:p-8 bg-background h-fit">
      <h2 className="text-2xl font-bold text-text mb-1">
        Your Stack
      </h2>
      <p className="text-text-h text-sm mb-6">
       {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="border-2 border-dashed border-text-h rounded-2xl py-12 flex items-center justify-center">
          <span className="text-text-h font-medium">Your stack is empty.</span>
        </div>
      ) : (
        <div className="space-y-3">
          {technologies.map((technology) => (
            <div key={technology.id} className="flex items-center justify-between border border-border-line rounded-xl p-3">    
                      <div className="flex items-center gap-3">
                <img 
                  src={technology.icon} 
                  alt={technology.name} 
                  className="w-8 h-8 object-contain" 
                />
                <div className="flex flex-col">
                  <span className="font-bold text-text text-sm">
                    {technology.name}
                  </span>
                  <span className="text-[10px] font-medium text-text-h">
                    {technology.category}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeYourStack(technology.id)}
                className="text-text-h hover:text-remove-border transition-colors mr-2"
              >
                <FaTimes size={16} />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={removeAll}
            className="w-full mt-4 border border-remove-border text-remove font-bold py-2.5 rounded-xl hover:bg-remove-bg transition-colors"
          >
            Remove all
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;