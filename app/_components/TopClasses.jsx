"use client"

import { Star, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img1 from "@/assets/courses1.jpeg"
import img2 from "@/assets/courses2.jpeg"
import img3 from "@/assets/courses3.jpeg"
import img4 from "@/assets/courses4.jpeg"
import React, { useState } from "react";

export const TopClasses = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="container py-20">
      <div className="text-center">
        <Badge variant="outline" className="text-carnation-500 my-2 text-md">
          {" "}
          Top Class Courses{" "}
        </Badge>
        <h2>
          Explore the world's best{" "}
          <span className="text-carnation-600"> Courses</span>
        </h2>
      </div>
      <div className="flex items-center pt-4 flex-col">
        <nav className="flex" role="tablist">
          <button
            className={`px-4 py-2 text-gray-600 focus:outline-none ${
              activeTab === 1
                ? "active:text-gray-800 focus:border-b-2 border-carnation-500"
                : ""
            }`}
            role="tab"
            aria-selected={activeTab === 1 ? "true" : "false"}
            aria-controls="tab-content-1"
            id="tabs-1"
            onClick={() => handleTabClick(1)}>
            All Courses
          </button>
          <button
            className={`px-4 py-2 text-gray-600 focus:outline-none ${
              activeTab === 2
                ? "active:text-gray-800 focus:border-b-2 border-carnation-500"
                : ""
            }`}
            role="tab"
            aria-selected={activeTab === 2 ? "true" : "false"}
            aria-controls="tab-content-2"
            id="tabs-2"
            onClick={() => handleTabClick(2)}>
            Video
          </button>
          <button
            className={`px-4 py-2 text-gray-600 focus:outline-none ${
              activeTab === 3
                ? "active:text-gray-800 focus:border-b-2 border-carnation-500"
                : ""
            }`}
            role="tab"
            aria-selected={activeTab === 3 ? "true" : "false"}
            aria-controls="tab-content-3"
            id="tabs-3"
            onClick={() => handleTabClick(3)}>
            Podcast
          </button>
        </nav>

        <div className="mt-8">
          <div
            id="tab-content-1"
            role="tabpanel"
            aria-labelledby="tab-1"
            className={activeTab === 1 ? "" : "hidden"}>
            <div className="container">
              <div className="flex">
                <div className="columns-4 gap-8">
                  <div className="topclasses">
                    <div className="antialiased text-gray-900 py-5">
                      <div className="bg-gray-200 flex items-center justify-center">
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                          <Image
                            src={img1}
                            alt="Home in Countryside"
                            className="h-56"
                          />
                          <div className="p-6">
                            <div className="flex items-baseline">
                              <span className="inline-block bg-carnation-500 text-gray-100 py-1 px-4 text-xs rounded-full uppercase font-semibold">
                                New
                              </span>
                              <span className="ml-2 text-gray-600 text-sm font-semibold">
                                Mathematics
                              </span>
                            </div>
                            <h4 className="py-2 font-semibold text-lg leading-light truncate">
                              Beautiful Home in the Countryside
                            </h4>
                            <div className="py-2 flex gap-6 items-center">
                              <span className="text-teal-600 font-semibold flex gap-1 flex-row">
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                              </span>
                              <span className="ml-2 text-gray-600 text-sm">
                                ( 34 rewiews )
                              </span>
                            </div>
                            <div className="py-2 grid grid-cols-2 gap-6 items-center">
                              <Button className="bg-blueviolet-600">
                                Enroll Now <MoveRight className="ps-2" />
                              </Button>
                              <span className="ml-2 text-carnation-600 text-xl font-semibold text-center">
                                $17.00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topclasses">
                    <div className="antialiased text-gray-900 py-5">
                      <div className="bg-gray-200 flex items-center justify-center">
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                          <Image
                            src={img1}
                            alt="Home in Countryside"
                            className="h-56"
                          />
                          <div className="p-6">
                            <div className="flex items-baseline">
                              <span className="inline-block bg-carnation-500 text-gray-100 py-1 px-4 text-xs rounded-full uppercase font-semibold">
                                New
                              </span>
                              <span className="ml-2 text-gray-600 text-sm font-semibold">
                                Mathematics
                              </span>
                            </div>
                            <h4 className="py-2 font-semibold text-lg leading-light truncate">
                              Beautiful Home in the Countryside
                            </h4>
                            <div className="py-2 flex gap-6 items-center">
                              <span className="text-teal-600 font-semibold flex gap-1 flex-row">
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                              </span>
                              <span className="ml-2 text-gray-600 text-sm">
                                ( 34 rewiews )
                              </span>
                            </div>
                            <div className="py-2 grid grid-cols-2 gap-6 items-center">
                              <Button className="bg-blueviolet-600">
                                Enroll Now <MoveRight className="ps-2" />
                              </Button>
                              <span className="ml-2 text-carnation-600 text-xl font-semibold text-center">
                                $17.00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topclasses">
                    <div className="antialiased text-gray-900 py-5">
                      <div className="bg-gray-200 flex items-center justify-center">
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                          <Image
                            src={img1}
                            alt="Home in Countryside"
                            className="h-56"
                          />
                          <div className="p-6">
                            <div className="flex items-baseline">
                              <span className="inline-block bg-carnation-500 text-gray-100 py-1 px-4 text-xs rounded-full uppercase font-semibold">
                                New
                              </span>
                              <span className="ml-2 text-gray-600 text-sm font-semibold">
                                Mathematics
                              </span>
                            </div>
                            <h4 className="py-2 font-semibold text-lg leading-light truncate">
                              Beautiful Home in the Countryside
                            </h4>
                            <div className="py-2 flex gap-6 items-center">
                              <span className="text-teal-600 font-semibold flex gap-1 flex-row">
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                              </span>
                              <span className="ml-2 text-gray-600 text-sm">
                                ( 34 rewiews )
                              </span>
                            </div>
                            <div className="py-2 grid grid-cols-2 gap-6 items-center">
                              <Button className="bg-blueviolet-600">
                                Enroll Now <MoveRight className="ps-2" />
                              </Button>
                              <span className="ml-2 text-carnation-600 text-xl font-semibold text-center">
                                $17.00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="tab-content-2"
            role="tabpanel"
            aria-labelledby="tab-2"
            className={activeTab === 2 ? "" : "hidden"}>
            <div className="container">
              <div className="flex">
                <div className="columns-4 gap-8">
                  <div className="topclasses">
                    <div className="antialiased text-gray-900 py-5">
                      <div className="bg-gray-200 flex items-center justify-center">
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                          <Image
                            src={img1}
                            alt="Home in Countryside"
                            className="h-56"
                          />
                          <div className="p-6">
                            <div className="flex items-baseline">
                              <span className="inline-block bg-carnation-500 text-gray-100 py-1 px-4 text-xs rounded-full uppercase font-semibold">
                                New
                              </span>
                              <span className="ml-2 text-gray-600 text-sm font-semibold">
                                Mathematics
                              </span>
                            </div>
                            <h4 className="py-2 font-semibold text-lg leading-light truncate">
                              Beautiful Home in the Countryside
                            </h4>
                            <div className="py-2 flex gap-6 items-center">
                              <span className="text-teal-600 font-semibold flex gap-1 flex-row">
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                              </span>
                              <span className="ml-2 text-gray-600 text-sm">
                                ( 34 rewiews )
                              </span>
                            </div>
                            <div className="py-2 grid grid-cols-2 gap-6 items-center">
                              <Button className="bg-blueviolet-600">
                                Enroll Now <MoveRight className="ps-2" />
                              </Button>
                              <span className="ml-2 text-carnation-600 text-xl font-semibold text-center">
                                $17.00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topclasses">
                    <div className="antialiased text-gray-900 py-5">
                      <div className="bg-gray-200 flex items-center justify-center">
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                          <Image
                            src={img1}
                            alt="Home in Countryside"
                            className="h-56"
                          />
                          <div className="p-6">
                            <div className="flex items-baseline">
                              <span className="inline-block bg-carnation-500 text-gray-100 py-1 px-4 text-xs rounded-full uppercase font-semibold">
                                New
                              </span>
                              <span className="ml-2 text-gray-600 text-sm font-semibold">
                                Mathematics
                              </span>
                            </div>
                            <h4 className="py-2 font-semibold text-lg leading-light truncate">
                              Beautiful Home in the Countryside
                            </h4>
                            <div className="py-2 flex gap-6 items-center">
                              <span className="text-teal-600 font-semibold flex gap-1 flex-row">
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                              </span>
                              <span className="ml-2 text-gray-600 text-sm">
                                ( 34 rewiews )
                              </span>
                            </div>
                            <div className="py-2 grid grid-cols-2 gap-6 items-center">
                              <Button className="bg-blueviolet-600">
                                Enroll Now <MoveRight className="ps-2" />
                              </Button>
                              <span className="ml-2 text-carnation-600 text-xl font-semibold text-center">
                                $17.00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topclasses">
                    <div className="antialiased text-gray-900 py-5">
                      <div className="bg-gray-200 flex items-center justify-center">
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                          <Image
                            src={img1}
                            alt="Home in Countryside"
                            className="h-56"
                          />
                          <div className="p-6">
                            <div className="flex items-baseline">
                              <span className="inline-block bg-carnation-500 text-gray-100 py-1 px-4 text-xs rounded-full uppercase font-semibold">
                                New
                              </span>
                              <span className="ml-2 text-gray-600 text-sm font-semibold">
                                Mathematics
                              </span>
                            </div>
                            <h4 className="py-2 font-semibold text-lg leading-light truncate">
                              Beautiful Home in the Countryside
                            </h4>
                            <div className="py-2 flex gap-6 items-center">
                              <span className="text-teal-600 font-semibold flex gap-1 flex-row">
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                              </span>
                              <span className="ml-2 text-gray-600 text-sm">
                                ( 34 rewiews )
                              </span>
                            </div>
                            <div className="py-2 grid grid-cols-2 gap-6 items-center">
                              <Button className="bg-blueviolet-600">
                                Enroll Now <MoveRight className="ps-2" />
                              </Button>
                              <span className="ml-2 text-carnation-600 text-xl font-semibold text-center">
                                $17.00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div
            id="tab-content-3"
            role="tabpanel"
            aria-labelledby="tab-3"
            className={activeTab === 3 ? "" : "hidden"}>
            <div className="container">
              <div className="flex">
                <div className="columns-4 gap-8">
                  <div className="topclasses">
                    <div className="antialiased text-gray-900 py-5">
                      <div className="bg-gray-200 flex items-center justify-center">
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                          <Image
                            src={img1}
                            alt="Home in Countryside"
                            className="h-56"
                          />
                          <div className="p-6">
                            <div className="flex items-baseline">
                              <span className="inline-block bg-carnation-500 text-gray-100 py-1 px-4 text-xs rounded-full uppercase font-semibold">
                                New
                              </span>
                              <span className="ml-2 text-gray-600 text-sm font-semibold">
                                Mathematics
                              </span>
                            </div>
                            <h4 className="py-2 font-semibold text-lg leading-light truncate">
                              Beautiful Home in the Countryside
                            </h4>
                            <div className="py-2 flex gap-6 items-center">
                              <span className="text-teal-600 font-semibold flex gap-1 flex-row">
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                              </span>
                              <span className="ml-2 text-gray-600 text-sm">
                                ( 34 rewiews )
                              </span>
                            </div>
                            <div className="py-2 grid grid-cols-2 gap-6 items-center">
                              <Button className="bg-blueviolet-600">
                                Enroll Now <MoveRight className="ps-2" />
                              </Button>
                              <span className="ml-2 text-carnation-600 text-xl font-semibold text-center">
                                $17.00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topclasses">
                    <div className="antialiased text-gray-900 py-5">
                      <div className="bg-gray-200 flex items-center justify-center">
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                          <Image
                            src={img1}
                            alt="Home in Countryside"
                            className="h-56"
                          />
                          <div className="p-6">
                            <div className="flex items-baseline">
                              <span className="inline-block bg-carnation-500 text-gray-100 py-1 px-4 text-xs rounded-full uppercase font-semibold">
                                New
                              </span>
                              <span className="ml-2 text-gray-600 text-sm font-semibold">
                                Mathematics
                              </span>
                            </div>
                            <h4 className="py-2 font-semibold text-lg leading-light truncate">
                              Beautiful Home in the Countryside
                            </h4>
                            <div className="py-2 flex gap-6 items-center">
                              <span className="text-teal-600 font-semibold flex gap-1 flex-row">
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                              </span>
                              <span className="ml-2 text-gray-600 text-sm">
                                ( 34 rewiews )
                              </span>
                            </div>
                            <div className="py-2 grid grid-cols-2 gap-6 items-center">
                              <Button className="bg-blueviolet-600">
                                Enroll Now <MoveRight className="ps-2" />
                              </Button>
                              <span className="ml-2 text-carnation-600 text-xl font-semibold text-center">
                                $17.00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topclasses">
                    <div className="antialiased text-gray-900 py-5">
                      <div className="bg-gray-200 flex items-center justify-center">
                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                          <Image
                            src={img1}
                            alt="Home in Countryside"
                            className="h-56"
                          />
                          <div className="p-6">
                            <div className="flex items-baseline">
                              <span className="inline-block bg-carnation-500 text-gray-100 py-1 px-4 text-xs rounded-full uppercase font-semibold">
                                New
                              </span>
                              <span className="ml-2 text-gray-600 text-sm font-semibold">
                                Mathematics
                              </span>
                            </div>
                            <h4 className="py-2 font-semibold text-lg leading-light truncate">
                              Beautiful Home in the Countryside
                            </h4>
                            <div className="py-2 flex gap-6 items-center">
                              <span className="text-teal-600 font-semibold flex gap-1 flex-row">
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                                <Star size={18} />
                              </span>
                              <span className="ml-2 text-gray-600 text-sm">
                                ( 34 rewiews )
                              </span>
                            </div>
                            <div className="py-2 grid grid-cols-2 gap-6 items-center">
                              <Button className="bg-blueviolet-600">
                                Enroll Now <MoveRight className="ps-2" />
                              </Button>
                              <span className="ml-2 text-carnation-600 text-xl font-semibold text-center">
                                $17.00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
