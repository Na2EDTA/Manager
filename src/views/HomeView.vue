<template>
	<div class="home">
	  <header>
		<h1>欢迎使用后台管理系统</h1>
	  </header>
  
	  <section class="hero">
		<div class="hero-content">
		  <h2>通过使用</h2>
		  <h3>更好上手安防系统管理</h3>
		  <p>使用说明如下</p>
		  <router-link to="/about" class="btn">Learn More</router-link>
		</div>
	  </section>
  
	  
  
	  <footer>
		<p>&copy; 2023 My Manager Homepage. All rights reserved.</p>
	  </footer>
	</div>
  </template>
  
  <script>
  export default {
	// 可以在这里添加组件的逻辑和其他配置
  };
  </script>
  
  <style scoped>
  .home {
	text-align: center;
	padding: 20px;
  }
  
  header {
	margin-bottom: 40px;
  }
  
  .hero {
	background-color: #f3f3f3;
	padding: 60px 0;
  }
  
  .hero-content {
	max-width: 500px;
	margin: 0 auto;
  }
  
  .features {
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
  }
  
  .feature {
	flex: 1;
	padding: 20px;
  }
  
  .feature i {
	font-size: 48px;
	margin-bottom: 20px;
  }
  
  footer {
	background-color: #f3f3f3;
	padding: 10px;
  }
  </style>