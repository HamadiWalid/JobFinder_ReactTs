import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

// Define the valid job types
type JobType = "Full-Time" | "Part-Time" | "Remote" | "Internship";

// Define the Job type
interface Job {
  id: string;
  title: string;
  description: string;
  type: JobType;
  location: string;
  salary: string;
}

interface JobListingProps {
  job: Job;
}

const JobListing: React.FC<JobListingProps> = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + " ...";
  }

  // Function to render the job type badge
  const renderJobTypeBadge = (type: JobType) => {
    // Use JobType here
    const badgeStyles: Record<JobType, string> = {
      "Full-Time": "bg-green-100 text-green-800",
      "Part-Time": "bg-yellow-100 text-yellow-800",
      Remote: "bg-blue-100 text-blue-800",
      Internship: "bg-purple-100 text-purple-800",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${
          badgeStyles[type] || "bg-gray-100 text-gray-800"
        }`}
      >
        {type}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          {renderJobTypeBadge(job.type)}
          <h3 className="text-xl font-bold mt-3">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-500"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" /> {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-[#00ae78] text-white hover:bg-[#009167] px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
