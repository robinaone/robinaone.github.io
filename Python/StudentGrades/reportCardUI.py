import student
import category

def inputCategory():
    print("")
    keepGoing = True;
    while keepGoing:
        categoryName = raw_input("Please enter a grade category (DONE): ")
        if (categoryName.lower() == 'done'):
            keepGoing = False;
        else:
            theStudent.addCategory(categoryName)

def setWeights():
    while not theStudent.categoriesAreValid():
        print("")
        for category in theStudent.categories:
            percentage = raw_input("Please enter the % weight for " + category.name + ": ")
            category.setWeight(percentage)

def showStudent(aStudent):
    print("")
    print("Enter weights for categories (must equal 100%):")
    print("Student Name: " + aStudent.name)
    for category in aStudent.categories:
        print("Category: " + category.name + ", Weight: " + str(category.weight) + "%")

studentName = raw_input("Enter the Student's Name: ")
theStudent = student.Student(studentName)
inputCategory()
setWeights()
showStudent(theStudent)

keepGoing = True
while keepGoing:
    print("")
    for index, category in enumerate(theStudent.categories):
        print(str(index) + ". Enter: " + category.name)
    print("R. See the Report Card")
    print("Q. Quit")
    option = raw_input("Choose an option: ")
    if option.lower == "q":
        keepGoing = False
    #else:
        #do the option!
