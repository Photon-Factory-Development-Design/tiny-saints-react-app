export const organizationMap = {
    name: 'Organization Name',
    phoneNumber: 'Phone Number',
    email: 'Email',
    address: 'Address',
    taxID: 'TAX ID'
};

export const orderMap = {
    name: 'Name',
    createdAt: 'Created At',
    financialStatus: 'Financial Status',
    total: 'Total',
    customer: 'Customer'
};

export const customerMap = {
    email: 'Email',
    firstName: 'First Name',
    lastName: 'Last Name'
};

const serializer = (map, record) => {
    const obj = { id: record.id };
    Object.keys(map).forEach((key) => {
        obj[key] = record.get(map[key]);
    });

    return obj;
};

export const serializeOrganization = (record) =>
    serializer(organizationMap, record);

export const serializeOrder = (record) => serializer(orderMap, record);

export const serializeCustomer = (record) => serializer(customerMap, record);
