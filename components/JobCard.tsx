import Link from "next/link";

interface Job {
  id: string | number;
  title: string;
  company: string;
  location: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p>
        {job.company} — {job.location}
      </p>
      <Link href={`/jobs/${job.id}`} className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
}

// 