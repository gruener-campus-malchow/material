# SQL und PHP

Der folgende Code soll dabei helfen, erste Schritte mit PHP und SQL zu gehen...

~~~php

session_start();

class Website
{
    public $html = '';
    protected $password;
    protected $user;
    protected $db;

    public function __construct($title)
    {
        $this->html = '<!doctype html><html><head><title>'.$title.'</title></head><body>';
        $this ->password = '6catAFfU2EfkBddR';
        $this ->user = 'foo_user';
        $this ->db = 'foo_user';
    }
    
    public function getChat()
    {   
        $dbh = new PDO('mysql:host=localhost;dbname='.$this->db, $this->user, $this->password);
        $ergebnis = $dbh->query('SELECT * FROM chatverlauf');
        while ($zeile = $ergebnis->fetch()) 
        {
            $beitrag = '<div>'.$zeile['message'].'</div>';
            $this->html .= $beitrag;
        }         
    }
}

$mySite = new Website("SimpleChat");
$mySite -> getChat();
echo $mySite->html.'</body></html>';

~~~
