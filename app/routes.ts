import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("/price", "routes/price.tsx"),
    route("/dispo", "routes/dispo.tsx"),
    route("/info", "routes/info.tsx"),
] satisfies RouteConfig;
