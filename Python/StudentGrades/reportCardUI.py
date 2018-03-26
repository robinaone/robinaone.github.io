import student

studentName = raw_input("Enter the Student's Name: ")

# Ask for the student's Name
# Create a student object
theStudent = student.Student(studentName)
#print out the student's Name
print theStudent.name
