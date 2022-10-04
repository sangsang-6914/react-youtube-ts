export interface IVideoListProps {
    videos: [IVideoResult];
    onSelectVideo: (video: IVideoResult) => void;
    displayType: string;
}

export interface IVideoResult {
    id: string;
    kind : string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        title: string;
        thumbnails: {
            default: {
                url: string;
                width: number;
                height: number
            };
            high: {
                url: string;
                width: number;
                height: number
            };
            medium: {
                url: string;
                width: number;
                height: number
            }
        }
    }
}

export interface IVideoItemProps {
    onSelectVideo: (video: any) => void;
    video: IVideoResult;
    displayType: string;
}

export interface ISearchHeaderProps {
    onSearch: (query: string) => void;
    onLogoClick: () => void;
}

export interface IVideoDetailProps {
    video: IVideoResult;
}