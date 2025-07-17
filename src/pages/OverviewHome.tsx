import ProgressSection from "@/components/OverviewHome/Overview/ProgressSection";
import OnRoadSection from "@/components/OverviewHome/Overview/OnRoadSection";
import LatestFiles from "@/components/OverviewHome/Overview/LatestFiles";
import TableSection from "@/components/TableSection";

export default function OverviewHome() {
  return (
    <>
      <ProgressSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-6">
        <OnRoadSection />
        <LatestFiles />
      </div>
      <TableSection />
    </>
  );
}
