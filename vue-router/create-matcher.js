import createRouteMap from "./create-route-map";
import { createRoute } from "./history/base";

function createMatcher(routes) {
  const { pathList, pathMap } = createRouteMap(routes);
  function match(location) {
    const record = pathMap[location];
    return createRoute(record, { path: location });
  }
  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap);
  }

  return {
    addRoutes,
    match,
  };
}

export default createMatcher;
