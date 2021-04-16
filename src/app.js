var fs = require('fs')
var readline = require('readline')
var fetch = require('node-fetch')
var cntr = 0;





var rl = readline.createInterface({
    input: fs.createReadStream('./src/all.txt')
})
rl.on('line', function(line) {
    if (cntr++ < 250) {
        console.log(line)
        fetch("https://gql.twitch.tv/gql", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US",
                "authorization": `OAuth ${line}`,
                "client-id": "kimne78kx3ncx6brgo4mv6wki5h1ko",
                "content-type": "text/plain;charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "x-device-id": "fkWkLSFgnouOunvs9uZvuJa0xrtCxKom"
            },
            "referrer": "https://www.twitch.tv/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "[{\"operationName\":\"FollowButton_FollowUser\",\"variables\":{\"input\":{\"disableNotifications\":false,\"targetID\":\"144225728\"}},\"extensions\":{\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"3efee1acda90efdff9fef6e6b4a29213be3ee490781c5b54469717b6131ffdfe\"}}}]",
            "method": "POST",
            "mode": "cors"
        })

    }
})