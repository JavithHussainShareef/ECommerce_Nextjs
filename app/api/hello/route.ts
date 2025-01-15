export async function GET() {
    return new Response(JSON.stringify({ message: 'Hello from a Next.js route handler!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
    },
    });
  }

export async function POST(){
    return new Response('Thanks for the post', {
        status : 200,
    });
}