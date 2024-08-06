type Usage = {
    Usage: string,
    write: boolean
};

type GameUsage = {
    amiiboUsage: Usage[],
    gameID: string[],
    gameName: string
};

export type Entry = {
    amiiboSeries: string,
    character: string,
    gameSeries: string,
    games3DS: GameUsage[],
    gamesSwitch: GameUsage[],
    gamesWiiU: GameUsage[],
    head: string,
    image: string,
    name: string,
    release: {
        au: string,
        eu: string,
        jp: string,
        na: string
    },
    tail: string,
    type: string
};

export type APIData = {
    amiibo: Entry[]
};