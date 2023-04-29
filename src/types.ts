import transitInfo from "@/assets/TransitInfo.json";

// Transit JSON type
export type TransitInfoJSON = typeof transitInfo;

export type TransitModeOptionsType = {
    Subway: (keyof TransitInfoJSON)[];
    Regional: (keyof TransitInfoJSON)[];
    Bus: (keyof TransitInfoJSON)[];
    Trolley: (keyof TransitInfoJSON)[];
    Other: (keyof TransitInfoJSON)[];
    // Off: [];
  };

export type RealTimeDataType = { lat: number; lng: number; id: string; heading: number }[];
