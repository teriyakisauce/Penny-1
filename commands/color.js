//Credit:
//Command by Uninvited - Uninvited#1307 on Discord

exports.run = function (client, message,args, Discord, connection){

//function to check if user is patreon and assign color
function setcolor() {
connection.query("SELECT * FROM `User` WHERE `User_ID` = "+message.author.id+"", function(err, res, fields){
if(res[0].patron === 1){

message.member.guild.createRole ({
    name: message.author.id,
	color: args[1]
}).then(function(role) {
message.member.addRole(role);
});
} else {
message.channel.send("This feature is for Patreons only.")
}
})
}
//function to check if user has color and remove color to assign a new one, this part will execute even if you are not a patreon but will in turn just remove the role and fail at setcolor()
if(message.guild.roles.exists("name", message.author.id))
{	
	let roleee = message.guild.roles.find('name', message.author.id)
	roleee.delete();
	setcolor()
}
else
{
setcolor()	
}

}

exports.conf = {
    name: "color",
    category: "Miscelaneous",
    description: "Color",
    usage: "color (hex)",
    aliases: []//Credit:
//Command by Uninvited - Uninvited#1307 on Discord
exports.run = function(client, message, args, Discord, connection) {

    //function to check if user is patreon and assign color
    function setcolor() {
        if (message.guild.id === "309531752014151690") {
            if (message.member.roles.get("318256979497975810")) {
                var isOk = /^#[0-9A-F]{6}$/i
                if (isOk.test(args[1])) {
                    message.member.guild.createRole({
                        name: message.author.id,
                        color: args[1]
                    }).then(function(role) {
                        role.setPosition(11)
                        message.member.addRole(role);
                        message.channel.send("Enjoy your hex.")
                    });
                } else {
                    message.channel.send("Please use a valid hex.")
                }

            } else {
                message.channel.send("This feature is for Patreons only.")
            }
        }
    }

    //function to check if user has color and remove color to assign a new one, this part will execute even if you are not a patreon but will in turn just remove the role and fail at setcolor()
    if (message.guild.roles.exists("name", message.author.id)) {
        let roleee = message.guild.roles.find('name', message.author.id)
        roleee.delete();
        setcolor()
    } else {
        setcolor()
    }

}

exports.conf = {
    name: "color",
    description: "Color",
    usage: "color (hex)",
    aliases: []
}
}
