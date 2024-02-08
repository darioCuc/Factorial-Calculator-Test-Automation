# Factorial Calculator Test Automation

This project includes a script designed to automate the testing of an online factorial calculator, specifically focusing on its accuracy for calculating the factorial of integer numbers in the range of 10 to 100. The primary goal of this script is to ensure that the calculator provides correct and reliable results across the specified range, catering to the needs of users who require precise mathematical computations.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Playwright
- A code editor (e.g., VSCode)

### Installing

To set up the project, follow these steps:

1. **Clone the repository**

```bash
git clone https://example.com/Factorial-Calculator-Test-Automation.git
cd Factorial-Calculator-Test-Automation
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the tests**

```bash
npx playwright test

```

## Built With

- [Playwright](https://playwright.dev/) - The web testing and automation library used for creating end-to-end tests.
- [TypeScript](https://www.typescriptlang.org/) - The programming language used to write the test scripts, offering type safety and modern JavaScript features.

### Scope of the Test

The test script executes a series of automated checks on the calculator's web interface, inputting integer values from 10 to 100 and comparing the calculator's output against expected factorial results. This range was chosen to cover a broad spectrum of use cases while also ensuring that the calculations remain within a manageable computational complexity for web-based tools.

### Testing Documentation

All relevant documentation for this testing task, including a detailed test plan, expected outcomes, and a comprehensive report, is available in the `testing-documentation` folder. This folder also contains screenshots capturing key moments of the testing process, providing visual evidence of the tests conducted and all discrepancies identified.

- **Task 1 PDF**: A document outlining the objectives, strategies, and criteria for the testing process, furthermore it contains test cases and bugs found in the testing process during the test execution.
- **Screenshots**: Visual documentation of the testing issues found on page, highlighting the painpoints. These screenshots (and one GIF are part of Bugs reported in the main `TASK 1` document)

The `testing-documentation` folder serves as a central repository for all materials related to the testing of the factorial calculator, ensuring transparency and accessibility for stakeholders interested in understanding the depth and rigor of the testing process.

### Accessing the Documentation

The `testing-documentation` folder is located within the project's directory structure and can be accessed directly through the project repository. Stakeholders are encouraged to review these materials to gain insights into the testing methodology and results.

## Author

- **Dario Ćurjak** - *Initial work* - [DarioCuc](https://github.com/darioCuc)
