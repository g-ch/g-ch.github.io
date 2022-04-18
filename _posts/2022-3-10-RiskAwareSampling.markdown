---  
layout: post  
img: ":ras_planner.png"
title:  "[Preprint] Risk-aware Trajectory Sampling for Quadrotor Obstacle Avoidance in Dynamic Environments"  
date:   2022-3-10 18:01:10 +0530  
categories: Map_Building Obstacle_Avoidance Trajectory_Planning
---   
<center>
	<iframe width="100%" height="480" src="https://www.youtube.com/embed/UmmZzJi25GE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>  
<!-- <img style="float: right;" src="/assets/head_quad.jpg" width="30%">  -->  
<!-- <iframe src="http://www.fufuok.com/" id="iframepage" name="iframepage" frameBorder=0 scrolling=no width="100%" onLoad="iFrameHeight()" ></iframe> -->
<br>
__Brief Introduction:__ 

This work aims to plan risk-aware trajectories for MAVs in dynamic environments efficiently. The risk is to evaluate the trajectory's safety, considering the time dimention, and is defined for each trajectory by leveraging the particles in our DSP map. The MAV with our planner can fly up to 2.5 m/s in the environment with both static obstalces and dynamc obstacles. 

To  the  best  of  the  authors’  knowledge,  this  is  the  firstquadrotor obstacle avoidance system that can avoid arbitrary-shaped  dynamic  and  static  obstacles  simultaneously. The contributions of this paper include:
* An  efficient  risk-aware  sampling  approach  composedof two-phase motion primitives in the state space.
* The  approach  to  merge  the  local  trajectory  given  byour planner to an arbitrary global trajectory.
* A  complete  obstacle  avoidance  system  that  can  beapplied to light-weight quadrotors in dynamic environ-ments.

This paper is under review currently. A preprint version can be found at <https://arxiv.org/abs/2201.06645>.

<br>
<hr style="height:1px;border:none;border-top:1px solid #555555;" />   

   
 
