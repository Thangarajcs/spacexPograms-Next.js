export function manageQueryParam (qS,qkey ,qvalue){
    let newParam ={} ;
    for (let [key, value] of Object.entries(qS)) {
        if(value === '' && (key === qkey)){
            newParam[qkey] = qvalue;
        }
        if(value !== ''  && (key !== qkey)){

            newParam[key] = value;
        }else if(value !== ''  && (key === qkey && value !== qvalue)){

            newParam[key] = qvalue;
        }
        else if (value !== '' && key !== qkey && value !== qvalue){

            newParam[key] = value;
        }
        else if(value !== '' && (key === qkey && value === qvalue)){
            continue;
        }
    }
    return newParam;
}

export function frameURL (queryObject) {
    let URL ='https://api.spaceXdata.com/v3/launches?limit=100&';
    let paramofFilter ='';
    if(queryObject){
        for (let key in queryObject) {
            paramofFilter = paramofFilter+`${key}=${queryObject[key]}&`;
        }
    }
    URL = URL + paramofFilter;
    return URL;
}