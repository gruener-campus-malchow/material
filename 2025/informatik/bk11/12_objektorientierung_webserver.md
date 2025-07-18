Wir bauen einen Webserver
====================

[toc]

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

# Version 0.3

> Das System verarbeitet den Login - aber da die Daten und das geheime Passwort an den Server übertragen wird, kann der Server damit machen, was er will.
> 
> **ACHTUNG**
>
> Sie vertrauen (blind) den IT-Systemen, wenn Sie ihre Passwörter eingeben, fragen Sie sich, ob sie abschätzen können, ob Ihre Daten sicher sind.

## HTML-Klasse

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

~~~python
from http.server import HTTPServer, BaseHTTPRequestHandler
from HtmlElement import HtmlElement
import cgi # NEU

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
        response = self.evaluatePOST()
        self.send_response(200)
        self.end_headers()
        body = "Hallo "+response
        rootElement = self.createSkeleton(body)
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
        name.addAttribute("name","username") # NEU
        passphrase = HtmlElement("input")
        passphrase.addAttribute("type","password")
        passphrase.addAttribute("name","topsecret") # NEU
        button = HtmlElement("input")
        button.addAttribute("type","submit")
        wrapper.addContent(name)
        wrapper.addContent(passphrase)
        wrapper.addContent(button)
        return wrapper

    # alles neu
    def evaluatePOST(self):
        form = cgi.FieldStorage(
            fp=self.rfile,
            headers=self.headers,
            environ={'REQUEST_METHOD': 'POST',
                     'CONTENT_TYPE': self.headers['Content-Type'],
                     }
        )
        # Get the form values
        benutzername = form.getvalue("username")
        passwort = form.getvalue("topsecret")
        print("User: ", benutzername, " Geheimes Passwort: ", passwort)
        return benutzername


httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
httpd.serve_forever()


~~~


# Version 0.4

> Es wurde eine neue Klasse eingeführt: Das Eingabefeld erbt alle Eigenschaften von HTML-Element. Es ergänzt neue Attribute und überschreibt den Konstruktor und die Methode zum Erzeugen des HTML-Codes.

## InputField erbt von HtmlElement

~~~python
from HtmlElement import HtmlElement

class InputField(HtmlElement):
    label = ''
    inputtype = ''
    preset = ''

    def __init__(self, name, label, inputtype, preset):
        self.name = name
        self.content = []
        self.attributes = {}
        self.label = label
        self.inputtype = inputtype
        self.preset = preset

    def getHtml(self):
        attributesCode = ''
        if len(self.attributes) > 0:
            attributesCode = self.getAttributesCode()
        openTag ='<label for="'+ self.name +'">'+self.label+':</label><input type="'+self.inputtype+'" id="'+self.name+'" name="'+self.name+' value="'+self.preset+'""'+ attributesCode + '>'
        closeTag = '</input>'

        html = openTag + closeTag
        return html
~~~

## Webserver

> Am Anfang muss nun die neue Klasse als Modul importiert werden. Achten Sie unbedingt auf die richtigen Dateinamen beim Speichern.
>
> In createTrustForm() finden Sie die Verwendung des neuen Eingabe-Feldes. Details können Sie auf https://wiki.selfhtml.org/wiki/HTML/Elemente/input nachlesen.


~~~python
from http.server import HTTPServer, BaseHTTPRequestHandler
from HtmlElement import HtmlElement
from InputField import InputField
import cgi

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        webContent = self.createLoginForm()
        rootElement = self.createSkeleton(webContent)
        html = "<!DOCTYPE html>" + rootElement.getHtml()
        self.wfile.write(html.encode(encoding="utf-8"))

    def do_POST(self):
        response = self.evaluatePOST()
        self.send_response(200)
        self.end_headers()

        body = "Hallo "+response
        form =  self.createTrustForm()

        rootElement = self.createSkeleton(body)
        rootElement.addContent(form)

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
        name.addAttribute("name","username") # NEU
        passphrase = HtmlElement("input")
        passphrase.addAttribute("type","password")
        passphrase.addAttribute("name","topsecret") # NEU
        button = HtmlElement("input")
        button.addAttribute("type","submit")
        wrapper.addContent(name)
        wrapper.addContent(passphrase)
        wrapper.addContent(button)
        return wrapper

    def createTrustForm(self):
        wrapper = HtmlElement("form")
        wrapper.addAttribute("method","POST")

        surname = InputField("surname", "Vorname", "text", "Bitte hier eintragen")
        wrapper.addContent(surname)

        lastname = InputField("lastname", "Nachname", "number", "Bitte hier eintragen")
        wrapper.addContent(lastname)

        titles = InputField("titles", "Titel", "text", "Bitte hier eintragen")
        wrapper.addContent(titles)

        birthdate = InputField("birthdate", "Geburtsdatum", "date", "Bitte hier eintragen")
        wrapper.addContent(birthdate)

        return wrapper

    def evaluatePOST(self):
        form = cgi.FieldStorage(
            fp=self.rfile,
            headers=self.headers,
            environ={'REQUEST_METHOD': 'POST',
                     'CONTENT_TYPE': self.headers['Content-Type'],
                     }
        )
        # Get the form values
        benutzername = form.getvalue("username")
        passwort = form.getvalue("topsecret")
        print("User: ", benutzername, " Geheimes Passwort: ", passwort)
        return benutzername


httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
httpd.serve_forever()
~~~
