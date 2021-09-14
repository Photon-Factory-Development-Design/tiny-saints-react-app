import React from 'react';
import { inject, observer } from 'mobx-react';

// material ui components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// core components
import TextField from 'components/TextField/TextField';
import { checkErrorObjValidated } from 'common/utils/arrayUtils';

// icons
import CheckIcon from '@material-ui/icons/Check';

const fields = [
    {
        label: 'Organization Name',
        name: 'Organization Name'
    },
    {
        label: 'Representative Name',
        name: 'Representative Name'
    },
    {
        label: 'Phone Number',
        name: 'Phone Number'
    },
    {
        label: 'Address',
        name: 'Address'
    },
    {
        label: 'TAX ID',
        name: 'TAX ID'
    }
];
class OrganizationForm extends React.Component {
    state = {
        'Organization Name': '',
        'Representative Name': '',
        'Phone Number': '',
        Address: '',
        'TAX ID': '',
        error: {},
        submitted: false
    };

    onSubmit() {
        const { airtable } = this.props.store;
        this.setState({ submitted: true });

        if (checkErrorObjValidated(this.state.error)) {
            airtable.createOrganization(
                {
                    'Organization Name': this.state['Organization Name'],
                    'Representative Name': this.state['Representative Name'],
                    'Phone Number': this.state['Phone Number'],
                    Address: this.state['Address'],
                    'TAX ID': this.state['TAX ID'],
                    Email: window.email
                },
                (err, record) => {
                    if (!err) {
                        airtable.updateCustomer(window.email);
                        this.setState({ loading: false, created: true });
                    }
                }
            );
        }
    }

    render() {
        const { created } = this.state;
        return (
            <Container>
                {!created && (
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="flex-start">
                        {fields.map(({ label, name }) => (
                            <Box py={1} key={name} width="100%">
                                <TextField
                                    fullWidth
                                    label={label}
                                    variant="outlined"
                                    size="small"
                                    value={this.state[name]}
                                    name={name}
                                    submitted={this.state.submitted}
                                    required
                                    onChange={(e) =>
                                        this.setState({
                                            [name]: e.target.value
                                        })
                                    }
                                    onValidated={(e, name) =>
                                        this.setState((prev) => ({
                                            error: { ...prev.error, [name]: e }
                                        }))
                                    }
                                />
                            </Box>
                        ))}

                        <Box pt={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.onSubmit.bind(this)}>
                                Submit
                            </Button>
                        </Box>
                    </Box>
                )}
                {created && (
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center">
                        <CheckIcon size={'large'} />
                        <Typography variant="h3">Thank you</Typography>
                    </Box>
                )}
            </Container>
        );
    }
}

export default inject('store')(observer(OrganizationForm));
