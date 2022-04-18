---  
layout: post  
img: ":post_pic1.jpg"
title:  "Project in progress: Obstacle Avoidance in Dynamic Environments"  
date:   2021-5-10 15:02:03 +0530  
categories: Map_Building Obstacle_Avoidance Trajectory_Planning
---   
<center>
	<!-- <iframe width="80%" height="480" src="https://www.youtube.com/embed/zgIZDW39KJs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
	<img src="/assets/img/posts/map.png" width="13.5%">  
	<img src="/assets/img/posts/dynamic_obstacle.gif" width="60%"> 
</center> 
<!-- <img style="float: right;" src="/assets/head_quad.jpg" width="30%">  -->  
<!-- <iframe src="http://www.fufuok.com/" id="iframepage" name="iframepage" frameBorder=0 scrolling=no width="100%" onLoad="iFrameHeight()" ></iframe> -->
<br>
__Brief Introduction:__   
&ensp;&ensp;&ensp;&ensp; Obstacle avoidance in dynamic environments is very popular recently. We aim to realize high-speed obstacle avoidance of the quadrotor with very limited sensing and computing power. Our methods include two main parts: 1. A Dual-Structure Particle-based (DSP) map, which can represent and predict the occupancy status of the neighborhood area continuously and rapidly. This is the first 3D dynamic occupancy map that can be used in onboard CPUs in real-time. 2. A risk-aware sampling-based trajectory planning method, which is used to plan a safe and dynamically feasible trajectory for quadrotors in dynamic environments. See the figure above for preliminary experiments.
<br>
<hr style="height:1px;border:none;border-top:1px solid #555555;" />   

   
 
