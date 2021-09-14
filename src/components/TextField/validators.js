const Required = (value) => {
    if (
        (!value && value !== 0) ||
        (typeof value === 'string' && value === '')
    ) {
        return 'This field is required';
    }
};

const CityStateZip = (value) => {
    const addresses = value.split(',');
    if (addresses.length !== 3) {
        return 'Invalid address';
    }
};

export { Required, CityStateZip };
