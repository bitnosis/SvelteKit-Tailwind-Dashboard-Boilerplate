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