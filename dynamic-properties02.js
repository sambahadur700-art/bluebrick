// Property Data - Organized by property types
const properties = {
    // RENT PROPERTIES
    "business-bay-apartment": {
        id: "business-bay-apartment",
        title: "Business Bay Apartment",
        price: "AED 120,000/yr",
        location: "Business Bay, Dubai",
        description: "2 Bedroom | 2 Bath | Business Bay",
        type: "rent",
        heroImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        
        stats: [
            { number: 135, label: "SQUARE AREAS" },
            { number: 25, label: "FLOOR" },
            { number: 20, label: "BEDROOMS" },
            { number: 120, label: "PRICE" }
        ],
        
        galleryImages: [
            { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", alt: "Modern apartment living room" },
            { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d", alt: "Contemporary kitchen design" },
            { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", alt: "Comfortable bedroom" },
            { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b", alt: "Modern bathroom" },
            { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", alt: "City view balcony" },
            { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", alt: "Building amenities" }
        ],
        
        overview: {
            title: "Business Bay Luxury Apartment",
            address: "Business Bay, Downtown Dubai, UAE",
            price: "AED 120,000/yr",
            details: [
                { icon: "fas fa-bed", text: "2 Bedrooms" },
                { icon: "fas fa-bath", text: "2 Bathrooms" },
                { icon: "fas fa-ruler-combined", text: "1,350 Sq Ft" },
                { icon: "fas fa-car", text: "1 Parking" }
            ],
            description: {
                short: "Stunning apartment in the heart of Business Bay with modern amenities and convenient access to business districts.",
                long: [
                    "This beautifully appointed apartment offers contemporary living with high-end finishes and spectacular city views. The open-plan layout creates a seamless flow between living, dining, and kitchen areas, perfect for entertaining.",
                    "The master bedroom features a walk-in closet and en-suite bathroom, while the second bedroom is perfect for guests or home office use. Both bathrooms are finished with premium fixtures and modern tiling."
                ],
                features: [
                    "Fully equipped modern kitchen",
                    "Floor-to-ceiling windows",
                    "High-speed internet",
                    "Smart home features",
                    "Balcony with city view",
                    "Built-in wardrobes",
                    "Central AC",
                    "24/7 security"
                ]
            },
            amenities: [
                "Swimming Pool",
                "Fitness Center",
                "24/7 Security",
                "Covered Parking",
                "Concierge Service",
                "Landscaped Gardens"
            ]
        },
        
        location: {
            mapImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
            title: "Business Bay - Commercial Hub",
            attractions: [
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Burj Khalifa - 10 minutes drive" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Dubai Mall - 12 minutes drive" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Business Bay Metro - 5 minutes walk" }
            ],
            transportation: [
                { icon: "fas fa-subway", style: "color:#3b82f6;", text: "Business Bay Metro - 5 minutes walk" },
                { icon: "fas fa-bus", style: "color:#f59e0b;", text: "Multiple bus routes" },
                { icon: "fas fa-car", style: "color:#10b981;", text: "Sheikh Zayed Road - 2 minutes" }
            ]
        }
    },

    "jumeirah-villa-rental": {
        id: "jumeirah-villa",
        title: "Jumeirah Beach Villa",
        price: "AED 280,000/yr",
        location: "Jumeirah, Dubai",
        description: "4 Bedroom | 4 Bath | Jumeirah",
        type: "rent",
        heroImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        
        stats: [
            { number: 380, label: "SQUARE AREAS" },
            { number: 10, label: "FLOOR" },
            { number: 40, label: "BEDROOMS" },
            { number: 280, label: "PRICE" }
        ],
        
        galleryImages: [
            { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", alt: "Luxurious villa exterior" },
            { src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716", alt: "Spacious living area" },
            { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", alt: "Private garden" },
            { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", alt: "Master bedroom" },
            { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b", alt: "Luxury bathroom" },
            { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", alt: "Private pool area" }
        ],
        
        overview: {
            title: "Jumeirah Beachfront Villa",
            address: "Jumeirah Beach Road, Dubai, UAE",
            price: "AED 280,000/yr",
            details: [
                { icon: "fas fa-bed", text: "4 Bedrooms" },
                { icon: "fas fa-bath", text: "4 Bathrooms" },
                { icon: "fas fa-ruler-combined", text: "3,800 Sq Ft" },
                { icon: "fas fa-car", text: "4 Parking" }
            ],
            description: {
                short: "Magnificent beachfront villa in prestigious Jumeirah area with private access to the beach.",
                long: [
                    "This exquisite villa offers direct beach access and panoramic sea views from every room. The property features a private swimming pool, landscaped garden, and spacious entertaining areas perfect for family living and hosting guests.",
                    "The villa includes a maid's room, private garage, and state-of-the-art kitchen with premium appliances. The master suite features a private balcony with sea views and a luxurious bathroom with spa-like features."
                ],
                features: [
                    "Private beach access",
                    "Swimming pool",
                    "Landscaped garden",
                    "Maid's room",
                    "Private garage",
                    "Sea view balconies",
                    "Modern kitchen",
                    "Central vacuum system"
                ]
            },
            amenities: [
                "Private Beach",
                "Swimming Pool",
                "Garden",
                "Security",
                "Private Parking",
                "Maid's Room"
            ]
        },
        
        location: {
            mapImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
            title: "Jumeirah - Premium Residential",
            attractions: [
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Jumeirah Beach - 2 minutes walk" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "City Walk - 8 minutes drive" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Kite Beach - 5 minutes drive" }
            ],
            transportation: [
                { icon: "fas fa-car", style: "color:#10b981;", text: "Sheikh Zayed Road - 5 minutes" },
                { icon: "fas fa-bus", style: "color:#f59e0b;", text: "Beach route buses" },
                { icon: "fas fa-taxi", style: "color:#8b5cf6;", text: "24/7 taxi service" }
            ]
        }
    },

    "downtown-studio-rent": {
        id: "downtown-studio",
        title: "Downtown Studio",
        price: "AED 65,000/yr",
        location: "Downtown Dubai",
        description: "1 Bedroom | 1 Bath | Downtown",
        type: "rent",
        heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        
        stats: [
            { number: 80, label: "SQUARE AREAS" },
            { number: 35, label: "FLOOR" },
            { number: 10, label: "BEDROOMS" },
            { number: 65, label: "PRICE" }
        ],
        
        galleryImages: [
            { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d", alt: "Compact studio apartment" },
            { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", alt: "Efficient kitchenette" },
            { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", alt: "City view from balcony" },
            { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b", alt: "Modern bathroom" },
            { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", alt: "Living area" },
            { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", alt: "Building lobby" }
        ],
        
        overview: {
            title: "Downtown Dubai Studio Apartment",
            address: "Downtown Dubai, UAE",
            price: "AED 65,000/yr",
            details: [
                { icon: "fas fa-bed", text: "1 Bedroom" },
                { icon: "fas fa-bath", text: "1 Bathroom" },
                { icon: "fas fa-ruler-combined", text: "800 Sq Ft" },
                { icon: "fas fa-car", text: "1 Parking" }
            ],
            description: {
                short: "Compact and efficient studio apartment in the heart of Downtown Dubai with Burj Khalifa views.",
                long: [
                    "Perfect for young professionals, this studio offers smart space utilization and premium amenities. The open layout maximizes living space while maintaining comfort and functionality.",
                    "Enjoy direct access to Dubai Mall and the famous Dubai Fountain shows. The building features world-class amenities including gym, pool, and 24/7 security."
                ],
                features: [
                    "Smart space design",
                    "Burj Khalifa view",
                    "Modern kitchenette",
                    "Built-in wardrobe",
                    "Balcony",
                    "High-speed internet",
                    "Smart TV",
                    "Central AC"
                ]
            },
            amenities: [
                "Gym",
                "Swimming Pool",
                "24/7 Security",
                "Retail Outlets",
                "Concierge",
                "Parking"
            ]
        },
        
        location: {
            mapImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
            title: "Downtown Dubai - City Center",
            attractions: [
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Burj Khalifa - 5 minutes walk" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Dubai Mall - 3 minutes walk" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Dubai Fountain - 4 minutes walk" }
            ],
            transportation: [
                { icon: "fas fa-subway", style: "color:#3b82f6;", text: "Burj Khalifa Metro - 8 minutes walk" },
                { icon: "fas fa-bus", style: "color:#f59e0b;", text: "Downtown bus station" },
                { icon: "fas fa-taxi", style: "color:#8b5cf6;", text: "Taxi stand nearby" }
            ]
        }
    },

    // SALE PROPERTIES
    "palm-jumeirah-mansion": {
        id: "palm-jumeirah-mansion",
        title: "Palm Jumeirah Mansion",
        price: "AED 12,500,000",
        location: "Palm Jumeirah",
        description: "6 Bedroom | 5 Bath | Palm Jumeirah",
        type: "sale",
        heroImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
        
        stats: [
            { number: 550, label: "SQUARE AREAS" },
            { number: 15, label: "FLOOR" },
            { number: 60, label: "BEDROOMS" },
            { number: 1250, label: "PRICE" }
        ],
        
        galleryImages: [
            { src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716", alt: "Luxurious mansion exterior" },
            { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", alt: "Infinity pool with sea view" },
            { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", alt: "Grand living room" },
            { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", alt: "Master bedroom suite" },
            { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b", alt: "Luxury bathroom" },
            { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", alt: "Private beach area" }
        ],
        
        overview: {
            title: "Palm Jumeirah Luxury Mansion",
            address: "Palm Jumeirah, Dubai, UAE",
            price: "AED 12,500,000",
            details: [
                { icon: "fas fa-bed", text: "6 Bedrooms" },
                { icon: "fas fa-bath", text: "5 Bathrooms" },
                { icon: "fas fa-ruler-combined", text: "5,500 Sq Ft" },
                { icon: "fas fa-car", text: "6 Parking" }
            ],
            description: {
                short: "Exclusive mansion on Palm Jumeirah with private beach access and panoramic Arabian Gulf views.",
                long: [
                    "This magnificent property offers the ultimate luxury living experience with bespoke interiors and world-class amenities. Features include a private infinity pool, home theater, and direct beach access.",
                    "The mansion boasts premium finishes throughout, including marble flooring, custom cabinetry, and smart home automation. The outdoor area features landscaped gardens, outdoor kitchen, and entertainment areas."
                ],
                features: [
                    "Private beach access",
                    "Infinity pool",
                    "Home theater",
                    "Wine cellar",
                    "Smart home system",
                    "Private dock",
                    "Landscaped garden",
                    "Outdoor kitchen"
                ]
            },
            amenities: [
                "Private Beach",
                "Infinity Pool",
                "Home Spa",
                "Cinema Room",
                "Wine Cellar",
                "Garden"
            ]
        },
        
        location: {
            mapImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
            title: "Palm Jumeirah - Iconic Island",
            attractions: [
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Atlantis Hotel - 5 minutes drive" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "The Pointe - 8 minutes drive" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Nakheel Mall - 10 minutes drive" }
            ],
            transportation: [
                { icon: "fas fa-car", style: "color:#10b981;", text: "Palm Monorail - 10 minutes" },
                { icon: "fas fa-ship", style: "color:#8b5cf6;", text: "Private marina access" },
                { icon: "fas fa-taxi", style: "color:#ef4444;", text: "24/7 taxi service" }
            ]
        }
    },

    "dubai-hills-estate": {
        id: "dubai-hills-estate",
        title: "Dubai Hills Estate",
        price: "AED 6,800,000",
        location: "Dubai Hills",
        description: "5 Bedroom | 4 Bath | Dubai Hills",
        type: "sale",
        heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        
        stats: [
            { number: 420, label: "SQUARE AREAS" },
            { number: 20, label: "FLOOR" },
            { number: 50, label: "BEDROOMS" },
            { number: 680, label: "PRICE" }
        ],
        
        galleryImages: [
            { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", alt: "Modern villa exterior" },
            { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", alt: "Spacious family room" },
            { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", alt: "Golf course view" },
            { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b", alt: "Modern kitchen" },
            { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", alt: "Private garden" },
            { src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716", alt: "Swimming pool" }
        ],
        
        overview: {
            title: "Dubai Hills Golf Villa",
            address: "Dubai Hills Estate, Dubai, UAE",
            price: "AED 6,800,000",
            details: [
                { icon: "fas fa-bed", text: "5 Bedrooms" },
                { icon: "fas fa-bath", text: "4 Bathrooms" },
                { icon: "fas fa-ruler-combined", text: "4,200 Sq Ft" },
                { icon: "fas fa-car", text: "4 Parking" }
            ],
            description: {
                short: "Stunning villa overlooking the championship golf course in Dubai Hills Estate.",
                long: [
                    "This contemporary villa offers luxury living with golf course views and premium community amenities. The property features an open-plan layout with seamless indoor-outdoor living spaces.",
                    "The villa includes a private garden, swimming pool, and spacious entertaining areas. The interior features high ceilings, premium flooring, and modern fixtures throughout."
                ],
                features: [
                    "Golf course view",
                    "Private garden",
                    "Maid's room",
                    "Built-in wardrobes",
                    "Central vacuum system",
                    "Smart home ready",
                    "Energy efficient",
                    "Private pool"
                ]
            },
            amenities: [
                "Golf Course",
                "Community Pool",
                "Parks",
                "Tennis Courts",
                "Shopping Mall",
                "Schools"
            ]
        },
        
        location: {
            mapImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
            title: "Dubai Hills - Family Community",
            attractions: [
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Dubai Hills Mall - 5 minutes walk" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Golf Course - 2 minutes walk" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Community Park - 3 minutes walk" }
            ],
            transportation: [
                { icon: "fas fa-subway", style: "color:#3b82f6;", text: "Dubai Hills Metro - 15 minutes walk" },
                { icon: "fas fa-car", style: "color:#10b981;", text: "Al Khail Road - 5 minutes" },
                { icon: "fas fa-bus", style: "color:#f59e0b;", text: "Community bus service" }
            ]
        }
    },

    "bluewaters-island-residence": {
        id: "bluewaters-island-residence",
        title: "Bluewaters Island Residence",
        price: "AED 9,200,000",
        location: "Bluewaters Island",
        description: "4 Bedroom | 4 Bath | Bluewaters",
        type: "sale",
        heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
        
        stats: [
            { number: 320, label: "SQUARE AREAS" },
            { number: 28, label: "FLOOR" },
            { number: 40, label: "BEDROOMS" },
            { number: 920, label: "PRICE" }
        ],
        
        galleryImages: [
            { src: "https://images.unsplash.com/photo-1613977257363-707ba9348227", alt: "Luxury apartment interior" },
            { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d", alt: "Modern kitchen" },
            { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", alt: "Sea view balcony" },
            { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", alt: "Bedroom with view" },
            { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b", alt: "Spa bathroom" },
            { src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716", alt: "Building amenities" }
        ],
        
        overview: {
            title: "Bluewaters Island Luxury Residence",
            address: "Bluewaters Island, Dubai, UAE",
            price: "AED 9,200,000",
            details: [
                { icon: "fas fa-bed", text: "4 Bedrooms" },
                { icon: "fas fa-bath", text: "4 Bathrooms" },
                { icon: "fas fa-ruler-combined", text: "3,200 Sq Ft" },
                { icon: "fas fa-car", text: "3 Parking" }
            ],
            description: {
                short: "Exclusive residence on Bluewaters Island with Ain Dubai views and beach access.",
                long: [
                    "This premium residence offers breathtaking views of Ain Dubai and the Arabian Gulf. Enjoy direct access to beach clubs, fine dining, and luxury retail outlets.",
                    "The apartment features premium finishes, smart home technology, and spacious layouts. Floor-to-ceiling windows provide panoramic views and natural light throughout the day."
                ],
                features: [
                    "Ain Dubai view",
                    "Private balcony",
                    "Smart home system",
                    "Premium finishes",
                    "Walk-in closets",
                    "Marble flooring",
                    "Central AC",
                    "High-speed elevators"
                ]
            },
            amenities: [
                "Beach Club",
                "Infinity Pool",
                "Fitness Center",
                "Retail Plaza",
                "Fine Dining",
                "24/7 Security"
            ]
        },
        
        location: {
            mapImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
            title: "Bluewaters Island - Entertainment Hub",
            attractions: [
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Ain Dubai - 3 minutes walk" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "JBR Beach - 8 minutes walk" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "The Beach Mall - 10 minutes walk" }
            ],
            transportation: [
                { icon: "fas fa-subway", style: "color:#3b82f6;", text: "DMCC Metro - 10 minutes" },
                { icon: "fas fa-walking", style: "color:#8b5cf6;", text: "Beach walk access" },
                { icon: "fas fa-taxi", style: "color:#ef4444;", text: "Taxi stand nearby" }
            ]
        }
    },

    // OFFPLAN PROPERTIES
    "creek-waters-district": {
        id: "creek-waters-district",
        title: "Creek Waters District",
        price: "From AED 1,800,000",
        location: "Dubai Creek",
        description: "3-5 Bedroom | Dubai Creek",
        type: "offplan",
        heroImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        
        stats: [
            { number: 250, label: "SQUARE AREAS" },
            { number: 40, label: "FLOOR" },
            { number: 35, label: "BEDROOMS" },
            { number: 180, label: "PRICE" }
        ],
        
        galleryImages: [
            { src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914", alt: "Architectural rendering" },
            { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", alt: "Community overview" },
            { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", alt: "Interior design concept" },
            { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", alt: "Bedroom concept" },
            { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d", alt: "Kitchen design" },
            { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", alt: "Balcony view" }
        ],
        
        overview: {
            title: "Creek Waters District - Off Plan",
            address: "Dubai Creek Harbour, Dubai, UAE",
            price: "From AED 1,800,000",
            details: [
                { icon: "fas fa-bed", text: "3-5 Bedrooms" },
                { icon: "fas fa-bath", text: "3-4 Bathrooms" },
                { icon: "fas fa-ruler-combined", text: "2,500-4,000 Sq Ft" },
                { icon: "fas fa-car", text: "2-3 Parking" }
            ],
            description: {
                short: "Future landmark development in Dubai Creek Harbour with stunning creek and city views.",
                long: [
                    "This visionary development offers modern living spaces with innovative design and sustainable features. Completion expected in Q4 2026 with flexible payment plans available.",
                    "The development will feature smart home technology, energy-efficient systems, and premium amenities. Residents will enjoy access to parks, retail outlets, and community facilities."
                ],
                features: [
                    "Sustainable design",
                    "Smart home ready",
                    "Energy efficient",
                    "Community parks",
                    "Retail plaza",
                    "Fitness center",
                    "Swimming pools",
                    "Children's play areas"
                ]
            },
            amenities: [
                "Community Center",
                "Parks & Gardens",
                "Retail Outlets",
                "Fitness Facilities",
                "Children's Play Areas",
                "Swimming Pools"
            ]
        },
        
        location: {
            mapImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
            title: "Dubai Creek Harbour - Future City",
            attractions: [
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Dubai Creek Tower - 5 minutes" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Ras Al Khor Sanctuary - 8 minutes" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Dubai Mall - 15 minutes" }
            ],
            transportation: [
                { icon: "fas fa-subway", style: "color:#3b82f6;", text: "Creek Metro Station - 10 minutes" },
                { icon: "fas fa-car", style: "color:#10b981;", text: "Airport - 15 minutes" },
                { icon: "fas fa-bus", style: "color:#f59e0b;", text: "Community shuttle" }
            ]
        }
    },

    "mohammed-bin-rashid-city": {
        id: "mohammed-bin-rashid-city",
        title: "MBR City Villas",
        price: "From AED 2,500,000",
        location: "MBR City",
        description: "4-6 Bedroom | MBR City",
        type: "offplan",
        heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
        
        stats: [
            { number: 380, label: "SQUARE AREAS" },
            { number: 25, label: "FLOOR" },
            { number: 50, label: "BEDROOMS" },
            { number: 250, label: "PRICE" }
        ],
        
        galleryImages: [
            { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", alt: "Villa community rendering" },
            { src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716", alt: "Landscaped gardens" },
            { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", alt: "Modern villa design" },
            { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", alt: "Interior layout" },
            { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d", alt: "Kitchen concept" },
            { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", alt: "Outdoor area" }
        ],
        
        overview: {
            title: "MBR City Luxury Villas - Off Plan",
            address: "Mohammed Bin Rashid City, Dubai, UAE",
            price: "From AED 2,500,000",
            details: [
                { icon: "fas fa-bed", text: "4-6 Bedrooms" },
                { icon: "fas fa-bath", text: "4-5 Bathrooms" },
                { icon: "fas fa-ruler-combined", text: "3,800-5,500 Sq Ft" },
                { icon: "fas fa-car", text: "3-4 Parking" }
            ],
            description: {
                short: "Exclusive villa community in Mohammed Bin Rashid City with world-class amenities.",
                long: [
                    "This premium development offers spacious villas with private gardens and community facilities. Expected completion in Q3 2027 with attractive payment plans.",
                    "The villas will feature modern architecture, smart home technology, and sustainable design elements. The community will include parks, sports facilities, and retail centers."
                ],
                features: [
                    "Private gardens",
                    "Community pools",
                    "Smart home infrastructure",
                    "Sustainable materials",
                    "Family-oriented design",
                    "Energy efficient",
                    "Modern kitchens",
                    "Spacious layouts"
                ]
            },
            amenities: [
                "Community Pool",
                "Parks",
                "Sports Facilities",
                "Retail Center",
                "Schools",
                "Healthcare Center"
            ]
        },
        
        location: {
            mapImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
            title: "MBR City - Future Development",
            attractions: [
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Meydan Racecourse - 8 minutes" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Global Village - 12 minutes" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Dubai Hills - 10 minutes" }
            ],
            transportation: [
                { icon: "fas fa-car", style: "color:#10b981;", text: "Al Khail Road - 5 minutes" },
                { icon: "fas fa-subway", style: "color:#3b82f6;", text: "MBR City Metro - 12 minutes" },
                { icon: "fas fa-bus", style: "color:#f59e0b;", text: "Community transport" }
            ]
        }
    },

    "the-avalon-towers": {
        id: "the-avalon-towers",
        title: "The Avalon Towers",
        price: "From AED 950,000",
        location: "Jumeirah Village",
        description: "1-3 Bedroom | JVC",
        type: "offplan",
        heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        
        stats: [
            { number: 120, label: "SQUARE AREAS" },
            { number: 35, label: "FLOOR" },
            { number: 15, label: "BEDROOMS" },
            { number: 95, label: "PRICE" }
        ],
        
        galleryImages: [
            { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", alt: "Tower architectural design" },
            { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d", alt: "Apartment interior concept" },
            { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", alt: "Community facilities" },
            { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", alt: "Bedroom design" },
            { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b", alt: "Bathroom concept" },
            { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", alt: "Pool area" }
        ],
        
        overview: {
            title: "The Avalon Towers - Off Plan",
            address: "Jumeirah Village Circle, Dubai, UAE",
            price: "From AED 950,000",
            details: [
                { icon: "fas fa-bed", text: "1-3 Bedrooms" },
                { icon: "fas fa-bath", text: "1-2 Bathrooms" },
                { icon: "fas fa-ruler-combined", text: "1,200-2,200 Sq Ft" },
                { icon: "fas fa-car", text: "1-2 Parking" }
            ],
            description: {
                short: "Affordable luxury in Jumeirah Village Circle with modern amenities and community living.",
                long: [
                    "This development offers value-for-money apartments with quality finishes and family-friendly amenities. Completion scheduled for Q2 2026 with easy payment options.",
                    "The towers will feature contemporary design, energy-efficient systems, and comprehensive amenities including swimming pools, gym, and children's play areas."
                ],
                features: [
                    "Quality finishes",
                    "Balconies",
                    "Built-in wardrobes",
                    "Modern kitchens",
                    "Energy efficient",
                    "Smart home ready",
                    "Central AC",
                    "High-speed internet"
                ]
            },
            amenities: [
                "Swimming Pool",
                "Gym",
                "Children's Play Area",
                "Barbecue Area",
                "24/7 Security",
                "Retail Shops"
            ]
        },
        
        location: {
            mapImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
            title: "Jumeirah Village Circle - Family Community",
            attractions: [
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "JVC Park - 3 minutes walk" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Circle Mall - 8 minutes walk" },
                { icon: "fas fa-map-marker-alt", style: "color:#ef4444;", text: "Community Center - 5 minutes walk" }
            ],
            transportation: [
                { icon: "fas fa-car", style: "color:#10b981;", text: "Sheikh Mohammed Bin Zayed Road - 5 minutes" },
                { icon: "fas fa-bus", style: "color:#f59e0b;", text: "Community bus service" },
                { icon: "fas fa-subway", style: "color:#3b82f6;", text: "Dubai Studio City Metro - 15 minutes" }
            ]
        }
    }
};

// Function to get property ID from URL
function getPropertyIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    // FIX: Default property ID 'luxury-marina-view' को एक वैध ID से बदला गया है।
    return urlParams.get('id') || 'business-bay-apartment'; 
}

// Function to load property data
function loadPropertyData(propertyId) {
    const property = properties[propertyId];
    if (!property) {
        // FIX: यदि प्रॉपर्टी नहीं मिलती है, तो यह अनंत लूप में जाने के बजाय एक वैध ID पर रीडायरेक्ट करेगा।
        window.location.href = '?id=business-bay-apartment';
        return;
    }
    
    // Update page title
    document.title = `${property.title} - Dubai Properties`;
    
    // Generate HTML content
    const content = generatePropertyHTML(property);
    document.getElementById('property-content').innerHTML = content;
    
    // Initialize all functionality after content is loaded
    initializePropertyFunctionality(property);
}

// Function to generate HTML for property
function generatePropertyHTML(property) {
    return `
        <section class="property-hero-section fade-in">
            <img src="${property.heroImage}" alt="${property.title}" class="hero-bg" />
            <div class="content">
                <div class="price-badge fade-in">${property.price}</div>
                <h1 class="fade-in">${property.title}</h1>
                <p class="fade-in">${property.description}</p>
                <div class="btn-group">
                    <button class="btn-primary fade-in"><i class="fas fa-calendar"></i> Schedule Viewing</button>
                    <button class="btn-secondary fade-in"><i class="fas fa-download"></i> Download Brochure</button>
                </div>
            </div>
        </section>

        <section class="detail-stats-section">
            <div class="container fade-in">
                <div class="detail-stats-grid">
                    ${property.stats.map((stat, index) => `
                        <div class="detail-stat-item loading fade-in" data-number="${stat.number}" data-suffix="">
                            <div class="detail-background-number">0</div>
                            <div class="detail-foreground-content">
                                <div class="detail-stat-label">${stat.label}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="gallery-section">
            <h2>Property Gallery</h2>
            <div class="gallery-container">
                <div class="gallery-main fade-in">
                    <img id="mainImage" src="${property.galleryImages[0].src}" alt="${property.galleryImages[0].alt}" onclick="openModal(this.src)" />
                    <button class="nav-btn prev" onclick="previousImage()" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
                    <button class="nav-btn next" onclick="nextImage()" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
                </div>

                <div class="gallery-thumbnails">
                    ${property.galleryImages.map((image, index) => `
                        <div class="thumbnail fade-in"><img src="${image.src}" alt="${image.alt}" onclick="changeMainImage(this.src)" /></div>
                    `).join('')}
                </div>
            </div>
        </section>

        <div id="imageModal" class="modal" role="dialog" aria-modal="true">
            <div class="modal-content">
                <button class="modal-close" aria-label="Close image" onclick="closeModal()">&times;</button>
                <button class="modal-nav prev" onclick="previousImage()" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
                <img id="modalImage" class="modal-image" src="" alt="Full image" />
                <button class="modal-nav next" onclick="nextImage()" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
            </div>  
        </div>

        <div class="overview-container">
            <div class="overview-content">
                <h1 class="overview-title fade-in">${property.overview.title}</h1>
                
                <div class="overview-address fade-in">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${property.overview.address}</span>
                </div>
                
                <div class="overview-price fade-in">${property.overview.price}</div>
                
                <div class="overview-details">
                    ${property.overview.details.map(detail => `
                        <div class="overview-detail-item fade-in">
                            <i class="${detail.icon}"></i>
                            <span>${detail.text}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="overview-section">
                    <h2 class="overview-section-title fade-in">Overview</h2>
                    <p class="overview-text fade-in">${property.overview.description.short}</p>
                    
                    <div id="overview-more-text" style="display: none;">
                        ${property.overview.description.long.map(paragraph => `
                            <p class="overview-text fade-in">${paragraph}</p>
                        `).join('')}
                        
                        <strong>Property Features:</strong>
                        <ul class="overview-list fade-in">
                            ${property.overview.description.features.map(feature => `
                                <li>${feature}</li>
                            `).join('')}
                        </ul>
                    </div>
                    <button class="overview-read-more-btn" id="overview-read-more-btn">
                        Read More <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                
                <div class="overview-amenities">
                    <h2 class="overview-section-title fade-in">Amenities</h2>
                    <div class="overview-amenities-grid">
                        ${property.overview.amenities.map(amenity => `
                            <div class="overview-amenity-item fade-in">
                                <i class="fas fa-check"></i>
                                <span>${amenity}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>

        <div class="overview-brochure-full">
            <div class="overview-brochure-content fade-in">
                <h2>Download Our Detailed Brochure</h2>
                <p>Get complete information about this property, including floor plans, high-resolution images, and detailed specifications.</p>
                <button class="overview-brochure-btn fade-in">
                    <i class="fas fa-download"></i> Download Brochure (PDF 2.5MB)
                </button>
            </div>
        </div>

        <section class="location fade-in">
            <h2>Prime Location</h2>
            <div class="location-grid">
                <div class="location-map fade-in">
                    <img src="${property.location.mapImage}" alt="Location map" />
                    <div class="map-overlay">
                        <button><i class="fas fa-map-marker-alt"></i> View on Google Maps</button>
                    </div>
                </div>
                <div class="location-info fade-in">
                    <h3>${property.location.title}</h3>
                    <div>
                        <h4>Nearby Attractions</h4>
                        <ul>
                            ${property.location.attractions.map(attraction => `
                                <li><i class="${attraction.icon}" style="${attraction.style}"></i> ${attraction.text}</li>
                            `).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4>Transportation</h4>
                        <ul>
                            ${property.location.transportation.map(transport => `
                                <li><i class="${transport.icon}" style="${transport.style}"></i> ${transport.text}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;
}


// Initialize property functionality
function initializePropertyFunctionality(property) {
    // Initialize gallery functionality
    initializeGallery(property.galleryImages);
    
    // Initialize stats counting animation
    initializeStatsAnimation();
    
    // Initialize overview read more functionality
    initializeOverviewReadMore();
    
    // Initialize button functionality
    initializeButtonFunctionality();
    
    // Initialize scroll animations
    initializeScrollAnimations();
}

// Gallery functionality
let currentImageIndex = 0;
let isModalOpen = false;
let images = [];

function initializeGallery(galleryImages) {
    images = galleryImages;
    
    // Set initial main image
    document.getElementById('mainImage').src = images[0].src;
    document.getElementById('mainImage').alt = images[0].alt;
}

function changeMainImage(src) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = src;
    const foundIndex = images.findIndex(img => img.src === src);
    currentImageIndex = foundIndex >= 0 ? foundIndex : 0;
    mainImage.alt = images[currentImageIndex].alt;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateDisplayedImage();
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateDisplayedImage();
}

function updateDisplayedImage() {
    if (isModalOpen) {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = images[currentImageIndex].src;
        modalImage.alt = images[currentImageIndex].alt;
    } else {
        const mainImage = document.getElementById('mainImage');
        mainImage.src = images[currentImageIndex].src;
        mainImage.alt = images[currentImageIndex].alt;
    }
}

function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    // Find the index of the clicked image
    const foundIndex = images.findIndex(img => img.src === src);
    if (foundIndex >= 0) {
        currentImageIndex = foundIndex;
    }
    
    modalImage.src = images[currentImageIndex].src;
    modalImage.alt = images[currentImageIndex].alt;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    isModalOpen = true;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    isModalOpen = false;
}

// Stats animation functionality
function initializeStatsAnimation() {
    class detailCountingAnimation {
        constructor() {
            this.observers = [];
            this.init();
        }

        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.setupObserver();
                });
            } else {
                this.setupObserver();
            }
        }

        setupObserver() {
            const statItems = document.querySelectorAll('.detail-stat-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.3,
                rootMargin: '0px 0px -50px 0px'
            });

            statItems.forEach(item => {
                observer.observe(item);
                setTimeout(() => {
                    item.classList.remove('loading');
                    item.classList.add('loaded');
                }, 200);
            });
        }

        animateCounter(element) {
            const targetNumber = parseInt(element.dataset.number);
            const suffix = element.dataset.suffix || '';
            const backgroundNumberEl = element.querySelector('.detail-background-number');
            
            const duration = 2500;
            const steps = 60;
            const increment = targetNumber / steps;
            let currentNumber = 0;
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                
                const progress = currentStep / steps;
                const easeOut = 1 - Math.pow(1 - progress, 3);
                currentNumber = Math.round(easeOut * targetNumber);

                backgroundNumberEl.textContent = currentNumber + suffix;

                element.classList.add('counting');
                setTimeout(() => {
                    element.classList.remove('counting');
                }, 100);

                if (currentStep >= steps) {
                    backgroundNumberEl.textContent = targetNumber + suffix;
                    clearInterval(timer);
                    
                    element.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        element.style.transform = 'scale(1)';
                    }, 200);
                }
            }, duration / steps);
        }
    }

    const detailcountingAnimation = new detailCountingAnimation();
}

// Overview read more functionality
function initializeOverviewReadMore() {
    const readMoreBtn = document.getElementById('overview-read-more-btn');
    const moreText = document.getElementById('overview-more-text');
    
    if (readMoreBtn && moreText) {
        readMoreBtn.addEventListener('click', function() {
            const isExpanded = moreText.style.display === 'block';
            
            if (isExpanded) {
                moreText.style.display = 'none';
                readMoreBtn.innerHTML = 'Read More <i class="fas fa-chevron-down"></i>';
            } else {
                moreText.style.display = 'block';
                readMoreBtn.innerHTML = 'Read Less <i class="fas fa-chevron-up"></i>';
            }
            
            readMoreBtn.classList.toggle('active', !isExpanded);
        });
    }
    
    // Brochure Download Functionality
    const brochureBtn = document.querySelector('.overview-brochure-btn');
    if (brochureBtn) {
        brochureBtn.addEventListener('click', function() {
            alert('Brochure download started! In a real application, this would download a PDF file.');
        });
    }
}

// Button functionality
function initializeButtonFunctionality() {
    const actionButtons = document.querySelectorAll(".btn-primary, .btn-secondary");
    actionButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const text = btn.textContent.trim();
            if(text.includes("Schedule") || text.includes("Book")) {
                alert("Booking system would open here");
            } else if(text.includes("Contact")) {
                alert("Contact form would open here");
            } else if(text.includes("Download")) {
                alert("Brochure download would start here");
            } else if(text.includes("Save")) {
                alert("Property saved to favorites");
                btn.innerHTML = '<i class="fas fa-heart" style="color:red;"></i> Saved';
            }
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Fade in on scroll using Intersection Observer
    const faders = document.querySelectorAll(".fade-in");
    const propertyObserverOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const propertyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, propertyObserverOptions);

    faders.forEach(el => propertyObserver.observe(el));

    // Add keyboard navigation for the modal
    document.addEventListener('keydown', function(event) {
        if (isModalOpen) {
            if (event.key === 'ArrowRight') {
                nextImage();
            } else if (event.key === 'ArrowLeft') {
                previousImage();
            } else if (event.key === 'Escape') {
                closeModal();
            }
        }
    });

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Initialize the page when loaded
document.addEventListener('DOMContentLoaded', function() {
    const propertyId = getPropertyIdFromURL();
    loadPropertyData(propertyId);
});