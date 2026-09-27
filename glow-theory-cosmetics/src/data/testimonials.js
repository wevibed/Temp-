import { IMAGES } from "@/lib/site";

// PLACEHOLDER testimonials — illustrative for this demo site, not real
// customer quotes. Replace with genuine reviews for an actual client.
export const TESTIMONIALS = [
  {
    id: "t1",
    customer_name: "Chiedza N.",
    location: "Harare",
    quote: "The Vitamin C serum is now a staple in my routine — noticed a difference within two weeks.",
    rating: 5,
    image_url: IMAGES.dress,
    product_name: "Vitamin C Brightening Serum",
  },
  {
    id: "t2",
    customer_name: "Farai T.",
    location: "Harare",
    quote: "Foundation shade match was spot on, and the gift set made an easy birthday present.",
    rating: 5,
    image_url: IMAGES.top,
    product_name: "Matte Liquid Foundation",
  },
  {
    id: "t3",
    customer_name: "Nyasha P.",
    location: "Harare",
    quote: "Good wholesale rates and always in stock — my go-to for restocking my own small shop.",
    rating: 4,
    image_url: IMAGES.bag,
    product_name: "Self-Care Gift Set",
  },
];

// Mirrors the subset of the Base44 entity SDK's call shape used here.
export const Testimonial = {
  async list(_sort, limit) {
    let items = TESTIMONIALS;
    if (limit) items = items.slice(0, limit);
    return items;
  },
};
