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
    discountedPrice: 13000,
    originalPrice: 16999,
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
    discountedPrice: 21000,
    originalPrice: 23999,
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
    discountedPrice: 14500,
    originalPrice: 18999,
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
    discountedPrice: 23000,
    originalPrice: 26999,
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
    discountedPrice: 10000,
    originalPrice: 12839,
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
    discountedPrice: 12500,
    originalPrice: 13839,
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
    discountedPrice: 13839,
    originalPrice: 14500,
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