const delay = time => new Promise(resolve => setTimeout(resolve, time, time));

delay(1000).then(value => console.log(`Done with ${value}`));