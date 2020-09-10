# barebones-sqlite-typeorm-example

This project is meant to be an as-simple-as-possible project demonstrating the usage of typeorm for generating sqlite migrations based on the typeorm entities (in this case, the User entitity located in `src/entities/User.ts`).

Sadly, nothing happens when I run the "generate" typeorm migration command so really this project is for debugging this issue.


## Usage

First, install typeorm globally
```
npm i -g typeorm
```

Then install project dependencies
```
npm i
```

Then run the three migrations:
```
./node_modules/.bin/ts-node ./node_modules/typeorm/cli.js migration:run
```

Notice how this creates a "user" table in your sqlite database and how the user has a field named "bar".


## From Scratch Usage

First, begin with an empty project.

Then create the initial project with the typeorm init command specifying sqlite:
```
typeorm init --database=sqlite
```

Then generate an initial migration
```
./node_modules/.bin/ts-node ./node_modules/typeorm/cli.js migration:generate -n initial
```

^ (note how this creates an initial migration which creates the table with initial columns)


You can apply this change to your database by running the migration:
```
./node_modules/.bin/ts-node ./node_modules/typeorm/cli.js migration:run
```

Note: you can easily view the stuff in your sqlite db with the program [SQLite Browser](https://sqlitebrowser.org/dl/). Open the database.sqlite file that is created in your project.


Then try adding a field named "foo" to the data model (src/entity/User.ts) and re-run the migration generating.

Add some data (via SQLite Browser Execute SQL section):
```
INSERT INTO user VALUES (2, "jim", "lynch", 12, "ok")
```

Now change the data model field from "foo" to "bar". Generate and run a new miration.

__Notice how, for every row, the data in the column named "foo" is transferred to the column "bar".__

^ This is the key reason why database migrations are so useful!!

### How about the mongo version?
This example is working fine, but I am having a hella difficult time (recreating this project but with a mongodb database)[https://github.com/JimLynchCodes/barebones-mongo-typeorm-example].

If you have idea and would like to help me out, please respond to my stack overflow question! 🙏

Thanks!

