export const SITE = {
  brand: "GLOW THEORY COSMETICS",
  tagline: "Skincare, Makeup & Haircare — Always In Stock",
  subtagline: "Genuine products, real prices, no guesswork. Eastgate Mall's go-to for skincare, makeup, haircare and fragrance.",
  addressLine1: "Eastgate Mall, Shop A43",
  addressLine2: "Robert Mugabe Rd, Harare",
  hours: "Mon–Sat, 9am–6pm",
  status: "Wholesale & Retail",
  whatsapp: "263771234567",
  phoneDisplay: "+263 77 123 4567",
  instagram: "https://www.instagram.com/glowtheorycosmetics",
  facebook: "https://www.facebook.com/glowtheorycosmetics",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Eastgate+Mall+Harare",
};

// DEMO SITE — this is a fictional scale-test business, not a real client.
// Placeholder stock photography (Lorem Picsum, seeded for consistency).
// Swap for real product photos before handing to an actual client.
export const IMAGES = {
  hero: "https://picsum.photos/seed/glow-hero/1600/1000",
  edit: "https://picsum.photos/seed/glow-edit/1200/1500",
  dress: "https://picsum.photos/seed/glow-skincare/900/1100",
  top: "https://picsum.photos/seed/glow-makeup/900/1100",
  blazer: "https://picsum.photos/seed/glow-haircare/900/1100",
  set: "https://picsum.photos/seed/glow-fragrance/900/1100",
  shoes: "https://picsum.photos/seed/glow-bodycare/900/1100",
  bag: "https://picsum.photos/seed/glow-giftsets/900/1100",
  catDresses: "https://picsum.photos/seed/glow-cat-skincare/700/900",
  catTops: "https://picsum.photos/seed/glow-cat-makeup/700/900",
  catOuterwear: "https://picsum.photos/seed/glow-cat-haircare/700/900",
  catSets: "https://picsum.photos/seed/glow-cat-fragrance/700/900",
  catShoes: "https://picsum.photos/seed/glow-cat-bodycare/700/900",
  catAccessories: "https://picsum.photos/seed/glow-cat-giftsets/700/900",
};

export const CATEGORIES = [
  { name: "Skincare", image: IMAGES.catDresses },
  { name: "Makeup", image: IMAGES.catTops },
  { name: "Haircare", image: IMAGES.catOuterwear },
  { name: "Fragrance", image: IMAGES.catSets },
  { name: "Body Care", image: IMAGES.catShoes },
  { name: "Gift Sets", image: IMAGES.catAccessories },
];

export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryLink(product, size) {
  const msg = `Hi Glow Theory, I'm interested in the ${product.name}${size ? ` (${size})` : ""}. Is it in stock?`;
  return whatsappLink(msg);
}
