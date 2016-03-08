
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
  Text,
} from '../../components/page/Page.jsx';

import {
  Kpi,
  KpiPositive,
  KpiNegative,
} from '../../../framework/framework';

export default class KpiExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example title="Kpi">
          <Text>General KPI component.</Text>
          <Kpi
            className="kpi kpi--positive"
            title="+1200%"
          >+1.2k%</Kpi>
        </Example>

        <Example title="KpiPositive">
          <Text>Component to show positive change (wrapper around Kpi).</Text>
          <KpiPositive
            title="+2400%"
          >+2.4k%</KpiPositive>
        </Example>

        <Example title="KpiNegative">
          <Text>Component to show negative change (wrapper around Kpi).</Text>
          <KpiNegative
            title="-4800%"
          >-4.8k%</KpiNegative>
        </Example>

      </Page>
    );
  }

}

KpiExample.propTypes = {
  route: PropTypes.object.isRequired,
};
