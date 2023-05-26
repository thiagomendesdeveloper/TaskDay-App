interface PropsList {
    text: string;
    selected: boolean;
}

export interface PropsTodo {
    item: PropsList,
    index: number,
    handleclick: () => void,
}