import VideoItem from '../video_item/video_item'
import { IVideoListProps } from '../video_item/video_item_type'
import styles from './video_list.module.css'

function VideoList({videos, onSelectVideo, displayType}: IVideoListProps) {
  return (
    <ul className={styles.videos}>
        {videos.map(video => (
            <VideoItem key={video.id} video={video} onSelectVideo={onSelectVideo} displayType={displayType} />
        ))}
    </ul>
  )
}

export default VideoList