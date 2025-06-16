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

# Version 0.1

> Noch können die HTML-Elemente keine Attribute haben.

## HTML-Klasse

~~~python
class HtmlElement:
    name = ''
    attributes = {}
    content = []

    def __init__(self, name):
        self.name = name
        self.content = []

    def addContent(self,element):
        self.content.append(element)

    def addAttribute(self, key, value):
        self.attributes[str(key)] = str(value)

    def getContentHtml(self):
        html = ''
        for Element in self.content:
            html += Element.getHtml()
        return html

    def getHtml(self):
        content = ''
        print('I am ',self.name)
        if len(self.content) > 0:
            print('i have content')
            content = self.getContentHtml()

        openTag = '<'+ self.name+'>'
        closeTag = '</'+self.name+'>'
        #if len(self.content) > 0:
        #
        #else:

        html = openTag + content + closeTag
        return html
~~~

## Webserver

~~~python
from http.server import HTTPServer, BaseHTTPRequestHandler

from HtmlElement import HtmlElement

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        #self.wfile.write(b'Hello, world!')
        webseite = HtmlElement("html")
        kopf = HtmlElement("head")
        koerper = HtmlElement("body")
        webseite.addContent(kopf)
        webseite.addContent(koerper)
        html = webseite.getHtml()
        self.wfile.write(html.encode(encoding="utf-8"))

httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
httpd.serve_forever()
~~~
