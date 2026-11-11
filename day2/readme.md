# Employee Utility - TypeScript

## Description
A TypeScript utility that fetches employee information from an API and processes the data.

## Features
- Fetch employee data using async/await.
- Define Employee and API response interfaces.
- Handle loading and errors.
- Process employee data using map(), filter() and reduce().
- Includes five automated test cases.

## Technologies
- TypeScript
- Node.js
- npm

## Run Instructions

Install dependencies:

```bash
npm install
```

Compile TypeScript:

```bash
npx tsc
```

Run the application:

```bash
node dist/main.js
```

Run tests:

```bash
node --test dist/employee.test.js
```

## Test Results
5 tests passed, 0 failed.

## API
https://jsonplaceholder.typicode.com/usersmkdir outputs
node --test dist/employee.test.js > outputs\test-output.txt