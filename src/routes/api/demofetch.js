// This file just performs a fake network fetch with 3.5 second delay

function later(delay) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

export async function GET() {
    await later(3600);
    return {
        body: { hello: 'world' }
    };
}