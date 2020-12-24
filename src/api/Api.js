const API_KEY="MSj48ezblpQglbbk4Km1ovX8gX33"

export const getMatches= () => {
    const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
    .then((respone) => respone.json())
    .catch((error)=> console.log('ERROR: ', error));
};


//load match details

export const getMatchDetails = (id) => {

    const url=`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
    .then(response=>response.json())
    .catch(error => console.log(error))

}


export const getVechicleDetail = () => {

    const url =`https://dl.dropboxusercontent.com/s/wcp5aajrrx533bp/snsw_registrations_api.json`;

    return fetch(url)
    .then((response) => response.json())
    .catch((error)=> console.log(error))


};