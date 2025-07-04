const listings = [
    {
        id: "delhi-central-apartment",
        title: "Chic Apartment in Connaught Place",
        location: "Delhi",
        price: 2100,
        image: " ",
        rating: 4.7,
        amenities: ["Wi-Fi", "Air Conditioning", "Kitchen", "Elevator", "Smart TV"],
        nearbyLocations: [
            { name: "India Gate", distance: "2.5 km" },
            { name: "Jantar Mantar", distance: "1.2 km" },
            { name: "National Museum", distance: "3.0 km" },
            { name: "Connaught Place Market", distance: "0.3 km" },
            { name: "Red Fort", distance: "5.8 km" }
        ]
    },
    {
        id: "goa-beachfront-villa",
        title: "Beachfront Villa with Private Pool",
        location: "Goa",
        price: 4200,
        image: " ",
        rating: 4.9,
        amenities: ["Wi-Fi", "Private Pool", "Beach Access", "AC", "Outdoor Seating"],
        nearbyLocations: [
            { name: "Baga Beach", distance: "1.0 km" },
            { name: "Anjuna Flea Market", distance: "3.5 km" },
            { name: "Fort Aguada", distance: "7.0 km" },
            { name: "Splashdown Waterpark", distance: "2.8 km" },
            { name: "Tito's Lane", distance: "1.5 km" }
        ]
    },
    {
        id: "udaipur-haveli-lakeview",
        title: "Heritage Haveli Overlooking Lake Pichola",
        location: "Udaipur",
        price: 2800,
        image: " ",
        rating: 4.8,
        amenities: ["Wi-Fi", "Lake View", "Breakfast Included", "Heritage Decor", "Room Service"],
        nearbyLocations: [
            { name: "City Palace", distance: "0.5 km" },
            { name: "Jag Mandir", distance: "1.1 km" },
            { name: "Saheliyon-ki-Bari", distance: "2.3 km" },
            { name: "Bagore Ki Haveli", distance: "0.7 km" },
            { name: "Fateh Sagar Lake", distance: "3.5 km" }
        ]
    },
    {
        id: "manali-mountain-cottage",
        title: "Mountain View Cottage with Fireplace",
        location: "Manali",
        price: 2400,
        image: " ",
        rating: 4.7,
        amenities: ["Wi-Fi", "Mountain View", "Fireplace", "Heater", "Private Garden"],
        nearbyLocations: [
            { name: "Hadimba Devi Temple", distance: "1.8 km" },
            { name: "Mall Road", distance: "0.9 km" },
            { name: "Solang Valley", distance: "13.0 km" },
            { name: "Beas River", distance: "0.5 km" },
            { name: "Vashisht Hot Water Springs", distance: "3.2 km" }
        ]
    },
    {
        id: "jaipur-royal-palace-stay",
        title: "Royal Retreat in Pink City",
        location: "Jaipur",
        price: 3000,
        image: " ",
        rating: 4.5,
        amenities: ["Wi-Fi", "AC", "Rooftop Terrace", "Traditional Cuisine", "Cultural Tours"],
        nearbyLocations: [
            { name: "Hawa Mahal", distance: "1.5 km" },
            { name: "Amer Fort", distance: "10.0 km" },
            { name: "City Palace", distance: "1.8 km" },
            { name: "Jantar Mantar", distance: "1.6 km" },
            { name: "Johari Bazaar", distance: "1.0 km" }
        ]
    },
    {
        id: "mumbai-skyline-loft",
        title: "Modern Loft with Sea View",
        location: "Mumbai",
        price: 3800,
        image: " ",
        rating: 4.7,
        amenities: ["Wi-Fi", "Sea View", "Smart TV", "Kitchenette", "Gym Access"],
        nearbyLocations: [
            { name: "Gateway of India", distance: "3.0 km" },
            { name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya", distance: "2.5 km" },
            { name: "Colaba Causeway", distance: "2.8 km" },
            { name: "Marine Drive", distance: "1.5 km" },
            { name: "Elephanta Caves Ferry Point", distance: "3.2 km" }
        ]
    },
    {
        id: "varanasi-river-guesthouse",
        title: "Serene Stay by the Ganges",
        location: "Varanasi",
        price: 1800,
        image: " ",
        rating: 4.5,
        amenities: ["Wi-Fi", "Ganges View", "Organic Meals", "AC", "Yoga Space"],
        nearbyLocations: [
            { name: "Dashashwamedh Ghat", distance: "0.2 km" },
            { name: "Kashi Vishwanath Temple", distance: "0.8 km" },
            { name: "Sarnath", distance: "10.0 km" },
            { name: "Assi Ghat", distance: "1.5 km" },
            { name: "Manikarnika Ghat", distance: "0.9 km" }
        ]
    },
    {
        id: "rishikesh-hill-top-retreat",
        title: "Peaceful Yoga Retreat in Hills",
        location: "Rishikesh",
        price: 2000,
        image: " ",
        rating: 4.8,
        amenities: ["Wi-Fi", "Yoga Studio", "Mountain View", "Meditation Hall", "Vegetarian Meals"],
        nearbyLocations: [
            { name: "Lakshman Jhula", distance: "1.0 km" },
            { name: "Ram Jhula", distance: "1.5 km" },
            { name: "Neer Garh Waterfall", distance: "5.0 km" },
            { name: "Parmarth Niketan Ashram", distance: "0.7 km" },
            { name: "Triveni Ghat", distance: "2.5 km" }
        ]
    },
    {
        id: "coorg-coffee-estate-home",
        title: "Stay in a Working Coffee Estate",
        location: "Coorg",
        price: 2300,
        image: " ",
        rating: 4.8,
        amenities: ["Wi-Fi", "Estate Walks", "Private Balcony", "Farm-to-Table Meals", "Bonfire Area"],
        nearbyLocations: [
            { name: "Abbey Falls", distance: "8.0 km" },
            { name: "Raja's Seat", distance: "3.0 km" },
            { name: "Dubare Elephant Camp", distance: "15.0 km" },
            { name: "Talakaveri", distance: "45.0 km" },
            { name: "Omkareshwara Temple", distance: "3.5 km" }
        ]
    },
    {
        id: "shimla-wooden-cabin",
        title: "Cozy Wooden Cabin with Valley View",
        location: "Shimla",
        price: 2200,
        image: " ",
        rating: 4.6,
        amenities: ["Wi-Fi", "Valley View", "Fireplace", "Wood Interior", "Balcony Seating"],
        nearbyLocations: [
            { name: "The Ridge", distance: "1.0 km" },
            { name: "Mall Road", distance: "0.5 km" },
            { name: "Jakhoo Temple", distance: "2.0 km" },
            { name: "Christ Church", distance: "0.8 km" },
            { name: "Kufri", distance: "15.0 km" }
        ]
    },
    {
        id: "pondicherry-french-villa",
        title: "Vintage Villa in White Town",
        location: "Pondicherry",
        price: 2600,
        image: " ",
        rating: 4.7,
        amenities: ["Wi-Fi", "French Architecture", "Courtyard", "Breakfast Included", "Pet Friendly"],
        nearbyLocations: [
            { name: "Promenade Beach", distance: "0.3 km" },
            { name: "Aurobindo Ashram", distance: "0.7 km" },
            { name: "Arulmigu Manakula Vinayagar Temple", distance: "0.5 km" },
            { name: "Botanical Garden", distance: "1.5 km" },
            { name: "Paradise Beach", distance: "8.0 km" }
        ]
    },
    {
        id: "leh-ladakh-campsite",
        title: "Nomadic Tent Experience under Stars",
        location: "Leh",
        price: 1700,
        image: " ",
        rating: 4.4,
        amenities: ["Campfire", "Stargazing", "Sleeping Bags", "Eco Toilets", "Shared Kitchen"],
        nearbyLocations: [
            { name: "Leh Palace", distance: "2.0 km" },
            { name: "Shanti Stupa", distance: "3.0 km" },
            { name: "Magnetic Hill", distance: "27.0 km" },
            { name: "Pangong Tso Lake", distance: "150.0 km" },
            { name: "Thiksey Monastery", distance: "19.0 km" }
        ]
    },
    {
        id: "chennai-marina-apartment",
        title: "Flat with Balcony near Marina Beach",
        location: "Chennai",
        price: 2500,
        image: " ",
        rating: 4.5,
        amenities: ["Wi-Fi", "Beach Proximity", "AC", "Private Balcony", "Washer"],
        nearbyLocations: [
            { name: "Marina Beach", distance: "0.5 km" },
            { name: "Kapaleeshwarar Temple", distance: "3.0 km" },
            { name: "Fort St. George", distance: "4.5 km" },
            { name: "Government Museum", distance: "5.0 km" },
            { name: "San Thome Basilica", distance: "2.0 km" }
        ]
    },
    {
        id: "bangalore-studio-indiranagar",
        title: "Trendy Studio in Indiranagar",
        location: "Bangalore",
        price: 2800,
        image: " ",
        rating: 4.6,
        amenities: ["Wi-Fi", "Self Check-in", "Compact Kitchen", "Workspace", "Inverter Backup"],
        nearbyLocations: [
            { name: "Indiranagar 100 Feet Road", distance: "0.2 km" },
            { name: "Cubbon Park", distance: "6.0 km" },
            { name: "Wonderla Amusement Park", distance: "28.0 km" },
            { name: "Lalbagh Botanical Garden", distance: "5.5 km" },
            { name: "Commercial Street", distance: "7.0 km" }
        ]
    },
    {
        id: "agra-taj-view-home",
        title: "View of the Taj Mahal from Balcony",
        location: "Agra",
        price: 2700,
        image: " ",
        rating: 4.9,
        amenities: ["Wi-Fi", "Taj View", "24/7 Concierge", "Private Terrace", "Complimentary Breakfast"],
        nearbyLocations: [
            { name: "Taj Mahal", distance: "0.8 km" },
            { name: "Agra Fort", distance: "2.5 km" },
            { name: "Itmad-ud-Daula's Tomb", distance: "4.0 km" },
            { name: "Mehtab Bagh", distance: "3.5 km" },
            { name: "Fatehpur Sikri", distance: "40.0 km" }
        ]
    },
    {
        id: "srinagar-floating-cottage",
        title: "Floating Cottage on Dal Lake",
        location: "Srinagar",
        price: 3000,
        image: " ",
        rating: 4.9,
        amenities: ["Wi-Fi", "Lake View", "Shikara Ride Access", "Room Service", "Traditional Kashmiri Decor"],
        nearbyLocations: [
            { name: "Dal Lake", distance: "0.1 km" },
            { name: "Shalimar Bagh", distance: "7.0 km" },
            { name: "Nishat Bagh", distance: "5.0 km" },
            { name: "Pari Mahal", distance: "6.0 km" },
            { name: "Hazratbal Shrine", distance: "8.0 km" }
        ]
    },
    {
        id: "hyderabad-condo-banjara",
        title: "Luxury Condo in Banjara Hills",
        location: "Hyderabad",
        price: 3500,
        image: " ",
        rating: 4.7,
        amenities: ["Wi-Fi", "AC", "Gym Access", "City View", "Secure Parking"],
        nearbyLocations: [
            { name: "Golkonda Fort", distance: "7.0 km" },
            { name: "Charminar", distance: "10.0 km" },
            { name: "Hussain Sagar Lake", distance: "5.0 km" },
            { name: "Qutb Shahi Tombs", distance: "6.0 km" },
            { name: "Birla Mandir", distance: "3.0 km" }
        ]
    },
    {
        id: "darjeeling-homestay",
        title: "Panoramic View Homestay",
        location: "Darjeeling",
        price: 2100,
        image: " ",
        rating: 4.6,
        amenities: ["Wi-Fi", "Tea Garden Views", "Heated Beds", "Home-Cooked Meals", "Private Deck"],
        nearbyLocations: [
            { name: "Darjeeling Mall", distance: "0.5 km" },
            { name: "Tiger Hill", distance: "11.0 km" },
            { name: "Darjeeling Himalayan Railway (Toy Train)", distance: "1.5 km" },
            { name: "Padmaja Naidu Himalayan Zoological Park", distance: "2.0 km" },
            { name: "Peace Pagoda", distance: "2.5 km" }
        ]
    },
    {
        id: "aizawl-bamboo-cabin",
        title: "Hilltop Bamboo Cottage",
        location: "Aizawl",
        price: 1900,
        image: " ",
        rating: 4.5,
        amenities: ["Bamboo Interiors", "Hill View", "Wi-Fi", "Compact Kitchen", "Eco-friendly Toilets"],
        nearbyLocations: [
            { name: "Solomon's Temple", distance: "3.0 km" },
            { name: "Mizoram State Museum", distance: "2.0 km" },
            { name: "Durtlang Hills", distance: "4.0 km" },
            { name: "Bara Bazar", distance: "1.5 km" },
            { name: "Muthi", distance: "6.0 km" }
        ]
    },
    {
        id: "pune-urban-nest",
        title: "Chic Urban Nest in Koregaon Park",
        location: "Pune",
        price: 2300,
        image: " ",
        rating: 4.6,
        amenities: ["Wi-Fi", "Workspace", "Balcony", "Washer & Dryer", "Indoor Plants"],
        nearbyLocations: [
            { name: "Aga Khan Palace", distance: "4.0 km" },
            { name: "Shaniwar Wada", distance: "3.0 km" },
            { name: "Osho International Meditation Resort", distance: "1.0 km" },
            { name: "Koregaon Park Plaza", distance: "0.5 km" },
            { name: "Raja Dinkar Kelkar Museum", distance: "3.5 km" }
        ]
    },
    {
        id: "karol-bagh-delhi-studio",
        title: "The Regal Delhi Studio",
        location: "Karol Bagh, Delhi",
        price: 2000,
        image: " ",
        rating: 4.5,
        amenities: ["Wi-Fi", "Compact Kitchen", "Elevator", "AC", "Workspace"],
        nearbyLocations: [
            { name: "Gaffar Market", distance: "0.8 km" },
            { name: "Gurudwara Bangla Sahib", distance: "3.5 km" },
            { name: "Delhi Haat INA", distance: "7.0 km" },
            { name: "India Gate", distance: "5.0 km" },
            { name: "Jama Masjid", distance: "6.2 km" }
        ]
    },
    {
        id: "manali-log-hut-cabin",
        title: "Whispering Pines Log Cabin",
        location: "Log Hut Area, Manali",
        price: 2500,
        image: " ",
        rating: 4.8,
        amenities: ["Wi-Fi", "Fireplace", "Mountain View", "Wood Interior", "Heater"],
        nearbyLocations: [
            { name: "Old Manali", distance: "1.0 km" },
            { name: "Manu Temple", distance: "1.5 km" },
            { name: "Jogini Waterfall", distance: "3.0 km" },
            { name: "Mall Road", distance: "1.2 km" },
            { name: "Bhrigu Lake Trek Starting Point", distance: "5.0 km" }
        ]
    },
    {
        id: "mumbai-juhu-loft",
        title: "Ocean Breeze Loft Retreat",
        location: "Juhu, Mumbai",
        price: 3600,
        image: " ",
        rating: 4.7,
        amenities: ["Wi-Fi", "Sea View", "Smart TV", "Kitchenette", "AC"],
        nearbyLocations: [
            { name: "Juhu Beach", distance: "0.2 km" },
            { name: "ISKCON Temple Juhu", distance: "1.0 km" },
            { name: "Prithvi Theatre", distance: "0.7 km" },
            { name: "Linking Road", distance: "4.0 km" },
            { name: "Versova Beach", distance: "3.0 km" }
        ]
    },
    {
        id: "udaipur-hiran-magar-haveli",
        title: "Hiran Magri Palace Stay",
        location: "Hiran Magri, Udaipur",
        price: 2600,
        image: " ",
        rating: 4.6,
        amenities: ["Wi-Fi", "Lake View", "Breakfast Included", "Heritage Decor", "Room Service"],
        nearbyLocations: [
            { name: "Vintage Car Museum", distance: "1.8 km" },
            { name: "Pichola Lake", distance: "3.0 km" },
            { name: "SajjanGarh Palace (Monsoon Palace)", distance: "7.0 km" },
            { name: "Gulab Bagh & Zoo", distance: "2.5 km" },
            { name: "Jagdish Temple", distance: "4.5 km" }
        ]
    },
    {
        id: "dwarka-delhi-condo",
        title: "Dwarka Grand Residency",
        location: "Dwarka, Delhi",
        price: 3300,
        image: " ",
        rating: 4.6,
        amenities: ["Wi-Fi", "Gym Access", "Smart TV", "AC", "Secure Parking"],
        nearbyLocations: [
            { name: "Vegas Mall", distance: "1.0 km" },
            { name: "ISKCON Dwarka", distance: "2.5 km" },
            { name: "Dilli Haat Janakpuri", distance: "5.0 km" },
            { name: "Cyber Hub (Gurgaon)", distance: "18.0 km" },
            { name: "Indian Air Force Museum", distance: "9.0 km" }
        ]
    },
    {
        id: "calangute-goa-villa",
        title: "Calangute Coastal Haven",
        location: "Calangute, Goa",
        price: 3700,
        image: " ",
        rating: 4.8,
        amenities: ["Wi-Fi", "Private Pool", "Beach Proximity", "AC", "Outdoor Seating"],
        nearbyLocations: [
            { name: "Calangute Beach", distance: "0.5 km" },
            { name: "Tito's Lane Baga", distance: "2.0 km" },
            { name: "Saturday Night Market", distance: "4.0 km" },
            { name: "St. Alex Church", distance: "1.5 km" },
            { name: "Casino Palms", distance: "1.8 km" }
        ]
    },
    {
        id: "saket-delhi-loft",
        title: "Saket Urban Retreat",
        location: "Saket, Delhi",
        price: 2200,
        image: " ",
        rating: 4.6,
        amenities: ["Wi-Fi", "Smart TV", "Workspace", "AC", "Balcony"],
        nearbyLocations: [
            { name: "Qutub Minar", distance: "3.5 km" },
            { name: "Garden of Five Senses", distance: "1.0 km" },
            { name: "DLF Avenue Mall", distance: "0.6 km" },
            { name: "Mehrauli Archaeological Park", distance: "4.0 km" },
            { name: "Lotus Temple", distance: "8.0 km" }
        ]
    },
    {
        id: "palolem-goa-cottage",
        title: "Palolem Sunset Sanctuary",
        location: "Palolem, Goa",
        price: 2900,
        image: " ",
        rating: 4.7,
        amenities: ["Wi-Fi", "Beach Access", "Outdoor Shower", "AC", "Hammock"],
        nearbyLocations: [
            { name: "Palolem Beach", distance: "0.1 km" },
            { name: "Butterfly Beach", distance: "2.0 km" },
            { name: "Cotigao Wildlife Sanctuary", distance: "15.0 km" },
            { name: "Agonda Beach", distance: "8.0 km" },
            { name: "Canacona Market", distance: "3.0 km" }
        ]
    },
    {
        id: "panaji-goa-apartment",
        title: "Panaji Riverside Comforts",
        location: "Panaji, Goa",
        price: 2700,
        image: " ",
        rating: 4.8,
        amenities: ["Wi-Fi", "River View", "Private Balcony", "AC", "Smart TV"],
        nearbyLocations: [
            { name: "Fontainhas (Latin Quarter)", distance: "0.8 km" },
            { name: "Our Lady of the Immaculate Conception Church", distance: "0.5 km" },
            { name: "Goa State Museum", distance: "1.0 km" },
            { name: "Miramar Beach", distance: "3.0 km" },
            { name: "Deltin Royale Casino", distance: "1.5 km" }
        ]
    },
    {
        id: "jaipur-malviya-nagar-apartment",
        title: "Malviya Nagar Modern Stay",
        location: "Malviya Nagar, Jaipur",
        price: 2400,
        image: " ",
        rating: 4.7,
        amenities: ["Wi-Fi", "AC", "Smart TV", "Elevator", "Workspace"],
        nearbyLocations: [
            { name: "World Trade Park", distance: "1.0 km" },
            { name: "Jawahar Kala Kendra", distance: "2.5 km" },
            { name: "Birla Mandir", distance: "3.0 km" },
            { name: "Chokhi Dhani", distance: "15.0 km" },
            { name: "Fortis Escorts Hospital", distance: "0.7 km" }
        ]
    },
    {
        id: "banjara-hills-hyderabad-condo",
        title: "Hyderabad Elite Condominium",
        location: "Banjara Hills, Hyderabad",
        price: 3400,
        image: " ",
        rating: 4.8,
        amenities: ["Wi-Fi", "AC", "Gym Access", "City View", "Secure Parking"],
        nearbyLocations: [
            { name: "KBR National Park", distance: "1.0 km" },
            { name: "City Centre Mall", distance: "0.8 km" },
            { name: "Mecca Masjid", distance: "8.0 km" },
            { name: "Necklace Road", distance: "4.0 km" },
            { name: "Chilkur Balaji Temple", distance: "25.0 km" }
        ]
    },
    {
        id: "dal-lake-srinagar-cottage",
        title: "Srinagar Floating Dream",
        location: "Dal Lake, Srinagar",
        price: 2900,
        image: " ",
        rating: 4.9,
        amenities: ["Wi-Fi", "Lake View", "Shikara Ride Access", "Room Service", "Traditional Kashmiri Decor"],
        nearbyLocations: [
            { name: "Floating Vegetable Market", distance: "0.5 km" },
            { name: "Hari Parbat", distance: "4.0 km" },
            { name: "Jamia Masjid", distance: "3.5 km" },
            { name: "Pari Mahal Gardens", distance: "5.5 km" },
            { name: "Chashma Shahi Garden", distance: "4.5 km" }
        ]
    },
    {
        id: "tajganj-agra-home",
        title: "Agra Heritage View Home",
        location: "Tajganj, Agra",
        price: 2600,
        image: " ",
        rating: 4.9,
        amenities: ["Wi-Fi", "Taj View", "24/7 Concierge", "Private Terrace", "Complimentary Breakfast"],
        nearbyLocations: [
            { name: "Great Gate (Darwaza-i Rauza)", distance: "0.3 km" },
            { name: "Agra Fort Railway Station", distance: "3.0 km" },
            { name: "Kinari Bazaar", distance: "3.5 km" },
            { name: "Tomb of Akbar the Great", distance: "13.0 km" },
            { name: "Wildlife SOS Elephant Conservation", distance: "20.0 km" }
        ]
    },
    {
        id: "indiranagar-bangalore-studio",
        title: "The Indiranagar Urban Pad",
        location: "Indiranagar, Bangalore",
        price: 2700,
        image: " ",
        rating: 4.7,
        amenities: ["Wi-Fi", "Self Check-in", "Compact Kitchen", "Workspace", "Inverter Backup"],
        nearbyLocations: [
            { name: "Toit Brewery", distance: "0.5 km" },
            { name: "HAL Aerospace Museum", distance: "4.0 km" },
            { name: "Forum Shantiniketan Mall", distance: "7.0 km" },
            { name: "Koramangala Social", distance: "6.0 km" },
            { name: "Nandi Hills", distance: "60.0 km" }
        ]
    },
    {
        id: "adyar-chennai-apartment",
        title: "Adyar Coastal Comfort",
        location: "Adyar, Chennai",
        price: 2400,
        image: " ",
        rating: 4.5,
        amenities: ["Wi-Fi", "Beach Proximity", "AC", "Private Balcony", "Washer"],
        nearbyLocations: [
            { name: "Besant Nagar Beach (Elliots Beach)", distance: "1.0 km" },
            { name: "Theosophical Society Adyar", distance: "0.8 km" },
            { name: "MGM Dizzee World", distance: "25.0 km" },
            { name: "DakshinaChitra Museum", distance: "20.0 km" },
            { name: "Guindy National Park", distance: "6.0 km" }
        ]
    }
];

export default listings;