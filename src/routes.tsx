import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Fun } from "./pages/fun";
import { Wow } from "./pages/wow";
import { SillyHeader } from "./components/silly-header";
import { SillyFooter } from "./components/silly-footer";

const Routes = () => (
  <div className="flex min-h-screen flex-col">
    <SillyHeader />
    <main className="flex-1">
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/wow" element={<Wow />} />
      </RouterRoutes>
    </main>
    <SillyFooter />
  </div>
);

export { Routes };