import { base } from 'common/lib/airtable';

export const fetchOrganizations = (email) => {
    let params = {};
    if (email) {
        params = {
            filterByFormula: `FIND('${email}', {Email})`
        };
    }
    return base('Organization').select(params);
};

export const fetchOrders = (organization) => {
    return base('Orders').select({
        filterByFormula: `FIND('${organization}', {Organization})`
    });
};

export const fetchDetailOrder = (id, callback) => {
    return base('Orders').find(id, callback);
};

export const createOrganization = (data, callback) => {
    base('Organization').create(
        data,
        { typecast: true },
        function (err, record) {
            callback && callback(err, record);
        }
    );
};

export const updateCustomer = (email, callback) => {
    base('Customers')
        .select({
            filterByFormula: `{Email} = '${email}'`
        })
        .eachPage(
            function page(records, fetchNextPage) {
                // This function (`page`) will get called for each page of records.

                records.forEach(function (record) {
                    base('Customers').update(
                        [
                            {
                                id: record.id,
                                fields: {
                                    fundraiser: 'yes'
                                }
                            }
                        ],
                        function (err, records) {
                            if (err) {
                                console.error(err);
                                return;
                            }
                            records.forEach(function (record) {
                                console.log(record.get('Email'));
                            });
                        }
                    );
                });

                // To fetch the next page of records, call `fetchNextPage`.
                // If there are more records, `page` will get called again.
                // If there are no more records, `done` will get called.
                fetchNextPage();
            },
            function done(err) {
                if (err) {
                    console.error(err);
                    return;
                }
            }
        );
};

export const fetchCustomer = (id, callback) => {
    return base('Orders').find(id, callback);
};
