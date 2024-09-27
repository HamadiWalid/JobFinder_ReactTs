import { Link } from "react-router-dom";

const ViewAllJobs: React.FC = () => {
  return (
    <section className="px-4 py-10">
      <div className="m-auto max-w-lg">
        <Link
          to="/jobs"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </Link>
      </div>
    </section>
  );
};

export default ViewAllJobs;
