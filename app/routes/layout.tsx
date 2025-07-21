import { Outlet } from "react-router";
import Footer from "~/components/footer";
import StaticHeader from "~/components/static-header";

export default function Layout() {
  return (
    <main>
      <StaticHeader />
      <div className="px-24">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}
