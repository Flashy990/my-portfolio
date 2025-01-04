import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

// async function getAccessToken() {
//   console.log('Using refresh_token:', refresh_token); // Log the refresh token

//   const response = await fetch(TOKEN_ENDPOINT, {
//     method: 'POST',
//     headers: {
//       Authorization: `Basic ${basic}`,
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: querystring.stringify({
//       grant_type: 'refresh_token',
//       refresh_token,
//     }),
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     console.error('Failed to get access token:', data);
//     throw new Error('Failed to get access token');
//   }

//   return data;
// }

export async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export async function getTopTracks() {
  const { access_token } = await getAccessToken()

  const response = await fetch(`${TOP_TRACKS_ENDPOINT}?limit=5`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch top tracks')
  }

  const data = await response.json()
  return data.items
}

export async function getNowPlaying() {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

