import { use } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import StackItem from "../Sidebar/StackItem";

export interface TechnologySectionProps {
  technologyPromise: Promise<Technology[]>;
  handleAddToStack: (technology: Technology) => void;
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
  stack: Technology[];
}

export default function TechnologySection({
  technologyPromise,
  handleAddToStack,
  handleRemoveFromStack,
  handleRemoveAll,
  stack,
}: TechnologySectionProps) {
  const technologyes = use(technologyPromise);
  return (
    <div className="container mx-auto">
      <div className="my-8">
        <h2 className="text-4xl font-bold mb-2">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
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
          <StackItem
            stack={stack}
            handleRemoveFromStack={handleRemoveFromStack}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
}
