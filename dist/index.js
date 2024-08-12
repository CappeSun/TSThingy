let dataCont = document.getElementById('dataCont');
let testEntry = {
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
};
async function fetchAndScetch() {
    let fetchData = await fetch('https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage');
    let JSONData = await fetchData.json();
    if (JSONData['amiibo'][0]) {
        JSONData['amiibo'].forEach((entry) => {
            dataCont.appendChild(createListEntry(entry));
        });
    }
    else
        dataCont.textContent = 'No results found';
}
function createListEntry(entry) {
    const recipe = [['name', 'h3'], ['gameSeries', 'h4'], ['character', 'h4'], ['amiiboSeries', 'h4'], ['head', 'h4'], ['tail', 'h4'], ['type', 'h4'], ['release', 'ul'], ['image', 'img'], ['games3DS', 'div'], ['gamesWiiU', 'div'], ['gamesSwitch', 'div']];
    let main = document.createElement('div');
    for (let i = 0; i < recipe.length; i++) {
        main.appendChild(createData(entry[recipe[i][0]], recipe[i][1], recipe[i][0]));
    }
    main.addEventListener('click', () => {
        main.classList.contains('dataDivOpen') ? main.classList.remove('dataDivOpen') : main.classList.add('dataDivOpen');
    });
    return main;
}
function createData(data, eType, eName) {
    const eNameTrans = { gameSeries: 'Game Series', character: 'Character', amiiboSeries: 'Amiibo Series', head: 'Head', tail: 'Tail', type: 'Type', games3DS: '3DS Usage', gamesWiiU: 'WiiU Usage', gamesSwitch: 'Switch Usage' };
    let e = document.createElement(eType);
    switch (eType) {
        case 'h3':
            e.textContent = `${data}`;
            break;
        case 'h4':
            e.textContent = `${eNameTrans[eName]}: ${data}`;
            break;
        case 'ul':
            ['jp', 'eu', 'na', 'au'].forEach((rel) => {
                let li = document.createElement('li');
                li.textContent = `${rel.toUpperCase()}: ${data[rel]}`;
                e.appendChild(li);
            });
            break;
        case 'img':
            //(e as HTMLImageElement).src = data;
            break;
        case 'div':
            if (!data[0]) {
                let h3 = document.createElement('h3');
                h3.textContent = 'No usage found';
                e.appendChild(h3);
            }
            else {
                let conName = document.createElement('h3');
                conName.textContent = `${eNameTrans[eName]}`;
                let conArw = document.createElement('img');
                conArw.src = 'arrow.svg';
                conName.appendChild(conArw);
                e.appendChild(conName);
                data.forEach((game) => {
                    let usageCont = document.createElement('div');
                    let name = document.createElement('h4');
                    name.textContent = game.gameName;
                    usageCont.appendChild(name);
                    game.amiiboUsage.forEach((usage) => {
                        let h4 = document.createElement('h4');
                        h4.textContent = `${usage.Usage}\n(${usage.write ? 'Writes data to amiibo' : 'Does not write data to amiibo'})`;
                        usageCont.appendChild(h4);
                    });
                    let idTitle = document.createElement('h4');
                    idTitle.textContent = 'Game ID\'s:';
                    usageCont.appendChild(idTitle);
                    let idList = document.createElement('ol');
                    game.gameID.forEach((id) => {
                        let li = document.createElement('li');
                        li.textContent = id;
                        idList.appendChild(li);
                    });
                    usageCont.appendChild(idList);
                    e.appendChild(usageCont);
                });
                e.addEventListener('click', (event) => {
                    e.classList.contains('usageOpen') ? e.classList.remove('usageOpen') : e.classList.add('usageOpen');
                    event.cancelBubble = true;
                    event.stopPropagation();
                });
            }
            break;
        default:
            break;
    }
    return e;
}
fetchAndScetch();
