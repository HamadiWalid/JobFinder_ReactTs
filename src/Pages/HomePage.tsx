import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
import JobDataTable from "../components/JobDataTable";

// Define the HomePage functional component
const HomePage: React.FC = () => {
  return (
    <>
      <Hero
        title="Start Your Dream Career"
        subtitle="Explore the Best Opportunities Awaiting You"
      />

      <HomeCards />
      <JobDataTable />

      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
