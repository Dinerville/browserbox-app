import React, { Component } from 'react';
import PropTypes from 'prop-types';
const { ipcRenderer } = require('electron');
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  state = {
    url: 'https://google.com',
  };




  handleChange(event) {
    this.setState({url: event.target.value});
  }

  render() {
    return (
<div>
      <h1>Browserbox</h1>
      <Box component="span" m={1}>

      <p>Startup url. Fill free to change it. Leave blank if you don't want to navigate to url after browser start</p>
      <TextField value={this.state.url} onChange={this.handleChange.bind(this)} className={'MuiInputBase-input MuiFilledInput-input MuiInputBase-inputAdornedStart MuiFilledInput-inputAdornedStart'}id="outlined-basic" label="Startup url" variant="outlined" />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ButtonGroup color="primary" aria-label="outlined primary button group">

      <Button variant="contained" color="primary" size="large" onClick={()=>ipcRenderer.send('open_browser', 'chromium', this.state.url)}>Open chrome</Button>

      <Button variant="contained" color="primary" size="large" onClick={()=>ipcRenderer.send('open_browser', 'firefox', this.state.url)}>Open firefox</Button>

      <Button variant="contained" color="primary" size="large" onClick={()=>ipcRenderer.send('open_browser', 'webkit', this.state.url)}>Open safari</Button>
      </ButtonGroup>
      <p>If your computer start to consume too much resources, click 'Close all browsers'. It will free the resources</p>
      <Button  variant="contained" color="secondary" size="large" onClick={()=>ipcRenderer.send('close_all_browsers')}>Close all browsers</Button>

      </Box>
</div>
    );
  }
}
