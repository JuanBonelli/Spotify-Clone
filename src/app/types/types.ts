export type Playlist = {

    id: number;
    name: string;
    isListening: boolean;
    isPinned: boolean;
    type: PlaylistType | string,
    user: string;
    imageUrl: string;
    
}

export type PlaylistType = "PLAYLIST" | "ALBUM" | "PODCAST";
export type SidebarWidth = "NARROW" | "WIDE";
