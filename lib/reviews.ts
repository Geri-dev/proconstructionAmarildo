export type ReviewPlatform = "google" | "homeadvisor";

export type Review = {
  headline: string;
  text: string;
  name: string;
  role: string;
  platform: ReviewPlatform;
  rating: number;
};

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Creative+Pro+Construction/@40.8786742,-74.1255979,17z/data=!4m8!3m7!1s0xebf6060601423d1:0xeb0997d2bc93069b!8m2!3d40.8786742!4d-74.1255979!9m1!1b1!16s%2Fg%2F11xl3mlnrh?entry=ttu";

export const reviews: Review[] = [
  {
    headline: "They did a very nice job with my roof!",
    text: "The guys have done a very nice job with my roof. I will recommend them to many people and I really like their quality and I am response to me. Thank you creative pro construction",
    name: "Tariq Jeelani",
    role: "Homeowner",
    platform: "google",
    rating: 5,
  },
  {
    headline: "Great price and a 50-year warranty!",
    text: "I hired creative pro construction to look at my roof because was more than 25 years old. They give me a very nice price for it. I really recommend this company because they have done very nice job and they give me 50 years warranty from labour and material Thank you creative pro construction.",
    name: "Love Preet",
    role: "Homeowner",
    platform: "google",
    rating: 5,
  },
  {
    headline: "Very professional from start to finish!",
    text: "Called Creative Pro Construction and set an appointment about a free estimate they were offering about my roof, let me begin by saying this guys are very professional. I got the chance to speak with Amarildo, he showed up in time came and explained everything, the purpose of every material, i did get some more estimates but i decided to go with them. They did not disappoint. I am glad i made that choice.",
    name: "Irdi Jacelli",
    role: "Homeowner",
    platform: "google",
    rating: 5,
  },
  {
    headline: "The final result exceeded my expectations!",
    text: "I had a great experience with Creative Pro Construction! They built a chimney for me, and the work was professional, clean, and completed on time. The team was friendly, knowledgeable, and explained every step of the process clearly from start to finish. They used high-quality materials, and the final result exceeded my expectations.",
    name: "Armend B.",
    role: "Property Manager",
    platform: "homeadvisor",
    rating: 5,
  },
  {
    headline: "Excellent work from start to finish!",
    text: "Creative Pro Construction did an excellent job from start to finish. Very professional, reliable, and easy to communicate with. The work was completed on time, with great attention to detail and high-quality craftsmanship. The crew was clean, respectful, and knowledgeable. Pricing was fair and everything was explained clearly. I would definitely hire them",
    name: "John S.",
    role: "Homeowner",
    platform: "homeadvisor",
    rating: 5,
  },
  {
    headline: "Highly recommended for roofing!",
    text: "Great Company, used them on my roof, highly recommended!",
    name: "Jason M.",
    role: "Homeowner",
    platform: "homeadvisor",
    rating: 5,
  },
];

export const REVIEW_AGGREGATE = {
  ratingValue: 5,
  reviewCount: reviews.length,
  bestRating: 5,
  worstRating: 5,
} as const;
