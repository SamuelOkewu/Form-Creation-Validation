/**
 * Asynchronously fetches user data from the API and displays the names in a list.
 * Handles loading and error states.
 */
const fetchUserData = async () => {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    ["function", "class"]
    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data asynchronously
        const response = await fetch(apiUrl);
        
        // Check if the response is OK (status 200-299)
        if (!response.ok) {
            // Throw an error if the HTTP status is not successful
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message/previous content
        dataContainer.innerHTML = '';

        // Create the unordered list element
        const userList = document.createElement('ul');

        // Loop through the users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            // Set the text content to the user's name
            listItem.textContent = user.name;
            // Append the list item to the unordered list
            userList.appendChild(listItem);
        });

        
        // Append the completed list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Log the error to the console for debugging
        console.error('Error fetching user data:', error);
        
        // Clear the container and display a user-friendly error message
        dataContainer.innerHTML = ''; // Clear loading/old content
        dataContainer.textContent = 'Failed to load user data.';
    }
};

// Invoke fetchUserData when the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);