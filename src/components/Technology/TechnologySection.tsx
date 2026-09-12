import { use } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import StackItem from "../Sidebar/StackItem";

export interface TechnologySectionProps {
  technologyPromise: Promise<Technology[]>;
}

export default function TechnologySection({
  technologyPromise,
}: TechnologySectionProps) {
  console.log(technologyPromise);
  const technologyes = use(technologyPromise);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-6">
      <div className="col-span-9">
        <div className="grid grid-cols-3 gap-6">
          {technologyes.map((technology) => {
            return (
              <div>
                <TechnologyCard key={technology.id} technology={technology} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-span-3">
        <StackItem />
      </div>
    </div>
  );
}
