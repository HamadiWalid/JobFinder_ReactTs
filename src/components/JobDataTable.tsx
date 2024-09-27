import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import { FaSearch } from "react-icons/fa";

import Cards from "./Cards";

interface Job {
  title: string;
  type: string;
  location: string;
  salary: number;
}

const JobDataTable: React.FC = () => {
  const [jobs, setJobsList] = useState<Job[]>([]);
  const [filters, setFilters] = useState<any>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    type: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    location: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    salary: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
  });

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = async () => {
    try {
      const response = await axios.get("/api/jobs");
      if (response) {
        setJobsList(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onGlobalFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
  };

  // Function to render the type column with color badges
  const typeTemplate = (rowData: Job) => {
    const type = rowData.type;

    // Define badge styles based on the job type
    const badgeStyles: Record<string, string> = {
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

  const renderHeader = () => {
    const value = filters["global"] ? filters["global"].value : "";
    return (
      <div className="flex items-center justify-between mb-5 mt-5">
        <h2 className="text-2xl font-bold">Last Jobs</h2>
        <div className="header-container flex items-center justify-center relative">
          <FaSearch className="absolute left-3 text-gray-500" />
          <InputText
            type="search"
            value={value || ""}
            onChange={onGlobalFilterChange}
            placeholder="Search your dream job"
            className="header-input pl-10"
            style={{ paddingLeft: "2.5rem" }}
          />
        </div>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <section className="bg-gray-100 px-4 pt-4">
      <div className="bg-white container-xl lg:container m-auto mt-3">
        <Cards bg="white" className="rounded-2xl">
          <DataTable
            value={jobs}
            paginator
            rows={6}
            header={header}
            filters={filters}
            onFilter={(e) => setFilters(e.filters)}
            tableStyle={{ minWidth: "50rem" }}
            className="mb-5"
          >
            <Column
              field="title"
              header="Title"
              sortable
              filter
              filterPlaceholder="Search by Title"
              style={{ width: "25%" }}
            />
            <Column
              field="type"
              header="Type"
              sortable
              filter
              filterPlaceholder="Search by Type"
              style={{ width: "25%" }}
              body={typeTemplate}
            />
            <Column
              field="location"
              header="Location"
              sortable
              filter
              filterPlaceholder="Search by Location"
              style={{ width: "25%" }}
            />
            <Column
              field="salary"
              header="Salary"
              sortable
              filter
              filterPlaceholder="Search by Salary"
              style={{ width: "25%" }}
            />
          </DataTable>
        </Cards>
      </div>
    </section>
  );
};

export default JobDataTable;
