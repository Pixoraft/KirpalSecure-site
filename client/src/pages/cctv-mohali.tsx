import CCTVCityTemplate from "@/components/cctv-city-template";
import { cctvCityData } from "@/lib/cctv-city-data";

export default function CCTVMohaliPage() {
  return <CCTVCityTemplate {...cctvCityData["mohali"]} />;
}
