import ElectricFenceCityTemplate from "@/components/electric-fence-city-template";
import { electricFenceCityData } from "@/lib/electric-fence-city-data";

export default function ElectricFenceRupnagarPage() {
  return <ElectricFenceCityTemplate {...electricFenceCityData.rupnagar} />;
}
