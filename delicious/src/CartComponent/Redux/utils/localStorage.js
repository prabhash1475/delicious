
export const loadData=(key)=>{
    try{
        let data1 = localStorage.getItem(key)
        let data2 = JSON.parse(data1)
        return data2
    }
    catch(err){
        return;
        // or return
    }
}

// const initState = loadData('state') || {  isAuth: false, token: '' }

// to save data we can use a helper function 

export const saveData=(key, data="")=>{
    localStorage.setItem(key,JSON.stringify(data))
}

// export { loadData, saveData }