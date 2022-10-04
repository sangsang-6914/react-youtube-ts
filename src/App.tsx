import { useEffect, useState } from 'react';
import styles from './app.module.css'
import SearchHeader from './search_header/search_header';
import Youtube from './service/youtube';
import VideoDetail from './video_detail/video_detail';
import { IVideoItemProps, IVideoListProps, IVideoResult } from './video_item/video_item_type';
import VideoList from './video_list/video_list';

interface IAppProps {
  youtube: Youtube
}

function App({youtube}: IAppProps) {
  const [videos, setVideos] = useState<[IVideoResult]>();
  const [selectedVideo, setSelectedVideo] = useState<IVideoResult | null>();

  const handleSearch = (query: string) => {
    youtube.getSearchVideos(query)
      .then((res) => {
        console.log(res)
        setVideos(res)
        setSelectedVideo(null)
      })
  }

  const handleSelectVideo = (video: IVideoResult) => {
    setSelectedVideo(video);
  }

  const handleLogoClick = () => {
    setSelectedVideo(null);
  }
  
  useEffect(() => {
    youtube.getVideos()
      .then((res: any) => {
        setVideos(res.items)
      })
  }, [youtube])
  

  return (
    <>
      {videos ? (
        <div className={styles.app}>
          <SearchHeader onSearch={handleSearch} onLogoClick={handleLogoClick} />
          <div className={styles.content}>
            {selectedVideo ? (
              <div className={styles.detail}>
                  <VideoDetail video={selectedVideo} />
              </div>
            ) : null}
            <div className={styles.videos}>
              <VideoList videos={videos} onSelectVideo={handleSelectVideo} displayType={selectedVideo ? 'list' : 'grid'} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
