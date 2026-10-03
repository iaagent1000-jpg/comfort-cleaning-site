export type ServiceCategory = "House cleaning" | "Commercial" | "Kitchen" | "Bathroom" | "Car interior" | "Upholstery" | "Mattress" | "Carpet" | "Outdoor & other";
export type PricingType = "hourly" | "fixed" | "range" | "quote";

export type ServiceOption = {
  name: string;
  price?: number;
  priceMin?: number;
  priceMax?: number;
  unit?: string;
};

export type Service = {
  id: string;
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  includes: string[];
  pricingType: PricingType;
  price?: number;
  priceMin?: number;
  priceMax?: number;
  priceUnit?: string;
  minimumHours?: number;
  options?: ServiceOption[];
  featured: boolean;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  active: boolean;
  assessmentRequired: boolean;
};

const serviceVisuals = {
  regular: { image: "/images/services/regular-cleaning.webp", imageAlt: "Professional cleaner carrying out regular home cleaning" },
  deep: { image: "/images/services/deep-cleaning.webp", imageAlt: "Detailed deep cleaning in a bright home interior" },
  express: { image: "/images/services/express-cleaning-female.webp", imageAlt: "Comfort Cleaning team member refreshing a modern bedroom", imagePosition: "center 34%" },
  move: { image: "/images/services/move-cleaning.webp", imageAlt: "Cleaner preparing an empty property for moving day" },
  construction: { image: "/images/services/post-construction.webp", imageAlt: "Post-construction cleaner removing building dust" },
  school: { image: "/images/services/school-accommodation.webp", imageAlt: "Professional cleaning in a school and accommodation setting" },
  restaurant: { image: "/images/services/restaurant-kitchen.webp", imageAlt: "Commercial restaurant kitchen being professionally cleaned" },
  offices: { image: "/images/services/offices-cleaning.webp", imageAlt: "Professional cleaner working in a modern office" },
  nursing: { image: "/images/services/nursing-home.webp", imageAlt: "Careful professional cleaning in a nursing home" },
  warehouse: { image: "/images/services/warehouse-cleaning.webp", imageAlt: "Industrial warehouse floor cleaning" },
  kitchen: { image: "/images/services/deep-kitchen.webp", imageAlt: "Detailed deep cleaning of a domestic kitchen" },
  bathroom: { image: "/images/services/bathroom-cleaning.webp", imageAlt: "Sparkling bathroom after a professional deep clean" },
  car: { image: "/images/services/car-interior.webp", imageAlt: "Professional deep cleaning of a car interior" },
  sofa: { image: "/images/services/sofa-upholstery.webp", imageAlt: "Professional upholstery cleaning on a fabric sofa" },
  mattress: { image: "/images/services/mattress-cleaning.webp", imageAlt: "Professional mattress cleaning with extraction equipment" },
  carpet: { image: "/images/services/carpet-cleaning.webp", imageAlt: "Professional carpet cleaning in a home" },
  power: { image: "/images/services/power-washing.webp", imageAlt: "Power washing an outdoor paved surface" },
  windows: { image: "/images/services/window-cleaning.webp", imageAlt: "Professional cleaner washing a large window" },
  handyman: { image: "/images/services/handyman.webp", imageAlt: "Handyman completing a household maintenance task" },
  ironing: { image: "/images/services/ironing.webp", imageAlt: "Fresh clothes being professionally ironed" },
} as const;

const image = undefined;

