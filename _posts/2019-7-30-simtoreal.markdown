---  
layout: post  
title:  "Learning to Navigate from Simulation via Spatial and Semantic Information Synthesis with Noise Model Embedding"  
date:   2019-7-30 15:16:26 +0530  
categories: Transfer_Learning Visual_Navigation Imitation_Learning  
---    
<center>
	<iframe width="900" height="600" src="https://www.youtube.com/embed/ucGyuMjlgEk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
</center>   
__Publication:__  
__G. Chen__, H. Yu, W. Dong, X. Sheng, X. Zhu, H. Ding, Learning to Navigate from Simulation via Spatial and Semantic Information Synthesis, in Preprint: <https://arxiv.org/abs/1910.05758>   
&ensp;&ensp;&ensp;&ensp;This work systematically investigates environment representations for visual navigation through sim-to-real transfer learning. A visual information pyramid (VIP) model and three criteria for a proper representation is proposed. Then we presents our representation composed of a depth image with particular noise model and a categorized detection image to adjust sim-to-real learning-based navigation in environment with both static and dynamic obstacles. To evaluate the effectiveness, we firstly built a coarse simulation environment in Gazebo and collected a one-hour-long dataset from expert's operation. Then we trained eight models with our representation and other representations popularly used in the literature, such as RGB image, depth image and segmented semantic image. The model trained with our representation stands out in both simulation and real world tests. Further more, we analyzed the inner reaction of the network models to given further comparison.   
<center>
	<img src="/assets/semantic.png" width="60%">  
</center>  
&ensp;&ensp;&ensp;&ensp;This project is to realize obstacle avoidance through end-to-end learning rather than traditional planner. Training in simulation and utilizing directly in the real world is pretty convenient. The result is promising and we are still working on utilizing reinforcement learning to achieve better performance.       
<hr style="height:1px;border:none;border-top:1px solid #555555;" />   
    

  

