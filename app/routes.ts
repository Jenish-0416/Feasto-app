import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    layout("routes/layout.tsx", [
        route("/landing", "routes/landing-page/page.tsx"), // Removed broken route
        route("/restaurants", "routes/restaurants-page/page.tsx"),
        route("/ordering", "routes/ordering-page/page.tsx"),
    ]),
] satisfies RouteConfig;

