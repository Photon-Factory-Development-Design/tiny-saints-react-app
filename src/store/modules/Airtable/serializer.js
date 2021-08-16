export const organizationMap = {
    name: 'Name',
    status: 'Status',
    diocese: 'DioceseText',
    n_students: 'No. of Students',
    website: 'Website', 
    taxID: 'Tax ID',
    mailingAddress: 'Mailing Address',
    phoneNumber: 'Phone Number',
    students: 'Students',
    orders: 'Orders',
    totalOrders: 'Total (from Orders)',
    attachments: 'Attachments',
    contact: 'Contact',
    emailFromContact: 'Email (from Contact)',
    nameFromContact: 'Name (from Contact)',
    products: 'Products'
};

export const orderMap = {
    name: 'Name',
    shopifyID: '∞ Shopify Id',
    customer: 'Customer',
    fulfillmentStatus: 'Fulfillment Status',
    currency: 'Currency',
    discount: 'Discount',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    taxes: 'Taxes',
    taxesIncluded: 'Taxes Included',
    total: 'Total',
    totalWeight: 'Total Weight',
    createdAt: 'Created At',
    orderLineItems: 'Order Line Items',
    notes: 'Notes',
    financialStatus: 'Financial Status',
    shippingAddress1: 'Shipping Address 1',
    shippingAddress2: 'Shipping Address 2',
    shippingProvince: 'Shipping Province',
    shippingCountry: 'Shipping Country',
    shippingPostalCode: 'Shipping Postal Code',
    orderTransactions: 'Order Transactions',
    balanceTransactions: 'Balance Transactions',
    refunds: 'Refunds',
    referralOrganization: 'Referral Organization',
    organizations: 'Organizations',
    referrals: 'Referrals'
};

const serializer = (map, record) => {
    const obj = { id: record.id };
    Object.keys(map).forEach((key) => {
        obj[key] = record.get(map[key]);
    });

    console.log(obj);
    return obj;
};

export const serializeOrganization = (record) =>
    serializer(organizationMap, record);

export const serializeOrder = (record) => serializer(orderMap, record);
