import { prisma } from "@/lib/prisma";

export default async function JobDetail({
  params,
}: {
  params: { id: string };
}) {
  const job = await prisma.job.findUnique({ where: { id: params.id } });
  if (!job) return <p>Job not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p>
        {job.company} — {job.location}
      </p>
      <p className="mt-4">{job.description}</p>
    </div>
  );
}
