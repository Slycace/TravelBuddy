import axios from 'axios';
let options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
  params: {
    longitude: '138.2529',
    latitude: '36.2048',
    lunit: 'km',
    currency: 'USD',
    lang: 'en_US'
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': `${process.env.RAPID_API_KEY}`
  }
};


export default async function getAttractionsData(coordinates){
    try {
        options.params.longitude = coordinates.lng;
        options.params.latitude = coordinates.lat;
        const { data:{ data }} = await axios.request(options)
        return data;
    } catch(error) {
      console.log(error, 'error!');
    }
}