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

# Version 0.2

## HTML-Klasse

> Die Klasse ist als eierlegende Wollmilchsau noch viel zu unflexibel - es sollten vielleicht Spezialisierungen vorgenommen werden?

~~~python
class HtmlElement:
    name = ''
    attributes = {}
    content = []

    def __init__(self, name):
        self.name = name
        self.content = []
        self.attributes = {}

    def addContent(self,element):
        self.content.append(element)

    def addAttribute(self, key, value):
        self.attributes[str(key)] = str(value)

    def getContentHtml(self):
        html = ''
        for Element in self.content:
            if isinstance(Element, HtmlElement):
                html += Element.getHtml()
            elif isinstance(Element, str):
                html += Element
            else:
                html += ''
                print("content free html element")
        return html

    def getAttributesCode(self):
        html = ''
        for key, value in self.attributes.items():
            html += key + ' = "' + value + '" '
        return html

    def getHtml(self):
        content = ''
        #print('I am ',self.name)
        if len(self.content) > 0:
            #print('i have content')
            content = self.getContentHtml()
        attributesCode = ''
        if len(self.attributes) > 0:
            attributesCode = self.getAttributesCode()
        openTag = '<'+ self.name+' '+ attributesCode + '>'
        closeTag = '</'+self.name+'>'
        #if len(self.content) > 0:
        #
        #else:

        html = openTag + content + closeTag
        return html
~~~

## Webserver

> Hier kann man sehen, wie bestimmte Funktionen in eigene Module ausgegliedert wurden, damit die Methoden do_GET() und do_POST() übersichtlicher bleiben.

> Das Erstellen von bestimmten HTML-Elementen ist mühsam und nicht wirklich eine Erleichterung - außer, dass man keinen HTML-Code schreiben muss.

~~~python
from http.server import HTTPServer, BaseHTTPRequestHandler

from HtmlElement import HtmlElement

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        #self.wfile.write(b'Hello, world!')
        webContent = self.createLoginForm()
        rootElement = self.createSkeleton(webContent)
        html = "<!DOCTYPE html>" + rootElement.getHtml()
        self.wfile.write(html.encode(encoding="utf-8"))

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        self.send_response(200)
        self.end_headers()

        webContent = body
        rootElement = self.createSkeleton(webContent)
        html = "<!DOCTYPE html>" + rootElement.getHtml()
        self.wfile.write(html.encode(encoding="utf-8"))

    # returns the root html-object
    def createSkeleton(self,content):
        webseite = HtmlElement("html")
        webseite.addAttribute("lang","de")

        kopf = HtmlElement("head")
        meta1 = HtmlElement("meta")
        meta1.addAttribute("charset","utf-8")
        kopf.addContent(meta1)

        meta2 = HtmlElement("meta")
        meta2.addAttribute("name","viewport")
        meta2.addAttribute("content","width=device-width, initial-scale=1.0")
        kopf.addContent(meta2)

        titleTag  = HtmlElement("title")
        titleTag.addContent("Just Another Website")
        kopf.addContent(titleTag)

        webseite.addContent(kopf)

        koerper = HtmlElement("body")
        koerper.addContent(content)

        webseite.addContent(koerper)

        return webseite

    def createLoginForm(self):
        wrapper = HtmlElement("form")
        wrapper.addAttribute("method","POST")
        name = HtmlElement("input")
        name.addAttribute("type","text")
        passphrase = HtmlElement("input")
        passphrase.addAttribute("type","password")
        button = HtmlElement("input")
        button.addAttribute("type","submit")
        wrapper.addContent(name)
        wrapper.addContent(passphrase)
        wrapper.addContent(button)
        return wrapper

httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
httpd.serve_forever()
~~~
