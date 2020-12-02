export function judge(route, code) {
    return fetch('http://localhost:3001/' + route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(code)
    })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => error)
}