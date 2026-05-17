import HeritageBanner from "@/components/shared/Banner";
import FeaturedPage from "@/components/shared/Feature";
import HeritageMarquee from "@/components/shared/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeritageBanner/>
      <HeritageMarquee/>
      <FeaturedPage/>
    </div>
  );
}
