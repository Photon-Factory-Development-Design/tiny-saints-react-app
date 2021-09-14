import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';
import { Required } from './validators';

const TextField = ({ validator, onValidated, submitted, ...props }) => {
    const [validationError, setValidationError] = React.useState();
    const validatorRef = React.useRef(validator);

    // if the input is required add the required placeholder
    // also add the required validator
    if (props.required) {
        validatorRef.current = validator
            ? (value) => Required(value) || validator(value)
            : Required;
    }

    // run validator fn which checks the validator each value change
    // sets the validators result (string) as the validationError
    const runValidator = React.useCallback(
        ({ target: { value } }) => {
            if (!validatorRef.current) {
                return;
            }
            const validationResult = validatorRef.current(value);
            onValidated && onValidated(validationResult, props.name);

            if (!submitted) {
                return;
            }
            setValidationError(validationResult);
        },
        [setValidationError, validatorRef, submitted, onValidated, props.name]
    );

    // hooks the run validator function into the onChange callback
    const onChange = props.onChange;
    props.onChange = onChange
        ? (event) => {
              onChange(event);
              runValidator(event);
          }
        : runValidator;

    // runs it once at start
    React.useEffect(() => {
        runValidator({ target: props });
    }, [submitted]);

    return (
        <MuiTextField
            {...props}
            error={!!validationError}
            helperText={validationError}
        />
    );
};

export default TextField;
