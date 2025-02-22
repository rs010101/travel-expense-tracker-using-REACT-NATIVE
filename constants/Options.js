export const SelectTravelerList = [
  {
    id:1,
    title: 'Just Me',
    desc: 'Solo trip',
    icons: '',
    people: '1'
  },
  {
    id:2,
    title: 'A Couple',
    desc: 'Two travelers in tandem',
    icons: '',
    people: '2'
  },
  {
    id:3,
    title: 'Family',
    desc: 'A journey with your loved ones',
    icons: '',
    people: '1-5 people'
  },
  {
    id:4,
    title: 'Friends',
    desc: 'An adventure with your crew',
    icons: '',
    people: '1-10 people'
  }
]

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Budget-friendly options',
  },
  {
    id: 2,
    title: 'Mid-range',
    desc: 'Moderate spending',
  },
  {
    id: 3,
    title: 'Luxury',
    desc: 'High-end experiences',
  }
]

// Generate Travel Plan for Location: New York USA, for 1 Days and 1 Night for Familt with a Luxury budget with a Flight Details, Flight Price with Booking url, HOtels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 1 days and 1 night with each day plan with best time to visit in JSON format.

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight Details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image url, Geo Coordinates, ticket Pricing, Time t travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.'