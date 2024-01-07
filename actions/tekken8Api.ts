
const TEKKEN8_API = "http://localhost:3333/"

export async function getTekken8Characters(name: string) {
    const response = await fetch(TEKKEN8_API + `characters?search=${name}`)
    const data = await response.json()
    return data
}