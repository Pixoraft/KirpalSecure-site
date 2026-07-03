import ElectricFenceCityTemplate from "@/components/electric-fence-city-template";
import { electricFenceCityData } from "@/lib/electric-fence-city-data";

export default function ElectricFenceTarnTaranPage() {
  return <ElectricFenceCityTemplate {...electricFenceCityData["tarn-taran"]} />;
}
