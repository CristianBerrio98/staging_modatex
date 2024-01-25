/** @odoo-module **/

import { formatFloat, formatPercentage } from "@web/views/fields/formatters";

import { Component } from "@odoo/owl";

export class CohortRenderer extends Component {
    setup() {
        this.model = this.props.model;
    }

    range(n) {
        return Array.from({ length: n }, (_, i) => i);
    }

    formatFloat(value) {
        return formatFloat(value, { digits: [false, 1] });
    }

    formatPercentage(value) {
        return formatPercentage(value, { digits: [false, 1] });
    }

    getCellTitle(period, measure, count) {
        return `${this.env._t("Period")}: ${period}\n${measure}: ${count}`;
    }
}

CohortRenderer.template = "web_cohort.CohortRenderer";
CohortRenderer.props = ["class", "model", "onRowClicked"];