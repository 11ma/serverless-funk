import fetch from "node-fetch"

export async function handler(event, context) {
	const url = "https://icanhazdadjoke.com/"
	try {
		const jokeStream = await fetch(url, {
			headers: {
				Accept: "application/json",
			},
		})
		// console.log(jokeStream)
		const jsonJoke = await jokeStream.json()
		return {
			statusCode: 200,
			body: JSON.stringify(jsonJoke),
		}
	} catch (err) {
		return { statusCode: 422, body: err.stack }
	}
}
