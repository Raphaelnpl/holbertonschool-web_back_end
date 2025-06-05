const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    const students = lines.slice(1);

    const fields = {};
    let total = 0;

    students.forEach((line) => {
      const parts = line.split(',');
      if (parts.length >= 4) {
        const firstname = parts[0];
        const field = parts[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
        total++;
      }
    });

    console.log(`Number of students: ${total}`);
    for (const field in fields) {
      const names = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${names}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
