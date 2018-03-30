<?php
    namespace app\index\controller;
	use think\facade\Hook;
	use think\Db;
    class Index
    {
        public function index()
        {
        //  Hook::listen('CheckAuth','qwe');
        //
        //echo 'index_end';
       $res=Db::table('zl_user')->where([
			['tel','=','18635486031'],
			['status','=',0]
			])->field('id')->limit(1)->select(); 
		echo Db::table('zl_user')->getlastsql()."<br/>";
		print_r($res);
		}
		/**
		* @param  string  $name 数据名称
		* @return mixed
		* @route('good/:name')
		*/
		public function good(){
			echo '123';
		}
    }