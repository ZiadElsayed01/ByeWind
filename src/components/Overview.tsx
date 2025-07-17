import { Outlet } from "react-router-dom";
import Navigation from "./OverviewHome/Navigation";

export default function Overview() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
