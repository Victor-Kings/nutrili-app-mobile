export const correctionUrlImage=(url: string)=>{
    const newUrl = url.replace("localhost", "192.168.0.103")
    console.log(newUrl);
    return newUrl
}