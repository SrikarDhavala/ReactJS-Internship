const listings = [
    {
        id: "delhi-central-apartment",
        title: "Chic Apartment in Connaught Place",
        location: "Delhi",
        price: 1900,
        image: "https://source.unsplash.com/400x300/?delhi,apartment",
        rating: 4.6,
        amenities: ["Wi-Fi", "Air Conditioning", "Kitchen", "Elevator", "Smart TV"]
    },
    {
        id: "goa-beachfront-villa",
        title: "Beachfront Villa with Private Pool",
        location: "Goa",
        price: 3800,
        image: "https://source.unsplash.com/400x300/?goa,villa",
        rating: 4.9,
        amenities: ["Wi-Fi", "Private Pool", "Beach Access", "AC", "Outdoor Seating"]
    },
    {
        id: "udaipur-haveli-lakeview",
        title: "Heritage Haveli Overlooking Lake Pichola",
        location: "Udaipur",
        price: 2500,
        image: "https://source.unsplash.com/400x300/?udaipur,haveli",
        rating: 4.8,
        amenities: ["Wi-Fi", "Lake View", "Breakfast Included", "Heritage Decor", "Room Service"]
    },
    {
        id: "manali-mountain-cottage",
        title: "Mountain View Cottage with Fireplace",
        location: "Manali",
        price: 2200,
        image: "https://source.unsplash.com/400x300/?manali,cottage",
        rating: 4.7,
        amenities: ["Wi-Fi", "Mountain View", "Fireplace", "Heater", "Private Garden"]
    },
    {
        id: "jaipur-royal-palace-stay",
        title: "Royal Retreat in Pink City",
        location: "Jaipur",
        price: 2700,
        image: "https://source.unsplash.com/400x300/?jaipur,palace",
        rating: 4.5,
        amenities: ["Wi-Fi", "AC", "Rooftop Terrace", "Traditional Cuisine", "Cultural Tours"]
    },
    {
        id: "mumbai-skyline-loft",
        title: "Modern Loft with Sea View",
        location: "Mumbai",
        price: 3500,
        image: "https://source.unsplash.com/400x300/?mumbai,apartment",
        rating: 4.6,
        amenities: ["Wi-Fi", "Sea View", "Smart TV", "Kitchenette", "Gym Access"]
    },
    {
        id: "varanasi-river-guesthouse",
        title: "Serene Stay by the Ganges",
        location: "Varanasi",
        price: 1600,
        image: "https://source.unsplash.com/400x300/?varanasi,guesthouse",
        rating: 4.4,
        amenities: ["Wi-Fi", "Ganges View", "Organic Meals", "AC", "Yoga Space"]
    },
    {
        id: "rishikesh-hill-top-retreat",
        title: "Peaceful Yoga Retreat in Hills",
        location: "Rishikesh",
        price: 1800,
        image: "https://source.unsplash.com/400x300/?rishikesh,yoga",
        rating: 4.7,
        amenities: ["Wi-Fi", "Yoga Studio", "Mountain View", "Meditation Hall", "Vegetarian Meals"]
    },
    {
        id: "coorg-coffee-estate-home",
        title: "Stay in a Working Coffee Estate",
        location: "Coorg",
        price: 2100,
        image: "https://source.unsplash.com/400x300/?coorg,estate",
        rating: 4.8,
        amenities: ["Wi-Fi", "Estate Walks", "Private Balcony", "Farm-to-Table Meals", "Bonfire Area"]
    },
    {
        id: "shimla-wooden-cabin",
        title: "Cozy Wooden Cabin with Valley View",
        location: "Shimla",
        price: 2000,
        image: "https://source.unsplash.com/400x300/?shimla,cabin",
        rating: 4.6,
        amenities: ["Wi-Fi", "Valley View", "Fireplace", "Wood Interior", "Balcony Seating"]
    },
    {
        id: "pondicherry-french-villa",
        title: "Vintage Villa in White Town",
        location: "Pondicherry",
        price: 2400,
        image: "https://source.unsplash.com/400x300/?pondicherry,villa",
        rating: 4.7,
        amenities: ["Wi-Fi", "French Architecture", "Courtyard", "Breakfast Included", "Pet Friendly"]
    },
    {
        id: "leh-ladakh-campsite",
        title: "Nomadic Tent Experience under Stars",
        location: "Leh",
        price: 1500,
        image: "https://source.unsplash.com/400x300/?ladakh,camp",
        rating: 4.3,
        amenities: ["Campfire", "Stargazing", "Sleeping Bags", "Eco Toilets", "Shared Kitchen"]
    },
    {
        id: "chennai-marina-apartment",
        title: "Flat with Balcony near Marina Beach",
        location: "Chennai",
        price: 2300,
        image: "https://source.unsplash.com/400x300/?chennai,flat",
        rating: 4.4,
        amenities: ["Wi-Fi", "Beach Proximity", "AC", "Private Balcony", "Washer"]
    },
    {
        id: "bangalore-studio-indiranagar",
        title: "Trendy Studio in Indiranagar",
        location: "Bangalore",
        price: 2600,
        image: "https://source.unsplash.com/400x300/?bangalore,studio",
        rating: 4.6,
        amenities: ["Wi-Fi", "Self Check-in", "Compact Kitchen", "Workspace", "Inverter Backup"]
    },
    {
        id: "agra-taj-view-home",
        title: "View of the Taj Mahal from Balcony",
        location: "Agra",
        price: 2500,
        image: "https://source.unsplash.com/400x300/?agra,tajmahal",
        rating: 4.8,
        amenities: ["Wi-Fi", "Taj View", "24/7 Concierge", "Private Terrace", "Complimentary Breakfast"]
    },
    {
        id: "srinagar-floating-cottage",
        title: "Floating Cottage on Dal Lake",
        location: "Srinagar",
        price: 2800,
        image: "https://source.unsplash.com/400x300/?srinagar,houseboat",
        rating: 4.9,
        amenities: ["Wi-Fi", "Lake View", "Shikara Ride Access", "Room Service", "Traditional Kashmiri Decor"]
    },
    {
        id: "hyderabad-condo-banjara",
        title: "Luxury Condo in Banjara Hills",
        location: "Hyderabad",
        price: 3200,
        image: "https://source.unsplash.com/400x300/?hyderabad,condo",
        rating: 4.7,
        amenities: ["Wi-Fi", "AC", "Gym Access", "City View", "Secure Parking"]
    },
    {
        id: "darjeeling-homestay",
        title: "Panoramic View Homestay",
        location: "Darjeeling",
        price: 1900,
        image: "https://source.unsplash.com/400x300/?darjeeling,tea",
        rating: 4.5,
        amenities: ["Wi-Fi", "Tea Garden Views", "Heated Beds", "Home-Cooked Meals", "Private Deck"]
    },
    {
        id: "aizawl-bamboo-cabin",
        title: "Hilltop Bamboo Cottage",
        location: "Aizawl",
        price: 1700,
        image: "https://source.unsplash.com/400x300/?aizawl,cabin",
        rating: 4.4,
        amenities: ["Bamboo Interiors", "Hill View", "Wi-Fi", "Compact Kitchen", "Eco-friendly Toilets"]
    },
    {
        id: "pune-urban-nest",
        title: "Chic Urban Nest in Koregaon Park",
        location: "Pune",
        price: 2100,
        image: "https://source.unsplash.com/400x300/?pune,apartment",
        rating: 4.5,
        amenities: ["Wi-Fi", "Workspace", "Balcony", "Washer & Dryer", "Indoor Plants"]
    },
];

export default listings;