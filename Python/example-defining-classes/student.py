class Student:

    school = 'Comal'

    def __init__(self, firstName):
        self.firstName = firstName
        self.grades = []

    def recordGrade(self, grade):
        self.grades.append(grade)

    def average(self):
        return sum(self.grades) / float(len(self.grades))
