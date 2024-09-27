import JobListing from "./JobListing";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

// Import JobType enum
import { JobType } from "./JobType";

// Define the Job type interface
interface Job {
  id: string;
  title: string;
  description: string;
  type: JobType;
  location: string;
  salary: string;
}

interface JobListingsProps {
  isHome?: boolean; // Optional prop
}

const JobListings: React.FC<JobListingsProps> = ({ isHome = false }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = isHome ? "/api/jobs?_limit=6" : "/api/jobs";
        const res = await fetch(apiUrl);
        const data: Job[] = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data : ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  return (
    <section className="bg-gray-100 px-4 pb-12 pt-1">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isHome ? "" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
