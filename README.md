# Whole Number Divider Application

## Project Overview
The **Whole Number Divider** is a simple web-based application that allows users to divide two numbers, returning a whole number result. This project includes robust input validation, proper error handling, and a seamless user experience. It prevents invalid inputs, handles edge cases like division by zero, and ensures the application does not crash under exceptional circumstances.

## Features
- **Whole Number Division**: Perform division and display only the whole number result (rounded down when necessary).
- **Error Handling**:
  - Division by zero is prevented with a proper error message.
  - Missing inputs are caught, and a descriptive message is shown to the user.
  - Non-numeric inputs result in an error, and the app provides feedback without crashing.
- **Initial State**: Displays a message saying "No calculation performed" when the application first loads.
- **Console Logging**: Errors, such as division by zero or non-numeric inputs, are logged to the browser’s console with detailed stack traces for debugging.

## Topics Covered
- Form Handling
- Input Validation
- Error Handling and Recovery
- JavaScript Event Handling
- DOM Manipulation
- Math Operations (e.g., `Math.floor` for rounding)
- Edge Case Management (division by zero, missing inputs)
- Console Logging for Debugging
- User Experience (UX) Design

## Getting Started

### Prerequisites
To run the project locally, you need:
- A modern web browser (Chrome, Firefox, Safari, etc.)
- Basic understanding of HTML, CSS, and JavaScript.

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/whole-number-divider.git
   ```
2. Navigate to the project directory:
   ```bash
   cd whole-number-divider
   ```
3. Open `index.html` in your browser to start using the app.

### File Structure
```
.
├── index.html         # Main HTML file
├── scripts.js         # JavaScript logic for the app
├── styles.css         # Basic styling for the app
└── README.md          # Project documentation
```

## How to Use
1. Enter two numbers (a **dividend** and a **divider**) into the provided input fields.
2. Press the **Calculate** button.
3. The app will display the whole number result of the division.
4. If any errors occur (e.g., division by zero or missing inputs), appropriate error messages will be displayed, and errors will be logged to the console.

## Edge Cases
- **Division by zero**: If the divider is `0`, the app will show an error message and log the error in the console.
- **Missing inputs**: If either input is empty, the app will not perform the division and will display a message asking the user to provide both values.
- **Non-numeric inputs**: If non-numeric values are entered, a critical error message will be shown, and the issue will be logged in the console.

## Error Logging
Critical errors such as division by zero or invalid inputs are logged to the browser’s console, showing the call stack for easy debugging.

## License
This project is open-source and available under the MIT License.

## Contact
For any questions or issues, please reach out to the project maintainer at:  
Dumisani Nxumalo  
Dumisaninxumalo5@gmail.com  
