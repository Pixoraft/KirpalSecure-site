import CCTVCityTemplate from "@/components/cctv-city-template";
import { cctvCityData } from "@/lib/cctv-city-data";

export default function CCTVLudhianaPage() {
  return <CCTVCityTemplate {...cctvCityData["ludhiana"]} />;
}
