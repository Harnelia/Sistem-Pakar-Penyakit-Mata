from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# Tambahkan rute API lain sesuai kebutuhan di sini

if __name__ == '__main__':
    app.run(debug=True)