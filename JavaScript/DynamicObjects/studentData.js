function chooseStudent() {
  students.forEach(function(student) {
    option = document.createElement('option');
    option.value = student.idNumber;
    option.innerHTML = student.lastName + ", " + student.firstName;
    document.getElementById('dropdown').appendChild(option);
  });
}

function retrieveId() {
  choice = document.getElementById('dropdown');
  action = choice[choice.selectedIndex];
  makeCourseRows(students[action.index-1]);
  reportcard.classList.remove("hidden");
}

function makeCourseRows(student) {
  document.getElementById('courseRows').innerHTML = "";
  student.courses.forEach(function(course) {
    row = document.createElement('tr');
    accum = 0;
    row.appendChild(createTD(course.courseName));
    row.appendChild(createTD(course.instructor));
    row.appendChild(createTD(course.termGrades[0]));
    row.appendChild(createTD(course.termGrades[1]));
    row.appendChild(createTD(course.termGrades[2]));
    row.appendChild(createTD(course.termGrades[3]));
    for (i=0; i < course.termGrades.length; i++) {
      accum += course.termGrades[i];
    }
    row.appendChild(createTD(Math.ceil(accum/course.termGrades.length)));
    document.getElementById('courseRows').appendChild(row);
    //makeBottomID();
  });
}

function makeBottomID(student) {
  document.getElementById('studentNumber').innerHTML = "";
  studentID = document.createElement('p');
  studentID.innerHTML = students.idNumber;
  document.getElementById('studentNumber').appendChild(studentID);
}

function createTD(content) {
  cell = document.createElement('td');
  cell.innerHTML = content;
  return cell;
}
