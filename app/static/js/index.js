document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("assembler").addEventListener("submit", async function(event) {
        event.preventDefault();

        try {
            // Send a POST request to the server
            const response = await fetch("/", {
                method: "POST",
                body: new FormData(this),
            });

            // Parse the JSON response
            const data = await response.json();

            // update the binary output field
            document.getElementById("binary-output").value = data["binary_output"];
        } catch (error) {
            console.error("Error:", error);
        }
    });

    // Handle the tab key for the textarea
    document.getElementById("assembly-code").addEventListener("keydown", function(e) {
        if (e.key === 'Tab') {
            e.preventDefault();

            const textarea = this;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            const spaces = '    ';
            textarea.value = textarea.value.substring(0, start) + spaces + textarea.value.substring(end);

            textarea.selectionStart = textarea.selectionEnd = start + spaces.length;
        }
    });
});