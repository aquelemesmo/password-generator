export default function generateRandomString(length) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()-+`´[]^~<>:;/\|ç';
    let randomString = ''
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      randomString += caracteres[randomIndex]
    }
  
    return randomString;
  }