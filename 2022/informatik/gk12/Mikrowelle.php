<?php
class Herd
{
    protected $eingeschaltet;
    protected $leistung;
    
    public function __construct($leistung){
        $this->leistung = $leistung;
        $this->eingeschaltet = false;
    }
    
    public function einschalten()
    {
        if ($this->eingeschaltet == true)
        {
            echo 'ist schon an';
        }
        $this->eingeschaltet = true;
    }
    public function getEinschaltzustand()
    {
        return $this->eingeschaltet;
    }
    
}

class Mikrowelle extends Herd
{

    protected $leistungswahl;
    protected $sound;
    
    public function __construct($leistung, $sound)
    {
        $this->sound = $sound;
        parent::__construct($leistung);
    }
    
    public function stelleLeistungEin($wert)
    {
        $this->leistungswahl = $wert;
    }
    
    public function pling($volume)
    {
        if ($volume > 100)
        {
            echo 'laut: pling';
        }
        elseif ()
        {
            echo 'leise: pling';
        }
    }

}

$foo = new Mikrowelle(1000, 'brrrrrr');
$foo->pling(50);

?>
