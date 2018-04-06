import zootopia

def getZooTopia():
  return zootopia.ZooTopia('ZooTopia', getAllExhibits())


def getAllExhibits():
  allExhibits = {}
  allExhibits[one().exhibitID] = one()
  allExhibits[two().exhibitID] = two()
  allExhibits[three().exhibitID] = three()
  allExhibits[four().exhibitID] = four()
  allExhibits[five().exhibitID] = five()
  allExhibits[six().exhibitID] = six()
  allExhibits[seven().exhibitID] = seven()
  allExhibits[eight().exhibitID] = eight()
  return  allExhibits


def one():
  neighbors = {}
  neighbors['s'] = 'two'
  return zootopia.Exhibit('one', "The Bus to ZooTopia!", neighbors, None, True)

def two():
  neighbors = {}
  neighbors['s'] = 'four'
  neighbors['sw'] = 'three'
  neighbors['se'] = 'five'
  theAnimal = zootopia.Animal("Deer", "an annoyed goat", "corn", "Republican Party")
  return zootopia.Exhibit('two', "The Meadowlands", neighbors, theAnimal, True)

def three():
  neighbors = {}
  neighbors['s'] = 'seven'
  neighbors['se'] = 'four'
  neighbors['ne'] = 'two'
  theAnimal = zootopia.Animal("Sloth", "the fastest animal alive", "human souls", "Independent Party (Homeschooler)")
  return zootopia.Exhibit('three', "Canal District", neighbors, theAnimal, False)

def four():
  neighbors = {}
  neighbors['n'] = 'two'
  neighbors['s'] = 'eight'
  neighbors['e'] = 'five'
  neighbors['nw'] = 'three'
  theAnimal = zootopia.Animal("Panther", "an enraged kitten", "lemurs", "Socialist Party")
  return zootopia.Exhibit('four', "Rainforest District", neighbors, theAnimal, False)

def five():
  neighbors = {}
  neighbors['s'] = 'six'
  neighbors['w'] = 'four'
  neighbors['nw'] = 'two'
  theAnimal = zootopia.Animal("Polar Bear", "a Russian powerlifter", "protein shakes", "Wannabe Social Democrats Party (#FeelTheBern)")
  return zootopia.Exhibit('five', "Tundratown", neighbors, theAnimal, False)

def six():
  neighbors = {}
  neighbors['w'] = 'eight'
  neighbors['sw'] = '7'
  neighbors['n'] = 'five'
  theAnimal = zootopia.Animal("Camel", "an even more annoyed, humpy goat", "water and sand", "Camels United Liberation Front (It's only a party when the Man gets off our humps!)")
  return zootopia.Exhibit('six', "Sahara Square", neighbors, theAnimal, False)

def seven():
  neighbors = {}
  neighbors['n'] = 'three'
  neighbors['ne'] = 'eight'
  neighbors['e'] = 'six'
  theAnimal = zootopia.Animal("Koala", "a hungry Koala", "Eucalyptus!!!", "Koalican Party")
  return zootopia.Exhibit('seven', "Savanna Central", neighbors, theAnimal, False)

def eight():
  neighbors = {}
  neighbors['n'] = 'four'
  neighbors['se'] = 'seven'
  neighbors['e'] = 'six'
  theAnimal = zootopia.Animal("Mayor Lionheart", "an uppity snoot", "fresh rabit", "Republican Party, obviously. Uppity snoot.")
  return zootopia.Exhibit('eight', "Downtown", neighbors, theAnimal, False)
