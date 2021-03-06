// edit it to change the bot's name
const botname = '[DC] Bot' 

function help(prefix, pushname) {
    return `ποΈHi ${pushname}, I'm ${botname}!

Prefix - ${prefix}

ποΈ G3 Exclusive Commands ποΈ

*_CMD: ${prefix}attendance <text>_*
*Description: Pings every group member for attendance or any important announcement. Misuse is forbidden.* ποΈ

*_CMD: ${prefix}link_*
*Description: Displays the class link for the given day and class start time. Example - !link mon 11* ποΈ

ποΈ More Commands List ποΈ

*_CMD: ${prefix}profile_*
*Description: Displays the information of the user*

*_CMD: ${prefix}sticker_*
*Description: Turns images into stickers* ποΈ
Usage: ${prefix}sticker as caption of picture

*_CMD: ${prefix}gsticker <giphy URL>_*
*Description: Turns gifs into stickers* π οΈ

*_CMD: ${prefix}sauce_*
*Description: Give's the title of the picture specified* β€οΈ
Usage: ${prefix}sauce as the caption or reply of any picture

*_CMD: ${prefix}pokemon_*
*Description: Returns picture of a random Pokemon* πΊοΈ

*_CMD: ${prefix}anime <anime name>_*
Description: Returns the information of the given anime* πΊοΈ
Usage: ${prefix}anime sakura trick

*_${prefix}tts <language-code> <text>_* [Disabled due to ban-risk]
*Description: Converts text to speech* π£οΈ
Usage: ${prefix}tts en I love Emilia

*_${prefix}quotemaker | quote | author |_*
*Description: Convert the given quote to an image*
Usage: ${prefix}qm | Courage need not to be remembered, for it is never forgotten | Emilia ποΈ

*_${prefix}lyrics <song name>_*
*Description: Displays the lyricsof the given song* πΆοΈ
Usage: ${prefix}lyrics Shinzou wo sasageyo
            
*_CMD: ${prefix}cat_*
*Description: Displays picture of a random cat* ποΈ

*_CMD: ${prefix}doggo_*
*Description: Displays picture of a random pup* ποΈ

*_CMD: ${prefix}wallpaper <keyword>_*
*Description: Returns a random anime wallpaper based on the keyword* π±οΈ
Usage: ${prefix}wallpaper Black Butler

*_CMD: ${prefix}covid <country>_*
*Description: Displays the live stats of Covid-19 of the given country* ποΈ
Usage: ${prefix}covid Japan

*_CMD: ${prefix}meme_*
*Description: Returns a random meme π·οΈ 

*_CMD: ${prefix}sr <subreddit_title>_*
*Description: Displays a post from the given subreddit* π»οΈ
Usage: ${prefix}sr funny

*_CMD: ${prefix}quotes_* [Disabled]
*Description: Returns a quote that will either give you existential crises or wisdom* π οΈ

*_CMD: ${prefix}groupinfo_*
*Description: Displays the information of the group* β±οΈ

*_CMD: ${prefix}roll_*
*Description: Rolls a dice* π²

*_CMD: ${prefix}flip_*
*Description: Flips a coin* π‘

Admin Commands ποΈ

Only group admins can execute this command

*_CMD: ${prefix}delete_*
Description: Deletes the Bot's message* ποΈ
Usage: Send ${prefix}delete as reply to the bot's message

To execute the following commands the bot and the author needs to be admin

*_CMD: ${prefix}seticon_*
*Description: Sets the quoted image as the group icon* ποΈ

*_CMD: ${prefix}kick @user_*
*Description: Kicks the mentioned person from the group* ποΈ

*_CMD: ${prefix}promote @user_*
*Description: Makes the metioned user admin* ποΈ

*_CMD: ${prefix}demote @user_*
*Description: Demotes the mentioned user from adminship* ποΈ


There are many hidden and fun keywords ;)

Hope you have a great day!`
}
module.exports = { info, help }
function info() {
    return `INFO!`
}

//waifu, animeneko, rpaper, neko renamed to cat
