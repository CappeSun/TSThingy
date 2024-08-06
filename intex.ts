import { Entry, APIData } from './types.js';

let dataCont = document.getElementById('dataCont') as HTMLDivElement;

let testEntry: Entry = {
    amiiboSeries: "SSB",
    character: "Z",
    gameSeries: "L",
    games3DS: [
        {
            amiiboUsage: [
                {
                    Usage: "U",
                    write: false
                }
            ],
            gameID: [
                "0001",
                "0002"
            ],
            gameName: "Y"
        }
    ],
    gamesWiiU: [
        {
            amiiboUsage: [
                {
                    Usage: "U",
                    write: false
                }
            ],
            gameID: [
                "0001",
                "0002"
            ],
            gameName: "Y"
        }
    ],
    gamesSwitch: [
        {
            amiiboUsage: [
                {
                    Usage: "U",
                    write: false
                }
            ],
            gameID: [
                "0001",
                "0002"
            ],
            gameName: "Y"
        }
    ],
    head: "0000",
    image: "http",
    name: "Z",
    release: {
        jp: "2000",
        eu: "2000",
        na: "2000",
        au: "2000"
    },
    tail: "0000",
    type: "F"
}

function createListEntry(e: Entry){
    let main = document.createElement('div');
}

dataDiv.addEventListener('click', () =>{
    dataDiv.classList.contains('dataDivOpen') ? dataDiv.classList.remove('dataDivOpen') : dataDiv.classList.add('dataDivOpen');
})

usage3DS.addEventListener('click', (e) =>{
    usage3DS.classList.contains('usageOpen') ? usage3DS.classList.remove('usageOpen') : usage3DS.classList.add('usageOpen');
    e.cancelBubble = true;
    e.stopPropagation();
})

usageWiiU.addEventListener('click', (e) =>{
    usageWiiU.classList.contains('usageOpen') ? usageWiiU.classList.remove('usageOpen') : usageWiiU.classList.add('usageOpen');
    e.cancelBubble = true;
    e.stopPropagation();
})

usageSwitch.addEventListener('click', (e) =>{
    usageSwitch.classList.contains('usageOpen') ? usageSwitch.classList.remove('usageOpen') : usageSwitch.classList.add('usageOpen');
    e.cancelBubble = true;
    e.stopPropagation();
})