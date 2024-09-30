import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Testimonial = () => {
  return (
    <>
      <div className="container">
        <div className="text-center pt-16 pb-0">
          <Badge variant="outline" className="text-carnation-500 my-2 text-md">
            Testimonials
          </Badge>
          <h2>
            What Our Students Say About{" "}
            <span className="text-carnation-600"> Courses</span>
          </h2>
        </div>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="bg-gray-50 py-10">
              <div className="flex flex-col items-center">
                <img
                  sre="https://scontent.fcix3-1.fna.fbcdn.net/v/t39.30808-6/272196943_3164981043730623_5733823303076053595_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZbeAjbASA1NIoBd9wyD1TTK_N6SBJRUZMr83pIElFRjMMHl32_mT8N8lVD6yNxZL6015RjRLXLNaI2_bfazSZ&_nc_ohc=MPPbWsEYmaoQ7kNvgFupPLG&_nc_ht=scontent.fcix3-1.fna&oh=00_AYDb92ztGxppl_RKkBbBD4Ko5CejRmqY3ulMKHMSeJp4uQ&oe=668A899D"
                  alt="profile"
                  width={120}
                  height={120}
                  className="rounded-full mb-6"
                />
                <h2 className="text-2xl font-medium py-2">Jean Pierre Ayala</h2>
                <p className="max-w-4xl text-center py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nesciunt? Commodi, vero sunt non accusantium
                  deserunt earum quia unde corporis numquam ex veritatis
                  sapiente, quisquam aut voluptate nulla fugiat obcaecati?
                </p>
                <div class="my-10 flex items-center justify-center gap-x-6">
                  <div className="hidden sm:block -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                      src="https://scontent.fcix3-1.fna.fbcdn.net/v/t39.30808-6/272196943_3164981043730623_5733823303076053595_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZbeAjbASA1NIoBd9wyD1TTK_N6SBJRUZMr83pIElFRjMMHl32_mT8N8lVD6yNxZL6015RjRLXLNaI2_bfazSZ&_nc_ohc=MPPbWsEYmaoQ7kNvgFupPLG&_nc_ht=scontent.fcix3-1.fna&oh=00_AYDb92ztGxppl_RKkBbBD4Ko5CejRmqY3ulMKHMSeJp4uQ&oe=668A899D"
                      alt=""
                    />
                  </div>
                  <div className="border-none sm:border-l-2 border-black sm:pl-8">
                    <div className="flex justify-center sm:justify-start">
                      <h3 className="text-2xl font-semibold mr-2">4.6</h3>

                      <img
                        className="w-5"
                        src="https://www.svgrepo.com/show/513354/star.svg"
                        alt="stars-icon"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm">Rated by 25k on google.</h3>
                    </div>
                  </div>
                </div>
                <Button className="my-4 bg-blueviolet-600">
                  Read More <MoveRight className="ps-2" />
                </Button>
              </div>
            </CarouselItem>
            <CarouselItem className="bg-gray-50 py-10">
              <div className="flex flex-col items-center">
                <img
                  sre="https://scontent.fcix3-1.fna.fbcdn.net/v/t39.30808-6/272196943_3164981043730623_5733823303076053595_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZbeAjbASA1NIoBd9wyD1TTK_N6SBJRUZMr83pIElFRjMMHl32_mT8N8lVD6yNxZL6015RjRLXLNaI2_bfazSZ&_nc_ohc=MPPbWsEYmaoQ7kNvgFupPLG&_nc_ht=scontent.fcix3-1.fna&oh=00_AYDb92ztGxppl_RKkBbBD4Ko5CejRmqY3ulMKHMSeJp4uQ&oe=668A899D"
                  alt="profile"
                  width={120}
                  height={120}
                  className="rounded-full mb-6"
                />
                <h2 className="text-2xl font-medium py-2">Jean Pierre Ayala</h2>
                <p className="max-w-4xl text-center py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nesciunt? Commodi, vero sunt non accusantium
                  deserunt earum quia unde corporis numquam ex veritatis
                  sapiente, quisquam aut voluptate nulla fugiat obcaecati?
                </p>
                <div class="my-10 flex items-center justify-center gap-x-6">
                  <div className="hidden sm:block -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                      src="https://scontent.fcix3-1.fna.fbcdn.net/v/t39.30808-6/272196943_3164981043730623_5733823303076053595_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZbeAjbASA1NIoBd9wyD1TTK_N6SBJRUZMr83pIElFRjMMHl32_mT8N8lVD6yNxZL6015RjRLXLNaI2_bfazSZ&_nc_ohc=MPPbWsEYmaoQ7kNvgFupPLG&_nc_ht=scontent.fcix3-1.fna&oh=00_AYDb92ztGxppl_RKkBbBD4Ko5CejRmqY3ulMKHMSeJp4uQ&oe=668A899D"
                      alt=""
                    />
                  </div>
                  <div className="border-none sm:border-l-2 border-black sm:pl-8">
                    <div className="flex justify-center sm:justify-start">
                      <h3 className="text-2xl font-semibold mr-2">4.6</h3>

                      <img
                        className="w-5"
                        src="https://www.svgrepo.com/show/513354/star.svg"
                        alt="stars-icon"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm">Rated by 25k on google.</h3>
                    </div>
                  </div>
                </div>
                <Button className="my-4 bg-blueviolet-600">
                  Read More <MoveRight className="ps-2" />
                </Button>
              </div>
            </CarouselItem>
            <CarouselItem className="bg-gray-50 py-10">
              <div className="flex flex-col items-center">
                <img
                  sre="https://scontent.fcix3-1.fna.fbcdn.net/v/t39.30808-6/272196943_3164981043730623_5733823303076053595_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZbeAjbASA1NIoBd9wyD1TTK_N6SBJRUZMr83pIElFRjMMHl32_mT8N8lVD6yNxZL6015RjRLXLNaI2_bfazSZ&_nc_ohc=MPPbWsEYmaoQ7kNvgFupPLG&_nc_ht=scontent.fcix3-1.fna&oh=00_AYDb92ztGxppl_RKkBbBD4Ko5CejRmqY3ulMKHMSeJp4uQ&oe=668A899D"
                  alt="profile"
                  width={120}
                  height={120}
                  className="rounded-full mb-6"
                />
                <h2 className="text-2xl font-medium py-2">Jean Pierre Ayala</h2>
                <p className="max-w-4xl text-center py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos, nesciunt? Commodi, vero sunt non accusantium
                  deserunt earum quia unde corporis numquam ex veritatis
                  sapiente, quisquam aut voluptate nulla fugiat obcaecati?
                </p>
                <div class="my-10 flex items-center justify-center gap-x-6">
                  <div className="hidden sm:block -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                      src="https://scontent.fcix3-1.fna.fbcdn.net/v/t39.30808-6/272196943_3164981043730623_5733823303076053595_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZbeAjbASA1NIoBd9wyD1TTK_N6SBJRUZMr83pIElFRjMMHl32_mT8N8lVD6yNxZL6015RjRLXLNaI2_bfazSZ&_nc_ohc=MPPbWsEYmaoQ7kNvgFupPLG&_nc_ht=scontent.fcix3-1.fna&oh=00_AYDb92ztGxppl_RKkBbBD4Ko5CejRmqY3ulMKHMSeJp4uQ&oe=668A899D"
                      alt=""
                    />
                  </div>
                  <div className="border-none sm:border-l-2 border-black sm:pl-8">
                    <div className="flex justify-center sm:justify-start">
                      <h3 className="text-2xl font-semibold mr-2">4.6</h3>

                      <img
                        className="w-5"
                        src="https://www.svgrepo.com/show/513354/star.svg"
                        alt="stars-icon"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm">Rated by 25k on google.</h3>
                    </div>
                  </div>
                </div>
                <Button className="my-4 bg-blueviolet-600">
                  Read More <MoveRight className="ps-2" />
                </Button>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;
