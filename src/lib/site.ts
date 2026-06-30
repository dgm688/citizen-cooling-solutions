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
  image?: string; // /public path to the product photo
  specs?: string[]; // short technical specs (temperature, density, dimensions)
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
  { name: "High-Density Rockwool", image: "/images/products/rockwool-roll.jpg" },
  { name: "Fibreglass Insulation", image: "/images/products/fibreglass-roll.jpg" },
  { name: "Armaflex Insulation", image: "/images/products/armaflex-sheet.jpg" },
  { name: "Calcium Silicate Board", image: "/images/products/calcium-silicate-board.jpg" },
  { name: "40% Alumina Firebricks", image: "/images/products/firebrick-40.jpg" },
  { name: "Refractory Castable Maxheat-A", image: "/images/products/castable-maxheat-a.jpg" },
  { name: "Polyethylene Roof Insulation", image: "/images/products/pe-roof-insulation.jpg" },
];

export const productCategories: ProductCategory[] = [
  {
    slug: "ceramic-fibre",
    group: "Ceramic Fibre Insulation",
    icon: "flame",
    image: "/images/products/cat-ceramic-fibre.jpg",
    blurb:
      "High-purity alumina-silica ceramic fibre for extreme heat — furnaces, kilns and heat-treatment, rated to 1260°C.",
    items: [
      { name: "Ceramic Fibre Blanket", desc: "Flexible, lightweight alumina-silica blanket for high-temperature insulation and wrapping.", specs: ["1260°C", "128 kg/m³", "7620×610×25mm / 3600×610×50mm"], useCases: ["Furnace wrapping", "Kiln insulation", "Expansion joints"], image: "/images/products/ceramic-fibre-blanket.jpg" },
      { name: "Ceramic Fibre Board", desc: "Rigid alumina-silica panel offering thermal resistance and structural strength.", specs: ["1260°C", "320 kg/m³", "600×300×50mm"], useCases: ["Furnace linings", "Fire protection", "Back-up insulation"], image: "/images/products/ceramic-fibre-board.jpg" },
      { name: "Non-Asbestos Ceramic Fibre Tape", desc: "Heat-resistant woven tape for wrapping and sealing pipes, flanges and furnace doors.", specs: ["1260°C", "10m × 3mm × 50mm"], useCases: ["Pipe wrapping", "Flange sealing", "Furnace doors"], image: "/images/products/ceramic-fibre-tape.jpg" },
      { name: "Ceramic Fibre Rope", desc: "Braided round & square rope for sealing high-temperature joints in kilns and stoves.", specs: ["1260°C", "Thickness 6–50mm"], useCases: ["Furnace door seals", "Boiler seals", "Kiln gaskets"], image: "/images/products/ceramic-fibre-rope.jpg" },
      { name: "Ceramic Fibre Cloth", desc: "Woven fabric (plain or foil-backed) for heat shielding and insulation wrapping.", specs: ["1260°C", "30m × 1m × 3mm"], useCases: ["Heat shields", "Removable covers", "Expansion joints"], image: "/images/products/ceramic-fibre-cloth.jpg" },
      { name: "Ceramic Fibre Yarn / Thread", desc: "Twisted high-temperature fibre for stitching, gasketing and packing.", specs: ["1260°C"], useCases: ["Stitching insulation", "Gasketing", "Packing"], image: "/images/products/ceramic-fibre-yarn.jpg" },
    ],
  },
  {
    slug: "mineral-wool-fibreglass",
    group: "Mineral Wool & Fibreglass",
    icon: "shield",
    image: "/images/products/cat-mineral-wool.jpg",
    blurb:
      "Non-combustible stone-wool and glass-wool for thermal and acoustic insulation of tanks, pipes, ducts and buildings.",
    items: [
      { name: "Rockwool Rolls / Blankets", desc: "Flexible basalt stone-wool roll (mesh-reinforced) for high-temperature pipe, tank and duct insulation.", specs: ["1000°C", "100 kg/m³", "6m×1m×50mm / 3m×1m×75/100mm"], useCases: ["Pipe & tank lagging", "Duct insulation", "Acoustic walls"], image: "/images/products/rockwool-roll.jpg" },
      { name: "Rockwool Batts / Slabs", desc: "Rigid stone-wool panels for thermal, acoustic and fire protection in walls, roofs and plant.", specs: ["1000°C", "50 kg/m³", "1.2m×0.6m×50/100mm"], useCases: ["Walls & roofs", "Fire protection", "Industrial equipment"], image: "/images/products/rockwool-batt.jpg" },
      { name: "Preformed Rockwool Pipe Sections", desc: "Rigid cylindrical stone-wool sections for hot and cold pipe insulation.", specs: ["1000°C", "150 kg/m³", "Bore ½–6in, 25/50mm wall"], useCases: ["Steam pipes", "Chilled pipes", "Process lines"], image: "/images/products/rockwool-pipe.jpg" },
      { name: "Fibreglass Rolls / Blankets", desc: "Lightweight glass-wool roll for thermal and acoustic insulation of roofs, ducting and HVAC.", specs: ["350–450°C", "24 kg/m³", "20m/10m × 1.2m × 50/100mm"], useCases: ["Roofing", "HVAC ducting", "Walls"], image: "/images/products/fibreglass-roll.jpg" },
      { name: "Fibreglass Batts / Slabs", desc: "Pre-cut glass-fibre panels for efficient thermal and acoustic insulation.", specs: ["350–450°C", "32 kg/m³", "1.2m×0.6m×50/100mm"], useCases: ["Walls & ceilings", "Partitions", "HVAC"], image: "/images/products/fibreglass-batt.jpg" },
    ],
  },
  {
    slug: "foam-roof-board",
    group: "Foam, Roof & Board Insulation",
    icon: "shield",
    image: "/images/products/cat-foam-board.jpg",
    blurb:
      "Elastomeric foam, roof insulation and rigid boards for condensation control, energy savings and fire-rated insulation.",
    items: [
      { name: "Armaflex Insulation Sheet / Roll", desc: "Closed-cell elastomeric foam with built-in vapour barrier for condensation control on HVAC and chilled lines.", specs: ["-40 to 120°C", "80 kg/m³", "8m×1m×25mm / 10m×1m×19mm"], useCases: ["Chilled-water pipes", "Refrigeration", "Condensation control"], image: "/images/products/armaflex-sheet.jpg" },
      { name: "Armaflex with Foil & Adhesive", desc: "Foil-laminated, self-adhesive elastomeric foam for superior heat reflection and quick installation.", specs: ["-40 to 120°C", "Foil + adhesive backing"], useCases: ["Duct wrap", "Radiant heat reflection", "Pipe insulation"], image: "/images/products/armaflex-foil.jpg" },
      { name: "Styrofoam (EPS) Sheets", desc: "Lightweight expanded-polystyrene board and flexible foam for cold rooms, roofs and packaging.", specs: ["1.2m × 1.2m / 4ft × 4ft", "½–4in thickness"], useCases: ["Cold rooms", "Roofs & walls", "Expansion joint filler"], image: "/images/products/styrofoam.jpg" },
      { name: "Polyethylene Roof Insulation", desc: "Double-laminated reflective PE foam — a radiant barrier and moisture barrier for roofs and metal structures.", specs: ["Double laminated", "40m×1.5m×2/3mm / 50m×1.2m×10mm"], useCases: ["Metal roofs", "Warehouses", "Cold storage"], image: "/images/products/pe-roof-insulation.jpg" },
      { name: "Calcium Silicate Boards", desc: "Rigid, load-bearing silica-lime board with high fire resistance and dimensional stability.", specs: ["1000°C", "230 kg/m³", "600×300×50mm"], useCases: ["Furnace linings", "Boiler insulation", "Pipe & wall panels"], image: "/images/products/calcium-silicate-board.jpg" },
      { name: "Asbestos-Free Millboards", desc: "Compressed mineral-fibre panels for high-temperature insulation in furnaces, fire doors and boilers.", specs: ["Up to 1100°C", "1m×1m × 3–12mm"], useCases: ["Furnace linings", "Fire doors", "Heat containment"], image: "/images/products/asbestos-millboard.jpg" },
    ],
  },
  {
    slug: "tapes-foil-sealants",
    group: "Tapes, Foil & Sealants",
    icon: "wrench",
    image: "/images/products/cat-tapes-sealants.jpg",
    blurb:
      "Thermal and waterproof tapes, reflective foil and fire-rated sealants for finishing and sealing insulation systems.",
    items: [
      { name: "Aluminium Insulation Thermal Tape", desc: "High-temperature foil tape for thermal insulation, heat shielding and sealing hot surfaces.", specs: ['2" × 18m and 3" × 18m'], useCases: ["Pipe wrapping", "Heat sealing", "Duct finishing"], image: "/images/products/aluminium-thermal-tape.jpg" },
      { name: "Butyl Waterproof Sealing Tape", desc: "Self-adhesive butyl-rubber tape for waterproofing, air sealing and moisture protection on most surfaces.", specs: ["5m × 5cm and 10m × 10cm"], useCases: ["Roof sealing", "Joint waterproofing", "Air sealing"], image: "/images/products/butyl-waterproof-tape.jpg" },
      { name: "Aluminium Foil FSK", desc: "Reflective foil facing reinforced with fibreglass scrim and kraft paper — an effective vapour barrier.", specs: ["100m × 1.2m wide"], useCases: ["HVAC duct facing", "Roof & wall vapour barrier", "Radiant barrier"], image: "/images/products/aluminium-foil-fsk.jpg" },
      { name: "Somafix Fire Sealant", desc: "Fire-rated silicone sealant for sealing joints, gaps and penetrations under high heat.", specs: ["Heat resistance 1500°C"], useCases: ["Fire-stopping", "Expansion joints", "Glazing & doors"], image: "/images/products/somafix-sealant.jpg" },
      { name: "Somafix PU Foam", desc: "Fire-retardant expanding polyurethane foam for filling, sealing and insulating voids and cavities.", specs: ["Fire-retardant (B2)"], useCases: ["Gap filling", "Sealing cavities", "Thermal & acoustic insulation"], image: "/images/products/somafix-foam.jpg" },
    ],
  },
  {
    slug: "refractory",
    group: "Refractory Bricks & Cements",
    icon: "flame",
    image: "/images/products/cat-refractory.jpg",
    blurb:
      "Firebricks and refractory cements for lining furnaces, kilns, boilers and incinerators above 1000°C.",
    items: [
      { name: "40% Alumina Firebricks", desc: "Balanced-grade fireclay bricks for furnace linings and general high-temperature applications.", specs: ["1600°C", "Standard / Side & End Arch / Slab / Split", "230×115×75mm"], useCases: ["Furnace linings", "Kilns", "Boilers"], image: "/images/products/firebrick-40.jpg" },
      { name: "70% Alumina Firebricks", desc: "High-alumina bricks with strong slag and chemical resistance and high load-bearing strength.", specs: ["1750–1800°C", "230×115×75mm", "5.2 kg"], useCases: ["Steel furnaces", "Incinerators", "Severe-duty kilns"], image: "/images/products/firebrick-70.jpg" },
      { name: "Zirconia Firebricks", desc: "Zirconium-oxide bricks for the highest thermal and chemical resistance in glass and steel furnaces.", specs: ["2000°C", "230×115×38mm", "2.2 kg"], useCases: ["Glass furnaces", "Steel ladles", "High-temp kilns"], image: "/images/products/firebrick-zirconia.jpg" },
      { name: "Insulating Firebricks", desc: "Lightweight, low-density bricks with low thermal conductivity to cut heat loss.", specs: ["230×115×75mm", "2 kg"], useCases: ["Furnaces & kilns", "Pizza ovens", "Chimneys"], image: "/images/products/firebrick-insulating.jpg" },
      { name: "Refractory Castable — Maxheat-A", desc: "High-performance 90% alumina castable cement for lining furnaces, kilns and incinerators.", specs: ["1750°C", "90% Al₂O₃", "25 kg bag"], useCases: ["Furnace linings", "Monolithic casting", "Repairs"], image: "/images/products/castable-maxheat-a.jpg" },
      { name: "Refractory Castable — Maxheat-K", desc: "Medium-duty 60% alumina castable with good strength and abrasion resistance.", specs: ["1600°C", "60% Al₂O₃", "25 kg bag"], useCases: ["Kiln & furnace lining", "Fireplaces", "General repairs"], image: "/images/products/castable-maxheat-k.jpg" },
      { name: "Refractory Mortar — Maxset 50 Fine", desc: "Heat-resistant alumina-fireclay mortar for bonding firebricks and refractory components.", specs: ["1500°C", "25 kg bag"], useCases: ["Brick laying", "Jointing", "Furnace repairs"], image: "/images/products/mortar-maxset-50.jpg" },
      { name: "Insulating Castable — Maxlyte 11", desc: "Lightweight insulating refractory cement for continuous use up to 1300°C with low heat loss.", specs: ["1300°C", "25 kg bag"], useCases: ["Hot-face insulation", "Kiln lining", "Energy saving"], image: "/images/products/castable-maxlyte-11.jpg" },
      { name: "Fondu Castable — Max-50", desc: "Fast-setting calcium-aluminate (CAC) cement for rapid kiln repairs and industrial flooring.", specs: ["1000°C", "25 kg bag"], useCases: ["Rapid kiln repairs", "Furnace flooring", "Early-strength linings"], image: "/images/products/castable-fondu-max-50.jpg" },
    ],
  },
  {
    slug: "acoustic-safety",
    group: "Acoustic, Safety & Sealing",
    icon: "bolt",
    image: "/images/products/cat-acoustic-safety.jpg",
    blurb:
      "Acoustic insulation, electrical safety matting, steam gaskets and loose-fill vermiculite for plant rooms and panels.",
    items: [
      { name: "Knauf Acoustic Insulation Roll", desc: "High-performance glass-wool roll for superior sound absorption and thermal insulation.", specs: ["16 kg/m³", "13.5m × 1.2m × 50mm"], useCases: ["Walls & ceilings", "Partitions", "Plant rooms"], image: "/images/products/knauf-acoustic-roll.jpg" },
      { name: "Acoustic Foam Wedges & Panels", desc: "Open-cell foam wedges and fabric panels that absorb sound and reduce echo and reverberation.", specs: ["Wedges 30×30×50mm (12/box)", "Panels 1.2m×0.6m×50mm"], useCases: ["Studios", "Offices", "Quiet rooms"], image: "/images/products/acoustic-foam-wedges.jpg" },
      { name: "H.V Electrical Rubber Mats", desc: "Duratuf ASTM-D178 insulating matting that protects personnel from electric shock in switchrooms.", specs: ["Class 0–4 (10–50kV)", "1m × 1m, 3.2–12.7mm", "10m rolls"], useCases: ["Substations", "Switchrooms", "Control rooms"], image: "/images/products/rubber-mat.jpg" },
      { name: "Steel Metallic Steam Gaskets", desc: "Superlite-5000 metallic gasket sheet for high-pressure, high-temperature steam flanges.", specs: ["500–650°C", "1500×1000mm", "1.5–6mm"], useCases: ["Steam flanges", "Boilers", "High-pressure joints"], image: "/images/products/steam-gasket.jpg" },
      { name: "Vermiculite (Exfoliated)", desc: "Lightweight, non-combustible loose-fill mineral for fireproofing and high-temperature linings.", specs: ["Up to 1100°C", "Medium & Large grade", "10 kg bags"], useCases: ["Loose-fill insulation", "Fireproofing", "Refractory mixes"], image: "/images/products/vermiculite.jpg" },
    ],
  },
];

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
