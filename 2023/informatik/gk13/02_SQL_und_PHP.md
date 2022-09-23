# SQL und PHP

Der folgende Code soll dabei helfen, erste Schritte mit PHP und SQL zu gehen...

## Beispielcode für die einfache Arbeit mit PDO

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


## Beispielcode für ein primitives install-Skript


~~~php

$sql='

CREATE TABLE `asdfghj` (
  `qwerf` int(11) NOT NULL,
  `swef` int(11) NOT NULL,
  `sdf` int(11) NOT NULL,
  `sdfg` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `asdfghj` (`qwerf`, `swef`, `sdf`, `sdfg`) VALUES
(345, 235, 235, 235),
(35, 235, 23523523, 325);
COMMIT;
';

$password = 'das_ist_geheim';
$user = 'foo_user';
$db = 'foo_user'; //ist nur zufällig gleich dem Benutzernamen

$dbh = new PDO('mysql:host=localhost;dbname='.$db, $user, $password);

$ergebnis = $dbh->query($sql);

~~~