# maintenance
a really tiny server that returns a 503 with a custom message.  Best run in a docker container.

## Usage

```
docker run -d -e PORT=80 -p 80:80 -e MESSAGE="Some custom message" firstandthird/maintenance
```
