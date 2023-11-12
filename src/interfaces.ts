export interface navbarContextsTypes {
    viability: boolean;
    setViability: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface navigationLinksStyle {
    linkType?: string
    style?: string
    display?: string
}