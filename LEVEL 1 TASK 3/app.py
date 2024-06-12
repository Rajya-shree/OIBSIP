from flask import Flask, render_template, request, jsonify,url_for

app = Flask(__name__, static_folder='static', static_url_path='')

@app.route('/')
def index():
    background_image_url = url_for('static', filename='images/background.jpg')
    return render_template('index.html', background_image_url=background_image_url)

@app.route('/convert', methods=['POST'])
def convert():
    data = request.json
    degrees = float(data['degrees'])
    from_unit = data['from']
    to_unit = data['to']

    # Conversion logic
    if from_unit == 'celsius':
        if to_unit == 'fahrenheit':
            result = (degrees * 9/5) + 32
        elif to_unit == 'kelvin':
            result = degrees + 273.15
        else:
            result = degrees
    elif from_unit == 'fahrenheit':
        if to_unit == 'celsius':
            result = (degrees - 32) * 5/9
        elif to_unit == 'kelvin':
            result = (degrees - 32) * 5/9 + 273.15
        else:
            result = degrees
    elif from_unit == 'kelvin':
        if to_unit == 'celsius':
            result = degrees - 273.15
        elif to_unit == 'fahrenheit':
            result = (degrees - 273.15) * 9/5 + 32
        else:
            result = degrees

    return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True)
