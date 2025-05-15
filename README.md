# LC3 Assembler Web Application

This project is a web-based LC3 assembler that allows users to input syntatically correct LC3 assembly code, assemble it into binary machine code, and view the binary output directly in their browser. The backend uses a precompiled executable (`test`) to process the assembly code and return the binary output.

---

## Features

- **Input LC3 Assembly Code**: Users can input LC3 assembly code in a text area on the web interface.
- **Assemble to Binary**: The assembly code is sent to the backend, where it is processed by `test` to generate the binary output.
- **View Binary Output**: The binary output is displayed in a separate text area on the same page.
- **Tab Key Support**: The input text area supports the use of the `Tab` key for better code formatting.

---

## How It Works

1. **Frontend**:
   - The user enters LC3 assembly code into the "Assembly Code" text area.
   - When the "Assemble" button is clicked, the code is sent to the backend via a `POST` request.

2. **Backend**:
   - The Flask application receives the assembly code and passes it to `test` through standard input using Python's `subprocess.run`.
   - The `test` executable assembles the LC3 assembly code into binary machine code.
   - The binary output is captured and returned to the frontend as a JSON response.

3. **Output**:
   - The binary output is displayed in the "Binary Output" text area on the web interface.

---

## Project Structure

```
assembler_website/
├── app/
│   ├── static/
│   │   ├── css/
│   │   │   └── styles.css       # Styles for the web interface
│   │   ├── js/
│   │   │   └── index.js         # JavaScript for handling form submission and tab key support
│   │   ├── test.exe             # Executable for assembling LC3 assembly code
│   ├── templates/
│   │   └── index.html           # HTML template for the web interface
│   ├── app.py                   # Flask application
│   └── requirements.txt         # Python dependencies
├── Dockerfile                   # Docker configuration
└── README.md                    # Project documentation
```

---

## Installation

### Prerequisites
- Python 3.10 or higher
- Docker (optional, for containerized deployment)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/sofirij/assembler_website.git
   cd app
   ```

2. Create a virtual environment and install dependencies:
   ```bash
   python3 -m venv env  # On Windows: python -m venv env
   source env/bin/activate  # On Windows: .\env\Scripts\activate
   pip install -r requirements.txt
   ```

3. Run the Flask application:
   ```bash
   python3 app.py # On Windows: compile the test.c file on your machine then configure the subprocess module in the web app to use that executable
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

---

## Usage

1. Enter LC3 assembly code in the "Assembly Code" text area.
2. Click the "Assemble" button.
3. View the binary output in the "Binary Output" text area.

---

## Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t flask-app .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 8080:8080 flask-app
   ```

3. Access the application at:
   ```
   http://localhost:8080
   ```

---

## Future Improvements

- Improve error handling for invalid assembly code.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments

- The `test` executable for assembling LC3 assembly code.
- Flask for the backend framework.
- Docker for containerized deployment.
