# String Calculator

A simple string calculator built using Test-Driven Development (TDD) principles.

## Features

- Add numbers from comma-separated strings
- Support for newline delimiters
- Custom delimiter support
- Negative number validation
- Ignore numbers greater than 1000

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the application

```bash
npm start
```

The application will be available at `http://localhost:8080`

### Run tests

```bash
npm test
```

## Usage

Enter numbers in the input field using:

- Comma separation: `1,2,3`
- Newline separation: `1\n2,3`
- Custom delimiter: `//;\n1;2;3`
- Numbers above 1000 ignored: `2,1001` returns `2`

## Built With

- React
- Vite
- Jest
- TDD methodology
