const getResolvedPromise = value => Promise.resolve(value)
    .then(value => {
        if (value > 300) {
            console.log(new Error(`error: value > 300`));
        }

        console.log(`Promise done`);

        return value;
    })
;
