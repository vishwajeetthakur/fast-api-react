FROM python:3.10

WORKDIR /usr/src/app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install the MySQL client
# Install the MySQL client libraries
RUN apt-get update && apt-get install -y default-libmysqlclient-dev

# Install the MySQL client library and other dependencies
# RUN apt-get update && \
#     apt-get install -y default-libmysqlclient-dev && \
#     pip install fastapi uvicorn sqlalchemy mysqlclient

# Install the MySQL client library and other dependencies
RUN apt-get update && \
    apt-get install pkg-config && \
    apt-get install -y default-libmysqlclient-dev && \
    pip install fastapi uvicorn sqlalchemy mysqlclient

COPY . .

CMD ["gunicorn", "main:app", "-c", "gunicorn.conf.py"]
