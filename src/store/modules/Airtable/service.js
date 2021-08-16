import { base } from 'common/lib/airtable';

export const fetchOrganizations = (user) => {
    return base('Organizations').select({
        filterByFormula: `FIND('${user}', {Contact})`
    });
};

export const fetchOrders = (organization) => {
    return base('Orders').select({
        filterByFormula: `FIND('${organization}', {Organizations Record IDs})`
    });
};
