export function sendUserResult(data){
  // console.log(data);
  return {
    type: "SEND_USER_DATA",
    value : data
  }
}