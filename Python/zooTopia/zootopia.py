class ZooTopia:

  def __init__(self, name, allExhibits):
    self.name = name
    self.isActive = True
    self.allExhibits = allExhibits
    self.currentExhibit = allExhibits['one']

  def leave(self):
    self.isActive = False

  def goToExhibit(self, exhibitID):
    self.currentExhibit = self.allExhibits[exhibitID]

class Exhibit:

  def __init__(self, exhibitID, name, neighbors, animalHere, hasExit):
    self.exhibitID = exhibitID
    self.name = name
    self.neighbors = neighbors
    self.hasExit = hasExit
    self.animalHere = animalHere


class Animal:

  def __init__(self, kind, sounds, food, politicalOrientation):
    self.kind = kind
    self.sounds = sounds
    self.food = food
    self.politicalOrientation = politicalOrientation

  def whatKindOfAnimal(self):
    return self.kind + "s tend to live here."

  def whatDoesItSoundLike(self):
    return "The " + self.kind + " sounds like " + self.sounds + "."

  def whatDoTheyEat(self):
    return "The " + self.kind + "likes to eat " + self.food + "."

  def whatPoliticalOrientation(self):
    return "The " + self.kind + " is a registered member of the " + self.politicalOrientation + "."
    
