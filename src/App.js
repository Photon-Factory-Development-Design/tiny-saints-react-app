import React from 'react';
import { base } from 'common/lib/airtable';

const fetchData = () => {
    console.log('fetchData', window.logo_tag);
    // fetch airtable data
    return new Promise((resolve) => {
        base('ICO Logos')
            .select({
                maxRecords: 3,
                view: 'Grid view',
                filterByFormula: `{name}='${window.logo_tag}'`
            })
            .eachPage((records, fetchNextPage) => {
                console.log(records);
                // read location info for each record

                const locations = records.map((record) => record.get('Notes'));
                resolve(locations);

                // setLocations(locations);

                // fetch next page
                fetchNextPage();
            });
    });
};

/*
const newFunction = async () => {
    await fetchData();
}
*/

function App() {
    //const [locations, setLocations] = React.useState([]);

    // const customerName = window.customerName;

    const loadData = async () => {
        const data = await fetchData();
        // setLocations(data);
        document.getElementById('product-logos').innerHTML = data;
    };
    React.useEffect(() => {
        loadData();
    }, []);
    return <div className="App"></div>;
}

export default App;
