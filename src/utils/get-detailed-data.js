export  const getDetailedData = (data,id) =>{
    if(id) {
        return data.filter((singleItem)=> singleItem.id === id)[0]
    }
}