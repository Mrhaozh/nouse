<?php
	class A{
	    private $b;
	    function __construct(){
	        $this->b = new B($this);
	    }
	    function __destruct(){
	        //echo "A destruct\n";
	    }

	}
	 
	class B{
	    private $a;
	    function __construct($a){
	        $this->a = $a;

	    }
	    function __destruct(){
	        //echo "B descturct\n";
	    }
	}
	 
	for($i=0;;$i++){
	    $a = new A();
	    if($i== 10000){
	        echo memory_get_usage()."\n";
	    }
	}