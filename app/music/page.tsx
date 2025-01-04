import { Suspense } from 'react'
import PageTransition from '../components/PageTransition'
import { getNowPlaying } from '../utils/spotify'
import MusicVisualizer from '../components/MusicVisualizer'

interface TrackData {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

async function CurrentTrack() {
  let trackData: TrackData | null = null;

  try {
    const response = await getNowPlaying()
    if (response.status === 204 || response.status > 400) {
      // No track currently playing
      return (
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-6">
          <p className="text-xl">No track currently playing</p>
        </div>
      )
    }

    const data = await response.json()
    trackData = {
      isPlaying: data.is_playing,
      title: data.item.name,
      artist: data.item.artists.map((artist: { name: string }) => artist.name).join(', '),
      album: data.item.album.name,
      albumImageUrl: data.item.album.images[0]?.url,
      songUrl: data.item.external_urls.spotify,
    }
  } catch (error) {
    console.error('Error fetching current track:', error)
    return (
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-6">
        <p className="text-xl text-red-500">Error fetching current track</p>
      </div>
    )
  }

  if (!trackData) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-6">
        <p className="text-xl">No track data available</p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-6">
      <div className="flex items-center space-x-4">
        {trackData.albumImageUrl && (
          <img
            src={trackData.albumImageUrl}
            alt={trackData.album}
            className="w-24 h-24 rounded-lg"
          />
        )}
        <div>
          <h2 className="text-2xl font-semibold">
            {trackData.isPlaying ? 'Now Playing' : 'Last Played'}
          </h2>
          <p className="text-xl font-medium">{trackData.title}</p>
          <p className="text-gray-600 dark:text-gray-300">{trackData.artist}</p>
          <p className="text-gray-500 dark:text-gray-400">{trackData.album}</p>
          <a
            href={trackData.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </div>
  )
}

export default function MusicActivity() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">My Music Activity</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <CurrentTrack />
        </Suspense>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Music Visualizer</h2>
          <MusicVisualizer />
        </div>
      </div>
    </PageTransition>
  )
}

