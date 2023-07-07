## Description

Simple Category API that displays flat-stored categories objects in a tree recursively with fitler

## Assumptions

- Categories are not in thousands; this assumes that the number of categoires in the db is not huge and so, at the very beginning of the call, all categories will be retrieved at once. Instead of building the tree on a query level and put a db call inside each recursion cycle because this will cause a performance hazard later on.

## Endpoints

- GET `categories/` => this reconstructs the entire list of categories and returns it in a tree-form in JSON.
- GET `categories/:id` => this assumes that whatever id in the input is the root-node category in the tree and reconstructs the tree as such.
- GET `categories/flat/all` => this returns a flat list of categories (not tree)
- GET `categories/flat/one/:id` => this returns a specific category object using id

## Migrations

- `GenerateAndSeedCategories` => This migration works automatically on application starting and it inserts a sample of 50 category objects into DB.
- The following commands can be used to create and revert migrations (for testing)

```bash
$ npm run typeorm migration:create ./src/app/data/migrations/GenerateAndSeedCategories
$ npm run typeorm migration:revert -- -d ./src/app/config/datasource.config.ts
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev

```
