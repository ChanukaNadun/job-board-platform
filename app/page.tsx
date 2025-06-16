// import Link from "next/link";
import { prisma } from "@/lib/prisma";
import JobCard from "@/components/JobCard";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  createdAt: Date;
};

export default async function Home() {
  const jobs: Job[] = await prisma.job.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Latest Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job: Job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
