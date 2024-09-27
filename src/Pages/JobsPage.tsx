import React from "react";
import JobListings from "../components/JobListings";

const JobsPage: React.FC = () => {
  return (
    <section className="bg-gray-100 px-4 py-6">
      <JobListings />
    </section>
  );
};

export default JobsPage;
