# User Table

A dynamic, interactive student user table application built with vanilla HTML, CSS, and JavaScript. This project displays student information with advanced filtering and sorting capabilities.

## Features

- **Filter by Gender**: View all students or filter by Male/Female
- **Sort by CGPA**: Sort students in ascending or descending order by their CGPA scores
- **Search by Name**: Real-time search filter to find students by name
- **Pagination**: Navigate through student records with Previous/Next buttons (5 records per page)
- **Responsive Design**: Clean and modern UI with a professional color scheme
- **Interactive Buttons**: Disabled state management for Previous/Next buttons based on current page

## Project Structure

```
user_table/
├── index.html                 # Main HTML file with table and filter UI
├── assests/
│   ├── css/
│   │   └── style.css         # Styling for the entire application
│   ├── js/
│   │   └── app.js            # Main application logic and functionality
│   └── video/                # Video assets folder
└── readme.md                 # This file
```

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup for table structure and form elements
- **CSS3**: Modern styling with flexbox layout and hover effects
- **JavaScript (ES6+)**: Event handling, DOM manipulation, and data filtering

### Key Functionality

#### Filtering System (`app.js`)
- **Name Filter**: Case-insensitive search using `includes()` method - filters in real-time as user types
- **Gender Filter**: Filters students by selected gender with "All" option
- **CGPA Sort**: Sorts results in ascending or descending order
- **Combined Filtering**: Multiple filters can be applied simultaneously
- Core filter logic implemented in `useFilter()` function

#### Pagination
- Displays 5 records per page
- Automatically adjusts to filtered results
- Shows current page and total pages in format "Page X of Y"
- Buttons disable appropriately at first/last page
- `currentPage` variable tracks active page
- Previous/Next buttons manage page navigation

#### DOM Elements
- **Filter Container**: Three input methods
  - Gender dropdown (`#filterByGender`)
  - CGPA sort dropdown (`#filterByCgpa`)
  - Name search input (`#filterByName`)
- **Table**: Dynamic population of student records
- **Pagination Controls**: Previous/Next buttons and page indicator

#### Data
- Contains 20 student records with the following information:
  - ID, Name, Age, Date of Birth, Address, Gender, CGPA, Course
- Data structure: Array of objects with properties for each student field

### Styling Highlights
- **Header**: Dark blue (#2c5e77) with white text
- **Body**: Light blue background (#e4f0f5)
- **Buttons**: 
  - Previous: Dark blue with white-to-blue hover effect
  - Next: Blue violet with transition hover effect
- **Responsive**: Uses viewport-relative sizing (vw) for container widths

## How to Use

1. Open `index.html` in your web browser
2. Use the filter options at the top:
   - Select gender from the dropdown (All, Male, Female)
   - Choose CGPA sorting (Ascending or Descending)
   - Type a student name in the search box
3. Navigate through pages using Previous/Next buttons
4. Filters work in real-time as you make selections

## Getting Started

Simply clone the repository and open `index.html` in any modern web browser. No installation or dependencies required!

```bash
git clone <repository-url>
cd user_table
# Open index.html in your browser
```

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Author

Created as a student management dashboard project.

## License

Feel free to use this project for learning purposes.
