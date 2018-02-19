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
  document.getElementById('studentNumber').innerHTML = "";
  studentNumber.innerHTML = action.value;
}

function createInfo(student) {

}

function makeCourseRows(student) {
  document.getElementById('reportcard').className = 'hidden';
  document.getElementById('courseRows').innerHTML = "";
  student.courses.forEach(function(course) {
    row = document.createElement('tr');
    accum = 0;
    document.getElementById('studentImage').src = student.avatar;
    document.getElementById('name').innerHTML = student.lastName + ", " + student.firstName;
    document.getElementById('addr1').innerHTML = student.streetAddress;
    document.getElementById('addr2').innerHTML = student.city + ", " + student.state + " " + student.zipCode;
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
  });
}

function createTD(content) {
  cell = document.createElement('td');
  cell.innerHTML = content;
  return cell;
}
