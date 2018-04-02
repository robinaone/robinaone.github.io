import assignment

class Category:

    def __init__(self, categoryName):
        self.name = categoryName
        self.weight = 0
        self.assignments = []

    def setWeight(self, percentage):
        self.weight = int(percentage)

    def addAssignment(self, assignmentName, grade):
        newAssignment = assignment.Assignment(assignmentName, grade)
        self.assignments.append(newAssignment)

    def categoryAverage(self):
        if len(self.assignments) == 0:
            return (self.weight)
        sumAssignments = 0
        for assignment in self.assignments:
            sumAssignments += assignment.grade
        return (sumAssignments / len(self.assignments)) * (self.weight / 100.0)
