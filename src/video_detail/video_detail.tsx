import { IVideoDetailProps, IVideoResult } from '../video_item/video_item_type'
import styles from './video_detail.module.css'

function VideoDetail({video}: IVideoDetailProps) {
  return (
    <section className={styles.detail}>
        <iframe id="ytplayer" width="100%" height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0" title={video.id} />
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <pre className={styles.description}>
            {video.snippet.description}
        </pre>
    </section>
  )
}

export default VideoDetail