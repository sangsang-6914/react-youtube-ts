class Youtube {
    key = ''
    url = 'https://www.googleapis.com/youtube/v3'
    constructor (key: string) {
        this.key = key
    }

    getRequestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

    async getVideos () {
        const response = await fetch(`${this.url}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, {
            method: 'GET',
            redirect: 'follow'
        })
            .then(res => res.json())

        return response
    }

    async getSearchVideos (query: string = '') {
        return await fetch(`${this.url}/search?part=snippet&q=${query}&maxResults=25&type=video&key=${this.key}`)
            .then(res => res.json())
            .then(result => result.items.map((item: any) => ({...item, id: item.id.videoId})))
    }
}

export default Youtube