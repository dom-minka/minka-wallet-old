import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

// material-ui
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

//right button menu
const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

export default class TransferList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  getItems() {
    return this.props.transfers || [];
  }
  render() {
    return (
      <Paper>
        <List>
          <Subheader>Ultimas transaciones</Subheader>
          {this.getItems().map(item =>
            <div>
            <ListItem
              primaryText= {item.get('description')}
              leftAvatar={<Avatar src="a.jpg" />}
               rightIconButton={rightIconMenu}
              secondaryText={
              <p>
                <span style={{color: darkBlack}}> {item.get('source')}</span> --
                envio
                <span style={{color: darkBlack}}> {item.get('amount')} lukas </span>
                 a {item.get('destination')} {item.get('description')}
              </p>
            }
            secondaryTextLines={2}
            />
            <Divider inset={true} />
            </div>
          )}
        </List>
      </Paper>

    );
  }
};
