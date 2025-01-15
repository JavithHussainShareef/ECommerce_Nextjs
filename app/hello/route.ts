export async function GET(){
    return new Response(JSON.stringify({message : 'Hello from Mr.white!'}), {
        status : 200,
    });
}

export async function POST(){
    return new Response('Thanks for the post', {
        status : 200,
    });
}