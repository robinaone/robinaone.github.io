import student

def showStudent(aStudent):
    print('')
    print('Student Name: ' + aStudent.name)
    print('')
    for category in aStudent.categories:
        print(category.name + '(' + str(category.weight) + '%)')
        for assignment in category.assignments:
            print('  ' + assignment.name + ': ' + str(assignment.grade))
        print('')
    print('Final Course Grade: ' + str(theStudent.finalAverage()))


studentName = raw_input("Enter the Student's Name: ")
theStudent = student.Student(studentName)

print('')
keepGoing = True;
while keepGoing:
    categoryName = raw_input("Please Enter a grade catgeory (DONE): ")
    if (categoryName.lower() == 'done'):
        keepGoing = False
    else:
        theStudent.addCategory(categoryName)

while not theStudent.categoriesAreValid():
    print('')
    print('Enter weights for categories (must add to 100%)')
    for category in theStudent.categories:
        percentage = raw_input('Please enter the % weight for ' + category.name + ': ')
        category.setWeight(percentage)

keepGoing = True
while keepGoing:
    print('')
    for index, category in enumerate(theStudent.categories):
        print(str(index + 1) + '. Enter: ' + category.name)
    print('R. See the Report Card')
    print('Q. Quit')
    option = raw_input('Choose an Option: ').lower()
    if option == 'q':
        keepGoing = False
    elif option == 'r':
        showStudent(theStudent)
    else:
        catNumber = int(option)
        if catNumber <= len(theStudent.categories):
            assignmentName = raw_input("Please enter the assignment Name: ")
            grade = raw_input("What grade was earned: ")
            theStudent.categories[catNumber-1].addAssignment(assignmentName, grade)



showStudent(theStudent)
