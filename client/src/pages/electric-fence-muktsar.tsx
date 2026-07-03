import ElectricFenceCityTemplate from "@/components/electric-fence-city-template";
import { electricFenceCityData } from "@/lib/electric-fence-city-data";

export default function ElectricFenceMuktsarPage() {
  return <ElectricFenceCityTemplate {...electricFenceCityData.muktsar} />;
}
