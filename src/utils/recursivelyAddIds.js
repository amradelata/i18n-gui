function recursivelyAddIds(data) {
    for (let key in data) {
        if (typeof data[key] === 'object') {
            data[key]['id'] = Math.floor(Math.random() * 10000); // random id
            recursivelyAddIds(data[key]);
        }
    }
    return data;
}

export default recursivelyAddIds;
