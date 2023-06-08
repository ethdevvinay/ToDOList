# To-Do List

This is a web application that allows you to create and manage a to-do list. You can add tasks, mark them as complete, sort tasks by priority, and filter tasks based on different criteria. The application is built using HTML, CSS, JavaScript, and PHP.

## Features

- Add tasks: Enter a task in the input field and select its priority level (low, medium, or high), then click the "Add Task" button to add it to the list.
- Mark tasks as complete: Each task has a checkbox next to it. When you check the checkbox, the task is marked as completed and visually indicated.
- Sort tasks by priority: The tasks are displayed in the order of their priority level, with high priority tasks shown first, followed by medium and low priority tasks.
- Filter tasks: You can filter the tasks based on their completion status (all tasks, completed tasks, or active tasks).

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

To run this project, you need to have the following software installed:

- Web browser
- PHP server (e.g., Apache)

### Installation

1. Clone this repository to your local machine or download the source code as a ZIP file.
2. Place the project files in the root directory of your PHP server.

### Usage

1. Start your PHP server.
2. Open a web browser and navigate to the server's URL where the project is located.
3. You will see the To-Do List application in your browser.
4. Use the input field to enter tasks and select their priority level.
5. Click the "Add Task" button to add the task to the list.
6. Mark tasks as complete by checking the corresponding checkboxes.
7. To filter tasks, use the options provided.

### Saving Tasks (Optional)

If you want to save the tasks persistently, you can set up a PHP server with write access to the file system. Follow these steps to enable task saving:

1. Make sure your PHP server has write permissions for the project directory.
2. Create a file named `data.json` in the project directory.
3. Modify the `save.php` file to match your server configuration, if necessary.
4. When tasks are added or modified, they will be saved to the `data.json` file.

