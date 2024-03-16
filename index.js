const axios = require('axios');

const express = require('express');

axios.get('https://api.spotify.com/v1/search?just+once&type=track', {
    headers: {
    'Authorization': 'Bearer BQCCVgXwCCyJGVHyNlPIVODcpCv46y41sYjqmkDJWqZ9W8Dr2Ou1KHyyj7y0kwfHpjcYdwKl5XfBJIAI2kDohmJnsnQDcItc_iAy6RU-wmQ9g7zvt4wiiKJCvtUp_ksCqTQqUyu-az3mynmA4SkY4VomJ4PLHrnKkIM_0m5iEJYZKE3hrsoiShzQJ7HAdJGWTGiSZ1AZEDVUUVrVtj8'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})