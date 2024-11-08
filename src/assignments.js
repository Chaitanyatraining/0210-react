import React from 'react'

const assignments = () => {
  return (
    <div>
        {/* 
        1. Dynamic Styling Based on State
Create a button that changes its background color when clicked.

Steps:
- Create a button component.
- Use state to manage the button's background color.
- Change the background color dynamically when the button is clicked (you can toggle between two colors).
---------------------------

2.Conditional Styling Based on Props
Create a component that receives a status prop and applies different styles based on the value of the prop.

Steps:
- Create a component that accepts a status prop (e.g., "success", "error", "warning").
- Use inline styles or CSS classes to apply different colors (e.g., green for "success", red for "error") based on the value of the status prop.
- Render different styles depending on the prop passed.

3. Todo

-----------------------------------------
Life cycle method Task 
Assignment: Timer App with React Lifecycle Methods
Objective:
Build a simple timer application using React class components that demonstrates the use of componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods.

Tasks:
Component Setup:

Create a class component named Timer.
Initialize the state with time set to 0 and isRunning set to false.
componentDidMount:

When the component mounts, log "Timer component mounted".
The timer should not start running automatically when the component is mounted. It will start based on user interaction.
Start/Stop Timer:

Add two buttons: Start and Stop.
When the user clicks the Start button, set isRunning to true, and use setInterval to increment the time state every second.
When the user clicks the Stop button, set isRunning to false, and clear the interval to stop the timer.
componentDidUpdate:

Implement componentDidUpdate to log the new time value to the console whenever the timer increments.
Ensure that the log message only appears when time changes.
componentWillUnmount:

Implement componentWillUnmount to clean up the interval when the component is about to unmount.
Log "Timer component will unmount" in the console.
Ensure any running timer is stopped (i.e., the interval is cleared) when the component unmounts.
Render Method:

Display the current time (seconds) in the UI.
Render the Start and Stop buttons that allow users to control the timer.
Show a message indicating whether the timer is running or stopped.

-------------------------------------
HOOKS
Project: Notes Manager
Description
Build a Notes Manager application that allows users to create, edit, and delete notes.
Users can quickly add notes using an auto-focused input field, manage the notes with
a global context, and handle complex state operations like adding, editing, 
and deleting notes using useReducer.

Key Features
Add Notes: Users can add notes using an input field that automatically focuses on page load.
Edit Notes: Users can edit existing notes directly in the notes list.
Delete Notes: Users can delete a note from the list.
Global Notes Management: The notes are managed globally, so they are accessible from any component.
Hooks to Implement
useContext: Use a context to share the notes and dispatch functions across components.
useReducer: Manage the notes list with actions to add, edit, and delete notes.
useRef: Set focus on the input field for adding a new note when the page loads.

    
        */}
    </div>
  )
}

export default assignments