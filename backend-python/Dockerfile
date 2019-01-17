FROM python:3.7

EXPOSE 5000
WORKDIR /app
COPY requirements.txt /app
RUN pip install -r requirements.txt
COPY . /app

CMD python app.py