import { use } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import StackItem from "../Sidebar/StackItem";

export interface TechnologySectionProps {
  technologyPromise: Promise<Technology[]>;
   handleAddToStack: (technology: Technology) => void;
     handleRemoveFromStack: (id: string) => void;
      handleRemoveAll: () => void;
   stack:Technology[];
}

export default function TechnologySection({
  technologyPromise,handleAddToStack,  handleRemoveFromStack, handleRemoveAll,stack
}: TechnologySectionProps) {
 
  const technologyes = use(technologyPromise);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-6">
      <div className="col-span-9">
        <div className="grid grid-cols-3 gap-6">
          {technologyes.map((technology) => {
            return (
              <div>
                <TechnologyCard
                key={technology.id} 
                technology={technology}
                handleAddToStack={handleAddToStack}
                stack={stack}
                 />
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-span-3">
        <StackItem stack={stack}
         handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
}
