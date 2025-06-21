export type NOTItem = {
    id: number;
    nottag: string;
    notdetails: string;
};

const notData: NOTItem[] = [
    { id: 1, nottag: 'Notification 1', notdetails: 'Notification 1 is here'},
    { id: 2, nottag: 'Notification 2', notdetails: 'Notification 2 is here'},
    { id: 3, nottag: 'Notification 3', notdetails: 'Notification 3 is here'},
    { id: 4, nottag: 'Notification 4', notdetails: 'Notification 4 is here'},
    { id: 5, nottag: 'Notification 5', notdetails: 'Notification 5 is here'},
];

export default notData;