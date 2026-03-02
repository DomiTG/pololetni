# Pololetní vysvědčení

TypeScript project for managing student grades across subjects and generating a semester report.

## Features

- Add students and record grades (1–5) per subject
- Calculate subject averages and overall average per student
- Display a Czech letter rating (Výborný → Nedostatečný)
- Find the top-performing student

## Project structure

```
src/
  types.ts           – shared interfaces and types
  GradeCalculator.ts – pure grade calculation logic
  StudentManager.ts  – student and grade management
  index.ts           – demo entry point
```

## Getting started

```bash
npm install
npm run build
npm start
```

Or run directly with ts-node:

```bash
npm run dev
```