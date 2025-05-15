# filepath: c:\Users\sofja\OneDrive\Desktop\assembler_website\Dockerfile
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# Copy all files from the current directory to the container's working directory
COPY app/requirements.txt /app/

COPY app/ /app/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port Flask runs on
EXPOSE 8080

# Command to run the Flask application
CMD ["python", "app.py"]