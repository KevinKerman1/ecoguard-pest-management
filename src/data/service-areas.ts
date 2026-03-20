export interface Office {
  city: string;
  state: string;
  stateCode: string;
  address?: string;
  phone: string;
  zipCodes: string[];
}

export const offices: Office[] = [
  {
    city: "El Dorado Hills",
    state: "California",
    stateCode: "CA",
    address: "5045 Robert J Mathews Pkwy, Suite 200",
    phone: "(916) 675-7709",
    zipCodes: ["95762", "95672", "95682", "95630", "95746"],
  },
  {
    city: "Rancho Cordova",
    state: "California",
    stateCode: "CA",
    address: "11355 Pyrites Way, Suite A-4",
    phone: "(916) 471-4222",
    zipCodes: ["95670", "95742", "95827", "95826", "95655"],
  },
  {
    city: "Folsom",
    state: "California",
    stateCode: "CA",
    phone: "(916) 827-3717",
    zipCodes: ["95630", "95763"],
  },
  {
    city: "Pacheco",
    state: "California",
    stateCode: "CA",
    address: "420 N Buchanan Cir, STE 3",
    phone: "(925) 804-3532",
    zipCodes: ["94553", "94520", "94521", "94523", "94598"],
  },
  {
    city: "Clovis",
    state: "California",
    stateCode: "CA",
    address: "1450 Tollhouse Rd, Suite 109",
    phone: "(559) 220-7400",
    zipCodes: ["93611", "93612", "93619", "93710", "93720", "93711", "93722"],
  },
  {
    city: "San Marcos",
    state: "California",
    stateCode: "CA",
    address: "120 N Pacific St",
    phone: "(619) 554-0967",
    zipCodes: ["92069", "92078", "92096"],
  },
  {
    city: "Anaheim",
    state: "California",
    stateCode: "CA",
    address: "2901 E Miraloma Ave, Unit 5",
    phone: "(949) 991-3383",
    zipCodes: ["92806", "92805", "92801", "92802", "92804", "92807", "92808"],
  },
  {
    city: "Santa Clara",
    state: "California",
    stateCode: "CA",
    address: "3678 Basset Street",
    phone: "(925) 515-4589",
    zipCodes: ["95050", "95051", "95054", "95053"],
  },
  {
    city: "Stockton",
    state: "California",
    stateCode: "CA",
    phone: "(209) 260-5295",
    zipCodes: ["95202", "95203", "95204", "95205", "95206", "95207", "95209", "95210", "95211", "95212"],
  },
  {
    city: "San Diego",
    state: "California",
    stateCode: "CA",
    phone: "(619) 304-6298",
    zipCodes: ["92101", "92102", "92103", "92104", "92105", "92106", "92107", "92108", "92109", "92110", "92111", "92113", "92114", "92115", "92116", "92117", "92119", "92120", "92121", "92122", "92123", "92124", "92126", "92127", "92128", "92129", "92130", "92131"],
  },
  {
    city: "San Jose",
    state: "California",
    stateCode: "CA",
    phone: "(408) 402-4122",
    zipCodes: ["95110", "95111", "95112", "95113", "95116", "95117", "95118", "95119", "95120", "95121", "95122", "95123", "95124", "95125", "95126", "95127", "95128", "95129", "95130", "95131", "95132", "95133", "95134", "95135", "95136", "95138", "95139", "95140", "95148"],
  },
  {
    city: "Livermore",
    state: "California",
    stateCode: "CA",
    phone: "(925) 690-1663",
    zipCodes: ["94550", "94551"],
  },
  {
    city: "Northridge",
    state: "California",
    stateCode: "CA",
    phone: "(818) 477-1938",
    zipCodes: ["91324", "91325", "91326", "91330", "91343", "91344"],
  },
  {
    city: "Portland",
    state: "Oregon",
    stateCode: "OR",
    address: "24023 NE Shea Ln #305, Wood Village",
    phone: "(503) 517-8858",
    zipCodes: ["97201", "97202", "97203", "97204", "97205", "97206", "97209", "97210", "97211", "97212", "97213", "97214", "97215", "97216", "97217", "97218", "97219", "97220", "97221", "97222", "97223", "97224", "97225", "97227", "97230", "97231", "97232", "97233", "97236", "97239", "97266"],
  },
  {
    city: "Salem",
    state: "Oregon",
    stateCode: "OR",
    phone: "(503) 558-2753",
    zipCodes: ["97301", "97302", "97303", "97304", "97305", "97306", "97317"],
  },
  {
    city: "Vancouver",
    state: "Washington",
    stateCode: "WA",
    address: "5305 NE 121st Ave, STE 505",
    phone: "(360) 502-2944",
    zipCodes: ["98660", "98661", "98662", "98663", "98664", "98665", "98682", "98683", "98684", "98685", "98686"],
  },
  {
    city: "Nashville",
    state: "Tennessee",
    stateCode: "TN",
    address: "1443 Elm Hill Pike",
    phone: "(615) 667-9392",
    zipCodes: ["37201", "37203", "37204", "37205", "37206", "37207", "37208", "37209", "37210", "37211", "37212", "37213", "37214", "37215", "37216", "37217", "37218", "37219", "37220", "37221", "37228"],
  },
  {
    city: "Reno",
    state: "Nevada",
    stateCode: "NV",
    phone: "(775) 227-6095",
    zipCodes: ["89501", "89502", "89503", "89506", "89509", "89511", "89512", "89519", "89521", "89523"],
  },
];

export const serviceStates = [
  { name: "California", code: "CA", slug: "california" },
  { name: "Oregon", code: "OR", slug: "oregon" },
  { name: "Washington", code: "WA", slug: "washington" },
  { name: "Tennessee", code: "TN", slug: "tennessee" },
  { name: "Nevada", code: "NV", slug: "nevada" },
];

export function findOfficeByZip(zip: string): Office | null {
  return offices.find((office) => office.zipCodes.includes(zip)) || null;
}
