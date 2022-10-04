import styles from './video_item.module.css'
import { IVideoItemProps } from './video_item_type'

function VideoItem({video: {snippet}, video, onSelectVideo, displayType}: IVideoItemProps) {
    const display = displayType === 'list' ? styles.list : styles.grid;
  return (
    <li className={`${styles.container} ${display}`} onClick={() => onSelectVideo(video)}>
        <div className={styles.video}>
            <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt='thumbnail' />
            <div className={styles.metadata}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channelTitle}>{snippet.channelTitle}</p>
            </div>
        </div>
    </li>
  )
}

export default VideoItem