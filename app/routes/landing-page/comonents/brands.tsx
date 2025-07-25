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
    <div className=" mt-[56px] mb-[51px]">
      <h2
        className="font-bold mb-4"
        style={{
          width: "338px",
          height: "56px",
          transform: "rotate(0deg)",
          opacity: 1,
          top: "0px",
          left: "0px",
          fontSize: "32px",
        }}
      >
        Popular Restaurants
      </h2>
      <div className="flex flex-wrap justify-start gap-3">
        {jobs.map((job, idx) => (
          <Card
            key={idx}
            className="shadow-lg bg-[#FC8A06] relative overflow-hidden"
            style={{
              width: "238px",
              height: "266px",
              transform: "rotate(0deg)",
              opacity: 1,
              borderRadius: "12px",
            }}
          >
            <img
              src={job.image}
              alt={job.alt}
              className="object-cover"
              style={{
                width: "238px",
                height: "203px",
                transform: "rotate(0deg)",
                opacity: 1,
                top: "1884px",
                left: "100px",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            />
            <CardContent className="p-2 flex flex-col gap-2 bg-[#FC8A06] flex items-center justify-center">
              <CardTitle
                className="font-bold text-white text-center"
                style={{
                  width: "182px",
                  height: "27px",
                  transform: "rotate(0deg)",
                  opacity: 1,
                  top: "2105px",
                  left: "128px",
                }}
              >
                {job.title}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
