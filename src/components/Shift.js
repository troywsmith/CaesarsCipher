import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Shift extends Component {
    values = [1,2,3,4,5,6,7,8,9,10]
    render() {
    return (
      <div className="shift">
        <center>
            <Select
              value={this.props.shiftAmt}
              onChange={this.props.changeShift}
              autoWidth={true}
              displayEmpty={false}
            >
              <MenuItem value="" disabled>Enter shift amount </MenuItem>
              {this.values.map(amt => (
              <MenuItem value={amt}>{amt}</MenuItem>
              ))}
          </Select>
        </center>
      </div>
    );
  }
};

export default Shift;