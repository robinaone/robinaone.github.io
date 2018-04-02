import bowlingGame

def showScores():
    print("")
    print(playerName + "'s Score:\nFrame 1 | Frame 2 | Frame 3 | Frame 4 | Frame 5 | Frame 6 | Frame 7 | Frame 8 | Frame 9 | Frame 10 | Total")
    print(f1r1 + ", " + f1r2)

playerName = raw_input("Please enter the player's name: ")
print("Enter scores, or type score to see where you're at!")

keepGoing = True
while keepGoing == True:
    if (raw_input.lower() == "score"):
        showScores()
    elif (raw_input < 10):
        print("Oops.. only 10 pins allowed in any frame. Try again.")
    f1r1 = raw_input("Frame 1, Roll 1 how many pins? ")
    f1r2 = raw_input("Frame 1, Roll 2 how many pins? ")
    f2r1 = raw_input("Frame 2, Roll 1 how mnay pins? ")
    f2r2 = raw_input("Frame 2, Roll 2 how mnay pins? ")
    f3r1 = raw_input("Frame 3, Roll 1 how mnay pins? ")
    f3r2 = raw_input("Frame 3, Roll 2 how mnay pins? ")
    f4r1 = raw_input("Frame 4, Roll 1 how mnay pins? ")
    f4r2 = raw_input("Frame 4, Roll 2 how mnay pins? ")
    f5r1 = raw_input("Frame 5, Roll 1 how mnay pins? ")
    f5r2 = raw_input("Frame 5, Roll 2 how mnay pins? ")
    f6r1 = raw_input("Frame 6, Roll 1 how mnay pins? ")
    f6r2 = raw_input("Frame 6, Roll 2 how mnay pins? ")
    f7r1 = raw_input("Frame 7, Roll 1 how mnay pins? ")
    f7r2 = raw_input("Frame 7, Roll 2 how mnay pins? ")
    f8r1 = raw_input("Frame 8, Roll 1 how mnay pins? ")
    f8r2 = raw_input("Frame 8, Roll 2 how mnay pins? ")
    f9r1 = raw_input("Frame 9, Roll 1 how mnay pins? ")
    f9r2 = raw_input("Frame 9, Roll 2 how mnay pins? ")
    f10r1 = raw_input("Frame 10, Roll 1 how mnay pins? ")
    f10r2 = raw_input("Frame 10, Roll 2 how mnay pins? ")
    keepGoing = False

print score
