export async function postReq(url:string, data:{},method:string) {
    const response = await fetch(url, {
      method,
      mode: "cors", 
      cache: "no-cache",
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), 
    });
    return response.json();
  }