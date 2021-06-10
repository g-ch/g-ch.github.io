---  
layout: post  
title:  "Project in progress: Obstacle Avoidance in Dynamic Environments"  
date:   2021-5-10 15:02:03 +0530  
categories: Map_Building Obstacle_Avoidance Trajectory_Planning
---   
<center>
	<!-- <iframe width="80%" height="480" src="https://www.youtube.com/embed/zgIZDW39KJs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
	<img src="/assets/particle_map_1.png" width="50%"> 
	<img src="/assets/particle_map_2.png" width="50%"> 
	<img src="/assets/particle_map_3.png" width="50%"> 
</center> 
<center> 
	<img src="/assets/dynamic_obstacle.gif" width="60%"> 
</center> 
<!-- <img style="float: right;" src="/assets/head_quad.jpg" width="30%">  -->  
<!-- <iframe src="http://www.fufuok.com/" id="iframepage" name="iframepage" frameBorder=0 scrolling=no width="100%" onLoad="iFrameHeight()" ></iframe> -->
<br>
__Brief Introduction:__   
&ensp;&ensp;&ensp;&ensp; Quadrotor with active sensing was proposed recently to overcome the view field limitation and achieved an excellent perception ability in obstacle avoidance tasks. To realize high-speed flights of this quadrotor in unknown and cluttered environments, a computationally efficient trajectory planner is presented in this paper. Firstly, a non-taboo area gradient-based sampling (NAGS) algorithm is utilized to sample a multi-objective-directed collision-free local path. The algorithm runs in the state space with the consideration of active sensing direction and is able to find a feasible path in a few trials without falling into local minima. To further enhance real-time processing, a motion primitive generation algorithm concerning both time optimality and jerk optimality is raised, in which an offline and online integrated solver is utilized to achieve computational efficiency. This planner is tested and benchmarked against the state-of-the-art planners for high-speed flight. __Real-world experiments show that our active sensing quadrotor with the proposed planner achieved a flight speed up to 5.2 m/s in an unknown and dense woods and managed to handle abrupt changes in goal direction at such a high speed.__
<br>
<img src="/assets/white.png" width="60%">   
<hr style="height:1px;border:none;border-top:1px solid #555555;" />   

   
 
