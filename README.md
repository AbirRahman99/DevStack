DevStack - Technology Stack Builder
A dynamic and interactive web application that helps developers explore different tools and build their ideal technology stack. Users can browse various frontend, backend, and database technologies, add their favorites to a personal "Stack" list, and easily manage their selections.

💻 Technologies Used
React (Component-based UI)

TypeScript (Static typing for JavaScript)

Tailwind CSS v4 (Utility-first styling)

DaisyUI (UI components)

React Toastify (Interactive alert messages)

React Icons (SVG icons)

✨ Top 3 Features
Interactive Stack Building: Users can select technologies from a grid and add them to their personal "Your Stack" sidebar with one click.

Duplicate Prevention & Smart Alerts: If a user tries to add the same technology twice, the system prevents it and shows a warning toast message. Success toasts appear when items are added or removed.

Dynamic Stack Management: Users can instantly view the total count of selected items, remove individual technologies using the "X" button, or clear the entire list at once using the "Remove All" button.

🧠 React Questions & Answers
1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a special syntax that allows us to write HTML directly inside JavaScript code. It is used in React because it makes writing and understanding UI components much easier, cleaner, and faster compared to standard JavaScript functions.

2. What is the difference between props and state?
Props (Properties): Used to pass data from a parent component down to a child component. Props are read-only, meaning the child cannot change them.

State: Used to manage data inside a specific component. State can change over time (like when a user clicks a button), and when it changes, the component automatically updates the screen.

3. What does the useState hook do, and where did you use it in this project?
The useState hook allows a component to remember data between renders and update the UI when that data changes.

Where I used it: I used it in the Technologies.tsx file (const [selectedTechnologies, setSelectedTechnologies] = useState([])) to keep track of which technologies the user has added to their personal stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook lets us perform side effects in our components, like fetching data from an API or a JSON file. We need it to load JSON data so that the data fetch happens smoothly in the background when the page first loads, without freezing or slowing down the user interface.

5. Why does every item in a .map() list need a unique key prop?
React needs a unique key prop to keep track of exactly which items in a list have been added, changed, or removed. Without a unique key (like an ID), React gets confused during updates, which can cause the app to slow down or show the wrong data on the screen.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI elements based on certain conditions (like an if-else statement).

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: The parent passes data downwards using Props. (Example: Technologies passes the technology object down to TechnologyCard).

Child to Parent: The parent passes down a function as a prop. When the child wants to send data back, it calls that function. (Example: TechnologyCard calls setSelectedTechnologies() when the "Add to Stack" button is clicked, which updates the state in the parent).
