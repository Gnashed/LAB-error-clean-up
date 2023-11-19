const students = [];
const voldysArmy = []; // starts as an empty array

// ********** LOGIC  ********** //

const houses = [
  {
    house: 'gryffindor',
    crest:
      'https://static.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png'
  },
  {
    house: 'slytherin',
    crest:
      'https://static.wikia.nocookie.net/pottermore/images/4/45/Slytherin_Crest.png'
  },
  {
    house: 'hufflepuff',
    crest:
      'https://static.wikia.nocookie.net/pottermore/images/5/5e/Hufflepuff_crest.png'
  },
  {
    house: 'ravenclaw',
    crest:
      'https://static.wikia.nocookie.net/pottermore/images/4/4f/Ravenclaw_crest.png'
  }
];

// sorts student to a house and then place them in the students array
const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];

  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');

    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest
    });

    student.value = ''; // reset value of input
    studentsOnDom('#students', students);
  }
};
