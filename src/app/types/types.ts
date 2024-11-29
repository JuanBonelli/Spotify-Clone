export type Playlist = {

    id: number;
    name: string;
    isListening: boolean;
    isPinned: boolean;
    type: PlaylistType | string,
    user: string;
    imageUrl: string;
    // songs: Song[]
}

export type Song = {
    id: number;
    name: string;
    durationInSeconds: number;
    imageUrl: string;
    contributors: Contributors[];
    isPlayling: boolean;
}

export type Contributors = {
    id: number;
    name: string;
    lastname: string;   
    role: Role;
    monthlyListeners: number;
    isPrincipal: boolean;
}

export type Role = "ARTIST" | "PRODUCER" ;
export type PlaylistType = "PLAYLIST" | "ALBUM" | "PODCAST";
export type SidebarWidth = "NARROW" | "WIDE";
