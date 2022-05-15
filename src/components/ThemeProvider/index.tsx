/*
 * @Author: jweboy
 * @Date: 2021-10-05 10:13:33
 * @LastEditors: jweboy
 * @LastEditTime: 2021-10-05 10:20:39
 */
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/system';
import * as React from 'react';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

// type Theme = Pick<React.Component<typeof MuiThemeProvider>, 'theme'>;

const ThemeProvider: React.FC = (props) => {
  const theme = createTheme({
    // primary: {
    //   main: 'rgb(3, 201, 215)',
    // },
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};

export default ThemeProvider;
