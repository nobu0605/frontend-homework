import { Flex } from "../components/ui/Flex";
import { lazy } from "react";
import { Suspense } from "react";
import { Layout } from "../components/layout/Layout";
import { useRoutes as useReactRoutes, Outlet } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
const Step1 = lazy(() => import("../pages/step1"));
const Step2 = lazy(() => import("../pages/step2"));
const Step3 = lazy(() => import("../pages/step3"));
const Step4 = lazy(() => import("../pages/step4"));
const Step5 = lazy(() => import("../pages/step5"));
const Step6 = lazy(() => import("../pages/step6"));
const Extra = lazy(() => import("../pages/extra"));

export const useRoutes = () => {
  const routes = useReactRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "/step1",
          element: (
            <Suspense
              fallback={
                <Flex $content="center" $items="center">
                  <CircularProgress />
                </Flex>
              }
            >
              <Layout>
                <Step1 />
              </Layout>
            </Suspense>
          ),
        },
        {
          path: "/step2",
          element: (
            <Suspense
              fallback={
                <Flex $content="center" $items="center">
                  <CircularProgress />
                </Flex>
              }
            >
              <Layout>
                <Step2 />
              </Layout>
            </Suspense>
          ),
        },
        {
          path: "/step3",
          element: (
            <Suspense
              fallback={
                <Flex $content="center" $items="center">
                  <CircularProgress />
                </Flex>
              }
            >
              <Layout>
                <Step3 />
              </Layout>
            </Suspense>
          ),
        },
        {
          path: "/step4",
          element: (
            <Suspense
              fallback={
                <Flex $content="center" $items="center">
                  <CircularProgress />
                </Flex>
              }
            >
              <Layout>
                <Step4 />
              </Layout>
            </Suspense>
          ),
        },
        {
          path: "/step5",
          element: (
            <Suspense
              fallback={
                <Flex $content="center" $items="center">
                  <CircularProgress />
                </Flex>
              }
            >
              <Layout>
                <Step5 />
              </Layout>
            </Suspense>
          ),
        },
        {
          path: "/step6",
          element: (
            <Suspense
              fallback={
                <Flex $content="center" $items="center">
                  <CircularProgress />
                </Flex>
              }
            >
              <Layout>
                <Step6 />
              </Layout>
            </Suspense>
          ),
        },
        {
          path: "/extra",
          element: (
            <Suspense
              fallback={
                <Flex $content="center" $items="center">
                  <CircularProgress />
                </Flex>
              }
            >
              <Layout>
                <Extra />
              </Layout>
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <>Not Found</>,
        },
      ],
    },
  ]);

  return routes;
};
