import LatestFiles from "@/components/OverviewHome/Overview/LatestFiles";
import OnRoadSection from "@/components/OverviewHome/Overview/OnRoadSection";
import ProgressSection from "@/components/OverviewHome/Overview/ProgressSection";

export default function OverviewHome() {
  return (
    <>
      <ProgressSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-5 my-6">
        <OnRoadSection />
        <LatestFiles />
      </div>
    </>
  );
}
