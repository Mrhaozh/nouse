<?php
namespace app\index\validade;
use think\Validade;
class User extends Validade{
	protected $rule=[
	  'name'  => 'require|max:25',
      'age'   => 'number|between:1,120',
      'email' => 'email',
	];
}