const getResolvedPromise = url => {
    fetch(url)
        .then(({status}) => {
            if (status > 300) {
                console.log(new Error(`error: status > 300`));
            }

            console.log(`Promise done`);
    })
    ;
};
