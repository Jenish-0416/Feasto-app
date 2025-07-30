"use client";
import { useEffect, useState, useRef } from "react";
import { FaStar, FaRegClock } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { api } from "~/lib/utils";

type reviewItem = {
  name: string;
  location: string;
  date: string;
  review: string;
  avatar: string;
};

export default function CustomerReviews() {
  const [reviews, setReviews] = useState<reviewItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getfoodcard = async () => {
    try {
      const res = await api.get("/reviews");
      setReviews(res.data);
    } catch (err) {
      console.error("Failed to fetch reviews", err);
    }
  };

  useEffect(() => {
    getfoodcard();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-[#d6d6d6] pt-10 pb-[120px] md:px-[100px] w-full">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-black text-center">
        Customer Reviews
      </h2>

      {/* Rating Box (Top Center in Mobile) */}
      <div className="flex justify-center mt-6 sm:mt-0 sm:absolute  sm:-bottom-18 sm:left-0 sm:right-0">
        <div className="bg-white px-6 py-4 rounded-2xl shadow-md text-center w-[230px]">
          <h1 className="text-5xl font-semibold leading-none">3.4</h1>
          <div className="flex justify-center gap-1 mt-2 text-[#ff9800] text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-300" />
            <FaStar className="text-gray-300" />
          </div>
          <p className="text-sm text-[#888] mt-1">1,360 reviews</p>
        </div>
      </div>

      {/* Review Cards */}
      <div className="mt-8 overflow-x-auto scrollbar-hide md:overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-4  md:flex md:flex-row  md:justify-start md:gap-6 transition-all duration-300 "
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[90%] md:min-w-100 bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/40")
                  }
                />
                <div>
                  <h4 className="font-bold text-base">{review.name}</h4>
                  <p className="text-[#ff9800] text-sm">{review.location}</p>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <FaRegClock className="text-[#ff9800]" />
                  {review.date}
                </div>
                <div className="flex gap-1 text-[#ff9800]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <p className="text-gray-800 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Buttons (Visible only on Mobile) */}
      <div className="flex justify-center gap-10 mt-8 ">
        <button
          onClick={() => scroll("left")}
          className="bg-[#ff9800] w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-md"
        >
          <IoIosArrowBack className="text-2xl text-black" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-[#ff9800] w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-md"
        >
          <IoIosArrowForward className="text-2xl text-black" />
        </button>
      </div>
    </div>
  );
}
