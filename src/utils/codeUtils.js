const generateLicenseKey = () => {
    // License format : xxxxxxxx-xxxxxx-xxxx-xxxxxxxx with only capitalized letters and numbers
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "";
    for(let i = 0; i < 8; i++)
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    key += "-";
    for(let i = 0; i < 6; i++)
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    key += "-";
    for(let i = 0; i < 4; i++)
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    key += "-";
    for(let i = 0; i < 8; i++)
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    return key;
}

module.exports = {
    generateLicenseKey
}