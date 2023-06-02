import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AnalyticalTable,
  Card,
  CardHeader,
  CustomListItem,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  Icon,
  List,
  ProgressIndicator,
  StandardListItem,
  Text,
  ValueState,
} from "@ui5/webcomponents-react";

/** ThemingParameters
 * 1. The ThemingParameters used for the color of the status text, contain all available theme dependent styles of UI5 Web Components for React.
 * 2. Better way is using ThemingParameters to control CSS variables.
 * https://github.com/SAP/ui5-webcomponents-react/blob/main/packages/base/src/styling/ThemingParameters.ts
 */
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";

// import "@ui5/webcomponents-icons/dist/AllIcons.js"; // reduce bundle size
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart";
import listIcon from "@ui5/webcomponents-icons/dist/list";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view";

import { MyCustomElement } from "./MyCustomElement";

// Moved to static folder 'Public'
// const dataset = [
//   {
//     month: "January",
//     data: 65,
//   },
//   {
//     month: "February",
//     data: 59,
//   },
//   {
//     month: "March",
//     data: 80,
//   },
//   {
//     month: "April",
//     data: 81,
//   },
//   {
//     month: "May",
//     data: 56,
//   },
//   {
//     month: "June",
//     data: 55,
//   },
//   {
//     month: "July",
//     data: 40,
//   },
// ];

// _ refers to anything. || Using _(...) with function syntax implies that _ is a function.
const tableData = new Array(500).fill(null).map((_, index) => {
  return {
    name: `name${index}`,
    age: Math.floor(Math.random() * 100),
    friend: {
      name: `friend.Name${index}`,
      age: Math.floor(Math.random() * 100),
    },
  };
});

const tableColumns = [
  {
    Header: "Name",
    accessor: "name", // String-based value accessors!
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Friend Name",
    accessor: "friend.name",
  },
  {
    Header: "Friend Age",
    accessor: "friend.age",
  },
];

export function Home() {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);
  const [dataset, setDataset] = useState(null);

  const getData = () => {
    fetch("./data/stock-dataset.json", {
      // (Optional here)
      // headers: {
      //   "Content-Type": "application/json",
      //   Accept: "application/json",
      // },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log([...data.stock]);
        setDataset([...data.stock]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHeaderClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (toggleCharts === "lineChart") {
        setToggleCharts("barChart");
      } else {
        setToggleCharts("lineChart");
      }
    }, 2000);
    // alert("Header clicked");
  };

  const navigate = useNavigate();
  const handleProgressHeaderClick = () => {
    navigate("/detail");
  };

  const contentTitle =
    toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <MyCustomElement />
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <Card
          header={
            <CardHeader
              titleText="Stock Prices"
              subtitleText={`Click here to switch to ${switchToChart}`}
              interactive
              onClick={handleHeaderClick}
              avatar={
                <Icon
                  name={
                    toggleCharts === "lineChart" ? lineChartIcon : barChartIcon
                  }
                />
              }
            />
          }
          style={{ width: "300px", ...spacing.sapUiContentPadding }}
        >
          <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>

          {toggleCharts && toggleCharts === "lineChart" ? (
            <LineChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Stock Price" }]}
              dataset={dataset}
              loading={loading}
            />
          ) : (
            <BarChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Stock Price" }]}
              dataset={dataset}
              loading={loading}
            />
          )}
        </Card>
        <Card
          header={
            <CardHeader
              titleText="Progress"
              subtitleText="List"
              avatar={<Icon name={listIcon} />}
              interactive
              onClick={handleProgressHeaderClick}
            />
          }
          style={{ width: "300px", ...spacing.sapUiContentPadding }}
        >
          <List>
            <StandardListItem
              additionalText="finished"
              additionalTextState={ValueState.Success}
            >
              Activity 1
            </StandardListItem>
            <StandardListItem
              additionalText="failed"
              additionalTextState={ValueState.Error}
            >
              Activity 2
            </StandardListItem>
            <CustomListItem>
              <FlexBox
                direction={FlexBoxDirection.Column}
                style={{ width: "100%", ...spacing.sapUiContentPadding }}
              >
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                  <Text
                    style={{ fontSize: ThemingParameters.sapFontLargeSize }}
                  >
                    Activity 3
                  </Text>
                  <Text
                    style={{ color: ThemingParameters.sapCriticalTextColor }}
                  >
                    in progress
                  </Text>
                </FlexBox>
                <ProgressIndicator
                  value={89}
                  valueState={ValueState.Success}
                  style={{ ...spacing.sapUiTinyMarginTop }}
                />
              </FlexBox>
            </CustomListItem>
            <CustomListItem>
              <FlexBox
                direction={FlexBoxDirection.Column}
                style={{ width: "100%", ...spacing.sapUiContentPadding }}
              >
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                  <Text
                    style={{ fontSize: ThemingParameters.sapFontLargeSize }}
                  >
                    Activity 4
                  </Text>
                  <Text
                    style={{ color: ThemingParameters.sapCriticalTextColor }}
                  >
                    in progress
                  </Text>
                </FlexBox>
                <ProgressIndicator
                  value={5}
                  valueState={ValueState.Error}
                  style={{ ...spacing.sapUiTinyMarginTop }}
                />
              </FlexBox>
            </CustomListItem>
          </List>
        </Card>
        <Card
          header={
            <CardHeader
              titleText="AnalyticalTable"
              avatar={<Icon name={tableViewIcon} />}
            />
          }
          style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }}
        >
          <AnalyticalTable
            data={tableData}
            columns={tableColumns}
            // other properties: groupable, filterable, rowHeight...
            // default rows count is 15 /
            visibleRows={5}
          />
        </Card>
      </FlexBox>
    </>
  );
}
