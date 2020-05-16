import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom'
import { AccountCircle,PersonAdd, ExitToApp} from '@material-ui/icons'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import '@material/react-tab-indicator/dist/tab-indicator.css';
import Logo from '../images/logo3.png'

class SimpleTabs extends React.Component{

  state={
    auth: false
  }

  render()
  {
    let val = this.props.value

    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#000'
        }
      },
      overrides: {
        MuiTab: {
          root: {
            textTransform: 'none',
            '&:hover': {
              color: '#fff176',
              opacity: 1,
            },
            '&:focus': {
              color: 'yellow',
            },
            '&$selected': {
              color: 'yellow',
            },
            '@media (min-width: 0px)': {
              minWidth: 72
            }
          },
        },
        MuiTabs: {
          indicator: {
            backgroundColor: 'yellow',
          },
        }
      },
    });
    
    return (
      <div>
        <ThemeProvider theme={theme}>
          <AppBar position="static" >
            <Tabs value={val} aria-label="simple tabs example">
              <Tab wrapped icon={<img src={Logo} alt="" style={{width:"200px",height:"50px"}}></img>} component={Link} to="/" />
              {!this.state.auth && <Tab wrapped icon={<AccountCircle/>} style={{marginLeft:"70%"}} label="Login" component={Link} to="/login"  />}
              {!this.state.auth && <Tab wrapped icon={<PersonAdd/>} label="SignUp" component={Link} to={"/signup"} />}
              {this.state.auth && <Tab wrapped icon={<ExitToApp/>} style={{marginLeft:"85%"}} label="LogOut" component={Link} to={"/logout"} />}
            </Tabs>
          </AppBar>
        </ThemeProvider>
      </div>
    );
  }
}


export default SimpleTabs
