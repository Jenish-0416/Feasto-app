import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
        layout("routes/layout.tsx", [
            route("/landing", "routes/landig-page/page.tsx"),
]),
] satisfies RouteConfig;
