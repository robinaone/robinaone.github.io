import student
#create 3 instances of Student class, with different names
#create 2 instances of Course, with different names and assign students

students = []
students.append(student.Student('Bill'))
students.append(student.Student('Bob'))
students.append(student.Student('Jeremy'))

students[0].recordGrade(100)
students[1].recordGrade(69)
students[2].recordGrade(88)

students[0].recordGrade(95)
students[1].recordGrade(49)
students[2].recordGrade(72)

for student in students:
    print('Student: ' + student.firstName + ' has ' + str(len(student.grades)) + ' missing color sheets, with an average of ' + str(student.average()) + '% missing color sheets.')
