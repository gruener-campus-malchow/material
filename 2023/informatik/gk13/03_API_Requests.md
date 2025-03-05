## .htaccess

~~~

# requires mod_rewrite
RewriteEngine On

# api base url, all requests in this directory are handled by DIE
RewriteBase /api/

# you can make exceptions for directories you want the web server to handle,
# for example a `public` directory containing css and js. just uncomment the
# following line and replace `/api/public/` with your directory.
# you can also add more directories below.

# RewriteCond %{REQUEST_URI} !^/api/public/

RewriteRule . index.php

~~~



## PHP-Seite

... um raus zu kriegen, wie man mit der URI umgeht.

~~~php
//print_r($_SERVER['REQUEST_URI']);

$uri = explode('/',$_SERVER['REQUEST_URI']);

//print_r($uri);

if($uri[2]=='order' and $uri[3]==66)
{
	echo 'KILL ALL JEDI!';
}
~~~
