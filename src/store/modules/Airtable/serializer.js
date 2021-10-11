export const organizationMap = {
    name: 'Organization Name'
};

export const orderMap = {
    name: 'Name',
    createdAt: 'Created At',
    financialStatus: "Financial Status",
    total: "Total"
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
