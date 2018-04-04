<?php
class A{
}
class B{
}
$obj = new B();
if ($obj instanceof B) {
  echo $obj instanceof B;
}