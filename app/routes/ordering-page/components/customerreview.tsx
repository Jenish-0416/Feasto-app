import { FaStar, FaRegClock } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const reviews = [
  {
    name: "St Glx",
    location: "South London",
    date: "24th September, 2023",
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    avatar: "public/assests/reviewdp.svg",
  },
  {
    name: "St Glx",
    location: "South London",
    date: "24th September, 2023",
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    avatar: "public/assests/reviewdp.svg",
  },
  {
    name: "St Glx",
    location: "South London",
    date: "24th September, 2023",
    review:
      "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    avatar: "public/assests/reviewdp.svg",
  },
];

export default function CustomerReviews() {
  return (
    <div className="relative bg-[#d6d6d6] pt-10 pb-[100px] md:px-[100px] w-full ">
     
      <div className="flex justify-between items-center w-full mx-auto mt-10">
        <h2 className="text-3xl font-bold text-black mb-10">Customer Reviews</h2>
        <div className="flex gap-3">
          <button className="bg-[#ff9800] w-10 h-10 rounded-full flex items-center justify-center shadow-md">
            <IoIosArrowBack className="text-white text-lg" />
          </button>
          <button className="bg-[#ff9800] w-10 h-10 rounded-full flex items-center justify-center shadow-md">
            <IoIosArrowForward className="text-white text-lg" />
          </button>
        </div>
      </div>


      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white p-6 w-full md:w-[45%] lg:w-[30%] shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={review.avatar}
                alt="avatar"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/40";
                }}
                className="w-10 h-10 rounded-full object-cover"
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

  
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 z-10">
        <div className="bg-white px-10 py-4 rounded-t-2xl shadow-md text-center w-[160px]">
          <h1 className="text-5xl font-semibold leading-none">3.4</h1>
          <div className="flex justify-center gap-1 mt-1 text-[#ff9800] text-lg">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-300" />
            <FaStar className="text-gray-300" />
          </div>
          <p className="text-sm text-[#888] mt-1">1,360 reviews</p>
        </div>
      </div>
    </div>
  );
}
