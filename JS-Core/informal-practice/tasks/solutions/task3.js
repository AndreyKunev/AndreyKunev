// Grouping by property
export default function (data) {
  // your code starts here
  const groupedObj = {};
    const arrName = data.dataProp;
    const groupCriteria = data.groupByProp;

    data[arrName].filter(el => {
        const newProp = el[groupCriteria];
        groupedObj[newProp] = data[arrName].filter(innerEl => innerEl[groupCriteria] === newProp);
    });

    return groupedObj;
  // your code ends here
}
