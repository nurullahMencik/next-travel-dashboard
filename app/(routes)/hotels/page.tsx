import React from "react";
import HotelsForm from "./_components/HotelsForm";
import { DataTable } from "./_components/DataTable";


const HotelsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-screen-[2000px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 border-r border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hotels</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident dolores doloremque deserunt, nisi praesentium nesciunt, ipsa harum, inventore ex assumenda ad sequi ullam consequatur? Quia in iusto ratione reprehenderit nam.</p>
          <DataTable/>
          </div>
          <div className="w-full lg:w-1/3 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Hotel</h2>
         <HotelsForm/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;
