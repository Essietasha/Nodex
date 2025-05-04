######### WEEK 6 - PYTHON 
# Python
    # An interpreted, high-level, dynamically-typed, and garbage-collected language. Designed for readability and simplicity, with an emphasis on developer productivity.
        # .py file extension

    # Features:
        # Easy syntax
            # No use of semi-colon at line end. 
            # No need of Parentheses and curly braces.
            # Indentation is really important
            # Column
            # No type definition
            # No longer hardcoding "code hello.c make filename and ./hello.c" in the command line;
                # Run: "code hello.py" "python hello.py"
            # New line ish
            # Don't have to explicitly include standard library.
            # Can do without a main function
            # Consistency with single/double quotes
        # Extensive standard library for various tasks.
        # Supports Object-Oriented(OOP), procedural, and functional programming.

    # To Display Python Code Output in the Browser: Use Flask
        # Run: "pip install flask"

    # Variables and Data Types
        name = "Alice"    # String
        age = 25          # Integer
        cs = 3.14         # Float
        isStudent = True  # Boolean

    
    #Collections:
    range = [1, 2, 3]           # Range
    myList = [1, 2, 3]          # Lists
    myTuple = (1, 2, 3)         # Tuples
    mySet = {1, 2, 3}           # Sets - gets rid of duplicates
    myDico = {'key': 'value'}   #Dictionaries - Key value pairs


    # Input and Output
        # Concatenating Integers and Strings in Python
        userInput = input("What's your name: ")
        print(f"hello, {userInput}")

        x = int(input("X: "))
        y = int(input("Y: "))
        print(x + y)

        # Using cs50 Library
            from cs50 import get_string, get_int, get_float

            userInput = get_string("What's your name: ")
            print(f"hello, {userInput}")

            x = get_int("X: ")
            y = get_int("Y: ")
            print(x + y)

    # Incrementing in python
        counter += 1
        #counter++ is not allowed

    # Truncation: Python does not truncate
        #Print to number of decimal points tho limitations exist
        x = int(input("x: "))
        y = int(input("y: "))

        z = x / y
        print(f"{z:.3}")

    # Conditionals
        x = int(input("X: "))
        y = int(input("Y: "))

        if x < y:
            print("x is less than y")
        elif x > y:
            print("x is greater than y")
        else:
            print("x is equal to y")

        # Use of "or" 'nd "and" as opposed to || 'nd &&
        # Use of "elif not number = 2:" as opposed to else if num != 2:
        lettersOnly = True if input().isalpha() else False        
        # Comparing strings with the double equal operator
            s = input("s: ")
            t = input("t: ")

            if s == t:
                print("same")
            else:
                print("different")

        # Using Lists - The if condition checks whether the user's input matches any value in the list ["y", "yes"].
                      # The in operator allows checking whether the user's input matches any of the items in the list.
            agree = input("Do you agree?").lower()
            if agree in ["y", "yes"] :
                print("Agreed")
            elif agree in ["n", "no"]:
                print("Not agreed")
            else:
                print("Not agreed")
        
    # Capitalization
        word = input("Enter word:")
        capped = word.upper()
        print(f"{capped}")

    # Loops
        #for loops in Python actually can have else statement as well
        for i in range(5):
            print(i)
            print("meow!")
        
        # Print out character by character
        text = input("Text:")
        for t in text:
            print(t)
        
        # Return a list using Split
        text = input("Text:")
        words = text.split() # returns a list of the inputs
        for w in words:
            print(w)

        
        # Line break remover - Loop through a string
            word = input("Enter word: ")
            print("After: ", end="")

            for w in word:
                print(w.upper(), end="")
            print()

        # While loop 
            count = 1
            while count <= 5:
                print(f"Count is {count}")
                count += 1

            # Re-prompting user | Errors | Exceptions
                def getInt(p):
                while True:
                    try:
                        return int(input(p))
                    except ValueError:
                        print("Not an integer") # Get prompted again if a condition is not met
                        pass    # Silently reprompt
                def main():
                    x = getInt("x: ")
                    y = getInt("y: ")
                    print(x + y)

                main()

            # Infinite loop - Then Break out if condition is met
                from cs50 import get_int
                while True:
                    n = get_int("Height: ") # If num is not greater than 0, keep prompting otherwise break
                    if n > 0:
                        break
                for i in range(n):
                    print("#", end="")
                print()

                #print("n" * 4)

    # OOP - Object Oriented Programming
        #Variables and data types can not only have values. They can also have functionality built into them.
        #Functions or method like toupper, tolower etc are built into data types

    # Functions - Define functions with keyword def
        def greet(name):
        return f"Hello, {name}"  # Format String
        print(greet(input("Name: ")))

        # Define own Function | Using Main Function | Accepting parameters
            def main():
            meow(3)

            def meow(n):
                for i in range(n):
                    print("meow")

            main()

    #Error Handling | Exceptions
        try:
        num = int(input("Enter a number: "))
        print(10 / num)
        except ZeroDivisionError:
            print("Cannot divide by zero.")
        except ValueError:
            print("Invalid input.")

    # Mario
        from cs50 import get_int
        while True:
            n = get_int("Height: ") # If num is not greater than 0, keep prompting otherwise break
            if n > 0:
                break
        for i in range(n):
            for j in range(n):
                print("#", end="")
            print()
        #Or
        for i in range(3):
            print("#" * 3)

    # List | Get the lenght or average of a list

        num = []
        num = list()
        #
        scores = [80, 100, 100]
        average = sum(scores) / len(scores)
        print(f"{average}")from cs50 import get_int

        #List | Loop
        scores = []
        for i in range(3):
            scor = get_int("Score: ")
            scores.append(scor)
            #scores = scores + [scor]
        average = sum(scores) / len(scores)
        print(f"{average}")

        # Attach / Join a list to another
            nums = [1, 2, 3, 4, 5]
            nums[len(nums):] = [5]
            print(nums)

            # OR
            num = [1, 2, 3, 4, 5]
            newnum = [6, 7, 8, 9, 10]
            num[len(num):] = newnum
            print(num)

    # Phonebook
    # for loops in Python actually can have else statement as well
        names = ["Carter", "Dave", "John"]
        name = input("Name: ")
        for i in names:
            if name == i:
                print("Found")
                break
        else:
            print("Not found")

        # OR Search the list; without looping
        if name in names:
        print("Found")

    # Dictionary 
        myDict = {} # Or
        myDict = dict()

        # Dictionary | Key Value Pairs
            people = [
            {"name": "Carter","number": "+23455556666"},
            {"name": "Dave","number": "+23488886666"},
            {"name": "John","number": "+23466666666"}
            ]

            name = input("Name: ")
            for n in people:
                if n["name"] == name:
                    num = n["number"]
                    print(f"Found {num}")
                    #print(f"Found {i['number']}") Care: Single/Double quotes
                    break
            else:
                print("Not found")


        # Dictionary | Single Key Value Pair         
            people = {
                "Carter": "+23455556666",
                "Dave": "+23488886666",
                "John": "+23466666666"
            }
            name = input("Name: ")

            if name in people:
                num = people[name]
                print(f"Found {num}")
            else:
                print("Not found")

            # Change data
            people["Carter"] = "23444444444"
            # Condition
            if people["Carter"] > 12
                # do something
            # Add new key
            people["Sam"] = "23455889900"


        # Iterate over the value of a List and maybe the key itself
            pizzas = {
                "cheese": 9,
                "pepperoni": 10,
                "vegetables": 11,
                "buffalo chicken": 12
            }
            for pie, price in pizzas.items():
                print(price)
                print(pie, price)
                print("A whole {} costs ${}".format(pie, price))
                print("A whole " + pie + "c pizza costs $" + str(price).format(pie, price))


        # Books
            books = []
            # Add three books to shelf
            for i in range(3):
                book = dict()
                book["author"] = input("Enter an author: ")
                book["title"] = input("Enter a title: ")
                books.append(book)

            #Print list of books
            for b in books:
                print(b)


    # Tuples - good for associating collections of data.
        presidents = [
            ("George Washington", 1789),
            ("John Adams", 1797),
            ("Thomas Jeff", 1801),
            ("Alex Brad", 1809),
            ("James Madison", 1900),
        ]

        for pres, presYear in presidents:
            print("In {1}, {0} took office".format(pres, presYear))
            print(f"{pres} {presYear}")

    # FILE
        # LIBRARY AND MODULES | Raeding CSV files
        import csv
        books = []
        with open("books.csv") as myFile: # Be sure to have a file named books.csv in your folder
            text = myFile.read()    # Read entire file
            print(text)

        # Make a list of dictionary
            import csv
            books = [] # A list
            with open("books.csv") as file:
                reader = csv.DictReader(file) #Iterates over the lines one after the other and prints
                for row in reader:
                    print(row)
                    rows = row["language"] # Read the languages column in each row
                    print(rows)  
                    books.append(rows) # Append the rows to the list to make a dictionary, i.e key-value pairs now using the header/metadata and values now. {'Timestamp': '12/10/2024 12:34:06', 'Language':'C'}

            # Print books
            for row in books:
                    print(row)

        # Read and skip the header row            
            import csv
            with open("favorite.csv", "r") as file:
                reader = csv.reader(file)
                next(reader) #Read from the next line; skip the header/metadata
                for row in reader:
                    print(row[2])

        # Read Data | Calculate Data | subjects
            import csv
            with open("subjects.csv", "r") as file:
                reader = csv.DictReader(file)
                English, Literature, Math, Science = 0, 0, 0, 0

                for row in reader:
                    favSub = row["subject"]
                    if favSub == "English":
                        English += 1
                    elif favSub == "Literature":
                        Literature += 1
                    elif favSub == "Math":
                        Math += 1
                    elif favSub == "Science":
                        Science += 1
            print(f"English: {English}")
            print(f"Literature: {Literature}")
            print(f"Math: {Math}")
            print(f"Science: {Science}")

        # OR | Better
            import csv
            with open("subjects.csv", "r") as file:
                reader = csv.DictReader(file)
                counts = {} # Set count to an empty dictionary

                for row in reader:
                    favSub = row["subject"]
                    if favSub in counts:
                        counts[favSub] += 1
                    else:
                        counts[favSub] = 1
            # for favSub in sorted(counts):       # Sort a dictionary by Key
            for favSub in sorted(counts, key=counts.get, reverse=True): # Sort a dictionary by Value | Reverse too
                print(f"{favSub} : {counts[favSub]}")

        # OR Use the Counter Object from Collections
            import csv

            from collections import Counter

            with open("subjects.csv", "r") as file:
                reader = csv.DictReader(file)
                counts = Counter()  # An object for counting

                for row in reader:
                    favSub = row["subject"]
                    counts[favSub] += 1

            for favSub in sorted(counts, key=counts.get, reverse=True): # Sort a dictionary by Value | Reverse too
                print(f"{favSub} : {counts[favSub]}")
            for favSub, count in counts.mostcommon():
                print(f"{favSub}: {count}")

        # Or make it more interactive
            import csv
            from collections import Counter
            with open("subjects.csv", "r") as file:
                reader = csv.DictReader(file)
                counts = Counter()

                for row in reader:
                    favSub = row["subject"]
                    counts[favSub] += 1

            fav = input("Favorite: ")
            print(f"{fav} : {counts[fav]}")


    # More methods
        text = input("Name: ").strip() # Remove beginning and end whitespace characters.
        print(text)

        text = input("Name: ")
        text = text.capitalize() # Capitalize only first capital
        print(text)

        # Index of list.  Access the particular alement in a list. Cahnge where our list starts
        text = input("Text:")
        words = text.split()
        print(words[1]) # Index 1 only
        print(words[2:]) # Index 2 to the end
        print(words[1:3]) # Index 1 - 3

    # Sys - System Related Functionality | Command line argument
        from sys import argv

        if len(argv) == 2: # Note: Command python is ignored
            print(f"Hello, {argv[1]}")
        else:
            print("Hello world")
        
        #ERROR
        import sys

        if len(sys.argv != 2):
            print("Missing Command-line argument!")
            sys.exit(1)
        print(f"Hello {sys.argv[1]}")
        sys.exit(0)

    # PIP: A command that allows us to install more functionality from a third party into my our code space or programming environment
        #To install a library, cd out of any directory, Run: "pip install cowsay" for instance or "pip install qrcode" or "pip install facerecognition"
        # Cowsay:
            import cowsay
            name = input("Name: ")
            cowsay.cow(f"Hello {name}")
            # Run "cd moo" "python moo.py"

        # QR Code
            import qrcode
            img = qrcode.make("https://youtu.be/xvFZjo5PgG0") #Video URL
            img.save("myqr.png", "PNG")   #Create a filename and save it in PNG format
            # Run "cd qr" "python qr.py"
            # Check created file in VSC folder and open
            # Scan


    # Objects and Classes in Programming
        # Class: A class is a blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that the objects will have.
            # Defines what an object should look like and do. A method is a behavior the objects can perform.
        # Object: A specific instance of a class, created using the class blueprint.
            # Objects bundle data (attributes) and methods (functions) together.
            # An object can be referred to as a collection of related data and functionality, often organized in key-value pairs.
            # An object is a structure used to group together:
            #     Data (also called attributes or properties).
            #     Functions (also called methods) that operate on that data.
        # *Think of a class as a cookie cutter (template) and objects as the cookies made using that cutter. All cookies share the same shape (template), but each cookie can have different decorations or toppings (data).

        # Constructor:  is a special function in a class that automatically runs when you create an object from the class. In Python, the constructor is the __init__ method. The purpose of a constructor is to initialize the object's data.

        # Objects in Python
            #1 Car
            class Car:  # Class definition
                def __init__(self, make, model):
                    self.make = make  # Attribute
                    self.model = model  # Attribute

                def drive(self):  # Method
                    return f"The {self.make} {self.model} is driving!"
            # Creating objects
            car1 = Car("Toyota", "Corolla")
            car2 = Car("Honda", "Civic")
            # Using objects
            print(car1.drive())
            print(car2.drive())

            #2 Student
            class Student:
            def __init__(self, name, age, id):
                self.name = name
                self.age = age
                self.id = id

            def changeID(self, id):
                self.id = id

            def printInfo(self):
                print(self.name, self.age, self.id)

            jane = Student("Jane", 20, "ACU2020085")
            jane.printInfo()
            jane.changeID("ACU2020088")
            jane.printInfo()

        # Objects in JavaScript: In Js, objects are more versatile and not strictly tied to classes. They can be thought of as collections of key-value pairs, and you don't always need a class to create them.
        # Creating Objects in JavaScript:
            # Object Literal (Simplest Form): You can create an object directly using curly braces {}.
            # Using a Constructor Function: JavaScript doesn't always need classes for objects. Constructor functions were the older way to create object templates.
            # Using ES6 Classes: Modern JavaScript introduces classes, which look similar to Python classes.
    
