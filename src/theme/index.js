import createMuiTheme from '@material-ui/core/styles/createTheme';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none'
            },
            text: {
                minWidth: 'auto'
            }
        }
    }
});

export default theme;
