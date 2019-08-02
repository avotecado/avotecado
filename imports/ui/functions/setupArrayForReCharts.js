export function setupArrayForReCharts(count, value, data) {
    count[value] = (count[value] || 0) + 1;
    let dataToUpdate = data.find(element => element.name === value);
    if (dataToUpdate) {
        dataToUpdate.value = count[value];
    } else {
        data.push({name: value, value: count[value]});
    }
}