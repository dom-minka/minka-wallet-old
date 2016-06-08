import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

// material-ui
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';


export default class TransferList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
        <List>
          <Subheader>Ultimas transaciones</Subheader>
          <ListItem
            primaryText="10 LUK para cerveza"
            secondaryText={
            <p>
              <span style={{color: darkBlack}}>Tea Rozic</span> --
              envio 10 lukas para la cerveza
            </p>
          }
          secondaryTextLines={2}
          />
        </List>


    );
  }
};
