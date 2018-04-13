<?php
    namespace app\index\controller;
	use think\facade\Hook;
	use think\Db;
	use think\facade\Env;
	use app\index\model\User;
	use think\Controller;
	use think\captcha\Captcha;
    class Index extends Controller
    {
        public function index()
        {
			return $this->fetch('index/validade');
		//$user = User::get(1);
		//echo $user->tel;

// 使用查询构造器查询满足条件的数据
		//$user = User::where('name', 'thinkphp')->find();
		//echo $user->name;
			//echo Db::table('zl_user')->fetchSql(true)->find(1);
			//echo 'index',$a+$b;
        //  Hook::listen('CheckAuth','qwe');
        //
        //echo 'index_end';
		/*
       $res=Db::table('zl_user')->where([
			['tel','=','18635486031'],
			['status','=',0]
			])->field('id')->limit(1)->select(); 
		//echo Db::table('zl_user')->getlastsql()."<br/>";
		return $res;
		*/
		//echo Env::get("app_path");
		}
		/**
		* @param  string  $name 数据名称
		* @return mixed
		* @route('good/:name')
		*/
		public function good(){
			$this->index(...[2,3]);
		}
		public function test(){
			$this->index(...[2,3]);
		}
		public function verify()
    {
		$config =    [
    // 验证码字体大小
    'fontSize'    =>    24,    
    // 验证码位数
    'length'      =>    5,   
    // 关闭验证码杂点
    'useNoise'    =>    true, 
	'useZh' =>true,
	'useCurve'=>true,
	'useImgBg'=>true,
	'bg'=>[255,0,0],
];
        $captcha = new Captcha($config);
        return $captcha->entry();    
    }
	public function paixu(){
		$a=[3,5,1,13,9];
		
		for($i=1;$i<5;$i++){
			for($j=0;$j<(5-$i);$j++){
				if($a[$j]<$a[$j+1]){
					$b=$a[$j];
					$a[$j]=$a[$j+1];
					$a[$j+1]=$b;
				}
			}
		}
		
		/*
		for($i=0;$i<count($a);$i++){
			for($j=1;$j<(count($a)-$i);$j++){
				if($a[$j]>$a[$j-1]){
					$b=$a[$j];
					$a[$j]=$a[$j-1];
					$a[$j-1]=$b;
				}
			}
		}
		*/
		var_dump($a);
	}
    }