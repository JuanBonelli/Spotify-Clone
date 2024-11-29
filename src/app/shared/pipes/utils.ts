import { PlaylistType } from "../../types/types";

export class Utils {

    public static getFormattedPlaylistType(playlistType: PlaylistType | string) : string {
        let firstLetter = playlistType.charAt(0).toUpperCase();
        let remainingWord = playlistType.slice(1).toLowerCase();
        return firstLetter + remainingWord;
    }
}