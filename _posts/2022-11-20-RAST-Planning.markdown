---  
layout: post  
img: ":rast_cover.png"
title:  "RAST: Risk-Aware Spatio-Temporal Safety Corridors for MAV Navigation in Dynamic Uncertain Environments"  
date:   2022-11-20 18:01:10 +0530  
categories: Obstacle_Avoidance Trajectory_Planning
---   
<center>
	<iframe width="100%" height="480" src="https://www.youtube.com/embed/G44r-rmz_rw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>  

<!-- <img style="float: right;" src="/assets/head_quad.jpg" width="30%">  -->  
<!-- <iframe src="http://www.fufuok.com/" id="iframepage" name="iframepage" frameBorder=0 scrolling=no width="100%" onLoad="iFrameHeight()" ></iframe> -->
<br>
__Brief Introduction:__ 

Autonomous navigation of Micro Aerial Vehicles (MAVs) in dynamic and unknown environments is a complex and challenging task. Current works rely on assumptions to solve the problem. The MAV's pose is precisely known, the dynamic obstacles can be explicitly segmented from static ones, their number is known and fixed, or they can be modeled with given shapes. In this letter, we present a method for MAV navigation in dynamic uncertain environments without making any of these assumptions. The method employs a particle-based dynamic map to represent the local environment and predicts it to the near future. Collision risk is defined based on the predicted maps and a series of risk-aware spatio-temporal (RAST) safety corridors are constructed, which are finally used to optimize a dynamically-feasible collision-free trajectory for the MAV. We compared our method with several state-of-the-art works in 12000 simulation tests in Gazebo with the physical engine enabled. The results show that our method has the highest success rate at different uncertainty levels. Finally, we validated the proposed method in real experiments.

This paper is accepted by IEEE Robotics and Automation Letters. https://ieeexplore.ieee.org/document/9998074.

<br>
<hr style="height:1px;border:none;border-top:1px solid #555555;" />   

   
 
