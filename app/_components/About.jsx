"use client"
import Image from "next/image";
import about from "@/assets/about.png";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";


const About = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-fuchsia-100 to-slate-5">
        <div className="container">
          <div className="grid grid-cols-2 gap-10 items-center">
            <div className="">
              <Image src={about} />
            </div>
            <div className="lg:ps-6">
              <Badge
                variant="outline"
                className="text-carnation-500 mb-2 text-md">
                Feed Your Knowledge
              </Badge>
              <h2 className="text-4xl py-4 font-semibold">
                Learn & Grow Your <span>SKILLS</span> Form Anywhere
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                facilis obcaecati esse, laborum quidem assumenda quae sequi
                possimus, quam eum dicta incidunt! Doloribus corrupti deleniti
                numquam alias, necessitatibus nam vitae.
              </p>

              <div className="flex flex-col gap-4	py-6">
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" className="rounded-lg p-2" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Accept terms and conditions
                    </label>
                  </div>
                </div>
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" className="rounded-lg p-2" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Accept terms and conditions
                    </label>
                  </div>
                </div>
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" className="rounded-lg p-2" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Accept terms and conditions
                    </label>
                  </div>
                </div>
              </div>

              <Button className="my-2 bg-blueviolet-600 text-lg p-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
