FROM python:3.11
RUN apt-get update -y
RUN apt-get upgrade -y
WORKDIR /core
ADD requirements.txt .
RUN pip install -r requirements.txt
ADD core core
EXPOSE 8777
CMD ["bash", "-c", "cd core && daphne -b 0.0.0.0 -p 8777 core.asgi:application -v2"]