const GOOGLE_API_KEY = 'AIzaSyBKpOi3RiEMXLoWyFV7VM5wG-wILYa0-qY';
const NEW_API_KEY = 'AIzaSyAInvwPRivGc10UVrmkCjD7KZKoPKxwTTg'

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl
}

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${NEW_API_KEY}`
  const response = await fetch(url) 

  if (!response.ok) {
    throw new Error('Failed to fetch address')
  }

  const data = await response.json()
  // console.log(data);
  const address = data?.results[0]?.formatted_address;
  return address
}
