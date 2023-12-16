export const getLatestMessage = (messageList) => {

    return messageList?.[messageList?.length - 1]?.message

}