import repository

myZoo = repository.getZooTopia()
visitorName = raw_input('Welcome to ' + str(myZoo.name) + '.  What is your name?')

while myZoo.isActive:
  print ''
  print 'Your location is ' + str(myZoo.currentExhibit.name)
  if myZoo.currentExhibit.animalHere == None:
    print "  There aren't any animals here, except a cricket or two."
  else:
    print '  There are animals here!'
    print '    Ask:'
    print '      What Kind?'
    print '      What do they sound like?'
    print '      What do they eat?'
    print '      What is their political orientation?'
  print '  You can go:'
  for direction in myZoo.currentExhibit.neighbors:
    neighborID = myZoo.currentExhibit.neighbors[direction]
    print '   ' + direction + ' to ' + myZoo.allExhibits[neighborID].name
  if myZoo.currentExhibit.hasExit:
    print '   Exit'
  locationIsTheSame = True
  while locationIsTheSame:
    choice = raw_input('What do you want to do ' + str(visitorName) + '?').lower()
    if choice == 'exit' and myZoo.currentExhibit.hasExit:
      myZoo.leave()
      locationIsTheSame = False
    if choice in myZoo.currentExhibit.neighbors.keys():
      newExhibitID = myZoo.currentExhibit.neighbors[choice]
      myZoo.goToExhibit(newExhibitID)
      locationIsTheSame = False
    if choice == 'whatkind':
      print myZoo.currentExhibit.animalHere.whatKindOfAnimal()
    if choice == 'soundlike':
      print myZoo.currentExhibit.animalHere.whatDoesItSoundLike()
    if choice == 'eat':
      print myZoo.currentExhibit.animalHere.whatDoTheyEat()
    if choice == 'politicalorientation':
      print myZoo.currentExhibit.animalHere.whatPoliticalOrientation()


print 'Goodbye ' + str(visitorName) + '.  Stay safe on the bus!'
