import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleTouchTap() {
    this.setState({open: !this.state.open});
  }

  render () {
    return (
      <div>
      <Drawer open={this.state.open}>
            <Paper>
              <div> test </div>
            </Paper>
            <Divider />
            <MenuItem
              primaryText="Billetera"
              />
          <Divider />
            <MenuItem
              primaryText="Tienda"
              />
                <Divider />
                <MenuItem
                  primaryText="Admin"
                  />
            <Divider />

      </Drawer>
      <AppBar
        title="misLukas"
        onLeftIconButtonTouchTap={this.handleTouchTap}
        //iconElementRight={<Avatar src="img/avatar_male.png" />}
      />
      </div>
    );
  }
}

export default Header;
