
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  CallOutButton,
  TitleBar,
} from '../../../framework/framework';

export default class TitleBarExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example isClear>
          <TitleBar
            label="Title bar example"
            buttons={[
              <CallOutButton
                iconClasses="glyphicons-plus"
                label="Add something"
              />,
              <CallOutButton
                iconClasses="glyphicons-plus"
                label="Add something else"
              />,
            ]}
          />
        </Example>

      </Page>
    );
  }

}

TitleBarExample.propTypes = {
  route: PropTypes.object.isRequired,
};
