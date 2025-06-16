import JobList from "@/components/JobList";
import SearchFilters from "@/components/SearchFilters";
import prisma from "@/lib/prisma";

export default async function JobsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { q, location, type } = searchParams;

  const jobs = await prisma.job.findMany({
    where: {
      title: q ? { contains: q as string, mode: "insensitive" } : undefined,
      location: location
        ? { contains: location as string, mode: "insensitive" }
        : undefined,
      type: type ? (type as any) : undefined,
    },
    include: {
      employer: {
        select: {
          name: true,
          company: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">All Jobs</h1>
      </div>

      <SearchFilters />

      {jobs.length > 0 ? (
        <JobList jobs={jobs} />
      ) : (
        <div className="text-center py-12">
          <p className="text-lg">No jobs found. Try adjusting your search.</p>
        </div>
      )}
    </div>
  );
}
