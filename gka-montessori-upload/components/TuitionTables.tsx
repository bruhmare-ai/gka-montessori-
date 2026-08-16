import { tuition } from "@/lib/site";

function formatPrice(price: number) {
  return `$${price.toLocaleString("en-US")}`;
}

type Program = {
  id: string;
  title: string;
  hours?: string;
  options: ReadonlyArray<{ schedule: string; price: number }>;
};

function ProgramCard({ program }: { program: Program }) {
  return (
    <div
      id={program.id}
      className="scroll-mt-24 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/10 sm:p-8"
    >
      <h3 className="font-display text-2xl text-navy">{program.title}</h3>
      {program.hours && (
        <p className="mt-1 italic text-navy/60">{program.hours}</p>
      )}
      <table className="mt-5 w-full border-collapse text-left">
        <caption className="sr-only">
          {program.title} monthly tuition by schedule
        </caption>
        <thead>
          <tr className="border-b-2 border-tint text-xs uppercase tracking-widest text-brand-dark">
            <th scope="col" className="py-2 pr-4 font-bold">
              Schedule
            </th>
            <th scope="col" className="py-2 text-right font-bold">
              Monthly
            </th>
          </tr>
        </thead>
        <tbody>
          {program.options.map((option) => (
            <tr
              key={option.schedule}
              className="border-b border-navy/10 last:border-0"
            >
              <th
                scope="row"
                className="py-3 pr-4 text-left font-normal text-navy/90"
              >
                {option.schedule}
              </th>
              <td className="py-3 text-right font-display text-lg font-semibold text-navy">
                {formatPrice(option.price)}
                <span className="text-sm font-normal text-navy/60">/mo</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type TuitionTablesProps = {
  /** Which tables to render. Cards get ids #full-time / #half-day for anchor links. */
  show?: "fullTime" | "halfDay" | "both";
  /** Render the "Good to know" notes list below the tables. Default true. */
  showNotes?: boolean;
  className?: string;
};

/**
 * Renders GKA's published tuition from `@/lib/site` in the template card
 * style. Designed for light bands (cream / tint / tint-cyan).
 */
export default function TuitionTables({
  show = "both",
  showNotes = true,
  className = "",
}: TuitionTablesProps) {
  const programs: Program[] = [];
  if (show !== "halfDay") {
    programs.push({
      id: "full-time",
      title: tuition.fullTime.label,
      hours: tuition.fullTime.hours,
      options: tuition.fullTime.options,
    });
  }
  if (show !== "fullTime") {
    programs.push({
      id: "half-day",
      title: tuition.halfDay.label,
      options: tuition.halfDay.options,
    });
  }

  return (
    <div className={className}>
      <div
        className={`grid gap-6 ${programs.length > 1 ? "md:grid-cols-2" : ""}`}
      >
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
      {showNotes && (
        <div className="mt-8">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-dark">
            Good to know
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {tuition.notes.map((note) => (
              <li key={note} className="flex items-start gap-2.5 text-navy/90">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 8 8"
                  className="mt-2 h-2 w-2 shrink-0 text-brand"
                >
                  <circle cx="4" cy="4" r="4" fill="currentColor" />
                </svg>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
