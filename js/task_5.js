const url = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];

url.reduce((accum, url) => {
            return accum
                .then(arr => fetch(url)
                    .then(res => res.json())
                    .then(obj => {
                        arr.push(obj);
                        return arr;
                    })
                )
        }, Promise.resolve([]))
        .then(console.log);
