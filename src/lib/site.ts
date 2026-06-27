// Central content + business data for Citizen Cooling Solutions Limited.
// Edit this file to update copy, services, products, industries and contact details.
// Anything marked "REPLACE" should be swapped for confirmed client-supplied content.

export const company = {
  name: "Citizen Cooling Solutions Limited",
  shortName: "Citizen Cooling Solutions",
  initials: "CCS",
  tagline: "Industrial Cooling, Power & Thermal Protection",
  blurb:
    "Citizen Cooling Solutions Limited specialises in industrial cooling systems, radiator repair and fabrication, generator maintenance, motor rewinding, and the supply of thermal insulation and refractory materials — serving industrial clients across Kenya and supplying the wider East Africa region.",
  location: "Jogoo Road, Nairobi, Kenya",
  street: "Jogoo Road",
  city: "Nairobi",
  country: "Kenya",
  countryCode: "KE",
  // Repair/fabrication is workshop-based in Kenya; materials are supplied across East Africa.
  region: "East Africa",
  supplyRegion: "Kenya & East Africa",
  // East African Community markets supplied (for areaServed schema).
  eacCountries: [
    "Kenya",
    "Uganda",
    "Tanzania",
    "Rwanda",
    "Burundi",
    "South Sudan",
    "Democratic Republic of the Congo",
  ],
  domain: "citizencoolingsolutions.co.ke",
  url: "https://citizencoolingsolutions.co.ke",
  hours: "Mon – Sat · 8:00 AM – 5:00 PM",
  openingHours: "Mo-Sa 08:00-17:00",
  founded: "2014", // REPLACE: confirm year founded
  // Phones: primary line first (used for WhatsApp + primary CTAs), secondary second.
  phones: ["0721 670960", "0722 370891"],
  // WhatsApp uses the primary line in international format (Kenya +254).
  whatsapp: "254721670960",
  email: "info@citizencoolingsolutions.co.ke",
  // REPLACE: confirm social handles
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const phoneHref = (p: string) =>
  "tel:+254" + p.replace(/\D/g, "").replace(/^0/, "");

export const phoneIntl = (p: string) =>
  "+254 " + p.replace(/\D/g, "").replace(/^0/, "");

export const waHref = (text?: string) =>
  `https://wa.me/${company.whatsapp}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const nav: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type ServiceStep = { title: string; desc: string };

export type Service = {
  slug: string;
  title: string;
  short: string; // card summary
  desc: string; // legacy summary (kept for home grid)
  icon: string;
  flagship?: boolean;
  overview: string[];
  benefits: string[];
  industries: string[];
  process: ServiceStep[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs of related services
  seoTitle: string;
  metaDescription: string;
  imageNote: string; // REPLACE guidance
  image?: string; // set to a /public path when a real photo is available
};

export const services: Service[] = [
  {
    slug: "radiator-repair-fabrication",
    title: "Radiator Repair & Fabrication",
    short:
      "Re-coring, leak repair and custom fabrication for engine, plant and industrial radiators.",
    desc: "Re-coring, leak repair and custom fabrication for engine, plant and industrial radiators — rebuilt to perform like new.",
    icon: "radiator",
    flagship: true,
    overview: [
      "Radiators are the heart of any cooling system, and a failed core means lost production. Our Jogoo Road workshop re-cores, repairs and fabricates radiators for engines, generators, compressors and heavy plant — restoring full thermal performance instead of forcing a costly full replacement.",
      "Where an original is obsolete or beyond economic repair, we fabricate a new radiator to match your exact dimensions, mounting and capacity. Every unit is pressure-tested and flow-checked before it leaves the workshop.",
    ],
    benefits: [
      "Re-coring restores cooling capacity at a fraction of replacement cost",
      "Custom fabrication for obsolete or hard-to-source units",
      "Pressure & flow testing on every repair",
      "Copper/brass and aluminium cores handled in-house",
    ],
    industries: [
      "manufacturing",
      "transport",
      "power-generation",
      "tea-factories",
    ],
    process: [
      { title: "Inspect & test", desc: "We assess the core, tanks and headers and pressure-test to locate every leak." },
      { title: "Re-core or fabricate", desc: "We re-core, re-tube or fabricate a new radiator to your exact specification." },
      { title: "Flow & pressure test", desc: "The rebuilt unit is tested to confirm cooling performance and a leak-free seal." },
      { title: "Fit & hand over", desc: "We deliver ready-to-fit, with guidance on coolant and upkeep." },
    ],
    faqs: [
      { q: "Can you re-core a radiator that the manufacturer no longer supports?", a: "Yes. Re-coring and full custom fabrication are core services — we can rebuild or remanufacture radiators for obsolete and imported equipment." },
      { q: "Do you handle both copper/brass and aluminium radiators?", a: "Yes, both core types are handled in our workshop." },
    ],
    related: ["oil-cooler-repair", "turbocharger-intercoolers", "tea-factory-dryer-radiators"],
    seoTitle: "Radiator Repair & Fabrication in Nairobi | Re-coring & Custom Radiators",
    metaDescription:
      "Industrial radiator repair, re-coring and custom fabrication in Nairobi. Engine, generator and plant radiators rebuilt and pressure-tested. Serving all Kenya.",
    imageNote: "REPLACE: workshop photo of a radiator being re-cored / pressure-tested.",
    image: "/images/services/radiator-repair-fabrication.jpg",
  },
  {
    slug: "oil-cooler-repair",
    title: "Oil Cooler Repair",
    short:
      "Diagnosis, pressure testing and repair of oil coolers and heat exchangers.",
    desc: "Diagnosis, pressure testing and repair of oil coolers to keep engines and hydraulics running at safe temperatures.",
    icon: "droplet",
    overview: [
      "Oil coolers and heat exchangers protect engines, transmissions and hydraulic systems from heat damage. We diagnose, pressure-test and repair tube-and-shell and plate oil coolers, clearing blockages and sealing leaks to restore safe operating temperatures.",
    ],
    benefits: [
      "Prevents engine, gearbox and hydraulic overheating",
      "Ultrasonic / chemical cleaning of fouled cores",
      "Pressure-tested to confirm a reliable seal",
      "Faster and cheaper than full replacement",
    ],
    industries: ["transport", "manufacturing", "power-generation"],
    process: [
      { title: "Diagnose", desc: "We identify blockage, internal leaks or oil-to-water cross contamination." },
      { title: "Clean & repair", desc: "Cores are cleaned, re-tubed or sealed as required." },
      { title: "Pressure test", desc: "Tested to working pressure to confirm integrity." },
      { title: "Return to service", desc: "Delivered ready to refit." },
    ],
    faqs: [
      { q: "My oil and coolant are mixing — can you fix that?", a: "Yes. Internal cross-leaks are a common oil-cooler failure; we locate and seal or re-tube the affected core and pressure-test before return." },
    ],
    related: ["radiator-repair-fabrication", "turbocharger-intercoolers"],
    seoTitle: "Oil Cooler & Heat Exchanger Repair Nairobi | Citizen Cooling Solutions",
    metaDescription:
      "Oil cooler and heat exchanger repair in Nairobi — cleaning, re-tubing, leak repair and pressure testing for engines, hydraulics and transmissions across Kenya.",
    imageNote: "REPLACE: photo of an oil cooler / heat exchanger under test.",
    image: "/images/services/oil-cooler-repair.jpg",
  },
  {
    slug: "turbocharger-intercoolers",
    title: "Turbocharger Intercoolers",
    short:
      "Repair and re-coring of charge-air intercoolers to restore boost efficiency.",
    desc: "Repair and re-coring of charge-air intercoolers to restore boost efficiency and protect your turbocharged engines.",
    icon: "turbo",
    overview: [
      "A leaking or fouled intercooler robs a turbocharged engine of power and fuel economy and pushes exhaust temperatures up. We repair, re-core and pressure-test charge-air coolers for trucks, gensets and industrial engines so they deliver dense, cool air to the cylinders again.",
    ],
    benefits: [
      "Restores boost pressure and fuel efficiency",
      "Lowers exhaust gas temperatures",
      "Leak detection and pressure testing",
      "Re-coring for damaged charge-air cores",
    ],
    industries: ["transport", "power-generation", "manufacturing"],
    process: [
      { title: "Boost-leak test", desc: "We pressure-test to find charge-air leaks." },
      { title: "Repair / re-core", desc: "Damaged cores are repaired or re-cored." },
      { title: "Verify", desc: "Re-tested to confirm a sealed, efficient unit." },
      { title: "Refit", desc: "Returned ready to install." },
    ],
    faqs: [
      { q: "Can a damaged intercooler really affect fuel consumption?", a: "Yes — a leaking intercooler reduces boost and forces the engine to work harder, raising fuel use and exhaust temperatures. Repair restores efficiency." },
    ],
    related: ["radiator-repair-fabrication", "oil-cooler-repair"],
    seoTitle: "Turbocharger Intercooler Repair & Re-coring Nairobi | Charge-Air Coolers",
    metaDescription:
      "Charge-air intercooler repair and re-coring in Nairobi. Restore boost pressure and fuel efficiency on turbocharged trucks, gensets and industrial engines in Kenya.",
    imageNote: "REPLACE: photo of an intercooler / charge-air cooler.",
    image: "/images/services/turbocharger-intercoolers.jpg",
  },
  {
    slug: "tea-factory-dryer-radiators",
    title: "Tea Factory Dryer Radiators",
    short:
      "Specialist re-coring and fabrication of dryer radiators (heat exchangers) for tea factories.",
    desc: "Specialist repair and fabrication of dryer radiators and heat exchangers for tea processing factories.",
    icon: "flame",
    flagship: true,
    overview: [
      "Tea dryers rely on large finned heat-exchanger radiators to deliver clean, hot air to the drying chambers. When fins clog or tubes leak, drying efficiency and tea quality fall and fuel costs climb. We specialise in re-coring, repairing and fabricating dryer radiators for KTDA and private tea factories.",
      "We understand the seasonal pressure of the tea calendar and prioritise fast turnaround so your dryers are back in service with minimal disruption to processing.",
    ],
    benefits: [
      "Restores drying temperature and air-flow efficiency",
      "Lowers fuel/firewood consumption per kilo of tea",
      "Custom fabrication for large finned dryer cores",
      "Proven experience with tea-factory equipment",
    ],
    industries: ["tea-factories", "food-processing", "manufacturing"],
    process: [
      { title: "Site assessment", desc: "We assess the dryer radiator on-site or in the workshop and check fins, tubes and headers." },
      { title: "Re-core / fabricate", desc: "We re-core or fabricate the finned heat-exchanger to original capacity." },
      { title: "Test", desc: "Pressure and flow tested to confirm performance." },
      { title: "Install & hand over", desc: "Returned and supported through commissioning." },
    ],
    faqs: [
      { q: "Have you worked with tea factories before?", a: "Yes — tea-factory dryer radiators are a specialist area for us, and we have served KTDA and private factories. We plan repairs around the demands of the tea calendar." },
      { q: "Can you fabricate a complete new dryer radiator?", a: "Yes. Where a core is beyond repair we fabricate a new finned heat-exchanger to match your dryer's dimensions and capacity." },
    ],
    related: ["radiator-repair-fabrication", "oil-cooler-repair"],
    seoTitle: "Tea Factory Dryer Radiator Repair & Fabrication Kenya | Heat Exchangers",
    metaDescription:
      "Specialist tea-factory dryer radiator repair, re-coring and fabrication in Kenya. Restore drying efficiency and cut fuel costs. Experience with KTDA & private factories.",
    imageNote: "REPLACE: photo of a tea-dryer finned radiator / heat exchanger.",
    image: "/images/services/tea-factory-dryer-radiators.jpg",
  },
  {
    slug: "generator-repair-maintenance",
    title: "Generator Repair & Maintenance",
    short:
      "On-site and workshop servicing, fault diagnosis, overhauls and preventive maintenance.",
    desc: "On-site and workshop servicing, fault diagnosis and overhauls to keep your gensets reliable and ready.",
    icon: "generator",
    overview: [
      "Standby and prime power must start every time. We service, diagnose and overhaul diesel generators on-site and in our workshop, and run scheduled preventive-maintenance programmes so faults are found before they become failures.",
    ],
    benefits: [
      "On-site and workshop service",
      "Preventive-maintenance contracts to prevent downtime",
      "Fault diagnosis and full overhauls",
      "Genuine filters and spares fitted",
    ],
    industries: ["hospitals", "power-generation", "manufacturing", "transport"],
    process: [
      { title: "Assess", desc: "We inspect the genset and run diagnostics under load." },
      { title: "Service / repair", desc: "We service, repair or overhaul as needed, fitting genuine parts." },
      { title: "Test under load", desc: "The set is tested to confirm reliable start and output." },
      { title: "Maintain", desc: "We can schedule recurring preventive maintenance." },
    ],
    faqs: [
      { q: "Do you offer scheduled generator maintenance contracts?", a: "Yes. Preventive maintenance is the most cost-effective way to guarantee standby power. We tailor a service schedule and supply the filters and spares your sets need." },
      { q: "Can you service generators on-site?", a: "Yes, we work both on-site and in our workshop depending on the fault and your operational needs." },
    ],
    related: ["generator-filters-spares", "generator-stator-rewinding", "motor-rewinding"],
    seoTitle: "Generator Repair & Maintenance Nairobi | Diesel Genset Service Kenya",
    metaDescription:
      "Diesel generator repair, preventive maintenance and overhauls in Nairobi — on-site and workshop service for hospitals, factories and fleets across Kenya.",
    imageNote: "REPLACE: photo of a technician servicing a diesel generator.",
    image: "/images/services/generator-repair-maintenance.jpg", // stock — REPLACE with own photo
  },
  {
    slug: "generator-filters-spares",
    title: "Generator Filters & Spares",
    short:
      "Genuine filters, parts and consumables for planned maintenance and repairs.",
    desc: "Genuine filters, parts and consumables to keep planned maintenance simple and downtime short.",
    icon: "filter",
    overview: [
      "Keep your maintenance simple with a reliable single source for generator consumables. We supply genuine fuel, oil and air filters, belts, sensors and service parts for common diesel generator brands — matched to your sets so the right part is always on hand.",
    ],
    benefits: [
      "Genuine fuel, oil and air filters",
      "Belts, sensors and service consumables",
      "Parts matched to your generator fleet",
      "Bundle with a maintenance contract",
    ],
    industries: ["hospitals", "power-generation", "manufacturing", "transport"],
    process: [
      { title: "Identify", desc: "We identify the correct parts for your generator models." },
      { title: "Supply", desc: "We supply genuine filters and spares from stock or to order." },
      { title: "Fit", desc: "Optionally fitted during scheduled servicing." },
    ],
    faqs: [
      { q: "Can you supply filters for any generator brand?", a: "We supply genuine and OEM-equivalent filters and spares for the common diesel generator brands in the Kenyan market — tell us your make and model." },
    ],
    related: ["generator-repair-maintenance"],
    seoTitle: "Generator Filters & Spare Parts Nairobi | Diesel Genset Consumables Kenya",
    metaDescription:
      "Genuine generator filters and spare parts in Nairobi — fuel, oil and air filters, belts and consumables for diesel gensets across Kenya. Supplied and fitted.",
    imageNote: "REPLACE: photo of generator filters / spare parts.",
    image: "/images/services/generator-filters-spares.jpg", // stock — REPLACE with own photo
  },
  {
    slug: "motor-rewinding",
    title: "Electric Motor Rewinding",
    short:
      "Precision rewinding and reconditioning of electric motors of all sizes.",
    desc: "Precision rewinding and reconditioning of electric motors of all sizes, restored to original specification.",
    icon: "coil",
    overview: [
      "A burnt-out motor doesn't have to mean a long lead-time replacement. We rewind and recondition electric motors of all sizes — single and three-phase — back to original specification, restoring efficiency and extending service life.",
    ],
    benefits: [
      "Rewinding to original winding specification",
      "Single and three-phase motors",
      "Bearing replacement and reconditioning",
      "Tested before return to service",
    ],
    industries: ["manufacturing", "food-processing", "tea-factories", "power-generation"],
    process: [
      { title: "Strip & test", desc: "We strip the motor and record the original winding data." },
      { title: "Rewind", desc: "We rewind to specification with quality copper and insulation." },
      { title: "Recondition", desc: "Bearings and components are replaced as needed." },
      { title: "Test", desc: "The motor is tested before return." },
    ],
    faqs: [
      { q: "Is rewinding as good as a new motor?", a: "A correctly rewound motor restored to original specification performs reliably and is usually faster and far cheaper than sourcing a replacement, especially for larger or imported units." },
    ],
    related: ["generator-stator-rewinding", "generator-repair-maintenance"],
    seoTitle: "Electric Motor Rewinding Nairobi | Single & Three-Phase Motors Kenya",
    metaDescription:
      "Electric motor rewinding and reconditioning in Nairobi — single and three-phase motors restored to specification and tested. Industrial service across Kenya.",
    imageNote: "REPLACE: photo of a motor being rewound (stator windings).",
    image: "/images/services/motor-rewinding.jpg", // stock — REPLACE with own photo
  },
  {
    slug: "generator-stator-rewinding",
    title: "Generator Stator Rewinding",
    short:
      "Expert rewinding of alternator and generator stators to bring failed units back to service.",
    desc: "Expert rewinding of alternator and generator stators to bring failed units back into dependable service.",
    icon: "stator",
    overview: [
      "When an alternator or generator stator fails, the whole set is down. We rewind generator and alternator stators to original specification, restoring output and saving the cost and lead-time of a replacement alternator.",
    ],
    benefits: [
      "Alternator & generator stator rewinding",
      "Restores rated output and voltage",
      "Saves replacement cost and lead-time",
      "Tested before return to service",
    ],
    industries: ["power-generation", "hospitals", "manufacturing"],
    process: [
      { title: "Diagnose", desc: "We confirm the winding fault and record the original data." },
      { title: "Rewind", desc: "The stator is rewound to specification." },
      { title: "Test", desc: "Output and insulation are tested before return." },
      { title: "Recommission", desc: "Refitted and tested under load." },
    ],
    faqs: [
      { q: "Can you rewind the stator instead of replacing the whole alternator?", a: "Yes. Stator rewinding restores a failed alternator to rated output and is usually far quicker and cheaper than importing a replacement." },
    ],
    related: ["motor-rewinding", "generator-repair-maintenance"],
    seoTitle: "Generator & Alternator Stator Rewinding Nairobi | Citizen Cooling Solutions",
    metaDescription:
      "Generator and alternator stator rewinding in Nairobi — restore rated output and avoid replacement cost. Tested before return. Industrial service across Kenya.",
    imageNote: "REPLACE: photo of an alternator stator being rewound.",
    image: "/images/services/generator-stator-rewinding.jpg", // stock — REPLACE with own photo
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */

export type Product = {
  name: string;
  desc: string;
  useCases: string[];
};

export type ProductCategory = {
  slug: string;
  group: string;
  icon: string;
  blurb: string;
  items: Product[];
  image?: string; // category header / thumbnail photo
};

// Featured product photos (from the materials catalogue) for the products gallery.
export const featuredProducts: { name: string; image: string }[] = [
  { name: "Ceramic Fibre Blanket", image: "/images/products/ceramic-fibre-blanket.jpg" },
  { name: "High-Density Rockwool", image: "/images/products/rockwool.jpg" },
  { name: "Fibreglass Insulation", image: "/images/products/fibreglass.jpg" },
  { name: "Armaflex Insulation", image: "/images/products/armaflex.jpg" },
  { name: "Calcium Silicate Boards", image: "/images/products/calcium-silicate.jpg" },
  { name: "Refractory Fire Bricks", image: "/images/products/fire-bricks.jpg" },
  { name: "Polyethylene Roof Insulation", image: "/images/products/pe-roof-insulation.jpg" },
  { name: "Aluminium & Thermal Tapes", image: "/images/products/aluminium-tape.jpg" },
];

export const productCategories: ProductCategory[] = [
  {
    slug: "thermal-insulation",
    group: "Thermal Insulation",
    icon: "shield",
    image: "/images/products/cat-thermal-insulation.jpg",
    blurb:
      "High-performance insulation to control heat, save energy and protect personnel — from boilers and pipework to roofs and ducting.",
    items: [
      { name: "Rockwool", desc: "Mineral-wool insulation for high-temperature thermal and acoustic insulation.", useCases: ["Boiler & pipe lagging", "Furnace insulation", "Acoustic walls"] },
      { name: "Fiberglass", desc: "Glass-wool insulation for thermal and acoustic applications.", useCases: ["Ducting", "Ovens", "Roofs"] },
      { name: "Ceramic Fiber", desc: "Lightweight high-temperature ceramic fibre insulation up to ~1260°C.", useCases: ["Furnaces", "Kilns", "Heat treatment"] },
      { name: "Ceramic Fiber Boards", desc: "Rigid ceramic-fibre boards for furnace and kiln linings.", useCases: ["Furnace linings", "Back-up insulation"] },
      { name: "Ceramic Fiber Blanket", desc: "Flexible ceramic-fibre blanket for high-heat insulation and wrapping.", useCases: ["Furnace wrapping", "Expansion joints"] },
      { name: "Ceramic Fiber Cloth", desc: "Woven ceramic-fibre cloth for high-temperature gasketing and covers.", useCases: ["Heat shields", "Removable covers"] },
      { name: "Ceramic Fiber Rope", desc: "Braided ceramic-fibre rope for sealing high-temperature joints.", useCases: ["Furnace door seals", "Boiler seals"] },
      { name: "Ceramic Fiber Tape", desc: "Ceramic-fibre tape for wrapping pipes and sealing high-heat gaps.", useCases: ["Pipe wrapping", "Joint sealing"] },
      { name: "Armaflex", desc: "Flexible closed-cell elastomeric insulation for HVAC and refrigeration lines.", useCases: ["Chilled-water pipes", "Refrigeration lines", "Condensation control"] },
      { name: "Polyethylene Roof Insulation", desc: "Reflective polyethylene foam insulation for roofs and walls.", useCases: ["Roof insulation", "Heat reflection"] },
      { name: "Styrofoam", desc: "Rigid expanded/extruded polystyrene insulation boards.", useCases: ["Cold rooms", "Wall & roof insulation"] },
      { name: "Calcium Silicate Boards", desc: "High-temperature, load-bearing calcium-silicate insulation board.", useCases: ["Boiler insulation", "Fire protection", "High-temp pipe support"] },
      { name: "Acoustic Insulation", desc: "Sound-absorbing insulation for noise control.", useCases: ["Generator rooms", "Plant rooms", "Studios"] },
      { name: "Vermiculite", desc: "Lightweight mineral used for loose-fill insulation and refractory mixes.", useCases: ["Loose-fill insulation", "Refractory concrete"] },
      { name: "Thermal Tapes", desc: "High-temperature tapes for wrapping and sealing hot surfaces.", useCases: ["Pipe wrapping", "Heat sealing"] },
      { name: "Aluminium Tapes", desc: "Foil tapes for sealing and finishing insulation systems.", useCases: ["Vapour sealing", "Insulation finishing"] },
    ],
  },
  {
    slug: "refractory-high-heat",
    group: "Refractory & High-Heat",
    icon: "flame",
    image: "/images/products/cat-refractory-high-heat.jpg",
    blurb:
      "Refractory materials engineered to withstand extreme heat in furnaces, kilns, boilers and foundries.",
    items: [
      { name: "Refractory Castables", desc: "Pourable refractory cement for casting furnace and kiln linings.", useCases: ["Furnace linings", "Burner blocks", "Repairs"] },
      { name: "Refractory Mortars", desc: "High-temperature mortar for laying and bonding refractory bricks.", useCases: ["Brick laying", "Joint sealing"] },
      { name: "Fire Bricks", desc: "Dense fire-clay bricks for high-temperature furnace and kiln linings.", useCases: ["Furnaces", "Kilns", "Boilers"] },
      { name: "Acid Resistant Bricks", desc: "Chemically resistant bricks for corrosive and acidic environments.", useCases: ["Chemical plants", "Effluent works", "Linings"] },
      { name: "Insulating Bricks", desc: "Lightweight insulating fire bricks for back-up and hot-face insulation.", useCases: ["Furnace insulation", "Heat treatment"] },
    ],
  },
  {
    slug: "sealing-gaskets",
    group: "Sealing & Gaskets",
    icon: "wrench",
    image: "/images/products/cat-sealing-gaskets.jpg",
    blurb:
      "Industrial sealing solutions for pumps, valves, flanges and steam systems operating under heat and pressure.",
    items: [
      { name: "PTFE Packing", desc: "Chemically inert PTFE gland packing for pumps and valves.", useCases: ["Pump glands", "Valve stems", "Chemical service"] },
      { name: "Kevlar Packing", desc: "Tough aramid (Kevlar) packing for abrasive and high-pressure duties.", useCases: ["Slurry pumps", "Abrasive media"] },
      { name: "Metallic Steam Gaskets", desc: "Spiral-wound and metallic gaskets for high-pressure steam flanges.", useCases: ["Steam flanges", "Boilers", "High-pressure joints"] },
      { name: "Industrial Sealants", desc: "High-temperature and industrial sealants for joints and assemblies.", useCases: ["Flange sealing", "Gasketing", "Assembly"] },
    ],
  },
  {
    slug: "safety-industrial",
    group: "Safety & Industrial",
    icon: "bolt",
    image: "/images/products/cat-safety-industrial.jpg",
    blurb:
      "Industrial safety and ancillary materials that keep plant rooms compliant and personnel protected.",
    items: [
      { name: "Electrical Rubber Mats", desc: "Insulating rubber matting for switchrooms and electrical panels.", useCases: ["Switchrooms", "Panel rooms", "Substations"] },
      { name: "Industrial Insulation Materials", desc: "A broad range of related industrial insulation and protection materials.", useCases: ["General industrial insulation", "Custom requirements"] },
    ],
  },
];

export const getProductCategory = (slug: string) =>
  productCategories.find((c) => c.slug === slug);

// Legacy flat grouping kept for the home Products section + QuoteForm options.
export const productGroups: { group: string; items: string[] }[] =
  productCategories.map((c) => ({
    group: c.group,
    items: c.items.map((i) => i.name),
  }));

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export type Industry = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  services: string[]; // related service slugs
};

export const industries: Industry[] = [
  {
    slug: "tea-factories",
    name: "Tea Factories",
    icon: "leaf",
    short: "Dryer radiators, motor rewinding and insulation for tea processing.",
    intro:
      "Tea factories run on heat and air-flow. We keep dryer radiators, motors and steam systems performing through the tea calendar — protecting both throughput and tea quality.",
    challenges: [
      "Dryer radiator fouling and leaks reducing drying efficiency",
      "Rising fuel/firewood costs per kilo of tea",
      "Motor and fan failures during peak season",
    ],
    solutions: [
      "Specialist dryer-radiator re-coring and fabrication",
      "Electric motor and fan rewinding",
      "Steam-system gaskets, packing and insulation supply",
    ],
    services: ["tea-factory-dryer-radiators", "motor-rewinding", "radiator-repair-fabrication"],
  },
  {
    slug: "food-processing",
    name: "Food & Beverage Processing",
    icon: "beaker",
    short: "Cooling, motors and hygienic insulation for processing lines.",
    intro:
      "Food and beverage processors depend on reliable cooling, refrigeration and motor-driven lines. We repair coolers, rewind motors and supply insulation that keeps processes efficient and compliant.",
    challenges: [
      "Overheating of process cooling and refrigeration",
      "Motor failures stopping production lines",
      "Energy losses from poor pipe and tank insulation",
    ],
    solutions: [
      "Oil cooler and heat-exchanger repair",
      "Electric motor rewinding",
      "Pipe, tank and cold-room insulation supply",
    ],
    services: ["oil-cooler-repair", "motor-rewinding", "radiator-repair-fabrication"],
  },
  {
    slug: "hospitals",
    name: "Hospitals & Healthcare",
    icon: "shield",
    short: "Standby power reliability and plant-room insulation.",
    intro:
      "Hospitals cannot afford a power gap. We keep standby generators serviced and dependable, and supply insulation and safety materials for plant and switch rooms.",
    challenges: [
      "Standby generators must start every time",
      "Plant-room heat and noise control",
      "Electrical safety compliance",
    ],
    solutions: [
      "Generator preventive maintenance and overhaul",
      "Stator rewinding for failed alternators",
      "Acoustic insulation and electrical rubber matting",
    ],
    services: ["generator-repair-maintenance", "generator-stator-rewinding", "generator-filters-spares"],
  },
  {
    slug: "power-generation",
    name: "Power Generation",
    icon: "bolt",
    short: "Genset overhauls, stator rewinding and radiator service.",
    intro:
      "Prime and standby power providers rely on availability. We overhaul gensets, rewind stators and alternators and rebuild radiators to keep output reliable.",
    challenges: [
      "Maximising genset availability and output",
      "Alternator and stator winding failures",
      "Engine cooling and radiator performance",
    ],
    solutions: [
      "Generator repair, maintenance and overhaul",
      "Generator and alternator stator rewinding",
      "Radiator re-coring and fabrication",
    ],
    services: ["generator-repair-maintenance", "generator-stator-rewinding", "radiator-repair-fabrication"],
  },
  {
    slug: "transport",
    name: "Transport & Heavy Machinery",
    icon: "truck",
    short: "Radiators, intercoolers and oil coolers for fleets and plant.",
    intro:
      "Trucks, buses and heavy plant live or die by their cooling systems. We rebuild radiators, intercoolers and oil coolers to keep fleets and machinery on the road and on the job.",
    challenges: [
      "Engine overheating and downtime",
      "Loss of turbo boost and fuel economy",
      "Sourcing radiators for older or imported units",
    ],
    solutions: [
      "Radiator repair, re-coring and fabrication",
      "Turbocharger intercooler repair",
      "Oil cooler repair",
    ],
    services: ["radiator-repair-fabrication", "turbocharger-intercoolers", "oil-cooler-repair"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Heavy Industry",
    icon: "factory",
    short: "Furnace refractory, motors, cooling and insulation supply.",
    intro:
      "Manufacturers, foundries and processors need heat managed in every direction — contained in furnaces, removed from engines and kept off personnel. We cover the full range with repair services and a deep materials inventory.",
    challenges: [
      "Furnace and kiln lining wear",
      "Motor and cooling failures halting production",
      "Energy loss and personnel heat exposure",
    ],
    solutions: [
      "Refractory bricks, castables and mortar supply",
      "Motor rewinding and radiator/cooler repair",
      "Thermal and acoustic insulation supply",
    ],
    services: ["motor-rewinding", "radiator-repair-fabrication", "oil-cooler-repair"],
  },
];

export const getIndustry = (slug: string) =>
  industries.find((i) => i.slug === slug);

/* ------------------------------------------------------------------ */
/* Projects (representative — REPLACE with real case studies/photos)   */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  industry: string;
  scope: string;
  result: string;
  imageNote: string;
  image?: string; // set to a /public path when a real photo is available
};

export const projects: Project[] = [
  {
    title: "Tea Factory Dryer Radiator Re-core",
    industry: "Tea Factories",
    scope:
      "Re-cored a clogged finned dryer heat-exchanger and pressure-tested it ahead of the picking season.",
    result: "Restored drying temperature and air-flow, reducing fuel use per kilo of tea.",
    imageNote: "REPLACE: before/after photo of dryer radiator re-core.",
    image: "/images/projects/p1.jpg",
  },
  {
    title: "Transport Fleet Radiator Programme",
    industry: "Transport & Heavy Machinery",
    scope:
      "Ongoing radiator re-coring and oil-cooler repair for a commercial transport fleet.",
    result: "Cut overheating breakdowns and extended cooling-system life across the fleet.",
    imageNote: "REPLACE: photo of truck radiators in the workshop.",
    image: "/images/projects/p2.jpg",
  },
  {
    title: "Hospital Standby Generator Overhaul",
    industry: "Hospitals & Healthcare",
    scope:
      "Full service and stator rewinding on a standby diesel generator with preventive-maintenance plan.",
    result: "Returned the set to dependable standby duty with a scheduled maintenance contract.",
    imageNote: "REPLACE: photo of generator overhaul.",
    image: "/images/projects/p3.jpg", // stock — REPLACE with own photo
  },
  {
    title: "Furnace Refractory Re-line Supply",
    industry: "Manufacturing & Heavy Industry",
    scope:
      "Supplied fire bricks, castables and ceramic-fibre insulation for a furnace re-line.",
    result: "Delivered a complete refractory package from a single source, on schedule.",
    imageNote: "REPLACE: photo of furnace refractory installation.",
    image: "/images/projects/p4.jpg",
  },
  {
    title: "Industrial Intercooler Restoration",
    industry: "Power Generation",
    scope: "Repaired and pressure-tested charge-air intercoolers on standby gensets.",
    result: "Restored boost pressure and lowered exhaust temperatures.",
    imageNote: "REPLACE: photo of intercooler restoration.",
    image: "/images/projects/p5.jpg",
  },
  {
    title: "Processing Line Motor Rewinds",
    industry: "Food & Beverage Processing",
    scope: "Rewound several three-phase motors driving a processing line.",
    result: "Returned motors to specification, avoiding long replacement lead-times.",
    imageNote: "REPLACE: photo of rewound motors.",
    image: "/images/projects/p6.jpg", // stock — REPLACE with own photo
  },
];

/* ------------------------------------------------------------------ */
/* Clients, stats, why-us, process, faqs, values                       */
/* ------------------------------------------------------------------ */

// REPLACE: confirm full client list & obtain logo permissions.
export const clients: string[] = [
  "Del Monte",
  "KTDA Tea Factories",
  "Major Transport Companies",
];

// REPLACE: swap for real, attributable client testimonials (with permission).
// These are representative placeholders written to reflect typical feedback.
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They re-cored our dryer radiator ahead of the season and turned it around fast. Drying performance was back to normal and our fuel use dropped.",
    name: "Factory Manager",
    role: "Tea Processing Factory",
    rating: 5,
  },
  {
    quote:
      "Our standby generator failed and Citizen Cooling rewound the stator instead of forcing a full replacement — saved us weeks of lead time and a lot of money.",
    name: "Maintenance Manager",
    role: "Private Hospital",
    rating: 5,
  },
  {
    quote:
      "Reliable radiator and oil-cooler repairs for our fleet, and a single source for filters and insulation. Honest quotes and dependable turnaround.",
    name: "Fleet Engineer",
    role: "Transport Company",
    rating: 5,
  },
];

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 8, suffix: "", label: "Specialist repair services" },
  { value: 30, suffix: "+", label: "Insulation & refractory products" },
  { value: 47, suffix: "", label: "Counties reached in Kenya" },
  { value: 24, suffix: "h", label: "Rapid assessment turnaround" },
];

export const whyUs: { title: string; desc: string; icon: string }[] = [
  {
    title: "Workshop-Grade Fabrication",
    desc: "Our own Jogoo Road workshop handles re-coring, fabrication and rewinding in-house — not outsourced.",
    icon: "wrench",
  },
  {
    title: "Fast Turnaround",
    desc: "We know downtime costs money. We prioritise quick assessments and dependable lead times.",
    icon: "clock",
  },
  {
    title: "Genuine Parts & Materials",
    desc: "Industrial-grade spares, filters, insulation and refractory materials you can trust.",
    icon: "shield",
  },
  {
    title: "Supply Across Kenya",
    desc: "Servicing and supplying industrial clients nationwide, from a single trusted source.",
    icon: "map",
  },
];

export const values: { title: string; desc: string; icon: string }[] = [
  { title: "Engineering Precision", desc: "Every repair is tested and verified — we hand back units that perform to specification.", icon: "stator" },
  { title: "Reliability", desc: "Industry runs around the clock, and so does our commitment to dependable turnaround.", icon: "clock" },
  { title: "Integrity", desc: "Clear, itemised quotations and honest advice — no surprises.", icon: "shield" },
  { title: "Partnership", desc: "We work as your long-term maintenance partner, not a one-off supplier.", icon: "map" },
];

export const steps: { n: string; title: string; desc: string }[] = [
  { n: "01", title: "Tell us the problem", desc: "Call, WhatsApp or send a quote request with your unit, machine or material needs." },
  { n: "02", title: "Assessment & quote", desc: "We inspect or advise, then send a clear, itemised quotation — no surprises." },
  { n: "03", title: "Repair or supply", desc: "We repair, fabricate or rewind in our workshop, or supply materials from stock." },
  { n: "04", title: "Tested & delivered", desc: "Work is tested and handed back ready for service, with guidance on upkeep." },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Can you re-core or fabricate a custom radiator?",
    a: "Yes. Radiator repair and fabrication is a core service — we re-core, repair leaks and build custom radiators, oil coolers and intercoolers for engines, plant and industrial equipment.",
  },
  {
    q: "Do you service generators on-site?",
    a: "We handle both workshop and on-site generator repair and maintenance, including filters, spares, and stator rewinding to keep your gensets reliable.",
  },
  {
    q: "Do you sell insulation materials in retail and bulk?",
    a: "Yes. As an insulation materials supplier we stock thermal insulation, refractory and sealing products — from single packs to bulk industrial orders.",
  },
  {
    q: "What areas do you cover?",
    a: "Our workshop is on Jogoo Road, Nairobi, and we serve industrial clients across Kenya for both repairs and material supply.",
  },
  {
    q: "How do I get a price?",
    a: "Send a quote request through the form, call one of our lines, or message us on WhatsApp with the details. We respond with a clear, itemised quotation.",
  },
  {
    q: "Do you offer maintenance arrangements for businesses?",
    a: "Yes — talk to us about scheduled servicing and spares supply so your equipment is maintained before failures happen, not after.",
  },
];
