document.addEventListener("DOMContentLoaded", function () {
    const publications = [
        {
            title: "Pushing Through Clutter With Movability Awareness of Blocking Obstacles",
            authors: "Joris J Weeda, Saray Bakker, Gang Chen, Javier Alonso-Mora",
            journal: "IEEE International Conference on Robotics and Automation (ICRA)",
            year: 2025,
            month: 1,
            arXiv: "https://arxiv.org/pdf/2502.20106",
            video: "https://www.youtube.com/watch?v=oePiRNrdl4Q",
            code: "https://github.com/tud-amr/SVG-MPPI",
            abstract: "Navigation Among Movable Obstacles (NAMO) poses a challenge for traditional path-planning methods when obstacles block the path, requiring push actions to reach the goal. We propose a framework that enables movability-aware planning to overcome this challenge without relying on explicit obstacle placement. Our framework integrates a global Semantic Visibility Graph and a local Model Predictive Path Integral (SVG-MPPI) approach to efficiently sample rollouts, taking into account the continuous range of obstacle movability. A physics engine is adopted to simulate the interaction result of the rollouts with the environment, and generate trajectories that minimize contact force. In qualitative and quantitative experiments, SVG-MPPI outperforms the existing paradigm that uses only binary movability for planning, achieving higher success rates with reduced cumulative contact forces. Our code is available at: https://github.com/tud-amr/SVG-MPPI"
        },
        {
            title: "Particle-based Instance-aware Semantic Occupancy Mapping in Dynamic Environments",
            authors: "G Chen, Z Wang, W Dong, J Alonso-Mora",
            journal: "IEEE Transactions on Robotics",
            year: 2025,
            month: 1,
            link: "https://ieeexplore.ieee.org/abstract/document/10824916",
            arXiv: "https://arxiv.org/pdf/2409.11975",
            video: "https://youtu.be/OIJDZRtHFHE",
            code: "https://github.com/tud-amr/semantic_dsp_map",
            abstract: "Representing the 3D environment with instance-aware semantic and geometric information is crucial for interaction-aware robots in dynamic environments..."
        },
        {
            title: "Evaluating Dynamic Environment Difficulty for Obstacle Avoidance Benchmarking",
            authors: "M Shi, G Chen, ÁS Gómez, S Wu, J Alonso-Mora",
            journal: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
            year: 2024,
            month: 4,
            arXiv: "https://arxiv.org/pdf/2404.14848",
            video: "https://smoggy-p.github.io/Evaluating_Dynamic_Difficulty/",
            code: "https://github.com/smoggy-P/gym-Drone2D-ActivePerception",
            abstract: "Benchmarking obstacle avoidance algorithms in dynamic environments is challenging due to the lack of a standardized difficulty metric..."
        },
        {
            title: "Decentralized Multi-Agent Trajectory Planning in Dynamic Environments with Spatiotemporal Occupancy Grid Maps",
            authors: "S Wu, G Chen, M Shi, J Alonso-Mora",
            journal: "IEEE International Conference on Robotics and Automation",
            year: 2024,
            month: 5,
            arXiv: "https://arxiv.org/pdf/2404.15602",
            video: "https://github.com/siyuanwu99/pred-occ-planner",
            code: "https://github.com/siyuanwu99/pred-occ-planner",
            abstract: "Decentralized multi-agent trajectory planning in dynamic environments is a challenging problem due to the high dimensionality of the state space..."
        },
        {
            title: "Continuous Occupancy Mapping in Dynamic Environments Using Particles",
            authors: "G Chen, W Dong, P Peng, J Alonso-Mora, X Zhu",
            journal: "IEEE Transactions on Robotics",
            year: 2023,
            month: 9,
            link: "https://ieeexplore.ieee.org/abstract/document/10285872",
            arXiv: "https://arxiv.org/pdf/2202.06273",
            video: "https://youtu.be/seF_Oy4YbXo",
            code: "https://github.com/g-ch/DSP-map",
            abstract: "Particle-based dynamic occupancy maps were proposed in recent years to model the obstacles in dynamic environments..."
        },
        {
            title: "Risk-aware Trajectory Sampling for Quadrotor Obstacle Avoidance in Dynamic Environments",
            authors: "G Chen, P Peng, P Zhang, W Dong",
            journal: "IEEE Transactions on Industrial Electronics",
            year: 2023,
            month: 4,
            link: "https://ieeexplore.ieee.org/abstract/document/10034468",
            video: "https://youtu.be/UmmZzJi25GE",

            abstract: "This paper explores risk-aware trajectory sampling techniques for quadrotor obstacle avoidance in dynamic environments..."
        },
        {
            title: "Rast: Risk-aware Spatio-temporal Safety Corridors for MAV Navigation in Dynamic Uncertain Environments",
            authors: "G Chen, S Wu, M Shi, W Dong, H Zhu, J Alonso-Mora",
            journal: "IEEE Robotics and Automation Letters",
            year: 2022,
            month: 12,
            link: "https://ieeexplore.ieee.org/abstract/document/9998074",
            video: "https://youtu.be/G44r-rmz_rw",
            code: "https://github.com/tud-amr/rast",
            abstract: "Autonomous navigation of Micro Aerial Vehicles in dynamic and unknown environments is a complex and challenging task..."
        },
        {
            title: "Obstacle Avoidance of Resilient UAV Swarm Formation with Active Sensing System in the Dense Environment",
            authors: "P Peng, W Dong, G Chen, X Zhu",
            journal: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
            year: 2022,
            month: 11,
            link: "https://ieeexplore.ieee.org/abstract/document/9981858",
            arXiv: "https://arxiv.org/abs/2202.13381",
            abstract: "This paper presents a novel obstacle avoidance algorithm for resilient UAV swarm formation in dense environments..."
        },
        {
            title: "What Should Be the Input: Investigating the Environment Representations in Sim-to-Real Transfer for Navigation Tasks",
            authors: "G Chen, H Yu, W Dong, X Sheng, X Zhu, H Ding",
            journal: "Robotics and Autonomous Systems",
            year: 2019,
            month: 12,
            link: "https://www.sciencedirect.com/science/article/abs/pii/S0921889022000409",
            arXiv: "https://arxiv.org/abs/1910.05758",
            video: "https://youtu.be/ucGyuMjlgEk",
            abstract: "Sim-to-real transfer is a challenging problem in robotics, especially for navigation tasks in dynamic environments..."
        },
        {
            title: "Agile Formation Control of Drone Flocking Enhanced with Active Vision-based Relative Localization",
            authors: "P Zhang, G Chen, Y Li, W Dong",
            journal: "IEEE Robotics and Automation Letters",
            year: 2022,
            month: 7,
            link: "https://ieeexplore.ieee.org/abstract/document/9765385",
            arXiv: "https://arxiv.org/abs/2108.05505",
            abstract: "This paper presents a novel vision-based formation control algorithm for drone flocking in dynamic environments..."
        },
        {
            title: "Computationally Efficient Topological Mapping With Layered Spanning Trees",
            authors: "W Dong, C Gong, G Chen, X Sheng, X Zhu",
            journal: "IEEE/ASME Transactions on Mechatronics",
            year: 2022,
            month: 2,
            link: "https://ieeexplore.ieee.org/abstract/document/9704879",
            abstract: "Topological maps are widely used in robotics for high-level planning and decision-making tasks..."
        },
        {
            title: "Computationally Efficient Trajectory Planning for High Speed Obstacle Avoidance of a Quadrotor with Active Sensing",
            authors: "G Chen, D Sun, W Dong, X Sheng, X Zhu, H Ding",
            journal: "IEEE Robotics and Automation Letters",
            year: 2021,
            month: 2,
            link: "https://ieeexplore.ieee.org/abstract/document/9363525",
            video: "https://youtu.be/zgIZDW39KJs",
            abstract: "This paper presents a computationally efficient trajectory planning algorithm for high-speed obstacle avoidance of a quadrotor..."
        },
        {
            title: "An Active Sense and Avoid System for Flying Robots in Dynamic Environments",
            authors: "G Chen, W Dong, X Sheng, X Zhu, H Ding",
            journal: "IEEE/ASME Transactions on Mechatronics",
            year: 2021,
            month: 2,
            link: "https://ieeexplore.ieee.org/abstract/document/9359513",
            video: "https://youtu.be/VohL2d_yYpg",
            abstract: "This paper presents an active sense and avoid system for flying robots in dynamic environments..."
        },
        {
            title: "Robust Visual Positioning of the UAV for the Under Bridge Inspection with a Ground Guided Vehicle",
            authors: "Z Wang, S Liu, G Chen, W Dong",
            journal: "IEEE Transactions on Instrumentation and Measurement",
            year: 2021,
            month: 12,
            link: "https://ieeexplore.ieee.org/abstract/document/9650840",
            abstract: "Visual positioning of UAVs is a challenging problem in robotics, especially for under-bridge inspection tasks..."
        },
        {
            title: "TRP-Controller: An Efficient Anti-Saturation Controller for Quadrotors Performing Yaw-Low-Priority Motions",
            authors: "G Chen, P Zhang, Z Wang, W Dong",
            journal: "IEEE International Conference on Mechatronics and Machine Vision in Practice",
            year: 2021,
            month: 11,
            link: "https://ieeexplore.ieee.org/abstract/document/9665067",
            abstract: "This paper presents a novel anti-saturation controller for quadrotors performing yaw-low-priority motions..."
        },
        {
            title: "Dragon Rider-An Integrated Unmanned Quadruped-Hexarotor System for Flight-Impeded Area Exploration",
            authors: "H Shan, G Chen, S Shi, ZWM Qin, W Dong",
            journal: "IEEE International Conference on Mechatronics and Machine Vision in Practice",
            year: 2021,
            month: 11,
            link: "https://ieeexplore.ieee.org/abstract/document/9665137",
            abstract: "This paper presents an integrated unmanned quadruped-hexarotor system for flight-impeded area exploration..."
        },
        {
            title: "Efficient Learning-based Trajectory Tacker for Quadrotor at High-speed Flight",
            authors: "P Peng, Y Ni, G Chen, W Dong",
            journal: "IEEE Robotics and Control Applications",
            year: 2021,
            month: 7,
            link: "https://ieeexplore.ieee.org/abstract/document/9517601",
            abstract: "This paper presents a novel learning-based trajectory tracking algorithm for quadrotors at high-speed flight..."
        },
        {
            title: "Generating Spatial Semantic Representations for Indoor Global Mapping",
            authors: "G Chen, W Dong, X Sheng, X Zhu",
            journal: "IEEE Robotics and Control Applications",
            year: 2019,
            month: 8,
            link: "https://ieeexplore.ieee.org/abstract/document/9043998",
            abstract: "This paper presents a novel approach for generating spatial semantic representations for indoor global mapping..."
        },
        {
            title: "A Separate Data Structure for Online Multi-hypothesis Topological Mapping",
            authors: "C Gong, G Chen, W Dong, X Sheng, X Zhu",
            journal: "IEEE Robotics and Control Applications",
            year: 2019,
            month: 8,
            link: "https://link.springer.com/chapter/10.1007/978-3-030-27538-9_58",
            abstract: "This paper presents a novel data structure for online multi-hypothesis topological mapping in dynamic environments..."
        }
    ];

    // Sort publications by year and month (descending)
    publications.sort((a, b) => {
        if (b.year !== a.year) return b.year - a.year;
        return b.month - a.month;
    });

    // Group publications by year
    const groupedPublications = {};
    publications.forEach((pub) => {
        if (!groupedPublications[pub.year]) {
            groupedPublications[pub.year] = [];
        }
        groupedPublications[pub.year].push(pub);
    });

    // Generate HTML for each year group
    const container = document.getElementById("publication-container");
    Object.keys(groupedPublications)
        .sort((a, b) => b - a) // Sort years descending
        .forEach((year) => {
            const yearSection = document.createElement("div");
            yearSection.classList.add("year-section");
            yearSection.innerHTML = `<h3>${year}</h3>`;

            groupedPublications[year].forEach((pub) => {
                const pubCard = document.createElement("div");
                pubCard.classList.add("publication-card");
                
                // Create links HTML only for properties that exist
                const linksHTML = [
                    { prop: 'link', text: 'Link' },
                    { prop: 'arXiv', text: 'arXiv' },
                    { prop: 'code', text: 'Code' },
                    { prop: 'video', text: 'Video' }
                ].map(({prop, text}) => 
                    pub[prop] ? `<a href="${pub[prop]}" target="_blank" class="read-more">${text}</a>&nbsp ` : ''
                ).join(''); // Added a space after each link
            
                pubCard.innerHTML = `
                    <h4>${pub.title}</h4>
                    <p class="authors">${pub.authors}</p>
                    <p class="journal">${pub.journal} (${pub.year})</p>
                    <p class="abstract">${pub.abstract}</p>
                    <div class="links-container">${linksHTML}</div>
                `;
                yearSection.appendChild(pubCard);
            });

            container.appendChild(yearSection);
        });
});
