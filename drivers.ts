export type Driver = {
  id: string;
  name: string;
  role: string;
  experience: string;
  equipment: string[];
  location: string;
  languages: string[];
  availability: string;
  description: string;
};

export const drivers: Driver[] = [
  {
    id: "driver-001",
    name: "Mr. John M.",
    role: "Excavator Operator",
    experience: "8 years",
    equipment: ["CAT 320", "CAT 323", "SANY", "XCMG"],
    location: "Dar es Salaam",
    languages: ["Swahili", "Basic English"],
    availability: "Available now",
    description: "Road construction, earthmoving, site clearing, loading and foundation work."
  },
  {
    id: "driver-002",
    name: "Mr. Hassan K.",
    role: "Lowbed / Trailer Driver",
    experience: "10 years",
    equipment: ["Lowbed", "Flatbed", "Heavy haulage"],
    location: "Dar es Salaam / Morogoro",
    languages: ["Swahili", "English"],
    availability: "On request",
    description: "Experienced in transporting excavators, rollers, bulldozers and heavy machinery."
  },
  {
    id: "driver-003",
    name: "Mr. Peter S.",
    role: "Bulldozer Operator",
    experience: "7 years",
    equipment: ["Shantui SD16", "CAT D6", "Komatsu"],
    location: "Dodoma / Dar es Salaam",
    languages: ["Swahili"],
    availability: "Available now",
    description: "Land clearing, road works, mining access roads and site preparation."
  },
  {
    id: "driver-004",
    name: "Mr. Michael B.",
    role: "Dump Truck Driver",
    experience: "6 years",
    equipment: ["Hongyan 6x4", "Sinotruk", "Howo"],
    location: "Dar es Salaam",
    languages: ["Swahili", "Basic English"],
    availability: "Available now",
    description: "Earthwork transport, construction materials and mining site hauling."
  }
];
