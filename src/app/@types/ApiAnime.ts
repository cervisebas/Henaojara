type infoPost = {
    image: string;
    title: string;
    url: string;
    type?: string;
    rank?: string;
    extra?: string;
};
type tableEmision1 = {
    monday: infoPost | undefined;
    tuesday: infoPost | undefined;
    wednesday: infoPost | undefined;
    thursday: infoPost | undefined;
    friday: infoPost | undefined;
    saturday: infoPost | undefined;
    sunday: infoPost | undefined;
};
type InfoEmision1 = {
    table: tableEmision1[];
    numPages: string[];
    list: infoPost[];
};
type lists = {
    numPages: string[],
    list: infoPost[];
};
type listSearch = {
    image: string;
    title: string;
    url: string;
}
type infoListsHome = {
    uploads: infoPost[];
    populars: infoPost[];
};
type listSeasons = {
    title: string;
    chapters: {
        title: string;
        image: string;
        url: string;
    }[];
};
type InfoData = {
    description: string;
    title: string;
    status: boolean;
    image: string;
    timeUpload: string;
    views: string;
    lists: listSeasons[];
    genders: {
        title: string;
        url: string;
    }[];
};

export type {
    infoPost,
    tableEmision1,
    InfoEmision1,
    listSearch,
    infoListsHome,
    listSeasons,
    InfoData,
    lists
};