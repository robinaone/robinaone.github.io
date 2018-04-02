import category

class Student:

    def __init__(self, name):
        self.name = name
        self.categories = []

    def addCategory(self, categoryName):
        newCat = category.Category(categoryName)
        self.categories.append(newCat)

    def categoriesAreValid(self):
        total = 0
        for category in self.categories:
            total += category.weight
        return total == 100

    def finalAverage(self):
        final = 0
        for category in self.categories:
            final += category.categoryAverage()
        return final
