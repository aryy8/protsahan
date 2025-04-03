
import { useState } from "react";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScholarshipProps {
  scholarships: {
    title: string;
    provider: string;
    amount: string;
    eligibility: string;
    matchScore: string;
  }[];
  isLoading: boolean;
}

export default function ScholarshipMatches({ scholarships, isLoading }: ScholarshipProps) {
  if (isLoading) {
    return (
      <div className="mt-8 text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-24 bg-gray-300 rounded w-full mb-4"></div>
          <div className="h-24 bg-gray-300 rounded w-full mb-4"></div>
          <div className="h-24 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    );
  }

  if (!scholarships || scholarships.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Recommended Scholarships for You
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {scholarships.map((scholarship, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-900">
                {scholarship.title}
              </h4>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                {scholarship.matchScore}% Match
              </span>
            </div>
            <p className="text-gray-600 mb-2">Provider: {scholarship.provider}</p>
            <p className="text-gray-600 mb-2">Eligibility: {scholarship.eligibility}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold text-blue-600">{scholarship.amount}</p>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
