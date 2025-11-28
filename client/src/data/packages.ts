export interface CCTVPackage {
  id: string;
  name: string;
  category: "silver" | "gold" | "hd";
  cameraCount: number;
  discountedPrice: number;
  originalPrice: number;
  features: string[];
  cameraType: string;
  nvr: string;
  hdd: string;
  wire: string;
  switch: string;
  maxSupport: string;
  warranty: string;
}

export const cctvPackages: CCTVPackage[] = [
  {
    id: "silver-ip-4",
    name: "Silver IP Camera Set",
    category: "silver",
    cameraCount: 4,
    discountedPrice: 20000,
    originalPrice: 24999,
    features: [
      "5MP Silver Plastic Body (Day/Night Color + Audio)",
      "5 Channel NVR (4K Resolution)",
      "500GB Surveillance HDD",
      "100m CAT6 Wire Roll",
      "4-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 8MP"
    ],
    cameraType: "5MP Silver Plastic Body",
    nvr: "5 Channel NVR (4K)",
    hdd: "500GB Surveillance HDD",
    wire: "100m CAT6 Wire Roll",
    switch: "4-Port PoE Switch",
    maxSupport: "8MP",
    warranty: "2 Years"
  },
  {
    id: "silver-ip-8",
    name: "Silver IP Camera Set",
    category: "silver",
    cameraCount: 8,
    discountedPrice: 29000,
    originalPrice: 34000,
    features: [
      "8 Outdoor 5MP Silver Plastic Body (Day/Night Color + Audio)",
      "10 Channel NVR (4K Resolution)",
      "1TB Surveillance HDD",
      "100m CAT6 Wire Roll",
      "8-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 8MP"
    ],
    cameraType: "5MP Silver Plastic Body",
    nvr: "10 Channel NVR (4K)",
    hdd: "1TB Surveillance HDD",
    wire: "100m CAT6 Wire Roll",
    switch: "8-Port PoE Switch",
    maxSupport: "8MP",
    warranty: "2 Years"
  },
  {
    id: "gold-ip-4",
    name: "Gold IP Series",
    category: "gold",
    cameraCount: 4,
    discountedPrice: 22500,
    originalPrice: 26900,
    features: [
      "4 Outdoor 5MP Gold Metal Body (Day/Night Color + Audio)",
      "5 Channel NVR (4K Resolution)",
      "500GB Surveillance HDD",
      "100m CAT6 Wire Roll",
      "4-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 8MP"
    ],
    cameraType: "5MP Gold Metal Body",
    nvr: "5 Channel NVR (4K)",
    hdd: "500GB Surveillance HDD",
    wire: "100m CAT6 Wire Roll",
    switch: "4-Port PoE Switch",
    maxSupport: "8MP",
    warranty: "2 Years"
  },
  {
    id: "gold-ip-8",
    name: "Gold IP Series",
    category: "gold",
    cameraCount: 8,
    discountedPrice: 32000,
    originalPrice: 36000,
    features: [
      "8 Outdoor 5MP Gold Metal Body (Day/Night Color + Audio)",
      "10 Channel NVR (4K Resolution)",
      "1TB Surveillance HDD",
      "100m CAT6 Wire Roll",
      "8-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 8MP"
    ],
    cameraType: "5MP Gold Metal Body",
    nvr: "10 Channel NVR (4K)",
    hdd: "1TB Surveillance HDD",
    wire: "100m CAT6 Wire Roll",
    switch: "8-Port PoE Switch",
    maxSupport: "8MP",
    warranty: "2 Years"
  },
  {
    id: "silver-hd-4",
    name: "Silver HD Camera Setup",
    category: "hd",
    cameraCount: 4,
    discountedPrice: 16000,
    originalPrice: 19999,
    features: [
      "4 Outdoor 5MP Silver Plastic Body (Day/Night Color + Audio)",
      "4 Channel DVR",
      "500GB Surveillance HDD",
      "90m 3+1 Wire Roll",
      "4-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 5MP"
    ],
    cameraType: "5MP Silver Plastic Body",
    nvr: "4 Channel DVR",
    hdd: "500GB Surveillance HDD",
    wire: "90m 3+1 Wire Roll",
    switch: "4-Port PoE Switch",
    maxSupport: "5MP",
    warranty: "2 Years"
  },
  {
    id: "silver-hd-8",
    name: "Silver HD Camera Setup",
    category: "hd",
    cameraCount: 8,
    discountedPrice: 21500,
    originalPrice: 24999,
    features: [
      "8 Outdoor 5MP Silver Plastic Body (Day/Night Color + Audio)",
      "8 Channel DVR",
      "500GB Surveillance HDD",
      "90m 3+1 Wire Roll",
      "4-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 5MP"
    ],
    cameraType: "5MP Silver Plastic Body",
    nvr: "8 Channel DVR",
    hdd: "500GB Surveillance HDD",
    wire: "90m 3+1 Wire Roll",
    switch: "4-Port PoE Switch",
    maxSupport: "5MP",
    warranty: "2 Years"
  },
  {
    id: "gold-hd-8",
    name: "Gold HD Camera Setup",
    category: "hd",
    cameraCount: 8,
    discountedPrice: 23000,
    originalPrice: 28000,
    features: [
      "8 Outdoor 3MP Gold Metal Body (Day/Night Color + Audio)",
      "8 Channel DVR",
      "500GB Surveillance HDD",
      "90m 3+1 Wire Roll",
      "4-Port PoE Switch, Connectors, PVC Box",
      "Max Support: 5MP"
    ],
    cameraType: "3MP Gold Metal Body",
    nvr: "8 Channel DVR",
    hdd: "500GB Surveillance HDD",
    wire: "90m 3+1 Wire Roll",
    switch: "4-Port PoE Switch",
    maxSupport: "5MP",
    warranty: "2 Years"
  }
];
