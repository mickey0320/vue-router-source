function addRouteRecord(route, pathList, pathMap, parentRecord) {
  const path = parentRecord ? `${parentRecord.path}/${route.path}` : route.path;
  const record = {
    path,
    component: route.component,
    parent: parentRecord,
  };
  if (!pathMap[path]) {
    pathList.push(path);
    pathMap[path] = record;
  }
  if (route.children) {
    route.children.forEach((childRoute) =>
      addRouteRecord(childRoute, pathList, pathMap, record)
    );
  }
}

function createRouteMap(routes, oldPathList, oldPathMap) {
  const pathList = oldPathList || [];
  const pathMap = oldPathMap || {};
  routes.forEach((route) => {
    addRouteRecord(route, pathList, pathMap);
  });

  return {
    pathList,
    pathMap,
  };
}

export default createRouteMap;
