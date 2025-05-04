/*COMPUTER SCIENCE
CS50 - Harvard University's Introduction to the Intellectual Enterprises of Computer Science and the Art of Programming.

Information representation
Binary digits; Bit - 0 or 1.
Unary numbers

In Interpreting letters, digits, emojis, colors or whatever in computer, Context matters. Same 0 and 1 will be interpreted in different spheres based on context.
REPRESENTING NUMBERS
BINARY is base-2 system. Uses base 2, consisting of only two digits: 0 and 1. Each position represents powers of 2 E.g 2^0 2^1 2^2 2^3
Note: Any number raised power 0 = 1. Binary is also called “machine code.”
2^0 = 1
100^0 = 1 
Binary number, 11010.
0 x 2^0 = 0
1 x 2^1 = 2
0 x 2^2 = 0
1 x 2^3 = 8
1 x 2^4 = 16
16+8+0+2+0=26
So, 11010 in binary equals 26 in decimal.
1 byte = 8 bits.

DECIMAL SYSTEM: Uses base 10, consisting of ten digits: 0 to 9. Each position represents powers of 10. E.g 10^0 10^1 10^2 10^3
For a decimal number like 345, each digit is multiplied by a power of 10 based on its position:
3 × 10^2 = 300
4 × 10^1 = 40
5 × 10^0 = 5
Adding these up, 300+40+5=345. This base-10 system is what we commonly use in everyday math.
A common unit of measure in digital information is thebyt, which is equal to8 bit.

Here’s a breakdown of common units based on bits and bytes:
1.Bit(b: Smallest unit of data, either 0 or 1.
2.Byte(B: 8 bits (often enough to store a single character, like "A").
3.Kilobyte(KB: 1,024 bytes (8,192 bits).
4.Megabyte(MB: 1,024 KB, or about 1 million bytes.
5.Gigabyte(GB: 1,024 MB, or about 1 billion bytes.
6.Terabyte(TB: 1,024 GB, or about 1 trillion bytes.
These units get larger, with the byte being the foundational measure based on multiples of 8 bits.

REPRESENTING LETTERS AND DIGITS IN COMPUTER
In computers, letters are represented by numbers through encoding systems like ASCII (American Standard Code for Information Interchange) or Unicode. Each character (letter, digit, or symbol) is assigned a unique numeric value, allowing computers to store and manipulate text data.
Capital A - Z = 65 - 90
Smaller a - z = 97 - 122
0 - 9 = 48 -57
Thus a message as 01001000 01001001 00100001 = 72, 73, 33 = HI!

REPRESENTING COLORS
We represent colors with three different numbers.
Each dot on a screen is called pixel and each dot has three numbers associated with it which together tells how much red, green and blue should be combined to form a color.
RGB = Red, Green, Blue. = 01001001  01001000 00100001 = 73, 72, 33. = Lighter yellow
Thus a 3mb(3 megabyte) picture contains 1,048,576 pixels which is  3,145,728 bytes.I.e 24-bit color which means 3 bytes per pixel (8 bits for Red, Green, and Blue channels).

REPRESENTING  MUSIC AND VIDEOS
Music - Note, intensity of key press
Videos - Lots of (motion) images

Interfaces
    CLI (Command-Line Interface)
    GUI (Graphical User Interface)

INPUT >> ALGORITHM >> OUTPUT
ALGORITHM */

//////////WEEK ONE - C
 /* C-Programming Language
    Source Code
    Compiler - A program that translates one language to another.E.g source code to machine code.
    To code: Write. Compile. Run.
    File names pref be in lower cases without space in between.

    Scratch 

    Pseudocode to Code

    Getting started with C programming
        1. Set Up Your Development Environment
        Compiler: You’ll need a C compiler to convert your C code into machine code. Popular options include:GCC, Clang.
        IDE/Text Editor: You can use a simple text editor or a full-featured IDE. Some options include:Visual Studio Code with C/C++ extension, Code::Blocks CLion.

        2.Write Your First C Program
        - Open your editor, create a new file, and save it with a `.c` extension For example, `hello.c`.
        Write a simple Hello, World! program: */
            #include <stdio.h>  //A library that gives access to functions like printf and more
            int main() 
            {
                printf("Hello, World!\n");
            }

        /* Standard io - input/output/header
        3.Compile and Run Your Code
        Open a terminal (or command prompt on Windows).
        Navigate to the directory where you saved your hello.c file.
        Compile your code using the compiler line
        Run -  gcc hello.c -o hello
        Run the executable:

    USING CS50:
        code hello.c - Create a file name
        make hello - Compile
        ./hello - Run

    DATA TYPES and variables
        int
        char
        float
        double(more decimal points)
        Void: is a type but not a data type. Use it for functions(that are void type i.e) that do not return value.
            Parameters of a function can also be void; take no inputs.

        From CS50 Library
            string
            bool - boolean
    long
    short
    const

    Format Codes
        %c - for single character
        $f - for floats(decimals)
        %i - for integers
        %li - for long integers
        %s - for string

    //
        Variable declaration: int number;
        Variable assignment: number = 7;
        Variable initialization: int number = 7;

    Operators
        Logical Operators:
            &&
            ||
            !

        Operational operator
            >
            <
            >=
            <=
            Equality and inequality
            ==
            !=
 */ //Ternary Operator

 /*    Get Return value. To be able to get value of a getstring function in C, attach the function to a variable using an equal sign.Also, tell C what type pf variable it should be saved as.
    That is, string answer = get_string(“What’s your name? ”);

    Return: Output or give result back.

    To print and join the return value: %s 
    NOTE: #include <cs50.h> is not a compiler. It’s a library—a collection of code that provides additional functionality for C programs, specifically developed for Harvard's CS50 course. Including cs50.h
    */
        #include <stdio.h>
        #include <cs50.h>
        int main() {
            string answer = get_string("What’s your name? ");
            printf("hello, %s\n", answer);
            }
    //printf( “hello, %s %s\n, firstname, lastname);
    
    /*Creating Variables in C
    int counter = 0;
    counter = counter + 1;
    counter += 1;
    counter++; 

    Integers
    Conditionals */
        #include <stdio.h>
        #include <cs50.h>
        int main(void){
            int figureX = get_int("What is x? ");
            int figureY = get_int("What is y? ");

            if(figureX < figureY){
                printf("x is less than y\n");
            }
            else if (figureX > figureY)
            {
                printf("x is greater than y\n");
            }
            else{
                printf("x is equal to y\n");
            }
        }

        //Conditionals / Switch statement
        #include <stdio.h>
        #include <cs50.h>
        int main (void)
        {
            int x = get_int("Number:\n ");

            switch(x){
                case 1:
                printf("One\n");
                break;
                case 2:
                printf("Two\n");
                break;
                case 3:
                printf("Three\n");
                break;
                default:{
                printf("Sorry\n");
                }
            }
        }

        //char - get a single character from the user
            #include <stdio.h>
            #include <cs50.h>
            int main(void){
                char ch = get_char("Do you agree? ");

                if(ch == 'y' || ch == 'Y') {
                    printf("Agreed\n");
                }
                else if (ch == 'n')
                {
                    printf("Not agreed\n");
                }
            }
    //Loops: Run into an infinite loop? Ctrl + C;
        //The while loop
            #include <stdio.h>
            #include <cs50.h>
            int main(void){
                int getNum = get_int("How many times do i meow?");
                
                while(getNum > 0) {
                    printf("Meow!\n");
                    getNum--;
                }
            }

            //Mario: Using loop to check a criteria.
                #include <stdio.h>
                #include <cs50.h>
                int main(void)
                {
                int n = get_int("Size?");
                while(n < 1){
                    n = get_int("Size?");
                }

                    for (int i = 0; i < n; i++)
                    {
                        for (int j = 0; j < n; j++)
                        {
                            printf("#");
                        }
                        printf("\n");
                    }
                }

        //The for loop
            #include <stdio.h>
            #include <cs50.h>
            int main(void){

                for(int getNum = get_int("How many times do i meow?"); getNum > 0; getNum--)
                {
                    printf("Meow!\n");
                }
            }

        //Do while Loop || Mario
            #include <stdio.h>
            #include <cs50.h>
            int main(void)
            {
                int n;
                do {
                    n = get_int("Size?");
                   }
                   
               while(n < 1);

                for (int i = 0; i < n; i++)
                {
                    for (int j = 0; j < n; j++)
                    {
                        printf("#");
                    }
                    printf("\n");
                }
            }

    //Callback functions
        void meow(void) 
        {
            printf("meow\n");
        }

        int main(void)
        {
            for (int i = 0; i < 3; i++)
            {
                meow();
            }
        }
    //Functions with no return value. Simple performing side-effects.
    void funcName(int n)
    {
        //code
    };

    //Functions with inputs/arguments
        //Tell input type: int a, int b
        void meow(int num) 
        {
            for (int i = 0; i < num; i++)
            {
                printf("meow\n");
            }
        }

        int main(void)
        {
            meow(3);
        }
        
    //Adding numerical values
        #include <stdio.h>
        #include <cs50.h>
        int main(void)
        {
            int x = get_int("x: ?");
            int y = get_int("x: ?");
            printf("%i\n", x + y);
        }

    //Function that have Return values
        #include <stdio.h>
        #include <cs50.h>
        int add(int a, int b); // Prototype || Declaration

        int main(void)
        {
            int x = get_int("x: ?");
            int y = get_int("x: ?");

            int z = add(x, y);
            printf("%i\n", z);
            // printf("%i\n", add(x, y));
        }

        int add(int a, int b)
        {
            return a + b;
        }

    //Float numbers - Type casting
        #include <stdio.h>
        #include <cs50.h>
        int main(void)
        {
            int x = get_int("x: ?");
            int y = get_int("x: ?");

            float z =  (float) x / (float) y;
            printf("%f\n", z);
            // printf("%.3f\n", z);
        }

    //C supports Constants
        //Mario  (Square)
        #include <stdio.h>
        #include <cs50.h>
        int main(void)
        {
            const int n = get_int("Size?");

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    printf("#");
                }
                printf("\n");
            }
        }
        
    //Pyrami. Left-aligned
    //Print-row function. Reusable. (Slant from top to bottom)
        #include <stdio.h>
        #include <cs50.h>
        void rowPrint(int length); //Prototype

        int main (void)
        {
            int height = get_int("Height: ");
            for(int i = 0; i < height; i ++)
            {
                rowPrint(i + 1);
            }
        }

        void rowPrint(int length)
        {
            for(int i = 0; i < length; i ++){
                printf("#");
            }
            printf("\n");
        }

    //Linux - An operating system: An operating system (OS) is the main software that controls a computer and manages its resources. It’s what lets you interact with the hardware (like the keyboard, mouse, and screen) and run applications like web browsers, games, or productivity tools.
        //an operating system (OS) as the manager of everything on your computer. It’s like the boss that tells all the parts of the computer how to work together so you can do things like browse the internet, watch videos, or type documents. Without an OS, your computer would just be a bunch of parts that don’t know how to communicate. The operating system is what makes your computer usable. It lets you give commands, opens apps, and makes sure all parts work together smoothly.
        //Examples of Operating Systems: Windows (by Microsoft), macOS (by Apple), Linux (originally by Linus Torvalds and now developed by a huge community)
        //Note: Linux itself is not a full OS on its own but rather a kernel—the core part of an OS that communicates between software and hardware. People build full operating systems on top of the Linux kernel, like Ubuntu, Fedora, and Android.

    //WEEK ONE PROJECTS
    //Mario
        #include <cs50.h>
        #include <stdio.h>

        void printRows(int length, int height);
        int main(void)
        {
            int height;
            do
            {
                height = get_int("Height: ");
            }
            while (height < 1 || height > 8);

            for (int i = 0; i < height; i++)
            {
                printRows(i + 1, height);
            }
        }

        void printRows(int length, int height)
        {
            // Print spaces for the left pyramid (right-aligned)
            for (int i = 0; i < height - length; i++)
            {
                printf(" ");
            }
            // Print hashes for the left pyramid
            for (int i = 0; i < length; i++)
            {
                printf("#");
            }
            // Print gap between the two pyramids
            printf("  ");
            // Print hashes for the right pyramid
            for (int i = 0; i < length; i++)
            {
                printf("#");
            }
            // Move to the next line
            printf("\n");
        }

    //Cash
        #include <stdio.h>
        #include <cs50.h>
        int cents;
        int amount;
        int quarters;
        int dimes;
        int nickels;
        int pennies;

        int calculate(int amt);

        int main(void)
        {
            do
            { //Prompt user for change owed in cents
                cents = get_int("Change amount:");
            } while (cents < 0);

            //Set variables
            quarters = 25;
            dimes = 10;
            nickels = 5;
            pennies = 1;

            int result = calculate(cents);
            printf("%i\n", result);
        }

        int calculate(int amt)
        {
            //Initialize a coin variable to 0
            int coins = 0;

            //Calculations
            //Divide amount(cents) by quarter, dime, nickel and penny. Add result of the division to the coin variable
            coins += amt / quarters;
            //Update the amount(cents) with the remainder value and re-calculate in the next lines till penny.
            amt %= quarters;

            coins += amt / dimes;
            amt %= dimes;

            coins += amt / nickels;
            amt %= nickels;

            coins += amt / pennies;

            return coins;
        }


    //Bool function type. Two || Three equal sides triangle
        #include <cs50.h>
        #include <stdio.h>
        #include <stdlib.h>

        bool triangle(float x, float y, float z);

        int main(void)
        {
            bool result = triangle(8, 9, 7);

            if(result)
            {
                printf("Valid\n");
            }
            else
            {
                printf("Invalid\n");
            }
        }

        bool triangle(float x, float y, float z)
        {
            // Check for all positive sides
            if (x <= 0 || y <= 0 || z <= 0)
            {
                return false;
            }

            // Check that sum of any two sides is greater than third
            if((x + y <= z) || (x + z <= y) || (y + z <= x))
            {
                return false;
            }

            if(x == y && y == z){
                return false;
            }

            //Only Three unequal sides
            // if(x == y || x == z || y == z)
            // {
            //     return false;
            // }

            // Check that we passed both tests
            return true;
        }

    //String compare to compare two strings in C;
    #include <string.h>
        if (strcmp(phrase, pass) == 0)
        {
            return true;
        }


