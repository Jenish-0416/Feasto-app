import { Card, CardTitle, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";
import { api } from "~/lib/utils";

type RestaurantItem = {
  id: number;
  image: string;
  alt: string;
  title: string;
  button: string;
  badgeColor: string;
};

export default function Brands() {
  const [jobs, setJobs] = useState<RestaurantItem[]>([]);

  const getRestaurant = async () => {
    try {
      const res = await api.get("/restaurant");
      console.log("34567", res.data);
      setJobs(res.data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    }
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <>
      {/* Mobile only: slider */}
      <div className="md:hidden mt-8 mb-8 px-4">
        <h2 className="font-bold mb-4 text-xl">Popular Restaurants</h2>
        <div className="flex flex-row gap-4 overflow-x-auto hide-scrollbar pb-2">
          {jobs.map((job, idx) => (
            <Card
              key={idx}
              className="shadow-lg bg-[#FC8A06] relative overflow-hidden max-w-[122px] max-h-[156px]  flex-shrink-0 rounded-[12px]"
            >
              <img
                src={job.image}
                alt={job.alt}
                className="object-cover w-full h-[156px]"
                style={{
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <CardContent className=" bg-[#FC8A06]">
                <CardTitle className="font-bold text-white py-1 flex flex-col justify-center text-center text-[13px]">
                  {job.title}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Desktop/Tablet: grid */}
      <div className="hidden md:block mt-8 md:mt-[56px] mb-8 md:mb-[51px] px-4 md:px-8">
        <h2 className="font-bold mb-4 text-xl md:text-2xl lg:text-[32px]">
          Popular Restaurants
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
          {jobs.map((job, idx) => (
            <Card
              key={idx}
              className="shadow-lg bg-[#FC8A06] relative overflow-hidden"
              style={{ borderRadius: "12px" }}
            >
              <img
                src={job.image}
                alt={job.alt}
                className="object-cover w-full h-32 md:h-40 lg:h-[203px]"
                style={{
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <CardContent className="p-2 flex flex-col gap-2 bg-[#FC8A06] flex items-center justify-center">
                <CardTitle className="font-bold text-white text-center text-xs md:text-sm lg:text-base line-clamp-2">
                  {job.title}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
