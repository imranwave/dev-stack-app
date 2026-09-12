import type { Technology } from "../types/technology";

export interface TechnologyCardProps {
  technology: Technology;
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Top Section */}
      <div className="mb-7 flex items-start justify-between">
        {/* Logo */}
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10 object-contain"
          />
        </div>

        {/* Dynamic Badge */}
        {technology.badge && (
  <span
    className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${
      technology.badge === "Popular"
        ? "border-blue-100 bg-blue-50 text-sky-500"
        : technology.badge === "Trending"
        ? "border-orange-100 bg-orange-50 text-orange-500"
        : technology.badge === "Essential"
        ? "border-purple-100 bg-purple-50 text-purple-500"
        : technology.badge === "New"
        ? "border-green-100 bg-green-50 text-green-500"
        : "border-slate-200 bg-slate-50 text-slate-500"
    }`}
  >
    {technology.badge}
  </span>
)}
      </div>

      {/* Name */}
      <h2 className="mb-2 text-[25px] font-bold text-slate-900">{technology.name}</h2>

      {/* Description */}
      <p className="min-h-[72px] text-[16px] leading-[1.6] text-slate-500">
        {technology.description}
      </p>

      {/* Information */}
      <div className="my-5 flex items-center justify-between gap-3">
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-sm text-slate-600">
          {technology.category}
        </span>

        <span className="flex-1 text-sm text-slate-600">{technology.difficulty}</span>

        <span className="flex items-center gap-1 text-sm font-semibold text-slate-700">
          <span className="text-[17px] text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        type="button"
        className="h-12 w-full rounded-[10px] bg-[#080d1d] text-[15px] font-medium text-white transition hover:bg-slate-800"
      >
        Add to Stack
      </button>
    </div>
  );
}
