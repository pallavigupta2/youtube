
const YOUTUBE_API_KEY = "AIzaSyBbv1caKaQmcJnFuz_Bx8KWjPzC0Ts8III"
export const YOUTUBE_VEDIO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + YOUTUBE_API_KEY;

export const YOUTUBE_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const searchApi=(keyword)=>{
    const YOUTUBE_SEARCH_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + keyword + "&key="+ YOUTUBE_API_KEY;
    return YOUTUBE_SEARCH_API
}
