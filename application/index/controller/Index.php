<?php
    namespace app\index\controller;
	use think\facade\Hook;
	use think\Db;
	use think\facade\Env;
    class Index
    {
        public function index()
        {
			
			echo Db::table('zl_user')->fetchSql(true)->find(1);
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
    }