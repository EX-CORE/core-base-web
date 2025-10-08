import { createBrowserRouter, Link } from "react-router-dom";
import Layout from "src/components/layouts";
import SubMenu from "src/components/layouts/SubMenu";
import {
  Dashboard,
  Login,
  Notice,
  NoticeEditor,
  Review,
  NoticeDetail,
} from "src/pages";
import {
  OrganizationInfo,
  OrganizationMember,
  OrganizationStructure,
} from "src/pages/organization";
import {ReviewDetailPage, ReviewListPage} from "src/pages/review";
import ReviewResultsPage from "../pages/review/ReviewResultsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <SubMenu />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "notice",
            element: <Notice />,
          },
          {
            path: "notice/new",
            element: <NoticeEditor />,
          },
          {
            path: "notice/:id",
            element: <NoticeEditor />,
          },
          {
            path: "notice/:id/detail",
            element: <NoticeDetail />,
          },
          {
            path: "notice/:id/edit",
            element: <NoticeEditor />,
          },
        ],
      },
      {
        path: "/user/review",
        element: (
          <Review
            title="리뷰"
            surveyPeriod={{ startDate: "2022-02-04", endDate: "2022-02-04" }}
            reviewPeriod={{ startDate: "2022-02-04", endDate: "2022-02-04" }}
            state={{ text: "TEMP" }}
          />
        ),
      },
      {
        path: "/management",
        element: <SubMenu />,
        children: [
          {
            path: "review",
            children: [
              {
                path: "list",
                element: <ReviewListPage />,
              },
            ],
          },
          {
            path: "review/results",
            element: <ReviewResultsPage />,
          },
          {
            path: "review/:reviewId",
            element: <ReviewDetailPage />,
          },
          {
            path: "organization",
            children: [
              {
                path: "info",
                element: <OrganizationInfo />,
              },
              {
                path: "structure",
                element: <OrganizationStructure />,
              },
              {
                path: "member",
                element: <OrganizationMember />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
