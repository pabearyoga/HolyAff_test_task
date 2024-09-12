# Optimized Website with User Interaction Features

This project is a modified and optimized version of a website based on the [original repo](https://github.com/artemgnibeda/test_task). The main goals of the task were to reduce the website size, implement user response saving, and enable user comments functionality.

## Project Structure

The website follows this structure:

- `index.html` – Main HTML file.
- `assets/` – Contains all images, styles, and JavaScript files.

## Key Features

1. **Website Optimization**:

   - Reduced total website size to **below 1.5MB**.
   - Compressed image files and minimized CSS/JS to improve loading speed.

2. **Saving User Responses**:

   - When the "Ok" button is clicked in the final modal window (`#p_modal3`), user responses are stored in `localStorage`.
   - Instead of redirecting, the answers are logged in the browser’s console.

3. **Custom JavaScript**:

   - Created a `custom.js` file to handle new features such as response saving and comment posting.

4. **Commenting Feature**:
   - Added a simple comment form allowing users to leave a comment.
   - After submission, an anonymous comment appears in the comments section without reloading the page.

## How It Works

1. Open `index.html` in your web browser.
2. Complete the survey and submit your answers.
3. Click "Ok" in the final modal to see your answers in the console.
4. In the comment section, enter a comment and press "Publish" to post it instantly.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/artemgnibeda/test_task
   ```
