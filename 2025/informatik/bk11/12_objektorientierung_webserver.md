Wir bauen einen Webserver
====================

Die Quelle für dieses Tutorial basiert auf https://anvileight.com/blog/posts/simple-python-http-server/

~~~python
from http.server import HTTPServer, BaseHTTPRequestHandler


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'Hello, world!')


httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
httpd.serve_forever()
~~~

> Testen Sie diesen Code, indem Sie ihn in eine Datei kopieren, sie ausführen und anschließend im Browser über http://localhost:8000/ aufrufen.

## Integration der HTML-Seiten-Klasse

1. Kopieren Sie Ihre HTML-Seiten-Klasse und die HTML-Element-Klasse in den gleichen Ordner, wie Ihren Webserver.
1. Erstellen Sie durch eine Ausführung von Konstruktoren und Methoden eine Webseite mit einfachem Inhalt und senden Sie den dadurch generierten Code statt des Hello Worlds.
