import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class Plaintext extends Component {

    render() {
        return (
      <div className="left">
        <center>
          <h2>Plaintext</h2>
          <TextField
            multiline
            rowsMax="10"
            margin="normal"
            type="text"
            name="plaintext"
            placeholder="Enter plaintext"
            value={this.props.plaintext}
            onChange={this.props.changePlain}
          />
        </center>
      </div>);
    }
}
export default Plaintext;