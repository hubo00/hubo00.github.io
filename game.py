import random

# Initalises values for minimum and maximum to be between 1 and 100
min = 1
max = 100

finished = False

# Initalises a counter for keeping track of attempts
attempts = 0

while finished != True:

    # Computer's choice is a random value between the min and max
    comp_choice = random.randint(min, max)

    # Asks the user if the random number is desired
    print("Is {} your number?".format(comp_choice))
    answer = input("y - Yes\nh - Higher\nl - Lower\n")
    attempts += 1

    # If the number is too low, the program sets the new minimum value to be the choice + 1
    if answer == "h":
        print("\nMy guess of {} was too low, setting new min value to {}".format(comp_choice, comp_choice))
        min = comp_choice + 1

    # If the number is too high, the program sets the new maximum value to be the choice - 1
    elif answer == "l":
        print("\nMy guess of {} was too high, setting new max value to {}".format(comp_choice, comp_choice))
        max = comp_choice - 1
        
    # If the number is correct, the program prints a victory message and shuts down
    elif answer == "y":
        print("Yay I got it in {} tries!".format(attempts))
        finished = True