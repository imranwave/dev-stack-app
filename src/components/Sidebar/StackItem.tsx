
import type { Technology } from "../types/technology";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
interface StackItemProps {
  stack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}
const StackItem = ({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}: StackItemProps) => {
  return (
    <div>
      <div className="w-full rounded-3xl bg-white p-6 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] sticky top-6">
        <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
        <p className="text-sm text-slate-400 mt-1 mb-5">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} technologies selected`}
        </p>
        {stack.length === 0 && (
          <p className="text-sm text-slate-400 mt-8 mb-5 text-center py-8 border border-dashed rounded-md">
            Your Stack is empty
          </p>
        )}
        <div className="space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-12 w-12 rounded-xl border border-slate-100 bg-slate-50 p-2 object-contain"
              />

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-slate-900">
                  {technology.name}
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  {technology.category}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  handleRemoveFromStack(technology.id);
                  toast.error(`${technology.name} removed`);
                }}
                className="rounded-lg px-2 py-1 text-xl font-medium text-red-500 hover:bg-red-50 cursor-pointer"
              >
                <RxCross2 />
              </button>
            </div>
          ))}
        </div>
        {stack.length > 0 && (
          <button
            type="button"
            className="px-5 py-2 border-1 border-red-500 rounded-md font-bold text-red-500  w-full my-10"
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
};

export default StackItem;
