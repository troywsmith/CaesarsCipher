import React, {Component} from 'react';
import Plaintext from './components/Plaintext';
import Ciphertext from './components/Ciphertext';
import Shift from './components/Shift';
import Paper from '@material-ui/core/Paper';

class Main extends Component {
      
    constructor() {
      super();
      this.state = {
          shiftAmt: 0,
          plaintext: '',
          ciphertext: ''
      };
      this.onShiftChange = this.onShiftChange.bind(this);
      this.onPlainChange = this.onPlainChange.bind(this);
      this.onCipherChange = this.onCipherChange.bind(this);
      this.encrpytText = this.encrpytText.bind(this);
      this.decryptText = this.decryptText.bind(this);
    }

    onShiftChange(evt) {
      const shift = evt.target.value;
      this.setState({ shiftAmt: parseInt(shift) });
    }

    onPlainChange(evt) {
      const text = evt.target.value;
      this.setState({ plaintext: text });
      this.setState({ ciphertext: this.encrpytText(text, this.state.shiftAmt)})
    }

    onCipherChange(evt) {
      const text = evt.target.value;
      this.setState({ ciphertext: text });
      this.setState({ plaintext: this.decryptText(text, this.state.shiftAmt)})
    }

    encrpytText(text, offset) {
      var result = "";

      // Iterate through charachters in text
      for (var i = 0; i < text.length; i++) {

          // Get the character code current letter
          var c = text.charCodeAt(i);
          var newCode = 0

          // Uppercase letters
          if(c >= 65 && c <=  90) {
              newCode = (c - 65 + offset) % 26 + 65;

          // Lowercase letters
          }else if(c >= 97 && c <= 122){
              newCode = (c - 97 + offset) % 26 + 97;

          // If its not a letter, set it to space
          }else {
              newCode = 32
          }
          
          result += String.fromCharCode(newCode)
      }
      return result;
    }

    decryptText(text) {
      var result = "";
      let shift = 0
      shift = (26 - this.state.shiftAmt) % 26;
      result = this.encrpytText(text, shift)
      return result;
    }

    render() {
        return (
        <div className="container">
        
            <center>
                <h1>Caesar's Cipher</h1>
            </center>
            
            <Shift 
              changeShift={this.onShiftChange.bind(this)} 
              shiftAmt={this.state.shiftAmt}
            />
            
            <Paper elevation={10} className="child-container">

                <Plaintext 
                  changePlain={this.onPlainChange.bind(this)} 
                  plaintext={this.state.plaintext}
                />

                <Ciphertext 
                  changeCipher={this.onCipherChange.bind(this)} 
                  ciphertext={this.state.ciphertext}
                />

            </Paper>
            
        </div>
      );
    }
}

export default Main;