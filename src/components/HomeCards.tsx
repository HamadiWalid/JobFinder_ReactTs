import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const HomeCards: React.FC = () => {
  return (
    <section className="pt-4 pb-8">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 p-4 rounded-lg">
          <Cards bg="bg-[#f3f4f6]">
            <h2 className="text-2xl font-bold">For Candidates</h2>
            <p className="mt-2 mb-4">
              Explore diverse job opportunities and take the next step in your
              career
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </Link>
          </Cards>
          <Cards bg="bg-[#d9d0ff]">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              Reach a diverse pool of talent and find the ideal fit for your
              company
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Job
            </Link>
          </Cards>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