const baseServices: (Omit<Service, "image" | "imageAlt" | "imagePosition"> & { image?: undefined })[] = [
  { id: "regular", slug: "regular-cleaning", name: "Regular Cleaning", category: "House cleaning", shortDescription: "Reliable routine care that keeps your home feeling fresh and manageable.", fullDescription: "Regular cleaning is designed for occupied homes that need dependable, repeat care. After the first assessment, we agree the priority rooms, practical routine and cleaning time with you.", includes: ["Routine surface and floor care", "Kitchen and bathroom upkeep", "A plan shaped around your home"], pricingType: "hourly", price: 28.5, priceUnit: "hour", minimumHours: 3, featured: true, image, active: true, assessmentRequired: true },
  { id: "deep", slug: "deep-cleaning", name: "Deep Cleaning", category: "House cleaning", shortDescription: "Detailed top-to-bottom attention for spaces that need a reset.", fullDescription: "A deeper clean for homes needing more detailed attention than a routine visit. The manager assesses condition and priorities before confirming the cleaning hours required.", includes: ["Detailed room-by-room assessment", "High-touch and overlooked areas", "Agreed priority plan before work begins"], pricingType: "hourly", price: 32, priceUnit: "hour", featured: true, image, active: true, assessmentRequired: true },
  { id: "express", slug: "express-cleaning", name: "Express Cleaning", category: "House cleaning", shortDescription: "A focused fixed-price refresh for a clearly defined scope.", fullDescription: "Express Cleaning is a focused service for customers who need a practical refresh. We confirm suitability and scope before the clean so expectations remain clear.", includes: ["Focused cleaning plan", "Clear fixed-price baseline", "Suitability confirmed before booking"], pricingType: "fixed", price: 140, featured: true, image, active: true, assessmentRequired: true },
  { id: "move", slug: "move-in-move-out", name: "Move In / Move Out", category: "House cleaning", shortDescription: "Detailed cleaning support for moving day and property handovers.", fullDescription: "For empty or nearly empty properties before a move, after a move or ahead of handover. We assess size, condition and access before confirming the required time.", includes: ["Empty-property cleaning", "Kitchen and bathroom detail", "Assessment-based time confirmation"], pricingType: "hourly", price: 33, priceUnit: "hour", featured: true, image, active: true, assessmentRequired: true },
  { id: "construction", slug: "post-construction-cleaning", name: "Post-Construction Cleaning", category: "Commercial", shortDescription: "Careful removal of post-build dust and residue before handover.", fullDescription: "A staged clean for renovated and newly built spaces. The scope depends on surface types, dust levels and site readiness, so an assessment is required.", includes: ["Fine dust removal", "Surface and fitting clean-down", "Site-specific work plan"], pricingType: "hourly", price: 35, priceUnit: "hour", featured: true, image, active: true, assessmentRequired: true },
  { id: "school", slug: "school-accommodation-cleaning", name: "School & Accommodation Cleaning", category: "Commercial", shortDescription: "Structured cleaning for shared learning and accommodation spaces.", fullDescription: "Flexible cleaning for schools and accommodation settings, planned around the layout, occupancy and access requirements of each site.", includes: ["Shared-space cleaning", "Washroom and touchpoint focus", "Site assessment and tailored schedule"], pricingType: "hourly", price: 28, priceUnit: "hour", featured: true, image, active: true, assessmentRequired: true },
  { id: "restaurant", slug: "restaurant-kitchen-cleaning", name: "Restaurant & Kitchen Cleaning", category: "Commercial", shortDescription: "Detailed cleaning for demanding hospitality environments.", fullDescription: "Commercial kitchen and restaurant cleaning planned around the site, equipment, grease levels and safe access windows.", includes: ["Kitchen and service-area assessment", "High-use surface cleaning", "Scope confirmed for each premises"], pricingType: "hourly", price: 35, priceUnit: "hour", featured: true, image, active: true, assessmentRequired: true },
  { id: "offices", slug: "factories-offices-cleaning", name: "Factories & Offices Cleaning", category: "Commercial", shortDescription: "Flexible workplace cleaning shaped around operations and access.", fullDescription: "Cleaning for offices and factory environments with a practical plan built around traffic, working hours and site requirements.", includes: ["Workstation and common areas", "Floors and washrooms", "Operationally aware schedule"], pricingType: "hourly", price: 28, priceUnit: "hour", featured: true, image, active: true, assessmentRequired: true },
  { id: "nursing", slug: "nursing-home-cleaning", name: "Nursing Home Cleaning", category: "Commercial", shortDescription: "Considered cleaning for sensitive care environments.", fullDescription: "A carefully assessed service for nursing home environments, with scope and scheduling agreed directly with the site manager.", includes: ["Shared and resident-space planning", "High-touch area focus", "Site-led assessment"], pricingType: "hourly", price: 28, priceUnit: "hour", featured: false, image, active: true, assessmentRequired: true },
  { id: "warehouse", slug: "warehouse-cleaning", name: "Warehouse Cleaning", category: "Commercial", shortDescription: "Practical cleaning for large working and storage areas.", fullDescription: "Warehouse cleaning is quoted after reviewing floor area, access, machinery zones and the level of buildup involved.", includes: ["Floor and access-area cleaning", "Scale and condition review", "Tailored work plan"], pricingType: "hourly", price: 28, priceUnit: "hour", featured: false, image, active: true, assessmentRequired: true },
  { id: "kitchen", slug: "deep-kitchen-cleaning", name: "Deep Kitchen Cleaning", category: "Kitchen", shortDescription: "A thorough kitchen reset with useful optional appliance add-ons.", fullDescription: "Deep kitchen cleaning tackles built-up grime across the room. Appliance and fixture options can be selected separately so your request accurately reflects what is needed.", includes: ["Detailed kitchen surfaces", "Cupboard and fitting attention by agreement", "Optional appliance add-ons"], pricingType: "fixed", price: 265, options: [{ name: "One oven", price: 70 }, { name: "Two ovens", price: 95 }, { name: "Microwave", price: 15 }, { name: "Gas hob", price: 32 }, { name: "Electric hob", price: 15 }, { name: "Extractor fan", price: 35 }, { name: "Fridge cleaning", price: 70 }], featured: true, image, active: true, assessmentRequired: true },
  { id: "bathroom", slug: "bathroom-deep-cleaning", name: "Bathroom Deep Cleaning", category: "Bathroom", shortDescription: "Targeted bathroom cleaning with options for different layouts and needs.", fullDescription: "Choose the bathroom option closest to your space. The manager confirms condition and scope before the work is scheduled.", includes: ["Fixtures and surfaces", "Limescale and buildup attention", "Resealing option where required"], pricingType: "fixed", options: [{ name: "Bathroom with shower OR bath deep clean", price: 90 }, { name: "Bathroom with shower AND bath deep clean", price: 100 }, { name: "2 Bathrooms Deep Cleaning", price: 180 }, { name: "3 Bathrooms Deep Cleaning", price: 250 }, { name: "Shower cabin deep clean", price: 70 }, { name: "Small toilet/WC", price: 50 }, { name: "Remove old silicone and reseal bath/shower/sink", price: 95 }], featured: true, image, active: true, assessmentRequired: true },
  { id: "car", slug: "car-interior-valeting", name: "Car Interior / Valeting", category: "Car interior", shortDescription: "Interior valeting for standard cars and larger SUVs or jeeps.", fullDescription: "A practical interior refresh using the current booking baseline. Let us know about stains, pet hair or other areas needing extra attention.", includes: ["Interior surfaces and seating", "Footwells and mats", "Vehicle-size option"], pricingType: "fixed", options: [{ name: "Standard", price: 100 }, { name: "SUV/Jeep", price: 120 }], featured: false, image, active: true, assessmentRequired: true },
  { id: "sofa", slug: "sofa-upholstery-cleaning", name: "Sofa Upholstery Cleaning", category: "Upholstery", shortDescription: "Fabric upholstery cleaning priced by seating size and condition.", fullDescription: "Sofa cleaning is priced as a range because fabric, condition, access and stain treatment can affect the final quote.", includes: ["Fabric and condition check", "Targeted upholstery clean", "Price confirmed before service"], pricingType: "range", options: [{ name: "2-seater", priceMin: 50, priceMax: 80 }, { name: "3-seater", priceMin: 70, priceMax: 120 }, { name: "4-seater", priceMin: 90, priceMax: 140 }, { name: "5-seater", priceMin: 120, priceMax: 180 }, { name: "Chair", priceMin: 5, priceMax: 15 }, { name: "Armchair", priceMin: 20, priceMax: 50 }], featured: true, image, active: true, assessmentRequired: true },
  { id: "mattress", slug: "mattress-cleaning", name: "Mattress Cleaning", category: "Mattress", shortDescription: "Professional fabric care for single, double and king mattresses.", fullDescription: "Mattress cleaning is quoted within a range after reviewing size, material and condition.", includes: ["Fabric-safe process", "Condition review", "Size-based price range"], pricingType: "range", options: [{ name: "Single", priceMin: 40, priceMax: 60 }, { name: "Double", priceMin: 60, priceMax: 100 }, { name: "King", priceMin: 100, priceMax: 120 }], featured: false, image, active: true, assessmentRequired: true },
  { id: "carpet", slug: "carpet-rug-cleaning", name: "Carpet & Rug Cleaning", category: "Carpet", shortDescription: "Focused carpet and rug cleaning for the most-used areas of your home.", fullDescription: "Choose the rooms or items you need cleaned. Pricing starts at the listed baseline and is confirmed after condition and access are understood.", includes: ["Rugs and room carpets", "Stairs and landing option", "Condition-led confirmation"], pricingType: "range", options: [{ name: "Rug", priceMin: 35 }, { name: "One bedroom", priceMin: 65 }, { name: "Sitting room", priceMin: 75 }, { name: "Stairs & landing", priceMin: 79 }], featured: true, image, active: true, assessmentRequired: true },
  { id: "power", slug: "power-washing", name: "Power Washing", category: "Outdoor & other", shortDescription: "Outdoor surface cleaning using the current order-form rate.", fullDescription: "Power washing scope depends on surface area, material, access and condition. The current booking baseline is €45 per hour, confirmed after assessment.", includes: ["Surface and access review", "Outdoor pressure cleaning", "Time confirmed after assessment"], pricingType: "hourly", price: 45, priceUnit: "hour", featured: true, image, active: true, assessmentRequired: true },
  { id: "windows", slug: "window-cleaning", name: "Window Cleaning", category: "Outdoor & other", shortDescription: "Detailed interior, exterior and post-renovation window options.", fullDescription: "Window pricing is item-based. Select the closest options and use notes for quantities; we will confirm access and the final scope.", includes: ["Interior and exterior options", "Blind add-on", "Post-renovation options"], pricingType: "fixed", options: [{ name: "Interior window", price: 8 }, { name: "Exterior window", price: 8 }, { name: "Interior + Exterior", price: 13 }, { name: "Blind + interior window", price: 35, unit: "blind" }, { name: "Exterior after renovation", price: 20 }, { name: "Interior after renovation", price: 20 }], featured: true, image, active: true, assessmentRequired: true },
  { id: "handyman", slug: "handyman", name: "Handyman", category: "Outdoor & other", shortDescription: "Practical household help for smaller maintenance tasks.", fullDescription: "A flexible handyman service for agreed household tasks, starting from a 1.5-hour visit.", includes: ["Task review", "Agreed small maintenance jobs", "Clear time baseline"], pricingType: "fixed", price: 80, priceUnit: "1.5 hours", featured: false, image, active: true, assessmentRequired: true },
  { id: "ironing", slug: "ironing", name: "Ironing", category: "Outdoor & other", shortDescription: "Convenient ironing support priced from a per-item baseline.", fullDescription: "Ironing is priced from €1 per item, with the final amount depending on garment type and quantity.", includes: ["Garment quantity review", "Per-item baseline", "Final scope confirmed before service"], pricingType: "fixed", price: 1, priceUnit: "item", featured: false, image, active: true, assessmentRequired: false },
];

