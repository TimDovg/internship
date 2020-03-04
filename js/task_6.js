const getResolvedPromise = value => Promise.resolve(value)
    .then(value => {
        if (value > 300) {
            throw new Error(`error: value > 300`);
        }

        return value;
    })
    .catch(err => console.log(err))
    .finally(() => console.log(`Promise done`))
;
