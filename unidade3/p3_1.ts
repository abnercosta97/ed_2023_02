class Search<T>{
    sequential(e:T, v:T[]):number{
        let pos: number = -1;
        for(let i:number =0; i< v.length; ++i){
            if(e == v[i])
                return i;
        }
        return pos;
    }

    sequential_w(e:T, v:T[]):number{
        let pos:number = 0;
        while(pos <v.length && v[pos]!= e)
            ++pos;
        if(pos == v.length)
            return -1;
        else 
            return pos;        
    }

    /* sequential with sentinel */
    sequential_ws(e:T, v:T[]):number{
        let pos:number = 0;
        v.push(e);
        while(v[pos]!= e)
            ++pos;
        if(pos == (v.length-1)){
            v.pop();
            return -1;
        } else{
            v.pop();
            return pos;
        }                     
    }
}
    export{
        Search
    }