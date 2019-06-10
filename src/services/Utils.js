import TsiClient from 'tsiclient';

export default class Utils {
    static tsiClient = new TsiClient();
    static data = null;

    static getValues = d => {
        var toReturn = {}; 
        var values = {}; 
        toReturn[d.name] = values; 
        d.income.forEach(i => i[0] > 1965 ? values[(new Date(i[0], 0)).toISOString()] = {} : '');
        d.income.forEach(i => i[0] > 1965 ? values[(new Date(i[0], 0)).toISOString()] = {Income: i[1]} : '');
        d.lifeExpectancy.forEach(i => {
            if(values[(new Date(i[0], 0)).toISOString()])
              values[(new Date(i[0], 0)).toISOString()].LifeExpectancy = i[1];
        });
        d.population.forEach(i => {
            if(values[(new Date(i[0], 0)).toISOString()])
              values[(new Date(i[0], 0)).toISOString()].Population = i[1];
        });
        return toReturn;
    }

    static parseData = (data) => {
        var getValuesForRegion = region => {
            return data.filter(d => d.region === region)
                        .map(Utils.getValues)
                        .slice(0,5)
                        .reduce((p,c) => {p[Object.keys(c)[0]] = c[Object.keys(c)[0]]; return p}, {})
        }

        var allRegions = Object.keys(data.reduce((p,c) => {p[c.region] = true; return p}, {}));
        var transformedData = allRegions.slice(1,4).map(r => {return {[r]: getValuesForRegion(r)}});
        Utils.data = transformedData;
    }

    static initData = (then) => {
        if(Utils.data === null){
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() { 
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
                    Utils.parseData(JSON.parse(xmlHttp.responseText));
                    then();
                }
            }
            xmlHttp.open("GET", './nations.json', true); // true for asynchronous 
            xmlHttp.send(null);
        }
        else{
            then();
        }
    }
}