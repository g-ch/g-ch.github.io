---  
layout: post  
img: ":DSP-MAP.png"
title:  "[Preprint] Dual-structure Particle-based (DSP) map for dynamic environments. Continuous and uncertainty-aware."  
date:   2022-1-3 11:08:01 +0530  
categories: Map_Building Obstacle_Avoidance Trajectory_Planning
---   
<center>
	<iframe width="100%" height="480" src="https://www.youtube.com/embed/seF_Oy4YbXo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>  
<!-- <img style="float: right;" src="/assets/head_quad.jpg" width="30%">  -->  
<!-- <iframe src="http://www.fufuok.com/" id="iframepage" name="iframepage" frameBorder=0 scrolling=no width="100%" onLoad="iFrameHeight()" ></iframe> -->
<br>
__Brief Introduction:__   

This map is designed to efficiently represent the environment with both static and dynamic obstacles. Only point cloud and odometry are required to build the map. The theoretical basis is the random finite set and PHD filter. With particles updated with a special dual-structure (pyramid structure and voxel structure) pipeline, the map can derive current and future occupancy status in continuous form and uncertainty can be represented. Thus it can be used to realize obstacle avoidance in dynamic environments. 

To the best of the authors’ knowledge,this is the first continuous particle-based occupancy map andthe first dynamic occupancy map that can be applied to small-scale robotic systems like quadrotors.The main contributions of this work include four points: 
* A   novel   dual-structure   particle-based   map   buildingparadigm  that  enables  continuous  mapping  of  the  oc-cupancy status of dynamic environments.
* The  leverage  of  initial  velocity  estimation  and  an  effi-cient mixture model to reduce noise in modeling static and dynamic obstacles simultaneously.
* The  complete  procedures  of  building  a  DSP  map  thatcan be applied to onboard computing devices of small-scale robotic systems.
* The released code at <https://github.com/g-ch/DSP-map>, including an example application in ROS.

This paper is under review currently. A preprint version can be found at <https://arxiv.org/abs/2202.06273>.
<br>
<hr style="height:1px;border:none;border-top:1px solid #555555;" />   

   
 
