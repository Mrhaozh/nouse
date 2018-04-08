<?php
//namespace think\test;
//use think\test\mytest as mytest;
//include (__DIR__ .'/test.php');
class A{
}
$obj = new A();
if ($obj instanceof A) {
//  print_r(timezone_abbreviations_list());
  print_r(timezone_abbreviations_list()['acdt']);
}