export const services: Service[] = baseServices.map((service) => ({
  ...service,
  ...serviceVisuals[service.id as keyof typeof serviceVisuals],
}));

export const activeServices = services.filter((service) => service.active);
export const featuredServices = activeServices.filter((service) => service.featured);
export const serviceCategories = Array.from(new Set(activeServices.map((service) => service.category)));

export function getService(slug: string) {
  return activeServices.find((service) => service.slug === slug);
}

export function formatPrice(service: Pick<Service, "pricingType" | "price" | "priceMin" | "priceMax" | "priceUnit" | "options">) {
  if (service.price !== undefined) {
    const amount = Number.isInteger(service.price) ? service.price : service.price.toFixed(2);
    const prefix = service.pricingType === "hourly" || service.priceUnit ? "from " : "";
    return `${prefix}€${amount}${service.priceUnit ? ` / ${service.priceUnit}` : ""}`;
  }
  if (service.priceMin !== undefined) return `from €${service.priceMin}${service.priceMax ? `–€${service.priceMax}` : ""}`;
  if (service.options?.length) return "Options from €" + Math.min(...service.options.map((option) => option.price ?? option.priceMin ?? Infinity));
  return "Assessment quote";
}

export function formatOptionPrice(option: ServiceOption) {
  if (option.price !== undefined) return `€${option.price}${option.unit ? ` / ${option.unit}` : ""}`;
  if (option.priceMin !== undefined) return `from €${option.priceMin}${option.priceMax ? `–€${option.priceMax}` : ""}`;
  return "Quote";
}
