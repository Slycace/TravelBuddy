import axios from 'axios';
var options = {
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
    'x-rapidapi-key': 'b634b2321amsh70ee256390be392p104db1jsnf0062fdf88e4'
  }
};


export default async function getAttractionsData(){
    try {
        const { data:{ data }} = await axios.request(options)
     //   console.log('before', data,'testing')
        return data;
    } catch(error) {

      console.log(error);
    }
}