// export default async function FetchTest(){
//     const response = await fetch('process.env.NEXT_PUBLIC_SITE_URL/api/hello');
//     console.log(response.json());
//     //const data = await response.json();
//     //console.log(data);
//     //return <h1>{data.message}</h1>
//     return <h1>hi</h1>
// }

export default async function FetchTest() {
    const response = await fetch('process.env.NEXT_PUBLIC_SITE_URL/api/hello');
    const data = await response.json();
  
    return <h1>{data.message}</h1>
  }