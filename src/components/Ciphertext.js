import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class Ciphertext extends Component {

    render() {
        return (
      <div className="right">
        <center>
          <h2>Ciphertext</h2>
          <TextField
            multiline
            rowsMax="10"
            margin="normal"
            type="text"
            name="plaintext"
            placeholder="Enter ciphertext"
            value={this.props.ciphertext}
            onChange={this.props.changeCipher}
          />
        </center>
      </div>);
    }
}
export default Ciphertext;