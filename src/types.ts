import transitInfo from "@/assets/TransitInfo.json";

// Transit JSON type
export type TransitInfoJSON = typeof transitInfo;

export type TransitModeOptionsType = {
    Subway: (keyof TransitInfoJSON)[];
    Regional: (keyof TransitInfoJSON)[];
    Bus: (keyof TransitInfoJSON)[];
    Trolley: (keyof TransitInfoJSON)[];
  };