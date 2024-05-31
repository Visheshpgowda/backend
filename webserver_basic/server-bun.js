import {serve} from 'bun'
serve({
     fetch(request){
        const url=new URL(request.url)
        if(url.pathname=='/'){
            return new Response('Hello Ice tea',{status:200})
        }
        else if(url.pathname=='/ice-tea'){
            return new Response('Hello Ice tea wiht bun',{status:200})
        }else{
            return new Response ("soory no url")
        }
     },
     port:3000,
     hostname:'127.0.0.1'
})