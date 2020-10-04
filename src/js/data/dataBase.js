const dataBase = {
	resources: [
		{ id: 1, name: 'Water' },
		{ id: 2, name: 'Energy' },
		{ id: 3, name: 'Materials' },
		{ id: 4, name: 'Anti-Matter' },
		{ id: 5, name: 'Science' }
	],
	technologies: [
		{
			name: 'Chemical Propulsion',
			id: 1,
			techneed: [ 0 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			description:
				'Since the beginning of space exploration, the combustion of hydrogen and oxygen has been used to push our rockets'
		},
		{
			name: 'Food Biotechnology',
			id: 2,
			techneed: [ 0 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			description:
				'Food is a very valuable resource, to feed the entire population it is necessary to modify some organisms and process them more efficiently.'
		},
		{
			name: 'Nuclear Fission',
			id: 3,
			techneed: [ 0 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			description:
				'A fairly efficient way to produce energy while developing better methods is the fission of radioactive elements such as Uranium.'
		},
		{
			name: 'Ionic Propulsion',
			id: 4,
			techneed: [ 0 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			description:
				'Ion thrusters are being designed for a wide variety of missions. These thrusters have high specific impulses, so they require significantly less propellant for a given mission than would be needed with chemical propulsion.'
		},
		{
			name: 'Solar Panels',
			id: 5,
			techneed: [ 0 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			description:
				'Photovoltaic panels allow obtaining energy irradiated by our sun to maintain low energy consumption missions'
		},
		{
			name: 'Water purification plants',
			id: 6,
			techneed: [ 0 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 1 ] ],
			description:
				'Water is an essential resource for life and human activities, the purification plants will clean and desalinate it to use it in our expansion through the solar system.'
		},
		{
			name: 'Reusable Rockets',
			id: 7,
			techneed: [ 1 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			description:
				'For years it has been quite expensive to send material and people into space, having rockets that can rise to the skies and return to be used again is a great step towards economical space exploration.'
		},
		{
			name: 'Space Agriculture',
			id: 8,
			techneed: [ 2 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 1 ] ],
			description:
				'Planting and processing food in space is necessary to begin placing permanent stations on other celestial bodies.'
		},
		{
			name: 'Deep Learning',
			id: 9,
			techneed: [ 0 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 1 ] ],
			description:
				'The development of artificial intelligence together with the automation of industrial and exploration tasks will allow us to go further than ever before'
		},
		{
			name: 'Nuclear Pulse Propulsion',
			id: 10,
			techneed: [ 3 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 1 ] ],
			description:
				'A nuclear explosion, probably the most destructive weapon of humanity, could now be our best option to carry missions to distant parts of the solar system'
		},
		{
			name: 'Sky Hook',
			id: 11,
			techneed: [ 0 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 1 ] ],
			description:
				'A cable that extends into the upper atmosphere is connected to an orbiting station. Payloads are hooked to the end of the cable and put into orbit by rotating the structure'
		},
		{
			name: 'Nuclear Fusion',
			id: 12,
			techneed: [ 3 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 2 ] ],
			description:
				'The process that powers the stars, nuclear fusion, is the way to a world with abundant and cleaner energy. The reactors require a lot of research and engineering work, not to mention the precious Tritium and Helium-3 required for the process.'
		},
		{
			name: 'Inteligent Builders',
			id: 13,
			techneed: [ 9 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 1 ] ],
			description:
				'Unmanned spacecraft, excavators and material processors that will allow the construction of settlements and the obtaining of resources throughout the solar system'
		},
		{
			name: 'Moon Mining',
			id: 14,
			techneed: [ 0 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 1 ] ],
			description:
				'The moon, our favorite natural satellite, has a huge amount of resources that can power this new space race, lots of Helium-3 and water are just a few.'
		},
		{
			name: 'Asteroid Mining',
			id: 15,
			techneed: [ 13 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 1 ] ],
			description:
				"Steroids contain plenty of water, precious metals, and minerals necessary for the electronics and space industry. Lets' mine them!"
		},
		{
			name: 'Moon Space Elevator',
			id: 16,
			techneed: [ 14 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 1 ] ],
			description:
				'Even with not very advanced materials, it is possible to create a structure that allows us to orbit and launch charges easily from the lunar surface. Our first space elevator!'
		},
		{
			name: 'Solar Sail Propulsion',
			id: 17,
			techneed: [ 0 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 2 ] ],
			description:
				'Ships propelled by Solar Sails allow to move light payloads only using radiation pressure from the sun.'
		},
		{
			name: 'Moon Base',
			id: 18,
			techneed: [ 8, 11 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 2 ] ],
			description:
				"A permanent lunar base must be one of humanity's first attempts to colonize space, close enough to home to send and receive resources."
		},
		{
			name: 'Mars Colony',
			id: 19,
			techneed: [ 8, 11, 18 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 2 ] ],
			description:
				'An advanced Martian colony is a backup for life on Earth and the beginning of our journey to an even greater goal, interstellar travel.'
		},
		{
			name: 'Titan Base',
			id: 20,
			techneed: [ 15 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 2 ] ],
			description:
				'A nuclear explosion, probably the most destructive weapon of humanity could now be our best option to carry missions to distant parts of the solar system'
		},
		{
			name: 'Planetary Space Elevator',
			id: 21,
			techneed: [ 19 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 3 ] ],
			description:
				"This massive mega-structure allows easy transport for people and materials to a planet's orbit "
		},
		{
			name: 'Transneptunian Laser Relays',
			id: 22,
			techneed: [ 17 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 3 ] ],
			description:
				"When solar sails are your best chance to escape the Oort's cloud, powerful lasers mounted in asteroids are needed to hit those sails like an arrow to a bullseye"
		},
		{
			name: 'Alpha Centaury Spaceprobe',
			id: 23,
			techneed: [ 22 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 3 ] ],
			description:
				'Alpha Centaury is the closest stellar system to the solar system. With the use of laser relays and solar sails, humanity can finally reach this intriging destination with a probe in a relative short time'
		},
		{
			name: 'Self-replicating Machines',
			id: 24,
			techneed: [ 13 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 3 ] ],
			description:
				'This cutting-edge concept of technology is all about super-intelligent machines replicating themselves to build stellar magnitude structures and ships'
		},
		{
			name: 'Planet Mining',
			id: 25,
			techneed: [ 12, 15, 24 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 2 ] ],
			description:
				'With the use of Self-replicating machines and autonomous logistic robots is posible to extract the resources of an entire planet in the span of only a few human generations'
		},
		{
			name: "O'Neill Cyllinder",
			id: 26,
			techneed: [ 24 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 3 ] ],
			description:
				"Enventually, humans need to stop living in planets and develop some custom, fully controlable new generation habitat. Overpopulation? O'Neill cylinders got you covered"
		},
		{
			name: 'Partial Dyson Swarm',
			id: 27,
			techneed: [ 25 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 4 ] ],
			description:
				'Planet mining and autonomous builders allows to start gathering all the energy a star has to offer, this structure has a truly titanic scale and is worth a shirtload of resources'
		},
		{
			name: 'Advanced Particle Accelerators',
			id: 28,
			techneed: [ 27 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 5 ] ],
			description:
				'The construction of a Dyson swarm allows to create stellar or planetary rings made for mashing a lot of little particles togheter and create new ones. This structures are very important for a better understanding of quantum mechanics'
		},
		{
			name: 'Technological Singularity',
			id: 29,
			techneed: [ 9, 13, 24 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 4 ] ],
			description:
				'So, you madlads just uploaded an entire brain to a digital medium, congratulations, you have achieved technological singularity'
		},
		{
			name: 'Standard Model Completeness',
			id: 30,
			techneed: [ 28 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 5 ] ],
			description:
				'Seems like little particle mashing got us the universal understanding of physics. Now you can probably go back in time or go FTL, who knows'
		},
		{
			name: 'Full Dyson Swarm',
			id: 31,
			techneed: [ 27 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 6 ] ],
			description:
				'This whole structure can harvest all the energy of a star with great efficiency. Building this thing means a civilization is level 2 on the Kardashev scale'
		},
		{
			name: 'Kugelblitz',
			id: 32,
			techneed: [ 27 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 5 ] ],
			description:
				'It seems possible to contain a little blackhole in a structure, this sure is useful for matter-energy conversion'
		},
		{
			name: 'Black Hole Propulsion',
			id: 33,
			techneed: [ 32 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 4 ] ],
			description:
				'With the use of a Kugelblitz, a black hole propulsion ship is capable of reaching relativistic speeds autonomously'
		},
		{
			name: 'Dark Energy Manipulation',
			id: 34,
			techneed: [ 30 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 12 ] ],
			description:
				'Pushing the understanding of physics to the limit, this technology concept allows harvesting and convertind dark energy'
		},
		{
			name: 'Warp Alcubierre Drive',
			id: 35,
			techneed: [ 34 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 15 ] ],
			description:
				'Experimenting with dark matter, humanity founds that "negative mass" is a thing, now it\'s all about folding the spacetime to go faster than light'
		},
		{
			name: ' Exoplanet Colony',
			id: 36,
			techneed: [ 35 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 7 ] ],
			description:
				'With the brand new warp drive ships, humanity now can travel interestellar space in a reasonable amount of time. Time to go colonize those exoplanets'
		},
		{
			name: 'Black Hole Bomb',
			id: 37,
			techneed: [ 36 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 20 ] ],
			description:
				'Humans are now truly deranged, this concept allows galactic scale matter-energy conversions. This is the first step to become an intergalactic civilization'
		}
	],
	units: [
		{
			name: 'Basic mine',
			id: 1,
			techneed: [ 0 ],
			resneed: [ [ 1, 1 ], [ 2, 0 ], [ 3, 1 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0.1 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 200,
			expendable: true
		},
		{
			name: 'Nuclear Fission Reactor',
			id: 2,
			techneed: [ 3 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 3 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0.1 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 300,
			expendable: true
		},
		{
			name: 'Ionic Propulsion Ship',
			id: 3,
			techneed: [ 4 ],
			resneed: [ [ 1, 0 ], [ 2, 0.5 ], [ 3, 0.5 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 20,
			expendable: true
		},
		{
			name: 'Solar Panel',
			id: 4,
			techneed: [ 5 ],
			resneed: [ [ 1, 0 ], [ 2, 1 ], [ 3, 1 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0.01 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 500,
			expendable: true
		},
		{
			name: 'Water purification plant',
			id: 5,
			techneed: [ 6 ],
			resneed: [ [ 1, 0 ], [ 2, 0 ], [ 3, 1 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0.1 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1000,
			expendable: false
		},
		{
			name: 'Reusable Rocket',
			id: 6,
			techneed: [ 1, 7 ],
			resneed: [ [ 1, 0.5 ], [ 2, 0.5 ], [ 3, 1 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 20,
			expendable: true
		},
		{
			name: 'Nuclear Pulse Rocket',
			id: 7,
			techneed: [ 10 ],
			resneed: [ [ 1, 0 ], [ 2, 1 ], [ 3, 1.5 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 20,
			expendable: true
		},
		{
			name: 'Sky Hook',
			id: 8,
			techneed: [ 11 ],
			resneed: [ [ 1, 1 ], [ 2, 1 ], [ 3, 5 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 5,
			expendable: false
		},
		{
			name: 'Nuclear Fusion Reactor',
			id: 9,
			techneed: [ 12 ],
			resneed: [ [ 1, 2 ], [ 2, 5 ], [ 3, 5 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 5 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 250,
			expendable: true
		},
		{
			name: 'Unmmaned Asteroid Miner',
			id: 10,
			techneed: [ 13, 15 ],
			resneed: [ [ 1, 0 ], [ 2, 1 ], [ 3, 1.5 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 2 ], [ 2, 0 ], [ 3, 0.3 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 300,
			expendable: true
		},
		{
			name: 'Moon Space Elevator',
			id: 11,
			techneed: [ 16 ],
			resneed: [ [ 1, 1 ], [ 2, 4 ], [ 3, 4 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 1 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: false
		},
		{
			name: 'Martian Colony',
			id: 12,
			techneed: [ 11, 19 ],
			resneed: [ [ 1, 8 ], [ 2, 12 ], [ 3, 12 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 3 ], [ 2, 1 ], [ 3, 1 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: false
		},
		{
			name: 'Titan Research Base',
			id: 13,
			techneed: [ 20 ],
			resneed: [ [ 1, 8 ], [ 2, 15 ], [ 3, 12 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 4 ], [ 2, 1 ], [ 3, 1 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: false
		},
		{
			name: 'Planetary Space Elevator',
			id: 14,
			techneed: [ 19 ],
			resneed: [ [ 1, 4 ], [ 2, 30 ], [ 3, 30 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 3 ], [ 2, 0 ], [ 3, 5 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 2,
			expendable: false
		},
		{
			name: 'Laser Relay',
			id: 15,
			techneed: [ 22 ],
			resneed: [ [ 1, 15 ], [ 2, 100 ], [ 3, 60 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 1 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: false
		},
		{
			name: 'Alpha Centaury Spaceprobe',
			id: 16,
			techneed: [ 23 ],
			resneed: [ [ 1, 0 ], [ 2, 20 ], [ 3, 30 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 5,
			expendable: true
		},
		{
			name: 'Self-Replicating Miner',
			id: 17,
			techneed: [ 12, 15, 24, 25 ],
			resneed: [ [ 1, 0 ], [ 2, 200 ], [ 3, 200 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 50 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 3,
			expendable: false
		},
		{
			name: "O'Neill Cyllinder",
			id: 18,
			techneed: [ 26 ],
			resneed: [ [ 1, 800 ], [ 2, 800 ], [ 3, 5000 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: false
		},
		{
			name: 'Partial Dyson Swarm',
			id: 19,
			techneed: [ 27 ],
			resneed: [ [ 1, 0 ], [ 2, 1000 ], [ 3, 10000 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 300 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: false
		},
		{
			name: 'Advanced Particle Accelerators',
			id: 20,
			techneed: [ 28 ],
			resneed: [ [ 1, 800 ], [ 2, 100000 ], [ 3, 8000 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 6 ], [ 5, 0 ] ],
			max: 20,
			expendable: false
		},
		{
			name: 'Full Dyson Swarm',
			id: 21,
			techneed: [ 31 ],
			resneed: [ [ 1, 0 ], [ 2, 300000 ], [ 3, 40000 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 2000 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: false
		},
		{
			name: 'Kugelblitz',
			id: 22,
			techneed: [ 32 ],
			resneed: [ [ 1, 0 ], [ 2, 100000 ], [ 3, 5000 ], [ 4, 120 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 500 ], [ 3, 0 ], [ 4, 6 ], [ 5, 0 ] ],
			max: 3,
			expendable: true
		},
		{
			name: 'Black Hole Starship',
			id: 23,
			techneed: [ 33 ],
			resneed: [ [ 1, 1000 ], [ 2, 50000 ], [ 3, 5000 ], [ 4, 240 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: true
		},
		{
			name: 'Dark Energy Device',
			id: 24,
			techneed: [ 34 ],
			resneed: [ [ 1, 0 ], [ 2, 300000 ], [ 3, 5000 ], [ 4, 1500 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: false
		},
		{
			name: 'Warp Drive Starship',
			id: 25,
			techneed: [ 35 ],
			resneed: [ [ 1, 800 ], [ 2, 1000000 ], [ 3, 5000 ], [ 4, 3000 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: true
		},
		{
			name: 'Exoplanet Colony',
			id: 26,
			techneed: [ 36 ],
			resneed: [ [ 1, 2500 ], [ 2, 1000000 ], [ 3, 80000 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 10 ], [ 2, 100 ], [ 3, 100 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: false
		},
		{
			name: 'Black Hole Bomb',
			id: 27,
			techneed: [ 37 ],
			resneed: [ [ 1, 0 ], [ 2, 10000000 ], [ 3, 80000 ], [ 4, 0 ], [ 5, 0 ] ],
			resprod: [ [ 1, 0 ], [ 2, 10000 ], [ 3, 0 ], [ 4, 0 ], [ 5, 0 ] ],
			max: 1,
			expendable: false
		}
	],
	missions: [
		{
			name: 'A new small step',
			description: 'Send a manned mission to Mars',
			id: 1,
			techneed: [ 1, 5, 7 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 0 ],
				[ 3, 0 ],
				[ 4, 1 ],
				[ 5, 0 ],
				[ 6, 1 ],
				[ 7, 0 ],
				[ 8, 0 ],
				[ 9, 0 ],
				[ 10, 0 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 0 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 0 ],
				[ 18, 0 ],
				[ 19, 0 ],
				[ 20, 0 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 5 ], [ 2, 2 ], [ 3, 10 ], [ 4, 0 ], [ 5, 9 ] ],
			intro:
				'Decades of technological innovation have brought us so far, we are ready to take the next small step towards a better future',
			fail:
				'Something terrible has happened, it is confirmed that our mission has failed. An unexpected problem happened during the landing. It will take a while until we can launch a second one.',
			end:
				'After months wandering through empty space, the first human colonists have arrived to their new home. Which new challenges lie ahead?'
		},
		{
			name: 'Space mining',
			description: 'Start mining operations in ceres',
			id: 2,
			techneed: [ 9, 11, 13, 15 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 1 ],
				[ 3, 0 ],
				[ 4, 2 ],
				[ 5, 0 ],
				[ 6, 3 ],
				[ 7, 0 ],
				[ 8, 0 ],
				[ 9, 0 ],
				[ 10, 1 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 0 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 0 ],
				[ 18, 0 ],
				[ 19, 0 ],
				[ 20, 0 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 5 ], [ 2, 2 ], [ 3, 10 ], [ 4, 0 ], [ 5, 9 ] ],
			intro:
				"Long ago came the idea of extracting raw materials from the remains of the formation of our solar system, we believe we have the technology to achieve it. Let's do it!",
			fail:
				'Some defects in the propulsion systems have led to a catastrophic mission failure, the mining ship crashed before we could have done anything. We should try again',
			end:
				"For millennia we have drained our Earth's mineral resources, threatening all it's inhabitants. Today, we start leaving that behind."
		},
		{
			name: 'An unusual Earth',
			description: 'Launch Probes to Titan',
			id: 3,
			techneed: [ 16, 4 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 2 ],
				[ 3, 2 ],
				[ 4, 3 ],
				[ 5, 0 ],
				[ 6, 0 ],
				[ 7, 0 ],
				[ 8, 0 ],
				[ 9, 0 ],
				[ 10, 0 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 0 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 0 ],
				[ 18, 0 ],
				[ 19, 0 ],
				[ 20, 0 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 5 ], [ 2, 5 ], [ 3, 20 ], [ 4, 0 ], [ 5, 9 ] ],
			intro:
				'Titan is an Earth like place, but with temperatures of -290.5°F and seas of methane instead of water. It is the only known moon that has an atmosphere in the solar system. Quite an interesting place to explore.',
			fail:
				'Turbulent gusts in the Titan atmosphere have caused the mission to fail at the last minute. With what we have learned, we can repeat the mission more carefully',
			end:
				'No doubt this saturnian moon looks like a promising place to set up camp. Building a permanent base here could prove useful.'
		},
		{
			name: 'The frozen moons',
			description: 'Send exploration missions to Enceladus and Europe',
			id: 4,
			techneed: [ 0 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 2 ],
				[ 3, 2 ],
				[ 4, 4 ],
				[ 5, 0 ],
				[ 6, 0 ],
				[ 7, 0 ],
				[ 8, 0 ],
				[ 9, 0 ],
				[ 10, 0 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 0 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 0 ],
				[ 18, 0 ],
				[ 19, 0 ],
				[ 20, 0 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 5 ], [ 2, 5 ], [ 3, 20 ], [ 4, 0 ], [ 5, 9 ] ],
			intro:
				"The frozen moons Enceladus and Europe have intrigued our scientists for decades, some consider that under their surface there could be new life forms. It's time to visit them.",
			fail:
				'We are not quite sure what went wrong, we lost contact with the spacecraft, the data will be analyzed to find out the source of the failure. Another attempt must be made',
			end: "The data we're receiving is mind-blowing. This will surely keep our scientists busy for a while."
		},
		{
			name: 'Beyond Neptune',
			description: 'Start mining operations in trans-Neptunian bodies',
			id: 5,
			techneed: [ 10 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 3 ],
				[ 3, 0 ],
				[ 4, 2 ],
				[ 5, 0 ],
				[ 6, 0 ],
				[ 7, 3 ],
				[ 8, 0 ],
				[ 9, 0 ],
				[ 10, 3 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 0 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 0 ],
				[ 18, 0 ],
				[ 19, 0 ],
				[ 20, 0 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 10 ], [ 2, 10 ], [ 3, 50 ], [ 4, 0 ], [ 5, 9 ] ],
			intro:
				'With new advances in propulsion systems for our spacecrafts, we are now able to access the farthest regions of our solar system. Exploring trans-Neptunian objects is already a possibility. ',
			fail:
				'After experiencing some issues with telemetry, we lost contact with the spacecraft. another try is necessary',
			end:
				"Now that we've established a presence at the edge of our solar system, some hope for a journey to the stars."
		},
		{
			name: 'Bullseye',
			description: 'Build laser shuttles for solar sails',
			id: 6,
			techneed: [ 12, 22 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 3 ],
				[ 3, 0 ],
				[ 4, 4 ],
				[ 5, 0 ],
				[ 6, 0 ],
				[ 7, 3 ],
				[ 8, 0 ],
				[ 9, 3 ],
				[ 10, 3 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 0 ],
				[ 15, 1 ],
				[ 16, 0 ],
				[ 17, 0 ],
				[ 18, 0 ],
				[ 19, 0 ],
				[ 20, 0 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 10 ], [ 2, 10 ], [ 3, 50 ], [ 4, 0 ], [ 5, 9 ] ],
			intro:
				'The idea of using our improved laser technology to propel the new solar sails spacecrafts is a reality. We must find a place to set up laser facilities.',
			fail:
				'Various imperfections in the optical systems of lasers have rendered them useless. it is necessary to repeat the mission',
			end:
				'After building lasers at the edge of our solar system, we are now closer to the dream of reaching the stars.'
		},
		{
			name: 'A first glimpse of the stars',
			description: 'Send a probe to Alpha Centauri',
			id: 7,
			techneed: [ 17, 23 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 0 ],
				[ 3, 0 ],
				[ 4, 5 ],
				[ 5, 0 ],
				[ 6, 0 ],
				[ 7, 0 ],
				[ 8, 0 ],
				[ 9, 3 ],
				[ 10, 0 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 0 ],
				[ 15, 1 ],
				[ 16, 3 ],
				[ 17, 0 ],
				[ 18, 0 ],
				[ 19, 0 ],
				[ 20, 0 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 10 ], [ 2, 10 ], [ 3, 50 ], [ 4, 0 ], [ 5, 9 ] ],
			intro:
				'The enthusiasm to carry out this mission is at its peak, with the designs already done we only have to build the ship. This could be our first step beyond our sun.',
			fail:
				'We are not quite sure what went wrong, the data will be analyzed to find out the source of the failure. We must wait some time before we can make another attempt.',
			end:
				"After placing the last component, the majestic silver sails are hoisted, the journey begins. Those humans who explored the earth's oceans centuries ago would be proud of us"
		},
		{
			name: 'A road straight to heaven',
			description: 'Build space elevators in one of your colonies',
			id: 8,
			techneed: [ 11, 16, 21 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 0 ],
				[ 3, 0 ],
				[ 4, 0 ],
				[ 5, 0 ],
				[ 6, 0 ],
				[ 7, 0 ],
				[ 8, 1 ],
				[ 9, 3 ],
				[ 10, 3 ],
				[ 11, 1 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 1 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 0 ],
				[ 18, 0 ],
				[ 19, 0 ],
				[ 20, 0 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 10 ], [ 2, 50 ], [ 3, 100 ], [ 4, 0 ], [ 5, 9 ] ],
			intro:
				'The growing production of raw materials and products requires an improvement in our current means in transport of goods. Space elevators were always a crazy idea, now they may be a necessity.',
			fail:
				'some problems with the quality of the materials used in the construction of the space elevator have caused the collapse of the structure in the initial stages of construction. We have to start from scratch with new materials',
			end:
				"The first goods leave the planet's surface and reach orbit shortly afterwards. This represents an incredible improvement in our production efficiency."
		},
		{
			name: 'Infinite skies',
			description: 'Build hydrogen refineries on the Jovian planets',
			id: 9,
			techneed: [ 15, 20 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 0 ],
				[ 3, 0 ],
				[ 4, 10 ],
				[ 5, 0 ],
				[ 6, 0 ],
				[ 7, 4 ],
				[ 8, 0 ],
				[ 9, 0 ],
				[ 10, 4 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 1 ],
				[ 14, 0 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 0 ],
				[ 18, 0 ],
				[ 19, 0 ],
				[ 20, 0 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 20 ], [ 2, 50 ], [ 3, 100 ], [ 4, 0 ], [ 5, 9 ] ],
			intro:
				'With the recent massification of nuclear fusion reactors, a more direct source of fuel is needed. Some experts suggest that harvesting hydrogen from the high layers of gas giants could meet the demand.',
			fail:
				'The initial hydrogen harvesting operations failed, we believe this was due to design failures of the harvesting vessels.',
			end:
				'With this new increase in our production, the raw material needs to generate energy will be satisfied.'
		},
		{
			name: 'The last frontier',
			description: 'Start mining operations in mercury',
			id: 10,
			techneed: [ 24, 19, 29, 25 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 0 ],
				[ 3, 0 ],
				[ 4, 10 ],
				[ 5, 0 ],
				[ 6, 0 ],
				[ 7, 4 ],
				[ 8, 0 ],
				[ 9, 10 ],
				[ 10, 5 ],
				[ 11, 0 ],
				[ 12, 1 ],
				[ 13, 0 ],
				[ 14, 1 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 1 ],
				[ 18, 0 ],
				[ 19, 0 ],
				[ 20, 0 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 100 ], [ 2, 200 ], [ 3, 2000 ], [ 4, 0 ], [ 5, 9 ] ],
			intro:
				'Many years have passed since the first human stepped on the surface of another celestial body. Now there is no place we can’t visit. We should explore everything.',
			fail: "An unexpected problem occurred during landing the mission was a failure. Let's try again",
			end:
				'The closest planet to the sun could serve us for more than just collecting resources, this may be the beginning of something huge.'
		},
		{
			name: 'The swarm',
			description: 'Start building a Dyson swarm',
			id: 11,
			techneed: [ 24, 25, 26, 27 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 0 ],
				[ 3, 10 ],
				[ 4, 20 ],
				[ 5, 0 ],
				[ 6, 0 ],
				[ 7, 0 ],
				[ 8, 0 ],
				[ 9, 0 ],
				[ 10, 0 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 0 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 1 ],
				[ 18, 1 ],
				[ 19, 1 ],
				[ 20, 0 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 100 ], [ 2, 2000 ], [ 3, 2000 ], [ 4, 0 ], [ 5, 9 ] ],
			intro:
				'The idea is simple, surround our star with collectors and take advantage of the almost infinite energy supply. We think we are capable of starting this megaproject. It will be one of the biggest challenges in the history of mankind.',
			fail:
				'Some errors in programming have caused that much of the swarm to mark its course directly to the sun. we need to start over',
			end:
				'Our swarm is done, and it looks magnificent. For the first time in history, we have enough energy to fulfill our wildest dreams.'
		},
		{
			name: 'Deeper into the quantum world',
			description: 'Build particle accelerators in the swarm',
			id: 12,
			techneed: [ 28 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 0 ],
				[ 3, 10 ],
				[ 4, 10 ],
				[ 5, 0 ],
				[ 6, 0 ],
				[ 7, 0 ],
				[ 8, 0 ],
				[ 9, 4 ],
				[ 10, 10 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 0 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 1 ],
				[ 18, 1 ],
				[ 19, 1 ],
				[ 20, 1 ],
				[ 21, 0 ],
				[ 22, 0 ],
				[ 23, 0 ],
				[ 24, 0 ],
				[ 25, 0 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 1000 ], [ 2, 2000 ], [ 3, 2000 ], [ 4, 10 ], [ 5, 9 ] ],
			intro:
				"With a great amount of energy coming from our Dyson's swarm, now we can start more ambitious projects. One proposal is to build more powerful particle accelerators.",
			fail:
				'The particle accelerators could not withstand the initial tests, which caused the destruction of most of them. The designs have been corrected. We can start again.',
			end:
				'With the last pieces falling into place, we begin testing. The secrets of the quantum world will soon be discovered.'
		},
		{
			name: 'Folding the universe',
			description: 'Build the first warp drive ship',
			id: 13,
			techneed: [ 30, 31, 32, 33, 34, 35 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 0 ],
				[ 3, 5 ],
				[ 4, 10 ],
				[ 5, 0 ],
				[ 6, 0 ],
				[ 7, 0 ],
				[ 8, 0 ],
				[ 9, 4 ],
				[ 10, 0 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 0 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 0 ],
				[ 18, 0 ],
				[ 19, 0 ],
				[ 20, 1 ],
				[ 21, 1 ],
				[ 22, 1 ],
				[ 23, 1 ],
				[ 24, 1 ],
				[ 25, 1 ],
				[ 26, 0 ],
				[ 27, 0 ]
			],
			reward: [ [ 1, 1000 ], [ 2, 5000 ], [ 3, 5000 ], [ 4, 10 ], [ 5, 9 ] ],
			intro:
				'We have learned a lot since we started to use the new powerful particle accelerators. The old idea of building a ship capable of curving the space-time itself, no longer sounds a little far-fetched. We know enough to carry it out.',
			fail:
				'Some scientist and engineers suggest that the initial design could be dangerous, we prefer to be cautious and start the construction from scratch',
			end:
				'Finally! Our first hyperluminic spaceship is ready. The enthusiasm of our people is greater than ever. Now we are ready to reach the stars.'
		},
		{
			name: 'To the stars',
			description: 'Send a manned mission to Alpha Centauri',
			id: 14,
			techneed: [ 36, 37 ],
			unitneed: [
				[ 1, 0 ],
				[ 2, 0 ],
				[ 3, 5 ],
				[ 4, 10 ],
				[ 5, 1 ],
				[ 6, 0 ],
				[ 7, 0 ],
				[ 8, 2 ],
				[ 9, 2 ],
				[ 10, 5 ],
				[ 11, 0 ],
				[ 12, 0 ],
				[ 13, 0 ],
				[ 14, 1 ],
				[ 15, 0 ],
				[ 16, 0 ],
				[ 17, 1 ],
				[ 18, 2 ],
				[ 19, 0 ],
				[ 20, 2 ],
				[ 21, 2 ],
				[ 22, 2 ],
				[ 23, 1 ],
				[ 24, 2 ],
				[ 25, 1 ],
				[ 26, 1 ],
				[ 27, 1 ]
			],
			reward: [ [ 1, 1000 ], [ 2, 10000 ], [ 3, 10000 ], [ 4, 10 ], [ 5, 18 ] ],
			intro:
				'the engine starts operating, the onboard AI makes all the necessary preparations, the crew members get ready for the jump. In a few months we will know the result of the mission. We are very close, but we must wait',
			fail:
				'Something unknown has happened to the mission. Time has passed and we have not received news or data to help us know what happened. We should send an additional mission to find out.',
			end:
				'The data is starting to arrive. We did it! Finally, our dream has come true, centuries of history have brought us to this moment, so many souls dreaming of this moment. It is almost unbelievable. Shortly after making our first interstellar travels, our SETI satellites installed at the solar system have received an unknown transmission, the first analyzes suggest that it is a codification of the prime numbers. Is this the first contact?'
		}
	]
};

module.exports = dataBase;
