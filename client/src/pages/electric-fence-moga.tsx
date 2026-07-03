import ElectricFenceCityTemplate from "@/components/electric-fence-city-template";
import { electricFenceCityData } from "@/lib/electric-fence-city-data";

export default function ElectricFenceMogaPage() {
  return <ElectricFenceCityTemplate {...electricFenceCityData.moga} />;
}
