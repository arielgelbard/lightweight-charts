# ===========================================

# This is a custom version made by arielgelbard on github.

- To Build, run: `npm run build:prod`

- It implements boxes, being able to extend the box with a 0 value, and price dragging ability/event
- Removed git hooks to be able to commit these changes

### https://github.com/tradingview/lightweight-charts/issues/1086

- https://github.com/tradingview/lightweight-charts/issues/1086#issuecomment-1236047910

```
git clone https://github.com/tradingview/lightweight-charts.git
cd lightweight-charts
git checkout -b v3.8.0 tags/v3.8.0
wget https://github.com/randalhsu/OPAL/raw/main/lightweight-charts-patch/0002-Draggable-custom-price-line.patch
git am 0002-Draggable-custom-price-line.patch
npm install --legacy-peer-deps
npm run build:prod
```

```js
var lineSeries = chart.addLineSeries({
	lineWidth: 3,
	// lineStyle: 2,
	lineType: 3,
	// disabling built-in price lines
	lastValueVisible: false,
	priceLineVisible: false,
});
lineSeries.setData([
	{ time: "1980-12-22", value: 170, color: "transparent" },
	{ time: "3000-12-31", value: 182, color: "transparent" },
]);

const priceLine: PriceLineOptions = {
	price: 170,
	color: "white",
	lineWidth: 2,
	lineStyle: 2, // LineStyle.Dashed
	axisLabelVisible: true,
	title: "",
	lineVisible: false,
	draggable: false,
	id: "",
};

const line = lineSeries.createPriceLine(priceLine);

const handler2: CustomPriceLineDraggedEventHandler = (params) => {
	// Get Line Here
};
chart.subscribeCustomPriceLineDragged(handler2);
```

### https://github.com/tradingview/lightweight-charts/pull/1064

- could not figure out corners api:

```js
  const box = {
    borderColor: "#00000000",
    borderWidth: 0,
    borderStyle: LineStyle.Solid,
    fillColor: "#fff",
    fillOpacity: 0.1,
    borderVisible: false,
    axisLabelVisible: true,
    title: "",
    earlyTime: 343899722,
    highPrice: 182, // make it the same value as lowPrice and it will become a hr line
    lateTime: 0,  // if 0, then extend box
    lowPrice: 170,
  };

  const createdBox = newSeries.createBox(box as any);
```

# ===========================================

<!-- markdownlint-disable no-inline-html first-line-h1 -->

<div align="center">
  <a href="https://www.tradingview.com/lightweight-charts/" target="_blank">
    <img width="200" src="https://github.com/tradingview/lightweight-charts/raw/master/.github/logo.svg?sanitize=true">
  </a>

  <h1>Lightweight Charts</h1>

[![CircleCI][ci-img]][ci-link]
[![npm version][npm-version-img]][npm-link]
[![npm bundle size][bundle-size-img]][bundle-size-link]
[![Dependencies count][deps-count-img]][bundle-size-link]
[![Downloads][npm-downloads-img]][npm-link]

</div>

<!-- markdownlint-enable no-inline-html -->

[Demos][demo-url] | [Documentation](https://tradingview.github.io/lightweight-charts/) | [Discord community](https://discord.gg/UC7cGkvn4U)

TradingView Lightweight Charts are one of the smallest and fastest financial HTML5 charts.

The Lightweight Charting Library is the best choice for you if you want to display financial data as an interactive chart on your web page without affecting your web page loading speed and performance.

It is the best choice for you if you want to replace static image charts with interactive ones.
The size of the library is close to static images but if you have dozens of image charts on a web page then using this library can make the size of your web page smaller.

## Installing

### es6 via npm

```bash
npm install lightweight-charts
```

```js
import { createChart } from "lightweight-charts";

const chart = createChart(document.body, { width: 400, height: 300 });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
	{ time: "2019-04-11", value: 80.01 },
	{ time: "2019-04-12", value: 96.63 },
	{ time: "2019-04-13", value: 76.64 },
	{ time: "2019-04-14", value: 81.89 },
	{ time: "2019-04-15", value: 74.43 },
	{ time: "2019-04-16", value: 80.01 },
	{ time: "2019-04-17", value: 96.63 },
	{ time: "2019-04-18", value: 76.64 },
	{ time: "2019-04-19", value: 81.89 },
	{ time: "2019-04-20", value: 74.43 },
]);
```

### CDN

You can use [unpkg](https://unpkg.com/):

<https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js>

The standalone version creates `window.LightweightCharts` object with all exports from `esm` version:

```js
const chart = LightweightCharts.createChart(document.body, {
	width: 400,
	height: 300,
});
const lineSeries = chart.addLineSeries();
lineSeries.setData([
	{ time: "2019-04-11", value: 80.01 },
	{ time: "2019-04-12", value: 96.63 },
	{ time: "2019-04-13", value: 76.64 },
	{ time: "2019-04-14", value: 81.89 },
	{ time: "2019-04-15", value: 74.43 },
	{ time: "2019-04-16", value: 80.01 },
	{ time: "2019-04-17", value: 96.63 },
	{ time: "2019-04-18", value: 76.64 },
	{ time: "2019-04-19", value: 81.89 },
	{ time: "2019-04-20", value: 74.43 },
]);
```

## Development

See [BUILDING.md](./BUILDING.md) for instructions on how to build `lightweight-charts` from source.

## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this software except in compliance with the License.
You may obtain a copy of the License at LICENSE file.
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

This software incorporates several parts of tslib (<https://github.com/Microsoft/tslib>, (c) Microsoft Corporation) that are covered by BSD Zero Clause License.

This license requires specifying TradingView as the product creator.
You shall add the "attribution notice" from the NOTICE file and a link to <https://www.tradingview.com/> to the page of your website or mobile application that is available to your users.
As thanks for creating this product, we'd be grateful if you add it in a prominent place.

[demo-url]: https://www.tradingview.com/lightweight-charts/
[ci-img]: https://img.shields.io/circleci/build/github/tradingview/lightweight-charts.svg
[ci-link]: https://circleci.com/gh/tradingview/lightweight-charts
[npm-version-img]: https://badge.fury.io/js/lightweight-charts.svg
[npm-downloads-img]: https://img.shields.io/npm/dm/lightweight-charts.svg
[npm-link]: https://www.npmjs.com/package/lightweight-charts
[bundle-size-img]: https://badgen.net/bundlephobia/minzip/lightweight-charts
[deps-count-img]: https://img.shields.io/badge/dynamic/json.svg?label=dependecies&color=brightgreen&query=$.dependencyCount&uri=https%3A%2F%2Fbundlephobia.com%2Fapi%2Fsize%3Fpackage%3Dlightweight-charts
[bundle-size-link]: https://bundlephobia.com/result?p=lightweight-charts
