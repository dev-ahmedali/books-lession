// const schools = ['Yorktown', 'Washington & Lee', 'Wakefield'];

// const cutSchool = (cut, list) => list.filter(school => school !== cut)
//     console.log( cutSchool('Washington & Lee', schools).join(" * "))

//     console.log(schools.join("\n"))

// const highSchools = schools.map(school => `${school} High School`)

// console.log(highSchools.join('\n'))

// const highSchools = schools.map(school => ({name: school}))

// console.log(highSchools)



// let schools = [
//   { name: 'Yorktown' },
//   { name: 'Stratford' },
//   { name: 'Washington & Lee' },
//   { name: 'Wakefield' },
// ];

// let updateSchools = editName('Stratford', 'HB Woodlawn', schools);

// console.log(updateSchools[1]);
// console.log(schools[1]);


// const editName = (oldName, arr, name) =>
//   arr.map((item) => {
//     if (item.name === oldName) {
//       return {
//         ...item,
//         name,
//       };
//     } else {
//       return item;
//     }
//   });


const schools = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
}

const schoolsArray = Object.keys(schools).map(key => ({
    name: key,
    wins: schools[key]
})) 

console.log(schoolsArray)