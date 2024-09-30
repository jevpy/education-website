import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/Fourth-Image.png";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-fuchsia-100 to-slate-5 pt-2 pb-6">
        <div className="container">
          <div className="
            grid grid-cols-2 items-center gap-4 ">
            <div className="">
              <Badge variant="outline" className="text-carnation-500 mb-2 text-md">
                Feed Your Knowledge
              </Badge>
              <h1 className="text-6xl py-4 font-semibold">
                Develop Your Skills with online{" "}
                <span className="text-carnation-600">Courses</span>
              </h1>
              <p className="py-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                labore itaque molestiae repudiandae quaerat excepturi provident
                explicabo atque ullam fugiat nesciunt sequi, consequuntur
                blanditii
              </p>
              <Button className="my-2 bg-blueviolet-600">
                Contact Us <MoveRight className="ps-2"/>{" "}
              </Button>
            </div>
            <div className="flex justify-end">
              <Image src={logo} alt="banner" className="w-fit" width={600} height={600}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