//////////WEEK TWO - ARRAYS - Contiguous chunks of memory.
    /*Cryptography: the science of securing communication and information by transforming data into a form that only intended recipients can understand. The primary goals of cryptography are confidentiality, integrity, authentication, and non-repudiation.
        Code encryption and decryption
        Plaintext >>>>> Cipher(An algorithm for encrypting information) >>>>> Ciphertext
        Key: Secret
        
    Compilation: Converting source code to machine code.
    Debugging: Eliminate bugs
    Breakpoint: Pause execution here

    Array:Sequence of values back to back in memory. Arrays are contiguous.*/
    
    //Creating Arrays in C: Data type. Name. Size.
        int nights[5];
        int nights[5] = {7, 8, 6, 9, 4};

    //Array example one
        #include <stdio.h>
        #include <cs50.h>
        int main(void)
        {
            const int N = 3;
            int score[N];
            for (int i = 0; i < N; i++)
            {
                score[i] = get_int("Score:");
            }
            printf("Average: %f\n", (score[0] + score[1] + score[2]) / (float) N);
        }

    //Averages three numbers using an array, a constant and a helper function.
        #include <stdio.h>
        #include <cs50.h>
        const int N = 3;
        float average(int length, int array[]);

        int main(void)
        {
            int score[N];
            for (int i = 0; i < N; i++)
            {
                score[i] = get_int("Score:");
            }

            // Print average
            printf("Average: %f\n", average(N, score));
        }

        float average(int length, int array[])
        {
            //Calculate the average
            int sum = 0;
            for(int i = 0; i < N; i++)
            {
                sum += array[i];
            }
            return sum / (float) length;
        }

    //Array of characters
        //Make Hi
        #include <stdio.h>
        #include <cs50.h>
        int main(void)
        {
            char c1 = 'H';
            char c2 = 'I';

            printf("%c%c\n", c1, c2);
            // printf("%i %i\n", c1, c2);
        }

        //NUL : 0 byte that terminates string. Sentinel value.

        //Make Hi Bye
        #include <stdio.h>
        #include <cs50.h>
        int main(void)
        {
            string words [2];

            words[0] = "HI";
            words[1] = "BYE";

            printf("%s\n", words[0]);
            printf("%s\n", words[1]);
            // printf("%c%c%c\n", words[0][0], words[0][1], words[0][2]);
            // printf("%c%c%c%c\n", words[1][0], words[1][1], words[1][2], words[1][3]);
        }

    //Length of Array (Characters)
        //Manual
        #include<stdio.h>
        #include<cs50.h>
        int main(void)
        {
            string name = get_string("Name: ");

            int n = 0;
            while(name[n] != '\0')
            {
                n++;
            }

            printf("%s %i\n", name, n);
        }

        //Using strlen | Include <string.h> library
        #include<stdio.h>
        #include<cs50.h>
        #include<string.h>
        int main(void)
        {
            string name = get_string("Name: ");
            int length = strlen(name);
            printf("%s %i\n", name, length);
        }


        //Iterating through the length of each char
        #include<stdio.h>
        #include<cs50.h>
        #include<string.h>
        int main(void)
        {
            string s = get_string("Name: ");
            printf("Output: ");
            // int lngth = strlen(s);
            for(int i = 0, n = strlen(s); i < n; i++)
            {
                printf("%c", s[i]);
            }
            printf("\n");
        }

        //Character Type: Change to Uppercase
            //Manual
            #include <cs50.h>
            #include <stdio.h>
            #include <string.h>
            int main(void)
            {
                string s = get_string("Before: ");
                printf("After: ");

                for (int i = 0, n = strlen(s); i < n; i++)
                {
                    if (s[i] >= 'a' && s[i] <= 'z')
                    {
                        printf("%c", s[i] - 32);
                    }
                    else
                    {
                        printf("%c", s[i]);
                    }
                }
                printf("\n");
            }

            //Using CType | Uppercase/Lowercase/isalpha/isdigit/islower/isupper/isspace/isalnum
            #include <cs50.h>
            #include <stdio.h>
            #include <string.h>
            #include <ctype.h>
            int main(void)
            {
                string s = get_string("Before: ");
                printf("After: ");

                for (int i = 0, n = strlen(s); i < n; i++)
                {
                    printf("%c", toupper(s[i]));
                }
                printf("\n");
            }

    //Incorporate Command Line Arguments
    // argc: The number of inputs to our program at the command-line
    // argv: The array of strings/inputs to our program at the command line.
        #include<stdio.h>
        #include<cs50.h>
        int main(int argc, string argv[])
        {
            //After ./filename enterTextOnCommandLine
            printf("Hello, %s\n", argv[1]);
            printf("Hello, %s\n", argv[0]); //Returns file name by default
            //./filename Essie Tasha
            printf("Hello, %s %s\n", argv[1], argv[2]);
        }

        //Count through each argument count and print string at that index
        #include <cs50.h>
        #include <stdio.h>
        int main(int argc, string argv[])
        {
            for (int i = 0; i < argc; i++)
            {
                printf("%s\n", argv[i]);
            }
        }

        //Implementing Mario with command-line argument
            //Converting String to Integer. Using <stdlib.h>
            #include <cs50.h>
            #include <stdio.h>
            #include <stdlib.h>
            int main(int argc, string argv[])
            {
                //Check if argc is greater than 1
                if (argc != 2)
                {
                    printf("Usage: ./mario number\n");
                    return 1;
                }

                //Convert string to int
                int height = atoi(argv[1]);
            }


    //Exit Status: Return 0. Return from the program / exit a function i.e successful and don't run the other lines of code. Status 0 - Success!
        //See secret status code: Run: echo $?
        #include <cs50.h>
        #include <stdio.h>
        int main(int argc, string argv[])
        {
            if (!(argc > 1))
            {
                printf("Missing command-line argument.\n");
                return 1;
            }

            for (int i = 0; i < argc; i++)
            {
                printf("%s\n", argv[i]);
            }
            return 0;
        }

    //Week 2 Section
        //Exercise One
            //Create an array of integers in which each integer is 2 times the value of the previous integer. The first element is 1. Print the array integer by integer.
                #include <cs50.h>
                #include <stdio.h>
                int main(void)
                {
                    int size = get_int("Size: ");
                    int sequence[size];
                    // int sequence[5];

                    sequence[0] = 1;
                    printf("%i\n", sequence[0]);

                    for(int i = 1; i < size; i++)
                    {
                        sequence[i] = sequence[i - 1] * 2;
                        printf("%i\n", sequence[i]);

                        //Breakdown: sequence[1] = sequence[0] * 2 = 1 * 2 = 2
                        //The previous element (sequence[0]) is already set to 1
                            //sequence[1] = sequence[0] * 2;
                            //sequence[1] = 1 * 2;
                            //sequence[1] = 2;
                    }
                }

        //Exercise Two
            //Alphabetical Order check
            #include <cs50.h>
            #include <stdio.h>
            #include <string.h>
            int main(void)
            {
                string phrase = get_string("Enter a phrase: ");
                int length = strlen(phrase);

                for (int i = 0; i < length - 1; i++)
                {
                    // printf("%i ", phrase[i]);
                    // printf("%c", phrase[i]);

                    // Check if characters are not alphabetical
                    if (phrase[i] > phrase[i + 1])
                    {
                        printf("Not in alphabetical order.\n");
                        return 0;
                    }
                }
                    printf("In alphabetical order.\n");
            }

    //SCRABBLE
        #include <cs50.h>
        #include <ctype.h>
        #include <stdio.h>
        #include <string.h>

        int runScore(string word);

        // Points assigned to each letter of the alphabet
        int WORDPOINTS[26] = {1, 3, 3, 2,  1, 4, 2, 4, 1, 8, 5, 1, 3,
                            1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

        int main(void)
        {
            string word1 = get_string("Player 1: ");
            string word2 = get_string("Player 2: ");

            // Run Score
            int player1Score = runScore(word1);
            int player2Score = runScore(word2);

            // Check and Print Winner
            if (player1Score > player2Score)
            {
                printf("Player 1 wins!\n");
            }
            else if (player2Score > player1Score)
            {
                printf("Player 2 wins!\n");
            }
            else
            {
                printf("Tie!\n");
            }
        }
        // Function to run score
        int runScore(string userInput)
        {
            int wordScore = 0;

            int stringLength = strlen(userInput);
            for (int i = 0; i < stringLength; i++)
            {
                // If it's an alpahbeth. This will only score alphabeths and ignore non-alphabeths.
                if (isalpha(userInput[i]))
                {
                    char convertedToUpper = toupper(userInput[i]);

                    // Calculate the position of the letter in the alphabeth. A - A will be 0; B - A will be
                    // 1; Z - A will be 25. Instance - In ASCII, 'A- is 65 -65 = 0. B is 66 - 65 = 1. C is C
                    // - A = 67 - 65 = 2; Hnece, C will be at index 2.
                    int wordIndex = convertedToUpper - 'A';

                    // wordIndex here is used to access the POINTS array that stores the point values foe
                    // each letter. And the value from POINTS[wordIndex] is added to wordScore.
                    wordScore += WORDPOINTS[wordIndex];
                }
            }

            return wordScore;
        }

    //READABILITY
        #include <cs50.h>
        #include <ctype.h>
        #include <math.h>
        #include <stdio.h>
        #include <string.h>

        int countNumOfText(string letters);
        int countNumOfWords(const char *word);
        int countNumOfSentences(const char *word);

        int main(void)
        {
            // Prompt the user for some text
            string userInput = get_string("Text: \n");

            // Count letters in text
            int letters = countNumOfText(userInput);
            int words = countNumOfWords(userInput);
            int sentences = countNumOfSentences(userInput);

            // Compute the Coleman-Liau index Formula: index = 0.0588 * L; - 0.296 * S; - 15.8
            float L = ((float) letters / words) * 100;
            float S = ((float) sentences / words) * 100;
            float wordGrade = 0.0588 * L - 0.296 * S - 15.8;

            int X = round(wordGrade);

            // Print the grade level
            if (X < 1)
            {
                printf("Before Grade 1\n");
            }
            else if (X > 1 && X <= 15)
            {
                printf("Grade %i\n", X);
            }
            else
            {
                printf("Grade 16+\n");
            }
        };

        // LETTERS COUNT
        int countNumOfText(string letters)
        {
            int lettersLength = strlen(letters);
            int lettersCount = 0;

            for (int i = 0; i < lettersLength; i++)
            {
                if (isalpha(letters[i]))
                {
                    lettersCount++;
                }
            }
            return lettersCount;
        };

        // WORD COUNT
        int countNumOfWords(const char *word) // Treat character as string literal
        {
            int wordCount = 0;
            int j = 0;

            // Count spaces
            while (word[j] != '\0')
            {
                if (word[j] == ' ')
                {
                    wordCount++;
                }
                j++;
            }
            // Add the last word of the string which is not followed by a space.
            return wordCount + 1;
        }

        // SENTENCE COUNT - .?!
        int countNumOfSentences(const char *word)
        {
            int sentenceCount = 0;
            int j = 0;

            while (word[j] != '\0')
            {
                if (word[j] == '.' || word[j] == '!' || word[j] == '?')
                {
                    sentenceCount++;
                }
                j++;
            }

            return sentenceCount;
        }
    //CIPHERTEXT
        #include <cs50.h>
        #include <ctype.h>
        #include <stdio.h>
        #include <stdlib.h>
        #include <string.h>

        bool digitsOnly(string s);
        char rotateText(char ch, int key);

        int main(int argc, string argv[])
        {
            // Programme should run with just one comman-line argument
            if (argc != 2)
            {
                printf("Usage: ./caesar key\n");
                return 1;
            }

            // Check if its digits only
            bool isDigits = digitsOnly(argv[1]);
            if (!isDigits)
            {
                printf("Usage: ./caesar key\n");
                return 1;
            }

            // Convert argv[1] to an integer
            int key = atoi(argv[1]);

            // Ask user for plaintext
            string plaintext = get_string("plaintext: ");
            printf("ciphertext: ");

            // Iterate over each character in the main text
            for (int i = 0, lent = strlen(plaintext); i < lent; i++)
            {
                char ciphertext = rotateText(plaintext[i], key);
                printf("%c", ciphertext);
            }
            printf("\n");
            return 0;
        };

        // Function I: Ensure every character in argv[1] is a digit
        bool digitsOnly(string s)
        {
            int len = strlen(s);
            for (int i = 0; i < len; i++)
            {
                if (!isdigit(s[i]))
                {
                    return false;
                }
            }

            return true;
        };

        // Function II: Rotate Texts
        char rotateText(char ch, int key)
        {
            if (isupper(ch))
            {
                return ((ch - 'A' + key) % 26) + 'A'; //Convert the ch to a zero-based index relative to alphabeths. Here, A(65 -65) means 0, B means (66-65 = 1), i.e A maps to 0, B to 1, Z to 25.Thus C-A turns out to 67 - 65 = 2, so C maps to 2.
            }                                         //C - A + key now shifts the index(of the character) by the value of the key.
            else if (islower(ch))                     //Zeo based index lets me work with alphabeths as a numerical range (0-25);
            {
                return ((ch - 'a' + key) % 26) + 'a';
            }
            else
            {
                return ch;
            }
        };

////////WEEK 3: ALGORITHMS - A set of steps to acomplish some tasks and those steps have to be very clearly defined.
/* Linear search and Binary search
    //Linear Search: One person at a time; one by one. (N) || O(N) || Ω(1).
    //Binary Search: Searching elements in Halves. Must first sort the array using any sorting algorithm, then search starting from the mid point then go left or right depending on the  target element. Repeat process. (log2 N) || O(log(N)) || Ω(1).

   Big O Notation - O(N) - Upper bound i.e what is the greatest number of steps an algorithm will ever take?
   Omega(Ω) Notation - Lower bound i.e What, given any kind of input, would be the fewest number of steps we would ever take? 
   
   Summary of Big-O notations and what they mean:
        1. O(1) - Constant Time 
            The operation takes the same amount of time regardless of the input size. Always fast, no matter how big the input is.
            Example: Accessing an array element by index or Looking at one item in a list.

        2. (log n) - Logarithmic Time 
            The time increases logarithmically as input size grows. Often seen in divide-and-conquer algorithms like binary search. Gets slower as the input grows, but only a little bit.
            Example: Searching in a sorted array with binary search or Cutting a deck of cards in half repeatedly to find one card.


        3. O(n) - Linear Time
            The time increases at the same rate as the input size grows. Slows down as the input grows. 
            Example: Looping through an array or Checking every item in a list, one by one.

        4. O(n log n) - Linearithmic Time
            The time grows proportionally to `n` times `log n`. The time grows faster than the input size but slower than n². Common in efficient sorting algorithms like merge sort. Slower than O(n), but faster than O(n²). Common for sorting. 
            Example: Sorting an array with quicksort.

        5. O(n²) - Quadratic Time
            The time grows proportional to the square of the input size. Often results from nested loops. Gets much slower as input grows. 
            Example: Comparing every pair of elements in a list (e.g., bubble sort) or Comparing every pair of items in a list.   */     
    
    //Linear Search: Number
        #include <cs50.h>
        #include <stdio.h>
        #include <stdlib.h>
        int main(void)
        {
            int numbers[7] = {100, 30, 80, 250, 50, 160, 20};
            // int numbers[] = {100, 30, 80, 250, 50, 160, 20};
            int n = get_int("Number: \n");
            for (int i = 0; i < 7; i++)
            {
                if(numbers[i] == n)
                {
                    printf("Found\n");
                    return 0;
                }
            }
                printf("Not Found\n");
                return 1;
        }

        //Linear Search : String Names.
        #include <cs50.h>
        #include <stdio.h>
        #include <stdlib.h>
        #include <string.h>
        int main(void)
        {
            string names[] = {"John", "Tom", "Raya"};

            string s = get_string("String: \n");
            for (int i = 0; i < 3; i++)
            {
                if(strcmp(names[i], s) == 0)
                {
                    printf("Found\n");
                    return 0;
                }
            }
                printf("Not Found\n");
                return 1;

        }
    
        //Linear Search: Phonebook
        #include <cs50.h>
        #include <stdio.h>
        #include <string.h>
        int main(void)
        {
            string names[] = {"John", "Tom", "Raya"};
            string numbers[] = {"+234-90-90-88-76", "+234-88-88-99-99", "+234-90-22-44-11"};

            string userName = get_string("Name: \n");
            for (int i = 0; i < 3; i++)
            {
                if(strcmp(names[i], userName) == 0)
                {
                    printf("%s\n", numbers[i]);
                    return 0;
                }
            }
                printf("Not Found\n");
                return 1;

        }

    //Data Structures - A variable that contains some number of other variables.
        //Type struct | Phonebook
        #include <cs50.h>
        #include <stdio.h>
        #include <string.h>
        typedef struct
        {
            string name;
            string number;
        } person;

        int main(void)
        {
            //Struct Name: Person | Variable/Name:Family | Length3 - Data type:Array 
            //Create a person data type called family.
            person family[3];

            family[0].name = "John";
            family[0].number = "+234-90-90-88-76";

            family[1].name = "Tom";
            family[1].number = "+234-88-88-99-99";

            family[2].name = "Raya";
            family[2].number = "+234-90-22-44-11";

            string userName = get_string("Name: \n");
            for (int i = 0; i < 3; i++)
            {
                if(strcmp(family[i].name, userName) == 0)
                {
                    printf("%s\n", family[i].number);
                    return 0;
                }
            }
                printf("Not Found\n");
                return 1;
        }

        //Election Candidates
        #include <cs50.h>
        #include <stdio.h>
        #include <string.h>
        typedef struct
            {
                string name;
                int votes;
            } candidate;

        int main(void)
        {
            const int numOfC = 3;
            candidate electionCand[numOfC];

            electionCand[0].name = "John";
            electionCand[0].votes = 10;
            electionCand[1].name = "Tom";
            electionCand[1].votes = 12;
            electionCand[2].name = "Raya";
            electionCand[2].votes = 8;
            // Find higest number of votes
            int highestVotes = 0;
            for (int i = 0; i < numOfC; i++)
            {
                if(electionCand[i].votes > highestVotes)
                {
                    highestVotes = electionCand[i].votes;
                }
            }
            printf("%i\n", highestVotes);
            //Print name of candidate with highest number of votes
            for (int i = 0; i < numOfC; i++)
            {
                if (electionCand[i].votes == highestVotes)
                {
                    printf("%s\n", electionCand[i].name);
                }
            }
        }

    //Sorting
        //Selection sorting - one after the other. Moving the smallest elements from right to left or beginning of the array. Repeat process. Building the array from left to right diagram.
        //Bubble - Comparing two elements and switching their position. Higher elements to the right/end and lower elements to the left/beginning.
        //Merge
            //Base case
            //Solve the left halg
            //Solve the right half
            //Merge and sort the sorted halves.

            /*
            sort1 uses: Bubble Sort
            How do you know?: Uses 5.590s in worst case and uses 0.831s in best case. O(N2) and ΩN. That is, Big O of N2 and Omega of N.

            sort2 uses: Merge Sort
            How do you know?: Uses 0.936s in worst case and uses 0.972s in best case. O(Nlog(N)) and Ω(Nlog(N)).

            sort3 uses: Selection Sort
            How do you know?: Uses 3.860s in worst case and uses 3.430s in best case. O(N2) and Ω(N2). That is, Big O of N2 and Omega of N2. */


    //RECURSION - Making a function call itself. However, there must be a base case to avaoid an infinite loop.
        //Mario with recursion
        #include <cs50.h>
        #include <stdio.h>
        #include <string.h>
        void draw(int n);
        int main(void)
        {
            int height = get_int("Height: \n");
            draw(height);
        }

        void draw(int n)
            //Base Case
        {   if (n <= 0)
            {
                return;
            }
            // Print pyramid of height n -1
            draw(n - 1);

            // Print one more row
            for (int i = 0; i < n; i ++)
            {
                printf("#");
            }
            printf("\n");
        };

        //Factorial with recursion
        #include <cs50.h>
        #include <stdio.h>
        #include <string.h>

        int factorial(int num);
        int main(void)
        {
            int num;
            do
            {
                num = get_int("Number: \n");
            }
            while(num < 0);

            printf("%i\n", factorial(num));
        }

        int factorial(int num)
        {   //Base case
            if(num == 1)
            {
                return 1; //Return here ends the given function call at the last recursive after the base case is triggered.
            }

            //Recursive case
            return num * factorial(num - 1);
        };
    //WEEK 3 Assignment: PLURALITY US Voting system.
        #include <cs50.h>
        #include <stdio.h>
        #include <string.h>
        // Max number of candidates
        #define MAX 9

        // Candidates have name and vote count
        typedef struct
        {
            string name;
            int votes;
        } candidate;

        // Array of candidates
        candidate candidates[MAX];

        // Number of candidates
        int candidate_count;

        // Function prototypes
        bool vote(string name);
        void print_winner(void);

        int main(int argc, string argv[])
        {
            // Check for invalid usage
            if (argc < 2)
            {
                printf("Usage: plurality [candidate ...]\n");
                return 1;
            }
            // Populate array of candidates
            candidate_count = argc - 1;
            if (candidate_count > MAX)
            {
                printf("Maximum number of candidates is %i\n", MAX);
                return 2;
            }
            for (int i = 0; i < candidate_count; i++)
            {
                candidates[i].name = argv[i + 1];
                candidates[i].votes = 0;
            }

            int voter_count = get_int("Number of voters: ");

            // Loop over all voters
            for (int i = 0; i < voter_count; i++)
            {
                string name = get_string("Vote: ");

                // Check for invalid vote
                if (!vote(name))
                {
                    printf("Invalid vote.\n");
                }
            }

            // Display winner of election
            print_winner();
        };
        
        // Update vote totals given a new vote
        bool vote(string name)
        {
            // TODO
            for (int i = 0; i < candidate_count; i++)
            {
                if (strcmp(name, candidates[i].name) == 0)
                {
                    candidates[i].votes += 1;
                    return true;
                }
            }

            return false;
        };

        // Print the winner (or winners) of the election
        void print_winner(void)
        {
            // TODO
            int highestScore = 0;
            for (int i = 0; i < candidate_count; i++)
            {
                if (candidates[i].votes > highestScore)
                {
                    highestScore = candidates[i].votes;
                }
            }

            for (int i = 0; i < candidate_count; i++)
            {
                if (candidates[i].votes == highestScore)
                {
                    printf("%s\n", candidates[i].name);
                }
            }
        };

        //Runoff
        #include <cs50.h>
        #include <stdio.h>
        #include <string.h>

        // Max voters and candidates
        #define MAX_VOTERS 100
        #define MAX_CANDIDATES 9

        // preferences[i][j] is jth preference for voter i
        int preferences[MAX_VOTERS][MAX_CANDIDATES];

        // Candidates have name, vote count, eliminated status
        typedef struct
        {
            string name;
            int votes;
            bool eliminated;
        } candidate;

        // Array of candidates
        candidate candidates[MAX_CANDIDATES];

        // Numbers of voters and candidates
        int voter_count;
        int candidate_count;

        // Function prototypes
        bool vote(int voter, int rank, string name);
        void tabulate(void);
        bool print_winner(void);
        int find_min(void);
        bool is_tie(int min);
        void eliminate(int min);

        int main(int argc, string argv[])
        {
            // Check for invalid usage
            if (argc < 2)
            {
                printf("Usage: runoff [candidate ...]\n");
                return 1;
            }

            // Populate array of candidates
            candidate_count = argc - 1;
            if (candidate_count > MAX_CANDIDATES)
            {
                printf("Maximum number of candidates is %i\n", MAX_CANDIDATES);
                return 2;
            }
            for (int i = 0; i < candidate_count; i++)
            {
                candidates[i].name = argv[i + 1];
                candidates[i].votes = 0;
                candidates[i].eliminated = false;
            }

            voter_count = get_int("Number of voters: ");
            if (voter_count > MAX_VOTERS)
            {
                printf("Maximum number of voters is %i\n", MAX_VOTERS);
                return 3;
            }

            // Keep querying for votes
            for (int i = 0; i < voter_count; i++)
            {

                // Query for each rank
                for (int j = 0; j < candidate_count; j++)
                {
                    string name = get_string("Rank %i: ", j + 1);

                    // Record vote, unless it's invalid
                    if (!vote(i, j, name))
                    {
                        printf("Invalid vote.\n");
                        return 4;
                    }
                }

                printf("\n");
            }

            // Keep holding runoffs until winner exists
            while (true)
            {
                // Calculate votes given remaining candidates
                tabulate();

                // Check if election has been won
                bool won = print_winner();
                if (won)
                {
                    break;
                }

                // Eliminate last-place candidates
                int min = find_min();
                bool tie = is_tie(min);

                // If tie, everyone wins
                if (tie)
                {
                    for (int i = 0; i < candidate_count; i++)
                    {
                        if (!candidates[i].eliminated)
                        {
                            printf("%s\n", candidates[i].name);
                        }
                    }
                    break;
                }

                // Eliminate anyone with minimum number of votes
                eliminate(min);

                // Reset vote counts back to zero
                for (int i = 0; i < candidate_count; i++)
                {
                    candidates[i].votes = 0;
                }
            }
            return 0;
        }

        // Record preference if vote is valid
        bool vote(int voter, int rank, string name)
        {
            // TODO
            for (int i = 0; i < candidate_count; i++)
            {
                // Check if the name the voter inputs matches that of the candidate
                if (strcmp(candidates[i].name, name) == 0)
                {
                    //Update preference arraynand return true
                    preferences[voter][rank] = i;
                    return true;
                }
            }
            //Return false if the name is not the name of one of the candidates.
            return false;
        }

        // Tabulate votes for non-eliminated candidates
        void tabulate(void)
        {
            // TODO
            for (int i = 0; i < voter_count; i++)
            {
                for (int j = 0; j < candidate_count; j++)
                {
                    int indexOfCandidate = preferences[i][j];
                    if (!candidates[indexOfCandidate].eliminated)
                    {
                        // Update votes
                        candidates[indexOfCandidate].votes++;
                        // Break out of loop once vote has been casted for a voter's first non-eliminated candidate
                        break;
                    }
                }
            }
            return;
        }

        // Print the winner of the election, if there is one
        bool print_winner(void)
        {
            // TODO
            // Check if the candidate has more than half of the vote, if yes, print their name.
            for (int i = 0; i < candidate_count; i++)
            {
                // If this candidate's vote is higher than half the total votes, print the candidate's name
                if (candidates[i].votes > voter_count / 2)
                {
                    printf("%s\n", candidates[i].name);
                    return true;
                }
            }
            // Return false if nobody has won the election yet
            return false;
        }

        // Return the minimum number of votes any remaining candidate has
        int find_min(void)
        {
            // TODO
            // Find the candidate who is still in the election but has the fewest number of votes
            int minimumVotes = 1000000;

            for (int i = 0; i < candidate_count; i++)
            {
                // Check if this candidate's vote is the lowest
                if (!candidates[i].eliminated && candidates[i].votes < minimumVotes)
                {
                    minimumVotes = candidates[i].votes;
                }
            }
            return minimumVotes;
        }

        // Return true if the election is tied between all candidates, false otherwise
        bool is_tie(int min)
        {
            // TODO
            for (int i = 0; i < candidate_count; i++)
            {
                if (!candidates[i].eliminated && candidates[i].votes != min)
                {
                    return false;
                }
            }
            // Return true if remaining candidates has the same number of votes
            return true;
        }

        // Eliminate the candidate (or candidates) in last place
        void eliminate(int min)
        {
            // TODO
            for (int i = 0; i < candidate_count; i++)
            {
                // Check if candidate has the lowest votes, if they do, eliminate.
                if (!candidates[i].eliminated && candidates[i].votes == min)
                {
                    candidates[i].eliminated = true;
                }
            }
        }

////////WEEK 4: Memory
/* RGB: Red, Green, Blue 
    White: 255, 255, 255
    Black: 0, 0, 0
    Red: FF0000
    Green: 00FF00
    Blue: 0000FF

    //HEXADECIMAL:
    A hexadecimal number is a base-16 system, which uses 16 digits to represent numbers.
    The first 10 digits are 0–9, The remaining 6 digits are A–F. They are a compact way to represent binary data. Each hexadecimal digit represents 4 bits, also known as a nibble.
    TABLE: In hex A=10, 𝐵=11, C=12, D=13, E=14, and F=15.
        -----------------------------------------------------------
        Decimal Numbers | 4-bit Binary Number | Hexadecimal Number
        -----------------------------------------------------------
        0               | 0000               | 0
        1               | 0001               | 1
        2               | 0010               | 2
        3               | 0011               | 3
        4               | 0100               | 4
        5               | 0101               | 5
        6               | 0110               | 6
        7               | 0111               | 7
        8               | 1000               | 8
        9               | 1001               | 9
        10              | 1010               | A
        11              | 1011               | B
        12              | 1100               | C
        13              | 1101               | D
        14              | 1110               | E
        15              | 1111               | F
    
    Converting Hexadecimals to decimals in graphics/color:
        255 is the maximum value in RGB (Red, Green, Blue) color codes.    
        FF= F×16 ^1 : 15 * 16 ^1(240) AND F×16 ^1 : 15 * 16 ^0(15) = 255(decimal).
        Color Codes: RGB #22177A
            RED             | GREEN              | BLUE
            ------------------------------------------------
            22              | 17                 | 7A
            2*16^1 + 2*16^0 | 1*16^1 + 7*16^0    | 7*16^1 + (A)10*16^0
            32 + 2 = 34     | 16 + 7 = 23        | 112 + 10 = 122;
            RED: 34         | GREEN: 23          | BLUE: 122
    
    GENERAL: 4C4B16 = 4*16^5 + 12*16^4 + a*16^3 + 11*16^2 + 1*16^1 + 6*16^0 = 4,999,958.

    In the world of graphic and colors, we use hexadecimal(0 1 2 3 4 5 6 7 8 9 A B C D E F) whr where as soon as you need more than 10 digits total, you start stealing from the English alphabet. So the next few numbers, or digits rather, are A, B, C, D, E, F. Hex also called base 16.

    // 0x Prefix: Indicates hexadecimals
    
    //Pointer Arithmetic. Get the address of a string using * %p and &
    Pointers are addresses to locations in memory where variables live. Pointers have data types e.g int, char ...
        &: The ampersand gives the address a variable is.
        *: Prints out / points to the information/value stored at that address. Dereference operator.
        %p: Formats the output as a pointer (memory address). It's used to print addresses, 
        
        Arrays are actually pointers: The name of an array is actually a pointer to the first element of that array.*/
    int main(void)
    {
        int n = 50;
        printf("%p\n", &n); //Append & to fetch address.
    };

    int main(void)
    {
        int n = 50;
        int calls = 3;
        int *p = &n //Create a variable p to store the address of n;  print out the p variable.
        int *p = &calls;    //*p is a pointer(not an integer) to the address of calls variable. It is a pointer to an integer, could point to a character too.
        printf("%p\n", p);
        printf("%i\n", *p); //Go to this loacation and print out the info therein.
    }
    //Char *
    //In C, the Data type of a string is actually an array terminated by a null character(\0).
    //And char * s fetches/points to the (address of that variable) character.
    int main(void)
    {   
        char b = "B"
        char *s = "HI!";
        printf("%c\n", b); //Prints single character
        printf("%s\n", s); //Prints entire string
        printf("%p\n", s); //Prints the address
    }

    //Print out individual characters uing c
    int main(void)
    {
        char *s = "HI!";
        printf("%c", s[0]);
        printf("%c", s[1]);
        printf("%c\n", s[2]);
    }

    //Pointer Arithmetic cont.. | Math on addresses
    int main(void)
    {
        char *s = "HI!";
        printf("%c", *s);
        printf("%c", *(s + 1));
        printf("%c\n", *(s + 2));
    }

    //Copying a String; Manual
    #include <stdlib.h>
    int main(void)
    {
        char *s = get_string("Character: ");
        char *t = s;

        if (strlen(t) > 0)
        {
            t[0] = toupper(t[0]);
        }
        printf("%s %s\n", s, t);
    }

    //Malloc: Copying a String; create a duplicate string somewhere in memory
    //Capitalize copied string
    #include <stdlib.h>
    int main(void)
    {
        char *s = get_string("Character: ");
        char *t = malloc(strlen(s) + 1);    //Number of bytes/spaces to create for storing copied string

    if( t == NULL)  //If there isn't enough memory
    {
        return 1;   
    }
        for (int i = 0; len = strlen(s); i <= len; i++)
        {
            t[i] = s[i];
        }
        // strcpy(t, s);
        
        if (strlen(t) > 0)
        {
            t[0] = toupper(t[0]);
        }
        printf("%s %s\n", s, t);
        free(t); //Free up space
        return 0;
    }

    //Copy with Strcopy(destination, source);
    strcpy(t, s);   //As opposed to the for loop above.

    //Valgrind

    //Passing values by reference or copying: Go to location at memory and change values
    void swap(int *a, int *b);
    int main(void)
    {
        int x = 10;
        int y = 50;
        swap(&x, &y);   //Pass in the addresses of x and y
        printf("x is %i, y is %i\n", x, y);
    }
    void swap(int *a, int *b)
    {
        int tmp = *a;
        *a = *b;
        *b = tmp;
    }

    //Dangerous to use | Scanf: A funtion to get inut from users without the CS50 Library
    int manin(void)
    {
        int n;
        printf("n: ");
        scanf("%i", &n);
        printf("n: %i", n);

        //Get String
        char s[4];
        printf("s: ");
        scanf("%s", s); //s is already an address, so no need of &
        printf("s: %s\n", s);
    };

    /*FILE I/O: FILES Input and Output
    fopen : Open a file; similar to create at the first instance.
            (r, w, a)Open for reading, writing or appending.
    fclose: Close a file
    fprintf: Print to a file
    fscanf: Read from a file
    fread: Read from a file
    fseek: Navigate around a file 
    Note: Always fclose all files you fopen. 
    
    Buffer: A place to temporarily store part of our files. A buffer is a variable i.e it can be the address of some place in memory. 
    FREAD: fread takes four arg. 
        1. A Buffer - whr to temp store the data or whr to read to. 
        2. What size is each block/element of data to read. 
        3. How many blocks/elememts to read. 
        4. File pointer i.e From what file we reading data */
    fread(buffer, 1, 4, f); //1. Buffer. 2, texts take 1 byte per character, image 3byte.. 3,Copy four byte at once and repeat until done. 4,filename.
    
    FILE *f = fopen("note.txt", "r"); // Variable f here points to the location of the file in memory in order to find it.

    /*FWRITE: Used in C to write data from a buffer to a file.
        1. Buffer: This is a pointer to the memory location where the data is stored. It could be a buffer containing image data, text, or other binary data that you want to write to a file.
        2. The size of each element to write. E.g 1 byte. It indicates that the data is being written in chunks of 1 byte i.e., it's writing byte by byte.
        3. The number of blocks/elements/BYTES to write.
        4. File pointer i.e pointer to the file you're writing to. It should have been opened earlier with the fopen function. */
    
    //Create a phonebook file
    #include <cs50.h>
    #include <stdio.h>
    #include <string.h>
    int main(void)
    {
        //fopen takes in two arguments: name of the file to open and the mode to open i.e r, w, a
        FILE *file = fopen("phonebook.csv", "a"); //Open the file and returning the address thereof in the computer's memory
        if (file == NULL)   //If file is not found
        {
            return 1;
        }
        char *name = get_string("Name: ");
        char *number = get_string("Number: ");

        fprintf(file, "%s, %s\n", name, number);
        fclose(file);

    }

    /*COPY  Binary Files | Image
    uint8_t represents unsigned 8-bit integer type, capable of representing values from 0 to 255. It can only store non-negative values. Perfect for binary data.
    Each value directly represents 8 bits (1 byte) of raw information.
    No risk of unexpected behavior due to negative values. */
    #include <cs50.h>
    #include <stdio.h>
    #include <stdint.h>

    typedef uint8_t MYBYTE;

    int main(int argc, char *argv[])
    {

        FILE *source = fopen(argv[1], "rb"); //Create a file called source and set it to whatever is in argv[1]; set it to read binary mode.
        FILE *destination = fopen(argv[2], "wb"); //Create a second file called destination and set it to whatever is in argv[2]; but write to it in binary.

        MYBYTE b;   //Create one byte in a variable called b.

        //Copy a file from old to new
        while (fread(&b, sizeof(b), 1, source) != 0)
        {
            fwrite($b, sizeof(b), 1, destination);
        }

        fclose(destination);
        fclose(source);
    }   //To run: make copy.c 
        // code cat.jpg
        // ./copy cat.jpg backup.jpg
        // code backup.jpg

    //Check a file type usnig fread
    #include <cs50.h>
    #include <stdio.h>
    #include <stdint.h>
    int main(int argc, string argv[])
    {
        if (argc != 2)
        {
            return 1;
        }
        string filename = argv[1];
        FILE *f = fopen(filename, "r");
        uint8_t buffer[4];
        fread(buffer, 1, 4, f);

        for (int i = 0; i < 4; i++)
        {
            printf("%i\n", buffer[i]);
        }
        fclose(f);
    }

    /*Call Stack: Function frames
        Stack frame
        Frame
        Active frame 
        Pause/Execute again
        Popped off*/

    //PROJECT 1: WAV File
    // Modifies the volume of an audio file
    #include <stdint.h>
    #include <stdio.h>
    #include <stdlib.h>

    // Number of bytes in .wav header
    const int HEADER_SIZE = 44;

    int main(int argc, char *argv[])
    {
        // Check command-line arguments
        if (argc != 4)
        {
            printf("Usage: ./volume input.wav output.wav factor\n");
            return 1;
        }

        // Open files and determine scaling factor
        FILE *input = fopen(argv[1], "r");
        if (input == NULL)
        {
            printf("Could not open file.\n");
            return 1;
        }

        FILE *output = fopen(argv[2], "w");
        if (output == NULL)
        {
            printf("Could not open file.\n");
            return 1;
        }

        float factor = atof(argv[3]);

        // TODO: Copy header from input file to output file
        //Store my header in an array of 44bytes;
        uint8_t header[HEADER_SIZE];

        //Read the header from the input file
        fread(header, sizeof(uint8_t), HEADER_SIZE, input);

        //Write the header to my output file
        fwrite(header, sizeof(uint8_t), 44, output);


        // TODO: Read samples from input file and write updated data to output file
        //16-bit signed integer
        int16_t buffer;

        //Read one sample(2 bytes) at a time
        while (fread(&buffer, sizeof(int16_t), 1, input))
        {
            // Multiply each sample by the scaling factor to adjust its volume
            buffer *= factor;

            // Now write update sample to new file: output
            //Continue the loop until all my samples have been read
            fwrite(&buffer, sizeof(int16_t), 1, output);
        }
        // Then Close files
        fclose(input);
        fclose(output);
    }

    //FILTER
    #include "helpers.h"
    #include <math.h>
    #include <stdlib.h>

    // Convert image to grayscale
    void grayscale(int height, int width, RGBTRIPLE image[height][width])
    {
        // Loop through the image from row to row i.e row 1 column 1 etc...
        for (int i = 0; i < height; i++)
        {
            for (int j = 0; j < width; j++)
            {
                // Take average of rgb; i.e color intensity and divide it by 3
                // Round to the nearest integer using round function in math.h
                int averageOfRgb =
                    round((image[i][j].rgbtRed + image[i][j].rgbtGreen + image[i][j].rgbtBlue) / 3.0);

                // Set each of the color value to averageOfRgb
                image[i][j].rgbtRed = averageOfRgb;
                image[i][j].rgbtGreen = averageOfRgb;
                image[i][j].rgbtBlue = averageOfRgb;
            }
        }
    }

    // Convert image to sepia
    void sepia(int height, int width, RGBTRIPLE image[height][width])
    {
        // Loop over all pixels
        for (int i = 0; i < height; i++)
        {
            for (int j = 0; j < width; j++)
            {
                // Compute sepia original values
                int sepiaOriginalRed = image[i][j].rgbtRed;
                int sepiaOriginalGreen = image[i][j].rgbtGreen;
                int sepiaOriginalBlue = image[i][j].rgbtBlue;

                // Calculate each pixel and Round up values
                int redSepia = round(0.393 * sepiaOriginalRed + 0.769 * sepiaOriginalGreen +
                                    0.189 * sepiaOriginalBlue);
                int greenSepia = round(0.349 * sepiaOriginalRed + 0.686 * sepiaOriginalGreen +
                                    0.168 * sepiaOriginalBlue);
                int blueSepia = round(0.272 * sepiaOriginalRed + 0.534 * sepiaOriginalGreen +
                                    0.131 * sepiaOriginalBlue);

                // If any color value is more than 255, set it to 255
                if (redSepia > 255)
                {
                    redSepia = 255;
                }
                if (greenSepia > 255)
                {
                    greenSepia = 255;
                }
                if (blueSepia > 255)
                {
                    blueSepia = 255;
                }

                // Update sepia values
                image[i][j].rgbtRed = redSepia;
                image[i][j].rgbtGreen = greenSepia;
                image[i][j].rgbtBlue = blueSepia;
            }
        }
    }

    // Reflect image horizontally
    void reflect(int height, int width, RGBTRIPLE image[height][width])
    {
        // Loop over all pixels
        for (int i = 0; i < height; i++)
        {
            // Iterate over half of the pixels. Simply swap left side pixels with the right side pixels
            for (int j = 0; j < width / 2; j++)
            {
                // Pointer srithmetic
                // Swap pixels using a temporary variable; swap the leftPosition with the rightPosition
                RGBTRIPLE *leftPosition = &image[i][j];
                RGBTRIPLE *rightPosition = &image[i][width - j - 1];

                RGBTRIPLE tmp = *leftPosition;
                *leftPosition = *rightPosition;
                *rightPosition = tmp;
            }
        }
    }

    // Blur image
    void blur(int height, int width, RGBTRIPLE image[height][width])
    {
        // Allocate memory for a copy of the image using malloc
        // int length = height * width * sizeof(RGBTRIPLE);
        RGBTRIPLE(*copy)[width] = malloc(height * width * sizeof(RGBTRIPLE));

        //Check if NULL; i.e if there is not enough memory to allocate
        if(copy == NULL)
        {
            return;
        };

        //Copy original image to the duplicate
        for (int i = 0; i < height; i++)
        {
            for (int j = 0; j < width; j++)
            {
                copy[i][j] = image[i][j];
            }
        }

        // Do the blur effect
        for (int row = 0; row < height; row++)
        {
            for (int column = 0; column < width; column++)
            {

                // Initialize variables to store color values
                int sumOfRed = 0;
                int sumOfGreen = 0;
                int sumOfBlue = 0;

                // Counter to keep track of valid pixels included in the calc
                int counter = 0;

                // Loop through surroundins, pixel itself inclusive
                for (int drow = -1; drow <= 1; drow++)
                {
                    for (int dcolumn = -1; dcolumn <= 1; dcolumn++)
                    {
                        int surrRow = row + drow;
                        int surrColumn = column + dcolumn;

                        // Check if the surrounding pixel is within image baound
                        if (surrRow >= 0 && surrRow < height && surrColumn >= 0 && surrColumn < width)
                        {
                            // If yes, add values to the variables and update counter
                            sumOfRed += copy[surrRow][surrColumn].rgbtRed;
                            sumOfGreen += copy[surrRow][surrColumn].rgbtGreen;
                            sumOfBlue += copy[surrRow][surrColumn].rgbtBlue;

                            counter++;
                        }
                    }
                }

                // Calculate the average for RGB by div the sum by counter
                // Assign back the calc averages to pixel in the image array
                image[row][column].rgbtRed = round((float)sumOfRed / counter);
                image[row][column].rgbtGreen = round((float)sumOfGreen / counter);
                image[row][column].rgbtBlue = round((float)sumOfBlue / counter);
            }
        }

        //Free memory
        free(copy);
    }

    //RECOVER
        #include <stdint.h>
        #include <stdio.h>
        #include <stdlib.h>

        const int blockSize = 512;

        int main(int argc, char *argv[])
        {
            // Check if command line argument is not equal to 2
            if (argc != 2)
            {
                printf("Usage: ./recover FILE\n");
                return 1;
            }

            // Open memory card in read mode
            FILE *card = fopen(argv[1], "r");

            // Check if the file is null
            if (card == NULL)
            {
                printf("Unable to open file.\n");
                return 1;
            }

            // Craete buffer using the unsigned 8 bit integer type
            // because we're reading raw binary data and uint8_t is more suitable to do it;
            // With it, we have a guaranteed size of 1 byte(8-bit) storage.
            uint8_t buffer[blockSize];

            // My file pointer for the current image,initially set to Null to avoid future memory issues
            FILE *image = NULL;

            // Counter
            int count = 0;

            // While there's data
            while (fread(buffer, 1, blockSize, card) == blockSize)
            {
                // Now check if the block is the beginning of a JPEG
                if (buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff &&
                    (buffer[3] & 0xf0) == 0xe0)
                {

                    // Check if any JPEG is being written; close previous file before creating a new file
                    if (image != NULL)
                    {
                        fclose(image);
                    };

                    // Create new file for this image
                    int filenameSize = 8; // i.e 3 zeros, 1 dot, and 'jpg' plus the null terminator.
                    char nameoffile[filenameSize];

                    // Generate and format nameoffiles with 3 digits using the value of my counter
                    // inclusive of '.' and 'jpg'. i.e 000, 001.jpg, 002.jpg etc..
                    sprintf(nameoffile, "%03i.jpg", count++);

                    // Take the image file and write into it. When a new JPEG is detected, open a new file.
                    image = fopen(nameoffile, "w");

                    // Now check if the new file wasn created
                    if (image == NULL)
                    {
                        printf("Unable to create this file\n");
                        return 1; // Return if it fails
                    }
                }

                // If the JPEG is open, write to it
                if (image != NULL)
                {
                    fwrite(buffer, 1, blockSize, image);
                }
            }

            // To avoid memory errors, check if any other file is still opened
            if (image != NULL)
            {
                fclose(image);
            };

            fclose(card);
        }


////////WEEK FIVE
    /*DATA STRUCTURES
    Types of Data Structure: Arrays, Linked List, Hash Tables, Tries.

    High Level Implementation (Abstraction)
    Low Level Implementation

    High Level Implementation (Abstraction)
        Queues: FIFO Structure: First in First out. Operation: Enqueuing(Add element to the end of the queue) and Dequeuing(Remove element from the front of the queue).
        Stacks: LIFO Structure: Last in First Out. Operation: Push(Add new element to the top of the stack) and Pop(Remove most recent element from the top of the stack). Most recent data at the top.

        Making a Queue  */
        #include <cs50.h>
        #include <stdio.h>
        #include <stdlib.h>

        const int CAPACITY = 50;

        typedef struct
        {
            string name;
            string number;
            int votes;
        } person;

        typedef struct
        {
            person people[CAPACITY];
            int size;
        } queue;

        int main()
        {
            queue q;
            q.size = 0;

            //Add a person to the queue
            q.people[q.size].name = get_string("Name: ");
            q.people[q.size].number = get_string("Number: ");
            q.people[q.size].votes = get_int("Votes: ");

            q.size++;

            //Print people in the queue
            printf("People in the queue: \n");
            for (int i = 0; i < q.size; i++)
            {
                printf("Name: %s Number: %s Votes: %i\n",
                q.people[i].name, q.people[i].number, q.people[i].votes);
            }
        }

    //Dynamically allocate more space | Make an list/Array Grow | Give room for future size adjustment
        //Initial array
        int main()
        {
            int list[3];

            list[0] = 1;
            list[1] = 2;
            list[2] = 3;

            for (int i = 0; i < 3; i++)
            {
                printf("%i\n", list[i]);
            }
        }
        //Dynamically allocate more space (Unideal)
        #include <cs50.h>
        #include <stdio.h>
        #include <stdlib.h>

        int main()
        {
            int *list = malloc(3 * sizeof(int)); //Create 3 spaces times the size of an integer i.e 4Bytes * 3; hence treats the lists as an array.

            if (list == NULL)
            {
                return 1;
            }

            list[0] = 1;
            list[1] = 2;
            list[2] = 3;

            int *tmp = malloc(4 * sizeof(int));
            if (tmp == NULL)
            {
                free(list);
                return 1;
            }

            for (int i = 0; i < 3; i++)
            {   //Copy into the temporary array what is in the initial list array
                tmp[i] = list[i];
            }
            //Go to the last location in tmp and set it to 4.
            tmp[3] = 4;

            //Free list
            free(list);

            //Make list point at the new memory; Update it to carry the new value of the created memory
            list = tmp;

            for (int i = 0; i < 4; i++)
            {
                printf("%i\n", list[i]);
            }

            free(list);
        }

    /*Dynamically allocating space in memory that is not necessarily contiguous
    Linking chunks of memory using pointer and addresses
    To link chunks of memory, Store pointers(next element addrresses) alongside data and the last memory chunk should be stored with NULL i.e 0x0 to avoid garbage value.
    NODE: Data/Value stored alongside pointer(next el ad)

    Linked List - Prepeding-Front. Storing Data and a pointer to another node.   */ 
        #include <cs50.h>
        #include <stdio.h>
        #include <stdlib.h>

        typedef struct node //A definition fro a structure called node. Aids using mynode within this struct itself. Why? Because C code is from top to bottom.
        {
            int number;    //A number
            struct node *nextn; //A pointer to another node; the next number
        } node;

        int main(int argc, char *argv[])
        {
            node *list = NULL; 

            for (int i = 1; i < argc; i++)
            {   
                int usernum = atoi(argv[i]);

                node *n = malloc(sizeof(node)); //Allocate memory for a node and store in a pointer
                if (n == NULL)
                {
                    return 1;
                } // printf("%i\n", usernum);

                n->number = usernum;  //Arrow operator does (*n).number = num;
                n-> nextn = list; //Update initial list with the new node.  // n-> nextn = NULL; - Avoid garbage value.
                list = n;
            }
            // Print the whole list; unsorted
            node *ptr = list; //A pointer to the list itself; more like a copy of the addresses
            while (ptr != NULL)
            {
                printf("%i\n", ptr->number);
                ptr = ptr->nextn;

            }
        }
        
    //Linked List - Appending - End */
        typedef struct node //A definition fro a structure called node. Aids using mynode within this struct itself. Why? Because C code is from top to bottom.
        {
            int number;    //A number
            struct node *nextn; //A pointer to another node; the next number
        } node;
        void printList(node *list)
        {
            for (node *ptr = list; ptr != NULL; ptr = ptr->nextn)
                {
                    printf("%i\n", ptr->number);
                }
        } 
        int main(int argc, char *argv[])
        {   node *list = NULL;
            for (int i = 1; i < argc; i++)
            {   int usernum = atoi(argv[i]);

                node *n = malloc(sizeof(node)); //Allocate memory for a node and store in a pointer
                if (n == NULL)
                {   return 1;   } // printf("%i\n", usernum);
                n->number = usernum;  //i.e (*n).number = num;
                n-> nextn = NULL; //Update initial list with the new node.  // n-> nextn = NULL; - Avoid garbage value.
                //If list is empty
                if (list == NULL)
                {   list = n;   }
                //If list has numbers already
                else
                {   //Iterate over nodes in list
                    for (node *ptr = list; ptr != NULL; ptr = ptr->nextn)
                    { //If at the end of a list
                        if (ptr->nextn == NULL)
                        {   //Append node
                            ptr->nextn = n;
                            break; }}}}
            printf("Your linked list contains: \n");
            printList(list);
        }
    
    //Linked List Sorted - Appending - End */
        #include <cs50.h>
        #include <stdio.h>
        #include <stdlib.h>

        typedef struct node //A definition fro a structure called node. Aids using mynode within this struct itself. Why? Because C code is from top to bottom.
        {
            int number;    //A number
            struct node *nextn; //A pointer to another node; the next number
        } node;
        void printList(node *list)
        {
            for (node *ptr = list; ptr != NULL; ptr = ptr->nextn)
                {
                    printf("%i\n", ptr->number);
                }
        };

        int main(int argc, char *argv[])
        {
            node *list = NULL; //Define list as a pointer to a node, but initially set to null

            for (int i = 1; i < argc; i++)
            {
                int usernum = atoi(argv[i]);

                node *n = malloc(sizeof(node)); //Allocate memory for a node and store in a pointer
                if (n == NULL)
                {
                    return 1;
                }
                n->number = usernum;
                n-> nextn = NULL;
                //If list is empty
                if (list == NULL)
                {
                    list = n;   //Point list to the first node created
                }
                //If new node.number is less than list.number, then it belongs at the beginning of the list.
                else if (n->number < list->number)
                {
                    n->nextn = list;    //Update new node.nextn to pint at the current list
                    list = n;           //Update the list variable to point at the address of the new node.
                }
                //If number belongs later in list
                else
                {
                    //Iterate over nodes in list
                    for (node *ptr = list; ptr != NULL; ptr = ptr->nextn)
                    {
                        //If at the end of a list
                        if (ptr->nextn == NULL)
                        {
                            //Append node
                            ptr->nextn = n;
                            break;
                        }
                        //If in the middle of list
                        if (n->number < ptr->nextn->number) //If the new node number(to be inserted) is less than the number in the next node
                        {
                            n->nextn = ptr->nextn; //Update the new node nextn pointer to be equal the current node m pointing at next pointer
                            ptr->nextn = n; //Then update that(next)pointer next field equals new node
                            break;

                        }
                    }
                }
            }
            printf("Your linked list contains: \n");
            printList(list);
        }

        //Implementing nodes/data in a binary search tree
        //Recursion
            typedef struct node
            {
                int number;
                struct node *left;
                struct node *right;
            } node;

            bool search(node *tree, int number);
            node *insert(node *tree, int number);
            void free_tree(node *tree);

            int main(void)
            {
                node *tree = NULL;
                // Insert numbers into the tree
                tree = insert(tree, 10);
                tree = insert(tree, 5);
                tree = insert(tree, 15);
                // Prompt user for a number to search
                int target = get_int("Enter a number to search: ");
                if (search(tree, target))
                {`printf("%i is in the tree!\n", target);`}
                else
                {   printf("%i is not in the tree.\n", target); }

                // Free the allocated memory
                free_tree(tree);
                return 0;
            }

            // Search for a number in the binary search tree
            bool search(node *tree, int number)
            {
                if (tree == NULL)
                {   return false;   }
                else if (number < tree->number)
                {
                    return search(tree->left, number);
                }
                else if (number > tree->number)
                {
                    return search(tree->right, number);
                }
                else
                {
                    return true;
                }
            }

            // Insert a number into the binary search tree
            node *insert(node *tree, int number)
            {
                if (tree == NULL)
                {
                    node *n = malloc(sizeof(node));
                    if (n == NULL)
                    {
                        printf("Memory allocation failed.\n");
                        exit(1);
                    }
                    n->number = number;
                    n->left = NULL;
                    n->right = NULL;
                    return n;
                }
                else if (number < tree->number)
                {
                    tree->left = insert(tree->left, number);
                }
                else if (number > tree->number)
                {
                    tree->right = insert(tree->right, number);
                }
                return tree;
            }

            // Free the memory allocated for the binary search tree
            void free_tree(node *tree)
            {
                if (tree != NULL)
                {
                    free_tree(tree->left);
                    free_tree(tree->right);
                    free(tree);
                }
            }

        /*Hash Tables | Dictionary: An array of linked list 
        In  hash table, we use an hash function to generate index values. Key: Hash code and Value:Linked List */
        #include <cs50.h>
        #include <stdio.h>
        #include <ctype.h>
        int hash(string phrase);

        typedef struct node
        {
            string phrase;
            struct node *next;
        } node;

        //node *table[26];

        int main(void)
        {
            for (int i = 0; i < 1; i++)
            {
                string phrase = get_string("Enter a new phrase: ");

                //Find phrase in bucket
                int bucket = hash(phrase);
                printf("%s hashes to %i\n", phrase, bucket);
            }
        };

        int hash(string phrase)
        {
            return toupper(phrase[0]) - 'A';
        };
    
    //Tries: combine arrays, structures, and pointers together to store data. We use the data as a roadmap to navigate this data structure.
    //The basic idea behind a trie is we have a central route with branches/pathways whc will be our connection to whatever data we searching for.
    //Quick insertions, quick deletions and quick lookup.

    //INHERITANCE
        // Simulate genetic inheritance of blood type
        #include <stdbool.h>
        #include <stdio.h>
        #include <stdlib.h>
        #include <time.h>

        // Each person has two parents and two alleles
        typedef struct person
        { // Every person will have an array of two parents and each of these 2 parents will be an pointer to another person struct. Every person will also have an array of two ch called alleles.
            struct person *parents[2];
            char alleles[2];
        } person;

        const int GENERATIONS = 3;
        const int INDENT_LENGTH = 4;

        person *create_family(int generations);
        void print_family(person *p, int generation);
        void free_family(person *p);
        char random_allele();

        int main(void)
        {
            // Seed random number generator
            srand(time(0));
            // Create a new family with three generations
            person *p = create_family(GENERATIONS);
            print_family(p, 0);
            free_family(p);
        }

        // Create a new individual with `generations`
        person *create_family(int generations)
        {
            person *newPerson = malloc(sizeof(person));
            if (newPerson == NULL)
            {
                printf("Unable to allocate memory for newPerson\n");
                return NULL;
            }
            // If there are still generations left to create
            if (generations > 1)
            {
                // Create two new parents for current person by recursively calling create_family
                person *parent0 = create_family(generations - 1);
                person *parent1 = create_family(generations - 1);

                // TODO: Set parent pointers for current person
                newPerson->parents[0] = parent0;
                newPerson->parents[1] = parent1;

                // TODO: Randomly assign current person's alleles based on the alleles of their parents
                newPerson->alleles[0] =
                    parent0->alleles[rand() % 2]; // Divide a reandom num by 2 and return the remainder
                newPerson->alleles[1] = parent1->alleles[rand() % 2];
            }        
            else // If there are no generations left to create
            {   // TODO: Set parent pointers to NULL
                newPerson->parents[0] = NULL;
                newPerson->parents[1] = NULL;

                // TODO: Randomly assign alleles
                newPerson->alleles[0] = random_allele();
                newPerson->alleles[1] = random_allele();
            }

            // TODO: Return newly created person
            return newPerson;
        }

        // Free `p` and all ancestors of `p`.
        void free_family(person *p)
        {   // TODO: Handle base case
            if (p == NULL)
            {
                return;
            }
            // TODO: Free parents recursively
            // Function calls itself to free the memory for person's parent before freeing person itself.
            free_family(p->parents[0]);
            free_family(p->parents[1]);
            // TODO: Free child; once both parents are freed, free person|current
            free(p);
        }
        // Print each family member and their alleles.
        void print_family(person *p, int generation)
        {   // Handle base case
            if (p == NULL)
            {
                return;
            }
            // Print indentation
            for (int i = 0; i < generation * INDENT_LENGTH; i++)
            {
                printf(" ");
            }
            // Print person
            if (generation == 0)
            {
                printf("Child (Generation %i): blood type %c%c\n", generation, p->alleles[0],
                    p->alleles[1]);
            }
            else if (generation == 1)
            {
                printf("Parent (Generation %i): blood type %c%c\n", generation, p->alleles[0],
                    p->alleles[1]);
            }
            else
            {
                for (int i = 0; i < generation - 2; i++)
                {
                    printf("Great-");
                }
                printf("Grandparent (Generation %i): blood type %c%c\n", generation, p->alleles[0],
                    p->alleles[1]);
            }
            // Print parents of current generation
            print_family(p->parents[0], generation + 1);
            print_family(p->parents[1], generation + 1);
        }
        // Randomly chooses a blood type allele.
        char random_allele()
        {
            int r = rand() % 3;
            if (r == 0)
            {
                return 'A';
            }
            else if (r == 1)
            {
                return 'B';
            }
            else
            {
                return 'O';
            }
        };


    //SPELLER
    // Implements a dictionary's functionality
        #include <ctype.h>
        #include <stdbool.h>
        #include <stdint.h>
        #include <stdio.h>
        #include <stdlib.h>
        #include <string.h>

        #include "dictionary.h"

        // Represents a node in a hash table
        typedef struct node
        {
            char word[LENGTH + 1];
            struct node *next;
        } node;

        // My word tracker to aid my size
        unsigned int wordCounter = 0;

        // TODO: Choose number of buckets in hash table
        const unsigned int N = 26;

        // Hash table: An array of linked list
        node *table[N];

        // Returns true if word is in dictionary, else false
        bool check(const char *word)
        {
            // TODO: Check if a word is in my dictionary
            // Convert input to lowercase for case sensitivity
            char wordtoLowerCase[LENGTH + 1];
            int i = 0;

            while (word[i] != '\0' && i < LENGTH)
            {
                wordtoLowerCase[i] = tolower(word[i]);
                i++;
            }
            wordtoLowerCase[i] = '\0';

            // Now hash the lowercase word to obtain a hash value
            unsigned int hashWord = hash(wordtoLowerCase);

            // Access the linked list at this hashed index in my hash table
            // Set my wordFinder to the first item in the linked list
            node *wordFinder = table[hashWord];

            // Loop through the list to NULL to see if word exists;
            while (wordFinder != NULL)
            {
                // Convert the stored word  in the hash table to lowercase
                char storedWordtoLowerCase[LENGTH + 1];
                int j = 0;

                while (wordFinder->word[j] != '\0' && j < LENGTH)
                {
                    storedWordtoLowerCase[j] = tolower(wordFinder->word[j]);
                    j++;
                }
                storedWordtoLowerCase[j] = '\0';

                // Compare the words
                if (strcmp(storedWordtoLowerCase, wordtoLowerCase) == 0)
                {
                    // printf("Word exists in dictionary\n");
                    return true;
                }

                // If words don't match, set my wordFinder to the next node in the linked list
                wordFinder = wordFinder->next;
            }

            // If unable to find word at the end of loop, return false
            return false;
            // printf("Word doesn not exist in dictionary\n");
        }

        // Hashes word to a number
        unsigned int hash(const char *word)
        {
            // TODO: Improve this hash function
            unsigned int myHashValue = 1;

            for (int i = 0; word[i] != '\0'; i++)
            {
                unsigned int idx = tolower(word[i]);
                myHashValue += idx - 1;
            }
            // Limit myHashValue to the range of [0 and 25];
            return myHashValue % N;
        }

        // Loads dictionary into memory, returning true if successful, else false
        bool load(const char *dictionary)
        {
            // TODO
            // Character Array to read word into
            char word[LENGTH + 1];
            // Open dictionary file
            FILE *fileSource = fopen(dictionary, "r");
            if (fileSource == NULL)
            {
                return NULL;
            }

            // Run a loop(to read strings one at a time ) until the end of the file i'm reading (EOF)
            while (fscanf(fileSource, "%s", word) != EOF)
            {
                // Malloc memory for my new node
                node *newNode = malloc(sizeof(node));

                // If unable to allocate space for my new node, return false
                if (newNode == NULL)
                {
                    printf("Oops! Unable to allocate space for node\n");
                    return false;
                }
                // Copy the current word into the newNode
                strcpy(newNode->word, word);

                // Determine word index using the hash function
                const int wordIndex = hash(word);

                // Set my newNode next pointer to the first element in my linked list
                newNode->next = table[wordIndex];

                // Then reset the first element in my linked list to point at the newNode
                table[wordIndex] = newNode;

                // Keep track with the no of words added to my doctionary while iterating
                wordCounter++;
            }

            // Close opened file at the end of reading
            fclose(fileSource);

            // Return true upon successfully loading dictionary into memory
            return true;
        }

        // Returns number of words in dictionary if loaded, else 0 if not yet loaded
        unsigned int size(void)
        {
            // TODO: Return the number of words that are in my dictionary
            return wordCounter;
        }

        // Unloads dictionary from memory, returning true if successful, else false
        bool unload(void)
        {
            // TODO: Free up all the meory allocated for my hash table
            // Use a loop

            for (int i = 0; i < N; i++)
            {

                node *memoryFreeer = table[i];

                while (memoryFreeer != NULL)
                {
                    // Create a temporary pointer to grasp my current node(memoryFreeer) before freeing
                    node *tempN = memoryFreeer;

                    // Move my memory freeer to the the next element in the linked list before freeing the
                    // first element
                    memoryFreeer = memoryFreeer->next;

                    // Now free temp
                    free(tempN);
                }
            }
            return true;
        }


/////////WEEK SIX - PYTHON