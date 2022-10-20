import { Route } from "react-router-dom";
import HomeTemplate from "../templates/Airbnb";
import AuthTemplate from "templates/Auth";

export const renderHome = (routes) =>
  routes.map(({ path, isIndex, Component, childRoutes }) =>
    childRoutes && childRoutes?.length > 0 ? (
      <Route
        index={!!isIndex}
        key={path}
        path={path}
        element={
          <HomeTemplate>
            <Component />
          </HomeTemplate>
        }
      >
        {childRoutes.map(
          ({ path, isIndex, Component: ComponentChildRoute }) => (
            <Route
              index={!!isIndex}
              key={path}
              path={path}
              element={
                <HomeTemplate>
                  <ComponentChildRoute />
                </HomeTemplate>
              }
            />
          )
        )}
      </Route>
    ) : (
      <Route
        index={!!isIndex}
        key={path}
        path={path}
        element={
          <HomeTemplate>
            <Component />
          </HomeTemplate>
        }
      />
    )
  );

export const renderAuth = (routes) =>
  routes.map(({ path, isIndex, Component, childRoutes }) =>
    childRoutes && childRoutes?.length > 0 ? (
      <Route
        index={!!isIndex}
        key={path}
        path={path}
        element={
          <AuthTemplate>
            <Component />
          </AuthTemplate>
        }
      >
        {childRoutes.map(
          ({ path, isIndex, Component: ComponentChildRoute }) => (
            <Route
              index={!!isIndex}
              key={path}
              path={path}
              element={
                <AuthTemplate>
                  <ComponentChildRoute />
                </AuthTemplate>
              }
            />
          )
        )}
      </Route>
    ) : (
      <Route
        index={!!isIndex}
        key={path}
        path={path}
        element={
          <AuthTemplate>
            <Component />
          </AuthTemplate>
        }
      />
    )
  );
