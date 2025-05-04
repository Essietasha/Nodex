-- SQL Structured Query Language - A programming language used to manage and manipulate relational databases. 
--     Enables dbtable to perform tasks such as querying data, updating records, creating or modifying database schemas, and managing database access permissions.
--     Database-centric language

--     NOTE: SQL is the standard Structured Query Language used by various database systems (e.g., MySQL, PostgreSQL, SQL Server) while SQLite3 is a database system(i.e a subset of SQL).
        -- SQL - Is a language you can use to write queries/communicate on databases(Sqlite, MySQL, PostgreySQL, Oracle)
        -- Sqlite, MySQL, PostgreySQL, Oracle - Softwares you can use to access data in databases.
            -- They Can be called databases and software at the same time.
        -- mydatabase.db - Can be called a database.
        -- Database: Table, rows and columns.

-- (https://www.w3schools.com/sql/sql_ref_keywords.asp)
--     Key Concepts
--     1. Databases: Organized collections of data.
--     2. Tables: Data is stored in tables, which consist of rows and columns.
--     3. Queries: Commands to retrieve or manipulate data.

-- SQLite3: A lightweight, serverless, self-contained SQL database engine. Commonly used for applications that need a simple, embedded database.
--     In SQLite, the database itself is stored as a single file (e.g., .db) which contains all tables, data, indexes, and schema information.
--     Key Features
--         Self-Contained: A single library provides all functionalities.
--         Serverless: No need for a server setup; it operates directly on a database file.
--         Zero Configuration: No setup or administration required.
--         Cross-Platform: Works on various operating systems (Windows, macOS, Linux).
--         File-Based: The entire database is stored in a single file. Can import/export data to/from formats like CSV using SQL commands.
--         Lightweight: Minimal resource usage.

--     Basic Concepts
--         Database: A file that holds the data.
--         Table: A collection of related data.
--         Row: A single record in a table.
--         Column: An attribute of the data.

--     Use Cases
--         Embedded systems and IoT devices. (ATM machones, Digital watches, Smart Tvs, Security Cams)
--         Mobile applications (e.g., Android, iOS).
--         Desktop applications (e.g., browsers, text editors).
--         Prototyping or small-scale applications.
--         Local storage for apps (e.g., caching, preferences).

--      Data Types in SQLite
        NULL: -- Missing or undefined values.
        INTEGER: -- Whole numbers.
        REAL: -- Floating-point numbers.
        TEXT: -- Strings.
        BLOB: -- Binary data. SQLite can store binary data (e.g., images, PDFs) as BLOBs in the database.
        NUMERIC: -- Dates
    -- SQL follows the CRUD Paradigm
        -- C - CREATE/INSERT
        -- R - READ/SELECT
        -- U - UPDATE
        -- D - DELETE/DROP

    
--     SQLite3 Commands
         .open <filename>: -- Open a database file.
         .tables: -- List all tables in the database.
         .schema: -- Show the SQL schema/Outline of the database.
         .quit: -- CTRL+d To exit the SQLite shell. To quit. 
          CTRL+L -- Clear/Clean terminal

        -- Rows-Top to bottom. Columns-Left to right.

    -- DESIGN PRINCIPLE
        -- Create one table for each entity in your dataset
        -- All tables should have one primary key
        -- The information in the table should depend on the primary key only.


    -- 1. Run/Creating a Database
    --     sqlite3 favorites.db

    -- 1b. Load a CSV file into the database
        Run "cd"
        Run "sqlite3 mydatabase.db"   -- Create/Open Database
        Run ".mode csv" + Enter     -- Set mode
        Run ".import favorites.csv dbtable" --Import CSV file and create table. Csvfilename Tablename
        Run ".quit" + Enter -- To quit. (CTRL+d) Always use .quit to exit SQLite gracefully, especially if you’ve made changes to the database.
        Run "ls" --To check files
        Run "sqlite3 mydatabase.db" -- To open the file again
        Run ".schema" -- To show the schema/outline of the database.
        Run ".schema shows" -- To show the schema/outline of a particular table in the database.
    
    -- 2. Creating a Table
        CREATE TABLE dbtable ( language TEXT, problem TEXT, email TEXT UNIQUE NOT NULL, pubdate NUMERIC, id INTEGER PRIMARY KEY AUTOINCREMENT);
        CREATE TABLE dbtable ( id INTEGER, language TEXT, problem TEXT, email TEXT UNIQUE NOT NULL, pubdate NUMERIC, PRIMARY KEY(id));

    -- 3. Inserting Data
        INSERT INTO dbtable (name, email, pubdate) VALUES ('Alice', 'alice@ex.com', '2024-12-12');
        INSERT INTO dbtable (name, email) VALUES ('Alice', 'alice@ex.com'), ('Tom', 'tom@ex.com'), ('Joe', 'joe@ex.com');

    -- 4. Querying Data
        SELECT * FROM dbtable;

    -- 5. Updating Data
        UPDATE dbtable SET name = 'Alice Smith' WHERE id = 1;

    -- 6. Deleting Data
        DELETE FROM dbtable WHERE id = 1;

    -- 7. Dropping a Table
        DROP TABLE dbtable;


    --Select Columns from Table
        SELECT * FROM dbtable;
        SELECT language FROM dbtable;
        SELECT problem FROM dbtable;
        SELECT language FROM dbtable LIMIT 10;
    
    -- Functionalities
        -- AVG
        -- COUNT    - To count data
        -- DISTINCT
        -- LOWER
        -- MAX
        -- MIN
        -- UPPER
        -- ROUND
        -- SUM

        -- SQL Keywords
            -- SELECT
            -- WHERE - To filter data, conditionally
            -- LIKE
            -- ORDER BY - Order Data
            -- LIMIT
            -- GROUP BY
            -- SET
            -- NULL
            -- UNIQUE
            -- = - Used to match a single value in a query.
            -- IN - Used to match multiple values from a list.
    
    -- Select total number of rows in problem set from csv file.
        SELECT COUNT(*) FROM dbtable; 
        SELECT COUNT(language) FROM dbtable; 

    -- Select/Count Distinct Laguages from the dbtable
        SELECT DISTINCT(language) FROM dbtable; 
        SELECT COUNT(DISTINCT(language)) FROM dbtable; 
    
    -- SELECT DATA CONDITIONALLY using WHERE Keyword
        SELECT * FROM dbtable WHERE language = 'C'; 
        SELECT COUNT(*) FROM dbtable WHERE language = 'C'; 
        SELECT * FROM dbtable WHERE language = 'C' AND problem = 'Mario'; 
        SELECT COUNT(*) FROM dbtable WHERE language = 'C' AND problem = 'Mario'; 

    -- GROUP | ORDER ITEMS/ROWS TOGETHER
        SELECT language, COUNT(*) FROM dbtable GROUP BY language;
        SELECT language, COUNT(*) FROM dbtable GROUP BY language;

    -- ORDER/Group ITEMS/ROWS TOGETHER
        SELECT language, COUNT(*) FROM dbtable GROUP BY language ORDER BY COUNT(*);
        SELECT language, COUNT(*) FROM dbtable GROUP BY language ORDER BY COUNT(*) ASC;
        SELECT language, COUNT(*) FROM dbtable GROUP BY language ORDER BY COUNT(*) DESC;

    -- Create a synonym/Var
        SELECT language, COUNT(*) AS n FROM dbtable GROUP BY language ORDER BY n DESC;


    -- ADD DATA TO A DATABASE
            INSERT INTO dbtable (language, problem) VALUES('SQL', 'FiftyVille');
            SELECT * FROM dbtable; -- Confirm
    
    -- DELETE Data
        DELETE FROM dbtable WHERE id = 1;
    
    -- UPDATE A DATABASE
        UPDATE dbtable SET language = 'SQL' WHERE problem = FiftyVille;




    -- WORKING WITH REAL WORLD DATA -
        -- IMBD - internet Movie Database
        -- To use shows.db
        -- Download the file, extract/unzip, drag and drop into project folder in VScode, cd to project folder, 
            -- Open the database by running "sqlite3 shows.db", Run ".tables" to view. Query "SELECT * FROM shows LIMIT 10;". Quit ".quit"
        
        SELECT * FROM shows LIMIT 10; 
        SELECT * FROM ratings LIMIT 10; 
    
    -- Relational Databases
    -- RELATIONSHIPS BETWEEN DATA/TABLES
        -- 1. ONE-TO-ONE Relationship: which means every show has one rating, which means every row in the shows table has a corresponding row in the ratings table.

            -- Primary Key - A unique id E.g unique id for shows table, unique id for each person in the people table. Primary key are indexed by default.
            -- Foreign Key - Keys that don't emanate from a table originally but comes from other table. Helps to link two tables together. i.e A primary key used in another table.
                -- Associate/Join Table: This table associates certain two foreign keys
            SELECT * FROM ratings WHERE rating >= 6.0 LIMIT 10; 
            SELECT show_id FROM ratings WHERE rating >= 6.0 LIMIT 10;
            
            -- Nested Query | Conditions
            -- Select All from shows table where the ID is in the ratings table and rating there is >= 6;
            -- Subquery -Get show name even if not in the ratings table 
            SELECT * FROM shows WHERE id IN (SELECT show_id FROM ratings WHERE rating >= 6.0 LIMIT 10); 
            -- JOIN TABLES --Then get name and rating of the movie
            SELECT * FROM shows JOIN ratings ON shows.id = ratings.show_id WHERE rating >= 6.0 LIMIT 10; 
            SELECT title, rating FROM shows JOIN ratings ON shows.id = ratings.show_id WHERE rating >= 6.0 LIMIT 10; 
        
        -- 2. ONE-TO-MANY Relationship: one-to-many means that one show can have many genres. One-to-one would mean one show can have one rating
                SELECT show_id FROM genres WHERE genre = 'Comedy' LIMIT 10;
                SELECT title FROM shows WHERE id IN (SELECT show_id FROM genres WHERE genre = 'Comedy' LIMIT 10);
                -- Select specific
                SELECT genre FROM genres WHERE show_id = 63881;
                SELECT genre FROM genres WHERE show_id = (SELECT id FROM shows WHERE title = 'Catweazle');

        -- 3. MANY-TO-MANY Relationship: Instance, any TV show can obviously have many people in it, but one person can presumably star in many different shows.
            -- When you have a many-to-many relationship, you actually do need this third table to bridge the two any number of times.
            SELECT * FROM shows WHERE title = 'The Office';
            SELECT * FROM shows WHERE title = 'The Office' and AND year = 2005;

            -- Get all the people who starred in this movie; althogh the people and stars details not in the shows table
            SELECT person_id FROM stars WHERE show_id = (SELECT id FROM shows WHERE title = 'The Office' and AND year = 2005);
            -- Add names to the previous query| Nested
            SELECT name FROM people WHERE id IN
            (SELECT person_id FROM stars WHERE show_id = 
            (SELECT id FROM shows WHERE title = 'The Office' and AND year = 2005));

        -- Suppose we want to search all of Steve Carell shows, not just The Office.
            SELECT title FROM shows WHERE id IN
            (SELECT show_id FROM stars WHERE person_id = 
            (SELECT id FROM people WHERE name = 'Steve Carell'));

        -- JOINING TWO/THREE TABLES TOGETHER; Slow although
            SELECT title FROM shows JOIN stars ON shows.id = stars.show_id JOIN people ON stars.person = stars.person_id WHERE name = 'Steve Carell';
            -- OR
            SELECT title FROM shows, stars, people WHERE shows.id = stars.show_id AND people.id = stars.person_id And name = 'Steve Carell';

    -- TIME QUERIES
    .timer ON -- Run ".timer ON"
    .timer OFF -- Run ".timer OFF"

    -- LIKE: allows me to specify something like, not just particularly equal to, but matching some particular pattern.
    --LIKE keyword can be used to match strings with certain phrases (like “feat.”!). To do so, you can use %: a wildcard character that matches any sequence of characters.
        SELECT name FROM songs WHERE name LIKE '%feat.%';
        SELECT title, year FROM movies WHERE title LIKE '%Harry Potter%';

    
    -- INDEXES: A data structure that makes it faster to perform queries, like selects, and even other queries as well. At the expense of memory though.
        -- Create index on table columns to make queries/search faster; mitigate linear search.
        -- Create an Index
            CREATE INDEX indexname ON table(column); -- Syntax
            CREATE INDEX title_index ON shows(title);
            CREATE INDEX person_index ON stars(person_id);
            CREATE INDEX show_index ON stars(show_id);
            CREATE INDEX name_index ON people(name);

        -- Delete an Index
            DROP INDEX index_name;

    -- Combine SQL with Python

    -- Race Conditions

    -- SQL Injection Attacks | Hacks
        -- Ignores the rest of a line of code
        -- Being careful with the -- comment symbols when accepting/using user queries/inputs
        -- NOTE: (--) Ignores the rest of a line of code
        -- AVOID:
        rows = db.execute(f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'")
        if rows:
        ...
            -- malan@harvard.edu'-- here finishes the devloper's code and ignores the rest of the code.
        -- OR tjo seems good enough with using cs50 library but not SQL in general
        rows = db.execute(f"SELECT * FROM users WHERE username = 'malan@harvard.edu''--' AND password = '{password}'")

        -- SOLUTION:  Always use parameterized queries to prevent SQL injection attacks.
        rows = db.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
        rows = db.execute("SELECT * FROM users WHERE username = ? AND password = ?", username, password)


-- Create a Python program that queries the database(pulls data from the database) for a value and then prints something out.
    -- from cs50 import SQL

    -- db = SQL("sqlite:///mydb.db")

    -- fav = input("Favorite: ")

    -- rows = db.execute("SELECT COUNT(*) AS n FROM mydbtable WHERE language = ?", fav)

    -- row = rows[0]
    -- print(row)
    -- print(rows)
    -- print(row["n"])


-- PRACTICE
    CREATE TABLE books (id INTEGER, title TEXT, published NUMERIC, rating INTEGER, PRIMARY KEY(id));
    CREATE TABLE authors (id INTEGER, author TEXT, birthyear INTEGER, PRIMARY KEY(id));
    -- CREATE TABLE bookauthored (id INTEGER, author_id INTEGER, book_id INTEGER, PRIMARY KEY(id));
    CREATE TABLE bookauthored (author_id INTEGER, book_id INTEGER, PRIMARY KEY(author_id, book_id), FOREIGN KEY(author_id) REFERENCES authors(id), FOREIGN KEY(book_id) REFERENCES books(id));
                -- FK- To make sure that the author id column is known to be referencing the primary key and the authors table

    -- Read a sql file from cs50
    .read 1.sql

    SELECT name, tempo FROM songs ORDER BY tempo;
    SELECT name, duration_ms FROM songs ORDER BY duration_ms DESC LIMIT 5;
    SELECT name from songs WHERE danceability > 0.75 AND energy > 0.75 AND valence > 0.75;

    -- Aggregate function - Calculator
        COUNT(column)
        AVG(column)
        MIN(column)

        SELECT ROUND(AVG(energy), 2) FROM songs;
        -- COMBINE TABLES | Subquery | Join Tables
        SELECT name FROM songs WHERE artist_id = (SELECT id FROM artists WHERE name = 'Post Malone');

        SELECT songs.name, energy, artists.name FROM songs JOIN artists ON artists.id = songs.artist_id WHERE artists.name = 'Drake';
        SELECT AVG(energy) FROM songs JOIN artists ON artists.id = songs.artist_id WHERE artist.name = 'Drake';

    -- LIKE: allows me to specify something like, not just particularly equal to, but matching some particular pattern.
        SELECT name FROM songs WHERE name LIKE '%feat.%';

    -- Query to list all movies released in 2010 and their ratings, in descending order by rating. For movies with the same rating, order them alphabetically by title.
        -- Nesting Keywords with commas.
        SELECT title, rating
            FROM movies
            JOIN ratings
                ON movies.id = ratings.movie_id
            WHERE year = 2010
            ORDER BY rating DESC, title ASC;

    -- Query to list the names of all people who starred in Toy Story.
        SELECT name
            FROM people
            WHERE id IN
            (
                SELECT person_id
                    FROM stars
                    WHERE movie_id = (
                        SELECT id
                            FROM movies
                            WHERE title = 'Toy Story'
                    )
            );

    -- Query to list the names of all people who starred in a movie released in 2004, ordered by birth year.
        SELECT name
        FROM people
        WHERE id IN(
            SELECT person_id
            FROM stars
            WHERE movie_id IN(
                SELECT id
                    FROM movies
                    WHERE year = 2004
            )
        );
        
    -- Query to list the titles of the five highest rated movies (in order)
        -- that Chadwick Boseman starred in, starting with the highest rated.
        SELECT title
            FROM movies
            JOIN stars
                ON movies.id = stars.movie_id
            JOIN people
                ON stars.person_id = people.id
            JOIN ratings
                ON movies.id = ratings.movie_id
            WHERE name = 'Chadwick Boseman'
            ORDER BY rating DESC
            LIMIT 5;

    -- Query to list the titles of all movies in which both Bradley Cooper and Jennifer Lawrence starred.
        SELECT title
            FROM movies
            JOIN stars
                ON movies.id = stars.movie_id
            WHERE stars.person_id IN(
                SELECT id
                    FROM people
                    WHERE name IN(
                        'Bradley Cooper', 'Jennifer Lawrence'
                    )
            );


    -- Query to list the titles of all movies in which both Bradley Cooper and Jennifer Lawrence starred.
        -- Filters Groups, Not Rows. HAVING filters aggregated results I.E filters rows after aggregation.
        -- The HAVING clause in SQL is used to filter results after the GROUP BY operation. It works similarly to the WHERE clause but applies conditions to aggregated data rather than individual rows.
        -- Filtering groups with HAVING: You often combine grouping with HAVING to filter grouped results. 
        -- Here, the HAVING clause applies a condition on the grouped result, requiring a count.
        SELECT title
            FROM movies
            JOIN stars
                ON movies.id = stars.movie_id
            WHERE stars.person_id IN(
                SELECT id
                    FROM people
                    WHERE name IN(
                        'Bradley Cooper', 'Jennifer Lawrence'
                    )
            )
            GROUP BY title
            -- This HAVING clause will filter the grouped result
            -- It will make sure that only movies with two both actors are returned in my query
            HAVING COUNT(DISTINCT stars.person_id) = 2;

    --
        SELECT id, name, birth FROM people WHERE name = 'Kevin Bacon' AND birth = 1958;

    -- DISTINCT: The DISTINCT keyword in SQL ensures that duplicate rows are removed from the result set, so you only get unique rows. In the context of your query.
        -- Use DISTINCT when you're grouping or filtering data and there’s a possibility of duplicate rows appearing in your result.
        -- Since multiple rows in the stars table can connect the same person to multiple movies, you might end up with duplicate names in the output.
        -- Adding DISTINCT ensures that each person's name appears only once in the result, even if they starred with Kevin Bacon in more than one movie.
        
        -- Query to list the names of all people who starred in a movie in which Kevin Bacon also starred.
        SELECT DISTINCT name
        FROM people
        WHERE id IN (
            SELECT person_id
            FROM stars
            WHERE movie_id IN (
                SELECT movie_id
                FROM stars
                WHERE person_id = (SELECT id FROM people WHERE name = 'Kevin Bacon' AND birth = 1958
                )
            )
        )
        AND name != 'Kevin Bacon';

-- FIFTY VILLE
    SELECT DISTINCT name FROM people JOIN bakery_security_logs ON people.license_plate = bakery_security_logs.license_plate
        JOIN passengers ON people.passport_number = passengers.passport_number
        WHERE people.license_plate IN(
            SELECT license_plate
            FROM bakery_security_logs
            WHERE month = 7 AND day = 28 AND hour = 10
            AND minute BETWEEN 15 AND 25
            AND activity = 'exit'
        )
        AND people.phone_number IN (
            SELECT caller
            FROM phone_calls
            WHERE month = 7 AND day = 28 AND duration <= 60
            )
        AND people.passport_number IN(
            SELECT passport_number
            FROM passengers
            WHERE flight_id IN (
                SELECT id FROM flights
                WHERE hour = 8 AND minute = 20
                )
            )
        AND people.id IN (
            SELECT person_id
            FROM bank_accounts
            WHERE account_number IN (
                SELECT account_number
                FROM atm_transactions
                WHERE month = 7 AND day = 28
                AND atm_location = 'Leggett Street'
                AND transaction_type = 'withdraw'
                )
        );


    -- The Accomplice
    SELECT name FROM people
    WHERE phone_number IN(
        SELECT receiver from phone_calls
        WHERE caller = (
            SELECT phone_number FROM people
            WHERE name = 'Bruce')
    AND day = 28 AND month = 7 AND duration <= 60
    );