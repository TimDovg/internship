fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(userData => userData.json())
    .then(({getUsersData}) => {
        if (getUsersData) {
            return fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
        }

        throw 'getUsersData is not true';
    })
    .then(result => result.json())
    .then(console.log)
    .catch(console.log)
;
