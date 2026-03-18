export const routes = [
  // SUNRISE RIDES (15 routes)
  {
    id: 1,
    name: "MG Road → Nandi Hills",
    distance: "62 km",
    duration: "2.5 hours",
    difficulty: "Moderate",
    bestTime: "4:30 AM - 7:00 AM",
    category: ["Sunrise rides"],
    emoji: "🌄",
    description: "The most iconic sunrise ride from Bangalore. Experience breathtaking views from 1,478m above sea level. The climb is challenging but rewarding with stunning valley views.",
    whyThisRide: "Perfect sunrise spot, challenging climb, ancient temples, and the best filter coffee at the top.",
    stops: [
      { name: "Starting Point - MG Road Metro", time: "4:30 AM" },
      { name: "Sadahalli Gate (Chai Break)", time: "5:15 AM" },
      { name: "Nandi Hills Base", time: "5:45 AM" },
      { name: "Nandi Hills Summit", time: "6:15 AM" },
      { name: "Breakfast at Top", time: "7:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/MG+Road+Bengaluru+to+Nandi+Hills+Karnataka",
    terrain: "Hilly with steep climbs in last 10km",
    traffic: "Low (early morning)",
    highlights: "Sunrise viewpoint, Tipu's Drop, Ancient temples"
  },
  {
    id: 2,
    name: "Hebbal → Skandagiri",
    distance: "68 km",
    duration: "2.5 hours",
    difficulty: "Moderate",
    bestTime: "3:30 AM - 6:30 AM",
    category: ["Sunrise rides", "Long rides"],
    emoji: "🌄",
    description: "Trek and ride combo to witness sunrise above the clouds. Night trek followed by sunrise makes it unforgettable.",
    whyThisRide: "Sunrise above clouds, night trek option, peaceful morning ride through rural Karnataka.",
    stops: [
      { name: "Starting Point - Hebbal Flyover", time: "3:30 AM" },
      { name: "Chikkaballapur (Fuel Stop)", time: "4:30 AM" },
      { name: "Skandagiri Base", time: "5:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Hebbal+Bengaluru+to+Skandagiri+Karnataka",
    terrain: "Highway with good road conditions",
    traffic: "Very Low",
    highlights: "Cloud-covered sunrise, Ancient fort ruins, Night trek"
  },
  {
    id: 3,
    name: "Whitefield → Nandi Hills",
    distance: "55 km",
    duration: "2 hours",
    difficulty: "Moderate",
    bestTime: "5:00 AM - 7:30 AM",
    category: ["Sunrise rides"],
    emoji: "🌄",
    description: "Shorter route from East Bangalore to Nandi Hills. Less traffic, more scenic village roads.",
    whyThisRide: "Less crowded route, village scenery, shorter distance for quick morning rides.",
    stops: [
      { name: "Whitefield - Starting Point", time: "5:00 AM" },
      { name: "Hoskote (Chai Stop)", time: "5:40 AM" },
      { name: "Nandi Hills Summit", time: "6:45 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Whitefield+Bengaluru+to+Nandi+Hills+Karnataka",
    terrain: "Mixed highway and rural roads",
    traffic: "Low",
    highlights: "Rural landscapes, Less crowded, Quick access"
  },
  {
    id: 4,
    name: "Bangalore → Savandurga",
    distance: "60 km",
    duration: "2 hours",
    difficulty: "Moderate",
    bestTime: "5:30 AM - 8:00 AM",
    category: ["Sunrise rides"],
    emoji: "🌄",
    description: "Ride to Asia's largest monolith. Combine with trekking for adventure. Sunrise from the rock is magical.",
    whyThisRide: "Asia's largest monolith, trekking opportunity, serene Manchanabele Dam en route.",
    stops: [
      { name: "Magadi Road Start", time: "5:30 AM" },
      { name: "Manchanabele Dam", time: "6:30 AM" },
      { name: "Savandurga Base", time: "7:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Savandurga+Karnataka",
    terrain: "Highway with winding roads near destination",
    traffic: "Low",
    highlights: "Monolith rock, Dam views, Trekking"
  },
  {
    id: 5,
    name: "Bannerghatta → Ragihalli",
    distance: "40 km",
    duration: "1.5 hours",
    difficulty: "Easy",
    bestTime: "6:00 AM - 8:30 AM",
    category: ["Sunrise rides"],
    emoji: "🌄",
    description: "Off-beat forest route perfect for nature lovers. Less crowded, more peaceful.",
    whyThisRide: "Forest trails, wildlife spotting chance, peaceful morning vibes.",
    stops: [
      { name: "Bannerghatta Circle", time: "6:00 AM" },
      { name: "Gunjur Village (Breakfast)", time: "7:00 AM" },
      { name: "Ragihalli Forest", time: "7:45 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bannerghatta+Bengaluru+to+Ragihalli+Karnataka",
    terrain: "Rural and forest roads",
    traffic: "Very Low",
    highlights: "Forest views, Wildlife, Rural experience"
  },
  {
    id: 6,
    name: "Yelahanka → Lepakshi",
    distance: "120 km",
    duration: "3 hours",
    difficulty: "Moderate",
    bestTime: "5:00 AM - 9:00 AM",
    category: ["Sunrise rides", "Long rides"],
    emoji: "🌄",
    description: "Historical temple ride across state border. Architectural marvel of Vijayanagara era.",
    whyThisRide: "Ancient temple, hanging pillar mystery, Andhra Pradesh border crossing.",
    stops: [
      { name: "Yelahanka", time: "5:00 AM" },
      { name: "Devanahalli (Fuel)", time: "5:30 AM" },
      { name: "Lepakshi Temple", time: "7:30 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Yelahanka+Bengaluru+to+Lepakshi+Andhra+Pradesh",
    terrain: "Smooth highway",
    traffic: "Low to Moderate",
    highlights: "Ancient temple, Hanging pillar, Nandi statue"
  },
  {
    id: 7,
    name: "Koramangala → Anthargange",
    distance: "70 km",
    duration: "2.5 hours",
    difficulty: "Moderate",
    bestTime: "4:30 AM - 7:30 AM",
    category: ["Sunrise rides"],
    emoji: "🌄",
    description: "Cave temples and sunrise trek. Rocky terrain perfect for adventure seekers.",
    whyThisRide: "Cave exploration, rocky hills, natural spring water, adventure trekking.",
    stops: [
      { name: "Koramangala", time: "4:30 AM" },
      { name: "Hoskote (Chai)", time: "5:30 AM" },
      { name: "Anthargange Base", time: "6:30 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Koramangala+Bengaluru+to+Anthargange+Karnataka",
    terrain: "Highway to rocky terrain",
    traffic: "Low",
    highlights: "Cave temples, Natural springs, Rocky hills"
  },
  {
    id: 8,
    name: "Indiranagar → Big Banyan Tree",
    distance: "28 km",
    duration: "1 hour",
    difficulty: "Easy",
    bestTime: "6:00 AM - 8:00 AM",
    category: ["Sunrise rides", "Couple rides"],
    emoji: "🌄",
    description: "Short morning ride to 400-year-old giant tree. Perfect for quick getaways.",
    whyThisRide: "Historic giant tree, short ride, peaceful morning, photography spot.",
    stops: [
      { name: "Indiranagar", time: "6:00 AM" },
      { name: "Big Banyan Tree", time: "6:45 AM" },
      { name: "Breakfast Return", time: "7:30 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Indiranagar+Bengaluru+to+Big+Banyan+Tree+Karnataka",
    terrain: "City to rural roads",
    traffic: "Low",
    highlights: "400-year-old tree, Photography, Quick ride"
  },
  {
    id: 9,
    name: "Hennur → Avalabetta",
    distance: "85 km",
    duration: "2.5 hours",
    difficulty: "Moderate",
    bestTime: "5:00 AM - 8:00 AM",
    category: ["Sunrise rides"],
    emoji: "🌄",
    description: "Hill station with panoramic views. Less commercialized than Nandi Hills.",
    whyThisRide: "360-degree views, less crowded, peaceful hilltop, authentic village food.",
    stops: [
      { name: "Hennur", time: "5:00 AM" },
      { name: "Chikkaballapur (Breakfast)", time: "6:15 AM" },
      { name: "Avalabetta Hilltop", time: "7:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Hennur+Bengaluru+to+Avalabetta+Karnataka",
    terrain: "Highway with hill climb",
    traffic: "Very Low",
    highlights: "Panoramic views, Windmills, Peaceful"
  },
  {
    id: 10,
    name: "Jayanagar → Shivagange",
    distance: "54 km",
    duration: "2 hours",
    difficulty: "Moderate",
    bestTime: "5:30 AM - 8:00 AM",
    category: ["Sunrise rides"],
    emoji: "🌄",
    description: "Sacred hill with natural spring. Shaped like Shiva's linga, hence the name.",
    whyThisRide: "Religious significance, natural spring, hill trek, peaceful surroundings.",
    stops: [
      { name: "Jayanagar", time: "5:30 AM" },
      { name: "Dabaspet (Fuel)", time: "6:20 AM" },
      { name: "Shivagange Base", time: "7:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Jayanagar+Bengaluru+to+Shivagange+Karnataka",
    terrain: "Highway with hill section",
    traffic: "Low",
    highlights: "Sacred hill, Natural spring, Temple"
  },
  {
    id: 11,
    name: "Electronic City → Mekedatu",
    distance: "98 km",
    duration: "3 hours",
    difficulty: "Moderate",
    bestTime: "5:00 AM - 9:00 AM",
    category: ["Sunrise rides", "Long rides"],
    emoji: "🌄",
    description: "River Kaveri gorge with stunning rock formations. Popular picnic spot.",
    whyThisRide: "River gorge, rock formations, coracle ride, scenic Cauvery views.",
    stops: [
      { name: "Electronic City", time: "5:00 AM" },
      { name: "Kanakapura (Breakfast)", time: "6:30 AM" },
      { name: "Sangama Confluence", time: "7:30 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Electronic+City+Bengaluru+to+Mekedatu+Karnataka",
    terrain: "Highway with rural roads",
    traffic: "Low",
    highlights: "River gorge, Coracle rides, Rock formations"
  },
  {
    id: 12,
    name: "Marathahalli → Makalidurga",
    distance: "60 km",
    duration: "2 hours",
    difficulty: "Easy",
    bestTime: "5:30 AM - 8:00 AM",
    category: ["Sunrise rides"],
    emoji: "🌄",
    description: "Fort trek with sunrise views. Railway track adds unique charm to the route.",
    whyThisRide: "Ancient fort, railway track route, sunrise trek, peaceful hilltop.",
    stops: [
      { name: "Marathahalli", time: "5:30 AM" },
      { name: "Dobbspet (Chai)", time: "6:30 AM" },
      { name: "Makalidurga Base", time: "7:15 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Marathahalli+Bengaluru+to+Makalidurga+Karnataka",
    terrain: "Highway with approach road",
    traffic: "Low",
    highlights: "Fort ruins, Railway track, Sunrise views"
  },
  {
    id: 13,
    name: "Ulsoor → Hesaraghatta Lake",
    distance: "32 km",
    duration: "1 hour",
    difficulty: "Easy",
    bestTime: "6:00 AM - 8:00 AM",
    category: ["Sunrise rides", "Couple rides"],
    emoji: "🌄",
    description: "Peaceful lakeside ride perfect for bird watching. Calm waters during sunrise create magic.",
    whyThisRide: "Bird watching paradise, serene lake, photography spot, peaceful morning.",
    stops: [
      { name: "Ulsoor Lake", time: "6:00 AM" },
      { name: "Jalahalli Cross", time: "6:30 AM" },
      { name: "Hesaraghatta Lake", time: "6:50 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Ulsoor+Bengaluru+to+Hesaraghatta+Lake+Karnataka",
    terrain: "City to rural roads",
    traffic: "Low",
    highlights: "Migratory birds, Lake sunrise, Photography"
  },
  {
    id: 14,
    name: "Kalyan Nagar → Nrityagram",
    distance: "35 km",
    duration: "1.5 hours",
    difficulty: "Easy",
    bestTime: "6:30 AM - 9:00 AM",
    category: ["Sunrise rides", "Couple rides"],
    emoji: "🌄",
    description: "Dance village with morning performances. Cultural experience with breakfast.",
    whyThisRide: "Cultural experience, dance performances, rural setting, unique morning activity.",
    stops: [
      { name: "Kalyan Nagar", time: "6:30 AM" },
      { name: "Hessarghatta", time: "7:15 AM" },
      { name: "Nrityagram", time: "7:45 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Kalyan+Nagar+Bengaluru+to+Nrityagram+Karnataka",
    terrain: "Urban to rural roads",
    traffic: "Low",
    highlights: "Dance village, Cultural shows, Rural beauty"
  },
  {
    id: 15,
    name: "BTM Layout → Turahalli Forest",
    distance: "18 km",
    duration: "45 minutes",
    difficulty: "Easy",
    bestTime: "6:00 AM - 8:00 AM",
    category: ["Sunrise rides", "Couple rides"],
    emoji: "🌄",
    description: "City forest perfect for quick morning escape. Rocky trails and viewpoints.",
    whyThisRide: "Within city limits, rocky trails, quick ride, morning workout option.",
    stops: [
      { name: "BTM Layout", time: "6:00 AM" },
      { name: "Turahalli Forest Entrance", time: "6:30 AM" },
      { name: "Viewpoint", time: "7:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/BTM+Layout+Bengaluru+to+Turahalli+Forest+Bengaluru",
    terrain: "City roads to rocky trails",
    traffic: "Low",
    highlights: "Forest within city, Rocky trails, Quick escape"
  },

  // LONG RIDES (15 routes)
  {
    id: 16,
    name: "Bangalore → Mysore",
    distance: "150 km",
    duration: "4 hours",
    difficulty: "Easy",
    bestTime: "6:00 AM - 11:00 AM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Classic highway cruise through countryside. Perfect for beginners' first long ride.",
    whyThisRide: "Smooth highway, Mysore Palace, Ramanagara hills, famous Maddur vada.",
    stops: [
      { name: "Nice Road Toll", time: "6:00 AM" },
      { name: "Ramanagara (Breakfast)", time: "7:00 AM" },
      { name: "Mandya (Maddur Vada)", time: "8:30 AM" },
      { name: "Mysore Palace", time: "10:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Mysore+Karnataka",
    terrain: "Smooth 4-lane highway",
    traffic: "Moderate",
    highlights: "Mysore Palace, Ramanagara hills, Channapatna toys"
  },
  {
    id: 17,
    name: "Bangalore → Coorg",
    distance: "270 km",
    duration: "6-7 hours",
    difficulty: "Moderate",
    bestTime: "5:00 AM - 1:00 PM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Scenic ride to Scotland of India. Coffee plantations and misty hills await.",
    whyThisRide: "Coffee estates, misty hills, Tibetan monastery, waterfall stops.",
    stops: [
      { name: "Bangalore Start", time: "5:00 AM" },
      { name: "Mysore (Breakfast)", time: "9:00 AM" },
      { name: "Kushalnagar (Fuel)", time: "10:30 AM" },
      { name: "Madikeri, Coorg", time: "12:00 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Coorg+Karnataka",
    terrain: "Highway with ghats",
    traffic: "Moderate",
    highlights: "Coffee plantations, Abbey Falls, Raja's Seat"
  },
  {
    id: 18,
    name: "Bangalore → Chikmagalur",
    distance: "245 km",
    duration: "5-6 hours",
    difficulty: "Moderate",
    bestTime: "5:30 AM - 12:00 PM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Coffee land with highest peak in Karnataka. Mullayanagiri trek optional.",
    whyThisRide: "Highest peak in Karnataka, coffee trails, Baba Budangiri, Hebbe Falls.",
    stops: [
      { name: "Tumkur Road", time: "5:30 AM" },
      { name: "Kadur (Breakfast)", time: "9:00 AM" },
      { name: "Chikmagalur Town", time: "11:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Chikmagalur+Karnataka",
    terrain: "Highway with hill sections",
    traffic: "Low to Moderate",
    highlights: "Mullayanagiri peak, Coffee estates, Baba Budangiri"
  },
  {
    id: 19,
    name: "Bangalore → Gokarna",
    distance: "485 km",
    duration: "10-11 hours",
    difficulty: "Hard",
    bestTime: "4:00 AM (overnight stay recommended)",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Coastal ride to pristine beaches. Weekend getaway for experienced riders.",
    whyThisRide: "Beach paradise, Om Beach, Kudle Beach, coastal Karnataka beauty.",
    stops: [
      { name: "Bangalore Start", time: "4:00 AM" },
      { name: "Hubli (Breakfast)", time: "10:00 AM" },
      { name: "Karwar (Lunch)", time: "2:00 PM" },
      { name: "Gokarna Beach", time: "4:00 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Gokarna+Karnataka",
    terrain: "Long highway with coastal roads",
    traffic: "Moderate",
    highlights: "Om Beach, Kudle Beach, Mahabaleshwar Temple"
  },
  {
    id: 20,
    name: "Bangalore → Ooty",
    distance: "280 km",
    duration: "6-7 hours",
    difficulty: "Moderate",
    bestTime: "5:00 AM - 12:00 PM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Queen of hills with 36 hairpin bends. Classic South Indian hill station ride.",
    whyThisRide: "36 hairpin bends, Nilgiri hills, tea estates, colonial charm.",
    stops: [
      { name: "Hosur Border", time: "6:00 AM" },
      { name: "Mysore (Breakfast)", time: "9:30 AM" },
      { name: "Bandipur (Nature break)", time: "11:00 AM" },
      { name: "Ooty", time: "1:00 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Ooty+Tamil+Nadu",
    terrain: "Highway with ghats and hairpins",
    traffic: "Moderate to High",
    highlights: "36 hairpins, Tea gardens, Botanical gardens"
  },
  {
    id: 21,
    name: "Bangalore → Wayanad",
    distance: "280 km",
    duration: "6-7 hours",
    difficulty: "Moderate",
    bestTime: "5:00 AM - 12:00 PM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Kerala's spice garden with wildlife sanctuaries. Lush green Western Ghats.",
    whyThisRide: "Spice plantations, Edakkal caves, wildlife sanctuary, Kerala cuisine.",
    stops: [
      { name: "Bangalore Start", time: "5:00 AM" },
      { name: "Mysore (Breakfast)", time: "9:00 AM" },
      { name: "Sultan Battery", time: "11:30 AM" },
      { name: "Wayanad", time: "12:00 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Wayanad+Kerala",
    terrain: "Highway with ghat sections",
    traffic: "Moderate",
    highlights: "Edakkal caves, Banasura Dam, Spice gardens"
  },
  {
    id: 22,
    name: "Bangalore → Hampi",
    distance: "340 km",
    duration: "7-8 hours",
    difficulty: "Moderate",
    bestTime: "5:00 AM - 2:00 PM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "UNESCO World Heritage site with ancient ruins. Vijayanagara Empire glory.",
    whyThisRide: "Ancient ruins, boulder landscapes, Tungabhadra river, historical temples.",
    stops: [
      { name: "Tumkur Highway", time: "5:00 AM" },
      { name: "Chitradurga Fort (Visit)", time: "8:30 AM" },
      { name: "Hospet (Lunch)", time: "12:00 PM" },
      { name: "Hampi", time: "1:00 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Hampi+Karnataka",
    terrain: "Long highway stretch",
    traffic: "Low to Moderate",
    highlights: "Vijayanagara ruins, Boulder landscape, Virupaksha Temple"
  },
  {
    id: 23,
    name: "Bangalore → Kabini",
    distance: "220 km",
    duration: "5 hours",
    difficulty: "Easy",
    bestTime: "6:00 AM - 12:00 PM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Wildlife sanctuary with elephant sightings. River safari included.",
    whyThisRide: "Elephant herds, river safari, Nagarhole forest, wildlife photography.",
    stops: [
      { name: "Bangalore Start", time: "6:00 AM" },
      { name: "Mysore (Breakfast)", time: "9:30 AM" },
      { name: "Kabini Dam", time: "11:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Kabini+Karnataka",
    terrain: "Highway with forest roads",
    traffic: "Low",
    highlights: "Elephant herds, River safari, Nagarhole National Park"
  },
  {
    id: 24,
    name: "Bangalore → Yercaud",
    distance: "230 km",
    duration: "5-6 hours",
    difficulty: "Moderate",
    bestTime: "5:30 AM - 12:00 PM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Tamil Nadu hill station with coffee and orange plantations. 20 hairpins.",
    whyThisRide: "20 hairpin bends, Shevaroy hills, coffee estates, peaceful hill station.",
    stops: [
      { name: "Hosur", time: "6:30 AM" },
      { name: "Dharmapuri (Breakfast)", time: "8:30 AM" },
      { name: "Salem (Fuel)", time: "10:00 AM" },
      { name: "Yercaud Hills", time: "11:30 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Yercaud+Tamil+Nadu",
    terrain: "Highway with ghat roads",
    traffic: "Moderate",
    highlights: "20 hairpins, Yercaud Lake, Coffee estates"
  },
  {
    id: 25,
    name: "Bangalore → Pondicherry",
    distance: "310 km",
    duration: "6-7 hours",
    difficulty: "Easy",
    bestTime: "5:00 AM - 12:00 PM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "French colony with coastal vibes. Perfect weekend beach ride.",
    whyThisRide: "French architecture, Auroville, beach promenade, French cuisine.",
    stops: [
      { name: "Hosur Border", time: "5:30 AM" },
      { name: "Krishnagiri (Breakfast)", time: "7:30 AM" },
      { name: "Tindivanam (Fuel)", time: "10:30 AM" },
      { name: "Pondicherry Beach", time: "12:00 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Pondicherry",
    terrain: "Smooth 4-lane highway",
    traffic: "Moderate",
    highlights: "French Quarter, Auroville, Beach Road, Paradise Beach"
  },
  {
    id: 26,
    name: "Bangalore → Munnar",
    distance: "470 km",
    duration: "10-11 hours",
    difficulty: "Hard",
    bestTime: "4:00 AM (overnight recommended)",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Kerala's tea capital with endless green hills. Challenging but rewarding.",
    whyThisRide: "Tea plantations, Eravikulam National Park, winding ghats, cool climate.",
    stops: [
      { name: "Bangalore", time: "4:00 AM" },
      { name: "Salem (Breakfast)", time: "8:00 AM" },
      { name: "Udumalpet (Lunch)", time: "11:00 AM" },
      { name: "Munnar Hills", time: "2:00 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Munnar+Kerala",
    terrain: "Long highway with challenging ghats",
    traffic: "Moderate",
    highlights: "Tea estates, Mattupetty Dam, Top Station viewpoint"
  },
  {
    id: 27,
    name: "Bangalore → BR Hills",
    distance: "180 km",
    duration: "4-5 hours",
    difficulty: "Moderate",
    bestTime: "6:00 AM - 11:00 AM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Biligiri Rangaswamy Temple Hills with wildlife. Less commercialized getaway.",
    whyThisRide: "Wildlife sighting, temple atop hill, fewer tourists, raw nature.",
    stops: [
      { name: "Bangalore", time: "6:00 AM" },
      { name: "Kanakapura (Breakfast)", time: "7:30 AM" },
      { name: "Kollegal (Fuel)", time: "9:00 AM" },
      { name: "BR Hills Temple", time: "10:30 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+BR+Hills+Karnataka",
    terrain: "Highway with winding hill roads",
    traffic: "Low",
    highlights: "Temple, Wildlife, Biligiri forest, Less crowded"
  },
  {
    id: 28,
    name: "Bangalore → Belur & Halebidu",
    distance: "220 km",
    duration: "5 hours",
    difficulty: "Easy",
    bestTime: "6:00 AM - 12:00 PM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Hoysala architecture masterpieces. UNESCO heritage temple complex.",
    whyThisRide: "Intricate temple carvings, Hoysala dynasty history, architectural marvel.",
    stops: [
      { name: "Bangalore", time: "6:00 AM" },
      { name: "Hassan (Breakfast)", time: "9:30 AM" },
      { name: "Belur Temple", time: "10:30 AM" },
      { name: "Halebidu Temple", time: "11:30 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Belur+Halebidu+Karnataka",
    terrain: "Highway with good roads",
    traffic: "Low to Moderate",
    highlights: "Chennakeshava Temple, Hoysaleswara Temple, Stone carvings"
  },
  {
    id: 29,
    name: "Bangalore → Hogenakkal Falls",
    distance: "180 km",
    duration: "4 hours",
    difficulty: "Easy",
    bestTime: "6:00 AM - 11:00 AM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "Niagara of India with coracle rides. Border waterfall between states.",
    whyThisRide: "Coracle boat rides, medicinal bath, fish spa, Karnataka-Tamil Nadu border.",
    stops: [
      { name: "Bangalore", time: "6:00 AM" },
      { name: "Hosur (Chai)", time: "7:00 AM" },
      { name: "Dharmapuri (Breakfast)", time: "8:30 AM" },
      { name: "Hogenakkal Falls", time: "10:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Hogenakkal+Falls+Tamil+Nadu",
    terrain: "Highway with approach roads",
    traffic: "Low to Moderate",
    highlights: "Coracle rides, Waterfalls, Fish spa, Medicinal bath"
  },
  {
    id: 30,
    name: "Bangalore → Jog Falls",
    distance: "400 km",
    duration: "8-9 hours",
    difficulty: "Hard",
    bestTime: "5:00 AM - 3:00 PM",
    category: ["Long rides"],
    emoji: "🏍️",
    description: "India's second highest plunge waterfall. Monsoon season spectacular.",
    whyThisRide: "Second highest waterfall in India, Western Ghats beauty, trekking option.",
    stops: [
      { name: "Bangalore", time: "5:00 AM" },
      { name: "Chitradurga (Breakfast)", time: "8:30 AM" },
      { name: "Shimoga (Lunch)", time: "12:00 PM" },
      { name: "Jog Falls", time: "2:00 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Jog+Falls+Karnataka",
    terrain: "Long highway with ghat sections",
    traffic: "Low to Moderate",
    highlights: "Plunge waterfall, Four cascades, Sharavathi valley"
  },

  // NIGHT RIDES (10 routes)
  {
    id: 31,
    name: "Hebbal → Airport Night Ride",
    distance: "40 km",
    duration: "1.5 hours",
    difficulty: "Easy",
    bestTime: "10:00 PM - 12:00 AM",
    category: ["Night rides"],
    emoji: "🌙",
    description: "Premium highway ride with minimal traffic. Watch planes landing up close.",
    whyThisRide: "Well-lit highway, plane spotting, safe night ride, premium road quality.",
    stops: [
      { name: "Hebbal Flyover", time: "10:00 PM" },
      { name: "Trumpet Interchange", time: "10:20 PM" },
      { name: "Airport Terminal", time: "10:45 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Hebbal+Bengaluru+to+Kempegowda+International+Airport",
    terrain: "Premium 6-lane highway",
    traffic: "Very Low",
    highlights: "Plane spotting, Safe night ride, Well-lit roads"
  },
  {
    id: 32,
    name: "NICE Road Full Loop",
    distance: "42 km",
    duration: "1.5 hours",
    difficulty: "Easy",
    bestTime: "10:00 PM - 12:00 AM",
    category: ["Night rides"],
    emoji: "🌙",
    description: "Bangalore's best maintained elevated expressway. Full loop experience.",
    whyThisRide: "Smooth elevated road, city lights, safe & well-lit, minimal traffic.",
    stops: [
      { name: "Tumkur Road Entrance", time: "10:00 PM" },
      { name: "Mysore Road Junction", time: "10:40 PM" },
      { name: "Back to Start", time: "11:30 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/NICE+Road+Loop+Bengaluru",
    terrain: "Elevated expressway",
    traffic: "Low",
    highlights: "City skyline, Smooth roads, Safe night riding"
  },
  {
    id: 33,
    name: "Cubbon Park Circuit",
    distance: "12 km",
    duration: "45 minutes",
    difficulty: "Easy",
    bestTime: "9:00 PM - 11:00 PM",
    category: ["Night rides", "Couple rides"],
    emoji: "🌙",
    description: "City's green lung illuminated at night. Heritage buildings lit up beautifully.",
    whyThisRide: "Illuminated Vidhana Soudha, park ambiance, heritage buildings, safe route.",
    stops: [
      { name: "MG Road Metro", time: "9:00 PM" },
      { name: "Cubbon Park Main Gate", time: "9:15 PM" },
      { name: "Vidhana Soudha (Photo)", time: "9:30 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Cubbon+Park+Vidhana+Soudha+Circuit+Bengaluru",
    terrain: "City roads",
    traffic: "Moderate",
    highlights: "Illuminated buildings, Park route, Heritage architecture"
  },
  {
    id: 34,
    name: "Outer Ring Road → Marathahalli",
    distance: "35 km",
    duration: "1.5 hours",
    difficulty: "Easy",
    bestTime: "11:00 PM - 1:00 AM",
    category: ["Night rides"],
    emoji: "🌙",
    description: "Tech corridor at night with minimal traffic. Office skyline views.",
    whyThisRide: "Empty tech corridors, office building lights, late night food spots.",
    stops: [
      { name: "Silk Board", time: "11:00 PM" },
      { name: "Bellandur (Coffee)", time: "11:30 PM" },
      { name: "Marathahalli", time: "12:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Silk+Board+to+Marathahalli+Bengaluru",
    terrain: "Urban highway",
    traffic: "Low",
    highlights: "Tech park skyline, Late night cafes, Smooth ride"
  },
  {
    id: 35,
    name: "Brigade Road Night Cruise",
    distance: "8 km",
    duration: "30 minutes",
    difficulty: "Easy",
    bestTime: "10:00 PM - 11:30 PM",
    category: ["Night rides", "Couple rides"],
    emoji: "🌙",
    description: "Shopping district lit up with neon lights. City's vibrant heart at night.",
    whyThisRide: "Neon lights, commercial street vibes, late night shopping, bustling nightlife.",
    stops: [
      { name: "Brigade Road", time: "10:00 PM" },
      { name: "Commercial Street", time: "10:20 PM" },
      { name: "Church Street", time: "10:40 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Brigade+Road+Commercial+Street+Bengaluru",
    terrain: "City center roads",
    traffic: "Moderate to High",
    highlights: "Neon lights, Shopping districts, Nightlife"
  },
  {
    id: 36,
    name: "Bannerghatta Road Night Ride",
    distance: "25 km",
    duration: "1 hour",
    difficulty: "Easy",
    bestTime: "10:30 PM - 12:00 AM",
    category: ["Night rides"],
    emoji: "🌙",
    description: "South Bangalore highway with fewer signals. Smooth night cruising.",
    whyThisRide: "Long stretches, fewer signals, cool night air, peaceful ride.",
    stops: [
      { name: "Jayanagar", time: "10:30 PM" },
      { name: "BTM Layout", time: "10:50 PM" },
      { name: "Bannerghatta Circle", time: "11:20 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Jayanagar+to+Bannerghatta+Bengaluru",
    terrain: "Urban highway",
    traffic: "Low",
    highlights: "Long stretches, Cool breeze, Peaceful"
  },
  {
    id: 37,
    name: "Hennur → Manyata Tech Park",
    distance: "18 km",
    duration: "45 minutes",
    difficulty: "Easy",
    bestTime: "11:00 PM - 12:30 AM",
    category: ["Night rides"],
    emoji: "🌙",
    description: "North Bangalore tech corridor. Modern architecture illuminated at night.",
    whyThisRide: "Modern buildings, tech park lights, wide roads, minimal traffic.",
    stops: [
      { name: "Hennur Main Road", time: "11:00 PM" },
      { name: "Nagawara", time: "11:20 PM" },
      { name: "Manyata Tech Park", time: "11:40 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Hennur+to+Manyata+Tech+Park+Bengaluru",
    terrain: "Wide city roads",
    traffic: "Very Low",
    highlights: "Tech park architecture, Wide roads, Modern buildings"
  },
  {
    id: 38,
    name: "Sarjapur Road Loop",
    distance: "30 km",
    duration: "1.5 hours",
    difficulty: "Easy",
    bestTime: "10:00 PM - 12:00 AM",
    category: ["Night rides"],
    emoji: "🌙",
    description: "East Bangalore's expanding corridor. New infrastructure at night.",
    whyThisRide: "Wide new roads, minimal traffic, apartment skyline, peaceful ride.",
    stops: [
      { name: "Koramangala", time: "10:00 PM" },
      { name: "HSR Layout", time: "10:20 PM" },
      { name: "Sarjapur Road", time: "10:50 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Koramangala+to+Sarjapur+Road+Bengaluru",
    terrain: "Wide suburban roads",
    traffic: "Low",
    highlights: "New infrastructure, Wide roads, Quiet streets"
  },
  {
    id: 39,
    name: "Mysore Road → Kengeri",
    distance: "22 km",
    duration: "1 hour",
    difficulty: "Easy",
    bestTime: "10:30 PM - 12:00 AM",
    category: ["Night rides"],
    emoji: "🌙",
    description: "West Bangalore highway stretch. Good for night practice rides.",
    whyThisRide: "Long straight stretches, good lighting, beginner-friendly night ride.",
    stops: [
      { name: "Nayandahalli", time: "10:30 PM" },
      { name: "Rajarajeshwari Nagar", time: "10:50 PM" },
      { name: "Kengeri", time: "11:15 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Nayandahalli+to+Kengeri+Bengaluru",
    terrain: "Suburban highway",
    traffic: "Low",
    highlights: "Straight roads, Good lighting, Safe practice"
  },
  {
    id: 40,
    name: "Whitefield → KR Puram Loop",
    distance: "20 km",
    duration: "1 hour",
    difficulty: "Easy",
    bestTime: "10:00 PM - 11:30 PM",
    category: ["Night rides"],
    emoji: "🌙",
    description: "East Bangalore tech hub at night. Empty office complexes create unique vibe.",
    whyThisRide: "Tech park silence, wide roads, IT corridor at night, late night eateries.",
    stops: [
      { name: "Whitefield Main Road", time: "10:00 PM" },
      { name: "ITPL (Coffee)", time: "10:30 PM" },
      { name: "KR Puram", time: "11:00 PM" }
    ],
    mapLink: "https://www.google.com/maps/search/Whitefield+to+KR+Puram+Bengaluru",
    terrain: "Urban roads",
    traffic: "Low",
    highlights: "Tech parks, Late night cafes, Wide roads"
  },

  // COUPLE/CHILL RIDES (10 routes)
  {
    id: 41,
    name: "Bangalore → Ramanagara",
    distance: "50 km",
    duration: "1.5 hours",
    difficulty: "Easy",
    bestTime: "7:00 AM - 10:00 AM or 4:00 PM - 7:00 PM",
    category: ["Couple rides"],
    emoji: "❤️",
    description: "Sholay filming location with rocky hills. Perfect for photo stops and chai.",
    whyThisRide: "Sholay fame, rock climbing, silk cocoons, peaceful highway ride.",
    stops: [
      { name: "Nice Road Start", time: "7:00 AM" },
      { name: "Ramanagara Hills", time: "8:00 AM" },
      { name: "Breakfast & Chai", time: "8:30 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Bangalore+to+Ramanagara+Karnataka",
    terrain: "Smooth highway",
    traffic: "Low",
    highlights: "Sholay hills, Rock formations, Silk town"
  },
  {
    id: 42,
    name: "Lalbagh → Cubbon Park Loop",
    distance: "10 km",
    duration: "45 minutes",
    difficulty: "Easy",
    bestTime: "6:30 AM - 8:30 AM or 5:00 PM - 7:00 PM",
    category: ["Couple rides"],
    emoji: "❤️",
    description: "Heritage gardens and colonial architecture. Perfect morning or evening ride.",
    whyThisRide: "Botanical garden, colonial buildings, morning freshness, peaceful city ride.",
    stops: [
      { name: "Lalbagh Main Gate", time: "6:30 AM" },
      { name: "Cubbon Park", time: "7:00 AM" },
      { name: "Coffee at Koshy's", time: "7:45 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Lalbagh+to+Cubbon+Park+Bengaluru",
    terrain: "City roads",
    traffic: "Low to Moderate",
    highlights: "Lalbagh Glass House, Cubbon Park greenery, Heritage buildings"
  },
  {
    id: 43,
    name: "Kanakapura Road → Mekedatu",
    distance: "90 km",
    duration: "2.5 hours",
    difficulty: "Easy",
    bestTime: "7:00 AM - 11:00 AM",
    category: ["Couple rides", "Long rides"],
    emoji: "❤️",
    description: "Romantic river gorge with coracle rides. Popular picnic destination.",
    whyThisRide: "River gorge views, coracle rides, romantic setting, scenic beauty.",
    stops: [
      { name: "Kanakapura Road", time: "7:00 AM" },
      { name: "Kanakapura (Breakfast)", time: "8:00 AM" },
      { name: "Sangama", time: "9:00 AM" },
      { name: "Mekedatu Gorge", time: "9:30 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Kanakapura+Road+to+Mekedatu+Karnataka",
    terrain: "Highway to rural roads",
    traffic: "Low",
    highlights: "River gorge, Coracle rides, Sangama confluence"
  },
  {
    id: 44,
    name: "Ulsoor Lake → Sankey Tank",
    distance: "12 km",
    duration: "45 minutes",
    difficulty: "Easy",
    bestTime: "6:00 AM - 8:00 AM or 5:30 PM - 7:30 PM",
    category: ["Couple rides"],
    emoji: "❤️",
    description: "Lake to lake city ride. Perfect for evening relaxation and sunset views.",
    whyThisRide: "City lakes, sunset views, peaceful evening, photo opportunities.",
    stops: [
      { name: "Ulsoor Lake", time: "6:00 AM" },
      { name: "MG Road", time: "6:20 AM" },
      { name: "Sankey Tank", time: "6:40 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Ulsoor+Lake+to+Sankey+Tank+Bengaluru",
    terrain: "City roads",
    traffic: "Moderate",
    highlights: "Lake views, City parks, Sunset spots"
  },
  {
    id: 45,
    name: "Nandi Hills → Grover Vineyards",
    distance: "35 km",
    duration: "1 hour",
    difficulty: "Easy",
    bestTime: "9:00 AM - 12:00 PM",
    category: ["Couple rides"],
    emoji: "❤️",
    description: "Post-sunrise wine tasting. Combine adventure with leisure and romance.",
    whyThisRide: "Wine tasting, vineyard views, romantic setting, gourmet lunch option.",
    stops: [
      { name: "Nandi Hills", time: "9:00 AM" },
      { name: "Grover Vineyards", time: "10:00 AM" },
      { name: "Wine Tasting & Lunch", time: "10:30 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Nandi+Hills+to+Grover+Vineyards+Karnataka",
    terrain: "Rural roads",
    traffic: "Low",
    highlights: "Wine tasting, Vineyard tour, Gourmet food"
  },
  {
    id: 46,
    name: "Kanakpura → Bheemeshwari",
    distance: "100 km",
    duration: "3 hours",
    difficulty: "Moderate",
    bestTime: "7:00 AM - 11:00 AM",
    category: ["Couple rides", "Long rides"],
    emoji: "❤️",
    description: "River Cauvery adventure camp. Kayaking, fishing, and nature walks.",
    whyThisRide: "River activities, kayaking, fishing, nature camp, romantic riverside.",
    stops: [
      { name: "Kanakapura Road", time: "7:00 AM" },
      { name: "Kanakapura (Breakfast)", time: "8:00 AM" },
      { name: "Muthathi", time: "9:30 AM" },
      { name: "Bheemeshwari Camp", time: "10:00 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Kanakapura+to+Bheemeshwari+Karnataka",
    terrain: "Highway to forest roads",
    traffic: "Low",
    highlights: "River Cauvery, Kayaking, Fishing, Nature camp"
  },
  {
    id: 47,
    name: "Hosur → Kelavarapalli Reservoir",
    distance: "35 km",
    duration: "1 hour",
    difficulty: "Easy",
    bestTime: "6:30 AM - 9:00 AM or 4:00 PM - 6:30 PM",
    category: ["Couple rides"],
    emoji: "❤️",
    description: "Peaceful reservoir perfect for picnics. Tamil Nadu border beauty spot.",
    whyThisRide: "Serene reservoir, picnic spot, sunset views, peaceful atmosphere.",
    stops: [
      { name: "Electronic City", time: "6:30 AM" },
      { name: "Hosur", time: "7:00 AM" },
      { name: "Kelavarapalli Dam", time: "7:30 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Hosur+to+Kelavarapalli+Reservoir+Tamil+Nadu",
    terrain: "Highway with approach roads",
    traffic: "Low",
    highlights: "Reservoir views, Picnic spots, Peaceful"
  },
  {
    id: 48,
    name: "Hebbal Lake → Nagavara Lake",
    distance: "8 km",
    duration: "30 minutes",
    difficulty: "Easy",
    bestTime: "6:00 AM - 8:00 AM or 5:00 PM - 7:00 PM",
    category: ["Couple rides"],
    emoji: "❤️",
    description: "Short city lake circuit. Perfect for quick morning or evening rides.",
    whyThisRide: "City lakes, bird watching, quick ride, peaceful urban escape.",
    stops: [
      { name: "Hebbal Lake", time: "6:00 AM" },
      { name: "Nagavara Lake", time: "6:20 AM" },
      { name: "Coffee Break", time: "6:45 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Hebbal+Lake+to+Nagavara+Lake+Bengaluru",
    terrain: "City roads",
    traffic: "Low to Moderate",
    highlights: "Lake circuit, Bird watching, Quick escape"
  },
  {
    id: 49,
    name: "Jayanagar → Thippagondanahalli",
    distance: "45 km",
    duration: "1.5 hours",
    difficulty: "Easy",
    bestTime: "7:00 AM - 10:00 AM",
    category: ["Couple rides"],
    emoji: "❤️",
    description: "Reservoir with boating facilities. Peaceful getaway from city chaos.",
    whyThisRide: "Boating, reservoir views, peaceful setting, photography spot.",
    stops: [
      { name: "Jayanagar", time: "7:00 AM" },
      { name: "Mysore Road", time: "7:30 AM" },
      { name: "T.G. Halli Reservoir", time: "8:15 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Jayanagar+to+Thippagondanahalli+Reservoir+Karnataka",
    terrain: "Urban to rural roads",
    traffic: "Low",
    highlights: "Reservoir, Boating, Peaceful surroundings"
  },
  {
    id: 50,
    name: "Indiranagar → Nrityagram & Art of Living",
    distance: "40 km",
    duration: "1.5 hours",
    difficulty: "Easy",
    bestTime: "8:00 AM - 11:00 AM",
    category: ["Couple rides"],
    emoji: "❤️",
    description: "Cultural and spiritual retreat ride. Dance village and ashram experience.",
    whyThisRide: "Cultural experience, Art of Living ashram, peaceful setting, organic food.",
    stops: [
      { name: "Indiranagar", time: "8:00 AM" },
      { name: "Nrityagram Dance Village", time: "9:00 AM" },
      { name: "Art of Living Ashram", time: "9:45 AM" }
    ],
    mapLink: "https://www.google.com/maps/search/Indiranagar+to+Nrityagram+Art+of+Living+Bengaluru",
    terrain: "Urban to rural roads",
    traffic: "Low",
    highlights: "Dance performances, Ashram visit, Peaceful atmosphere"
  }
];

export const bestPicks = [
  {
    id: 1,
    name: "MG Road → Nandi Hills",
    distance: "62 km",
    category: "Sunrise rides",
    emoji: "🌄",
    badge: "Most Popular",
    routeId: 1
  },
  {
    id: 31,
    name: "Hebbal → Airport Night Ride",
    distance: "40 km",
    category: "Night rides",
    emoji: "🌙",
    badge: "Premium Highway",
    routeId: 31
  },
  {
    id: 2,
    name: "Bangalore → Skandagiri",
    distance: "68 km",
    category: "Sunrise rides",
    emoji: "🌄",
    badge: "Above Clouds",
    routeId: 2
  },
  {
    id: 41,
    name: "Bangalore → Ramanagara",
    distance: "50 km",
    category: "Couple rides",
    emoji: "❤️",
    badge: "Sholay Fame",
    routeId: 41
  },
  {
    id: 32,
    name: "NICE Road Full Loop",
    distance: "42 km",
    category: "Night rides",
    emoji: "🌙",
    badge: "City Lights",
    routeId: 32
  }
];

export const categories = [
  { id: 1, name: "Night rides", icon: "Moon", emoji: "🌙" },
  { id: 2, name: "Sunrise rides", icon: "Sunrise", emoji: "🌄" },
  { id: 3, name: "Couple rides", icon: "Heart", emoji: "❤️" },
  { id: 4, name: "Long rides", icon: "MoveRight", emoji: "🏍️" }
];
