

const StackItem = () => {
  return (
    <div>
      <div className="w-full rounded-3xl bg-white p-6 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.05)] sticky top-6">
        <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
        <p className="text-sm text-slate-400 mt-1 mb-5">
          No technologies selected yet.
        </p>

      
        <div className="w-full py-12 px-4 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center">
          <span className="text-slate-400 font-medium text-sm">
            Your stack is empty.
          </span>
        </div>
      </div>
    </div>
  );
};

export default StackItem;
