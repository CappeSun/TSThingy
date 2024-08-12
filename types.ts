type Usage = {
    Usage: string;
    write: boolean;
};

export type GameUsage = {
    amiiboUsage: Usage[];
    gameID: string[];
    gameName: string;
};

type Release = {
    au: string;
    eu: string;
    jp: string;
    na: string;
}

export type Entry = {
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    games3DS: GameUsage[];
    gamesSwitch: GameUsage[];
    gamesWiiU: GameUsage[];
    head: string;
    image: string;
    name: string;
    release: Release;
    tail: string;
    type: string;
};

export type APIData = {
    amiibo: Entry[];
};

export type Recipe = [keyof Entry, string][];

export type eNameTrans = Partial<Record<keyof Entry, string>>;

export type ValueOf<T> = T[keyof T];