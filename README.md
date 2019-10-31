# spy bot
 proof of concept code not to put to use

## discord bots and ITs main issue - TRUST - 
You have to trust the bots you use.
Make no mistake this is nothing new but something that is often forgotten.
This code is very easy to write even for a novice programmer.

This might is a potential way for a bad actor to log everything a bot can see.
Integration into a database that could be easily searched or datamined is not particularly hard.

PLEASE LOOK INTO A BOTS REPUTATION BEFORE YOU INVITE THEM.
DATA PRIVACY IS IMPORTANT.


## Sample log
Structure  
server id - server name - channel id - channel name - member id - member tag - messasge id - message content - message has been changed
Made up sample messages

456789012345670123 - myServer - 678901234567012345 - myChannel - 234567890123456701 - myUser#0123 - 012345678901234567 - myMessage - false

456789012345670123 - myServer - 678901234567012345 - myChannel - 234567890123456701 - myUser#0123 - 012345678901234567 - my message edited - true

## Legitimate uses
There are some legitimate uses for administrative purposes.
If you want to see if a user actually wrote a message that is against server rules or TOS before they changes it a log would be useful.
Discord does not provide such a log for you so you might want to create one yourself.
I'm not up to date with the legalities and such but I personally have no interst but I just wanted to see if making a log bot is that easy.