# ASSIGNMENT: Mario More
    from cs50 import get_int

    # Height should persist if the user input does not meet my requirement
    while True:
        height = get_int("Height: ")
        # If user input meets requirement, break out of loop
        # Since i'm using cs50 library, i can omit valueError as it's been handled by get int
        if height > 0 and height <= 8:
            break

    # Loop through each row in my pyramid
    for i in range(height):
        # Calulate the number of spaces needed to be aligned
        leftAlignment = (height - (i + 1))  # i + 1 adjusts i to 1 based row index
        # [" " * gap]       - In order to align the left pyramid, add spaces.
        # ["#" * (i + 1)]   - prints the left hashes; with each row, the number increases.
        # ["  " ]           - add double gap between the left and right pyramid
        # ["#" * (i + 1)]   - prints the right hashes; with each row, the number increases.
        print(" " * leftAlignment + "#" * (i + 1) + "  " + "#" * (i + 1))

    # CASH
        from cs50 import get_float

        def main():
            calculate()

        def calculate():
            while True:
                # Ask the user for a positive integer
                dollarsOwed = get_float("Amount: ")
                if dollarsOwed >= 0:
                    break

            # Initially convert the dollar to cents and then int for division purposes
            # An amount in dollara is turned to cents by multiplying the amount by 100
            # E.g 9.7 dollars = 9.7 * 100 which equals (970 Cents)
            dollarsToCents = dollarsOwed  * 100
            cents = round(dollarsToCents)

            # Define my coinnvalues in cents
            quarters = 25
            dimes = 10
            nickels = 5
            pennies = 1

            # Calculate
            # Divide the cents by quarter, dime, nickel and penny.
            # Add the result of the division to the coinToBePaid variable
            # Then update the cents with the remainder value in order to proceed with other calculations
            # Repeat till last penny
            coinsToBePaid = 0
            coinsToBePaid += cents // quarters
            cents %= quarters

            coinsToBePaid += cents // dimes
            cents %= dimes

            coinsToBePaid += cents // nickels
            cents %= nickels

            coinsToBePaid += cents // pennies
            cents %= pennies

            print(coinsToBePaid)

        main()

    # READABILITY
        from cs50 import get_string

        # Main Function
        def main():
            text = read()                                # Call read function to get text
            numOfLetters = countNumOfLetters(text)       # count number of letters
            numOfWords = countNumOfWords(text)           # count number of words
            numOfSentences = countNumOfSentences(text)   # count number of sentences

            # Formula = 0.0588 * L - 0.296 * S - 15.8
            LETTERS = (numOfLetters / numOfWords) * 100
            SENTENCES = (numOfSentences / numOfWords) * 100
            output = 0.0588 * LETTERS - 0.296 * SENTENCES - 15.8
            grade = round(output)   # Round the result of the calculation

            # Display Grade based on calculations
            if grade < 1:
                print("Before Grade 1")
            elif grade > 1 and grade <= 15:
                print(f"Grade {grade}")
            else:
                print("Grade 16+")
        # Get user's text


        def read():
            return get_string("Text: ")


        def countNumOfLetters(text):
            countletters = 0            # Set my counter to zero
            for l in text:
                if l.isalpha():         # If character is an alphabeth
                    countletters += 1   # Keep track using the counter variable i defined
            return countletters         # Function should return the counted number of letters.


        def countNumOfWords(text):
            txtL = text.split()         # Use the split function to return a list of the texts
            return len(txtL)            # Get the length of the items in the list


        def countNumOfSentences(text):
            countsentences = 0          # Set my counter to zero
            marks = ['.', '!', '?']     # use a mark variable to define the character i want to check
            for x in text:
                if x in marks:          # If we find the character while looping
                    countsentences += 1 # Keep track using the counter variable i defined
            return countsentences       # My function should return the counted number of sentences.


        # Call main function
        main()


    # DNA
        import csv
        import sys

        # Task: Take a sequence of DNA and a CSV file containing STR counts for a list of individuals and then output to whom theDNA belongs.
        def main():
            # TODO: Check for command-line usage
            # If not equal to three arguments, exit program
            if len(sys.argv) != 3:
                print("Usage: python dna.py csvfile textfile")
                sys.exit(1)

            # Read database file into a variable
            # Open csv file based on argv at index 2
            with open(sys.argv[1]) as csvFile:
                csvReader = csv.DictReader(csvFile)
                fieldNames = csvReader.fieldnames

                rowList = []    # Set my list of dictionary for all rows in the csvReader
                for eachr in csvReader: # For each row
                    rowList.append(eachr)   # Add each row to the list


            # Read DNA sequence file into a variable
            # Open text file
            with open(sys.argv[2], "r") as textfile:
                # Read text file
                dnaSequence = textfile.read()

            # Find longest match of each STR in DNA sequence
            strCounter = {} # Set dict to save str counts
            strSequence = fieldNames[1:]  # Don't read the name column/field
            for eachStrSeq in strSequence:
                # Using the lm function, calculate and store the longest match count for the str in the dictionary.
                strCounter[eachStrSeq] = longest_match(dnaSequence, eachStrSeq)

            # TODO: Check database for matching profiles
            for theRow in rowList:
                isMatch = True
                for eachStrSeq in strSequence:
                    if int(theRow[eachStrSeq]) != strCounter[eachStrSeq]:
                        isMatch = False
                        break
                if isMatch:
                    print(theRow["name"])
                    return
            print("No match")

        def longest_match(sequence, subsequence):
            """Returns length of longest run of subsequence in sequence."""

            # Initialize variables
            longest_run = 0
            subsequence_length = len(subsequence)
            sequence_length = len(sequence)

            # Check each character in sequence for most consecutive runs of subsequence
            for i in range(sequence_length):

                # Initialize count of consecutive runs
                count = 0

                # Check for a subsequence match in a "substring" (a subset of characters) within sequence
                # If a match, move substring to next potential match in sequence
                # Continue moving substring and checking for matches until out of consecutive matches
                while True:

                    # Adjust substring start and end
                    start = i + count * subsequence_length
                    end = start + subsequence_length

                    # If there is a match in the substring
                    if sequence[start:end] == subsequence:
                        count += 1

                    # If there is no match in the substring
                    else:
                        break

                # Update most consecutive matches found
                longest_run = max(longest_run, count)

            # After checking for runs at each character in seqeuence, return longest run found
            return longest_run


        main()

        
##########WEEK 7: SQL 
# A Python program that queries the database(pulls data from the database) for a value and then prints something out.
    from cs50 import SQL

    # To Open a db file in python
    db = SQL("sqlite:///mydb.db")

    fav = input("Favorite: ")

    # This will return a temporary table i can save in a variable called row
    rows = db.execute("SELECT COUNT(*) AS n FROM mydbtable WHERE language = ?", fav)

    row = rows[0]
    print(rows)
    print(row)
    print(row["n"])
