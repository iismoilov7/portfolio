export const getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    // Check if parts has at least 2 elements
    if (parts.length === 2) {
        // Return the cookie value, ensuring it's not undefined
        return parts.pop()?.split(';').shift(); // Use optional chaining
    }

    // Return undefined if the cookie is not found
    return undefined;
};
