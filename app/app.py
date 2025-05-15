from flask import Flask, render_template, request, jsonify


import subprocess
import os


app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        assembly_code = request.form.get("assembly-code")
            
        # Run the executable
        try:
            result = subprocess.run("./static/test", input=assembly_code, text=True, capture_output=True, check=True)
            binary_output = result.stdout
        except subprocess.CalledProcessError:
            binary_output = "Syntax error"
        
        return jsonify({"binary_output": binary_output})
    else:
        return render_template("index.html")
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)