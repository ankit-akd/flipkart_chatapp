export const getFilteredData = (data,input,id) => {
    const newData = data.filter(item => item?.title.toLowerCase().includes(input.toLowerCase()) || item?.orderId.toLowerCase().includes(input.toLowerCase()));

    if(newData.find((item) => item.id === id))
        return newData;

    return [...newData, ...data.filter(item=> item.id === id)]
}