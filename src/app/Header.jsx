import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

class Header extends React.Component {

  render () {
    return (
      <AppBar
        title="misLukas"
        onLeftIconButtonTouchTap={this.handleTouchTap}
        //iconElementRight={<Avatar src="img/avatar_male.png" />}
      />
    );
  }
}

export default Header;
