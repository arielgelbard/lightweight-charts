import { CustomPriceLine } from "../model/custom-price-line";
import { PriceLineOptions } from "../model/price-line-options";

import { IPriceLine } from "./iprice-line";

export class PriceLine implements IPriceLine {
	private readonly _priceLine: CustomPriceLine;

	public constructor(priceLine: CustomPriceLine) {
		this._priceLine = priceLine;
	}

	public applyOptions(options: Partial<PriceLineOptions>): void {
		console.log("here9", options);
		this._priceLine.applyOptions(options);
	}
	public options(): Readonly<PriceLineOptions> {
		console.log("here10", this._priceLine.options());
		return this._priceLine.options();
	}

	public priceLine(): CustomPriceLine {
		return this._priceLine;
	}
}
