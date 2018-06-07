var GAME_LEVELS = [`                                                    
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx###xxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xxxxxx##xxxx##+##xxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxoxoxxxxxx##xxxxxxxxxxxxxxxxxx#+++#xxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##+##xxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#####xxxxxxxxxxxxxxxxxxxxxxxxxx#v#xxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xx
xx##xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxoxoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xx
xx#xxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xx
xx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#####xxxxxxxxxxxxxxxxxxxxxxxxxxxxxox#xx
xx#xxxxxxxxxx####xxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xx
xx#xx@xxxxxxx#xx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#####xxxxxxx#xx
xx############xx###############xxx####################xxxxx#######xxx#########xx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#xxxxxxxxxxxxxxxxxx#xxxxx#xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#+++#xxxxxxxxxxxxxxxxxx#+++++#xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#+++#xxxxxxxxxxxxxxxxxx#+++++#xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#####xxxxxxxxxxxxxxxxxx#######xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
`, `                                                                     
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxx###############################xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxx##xxxxxxxxxxxxxxxxxxxxxxxxxxxxx##########################################xxxx
xxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xxx
xxx#xxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx
xxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=xxxxxxxxxxxxxxxxxxxxxxx#xxx
xxx#xoxxxxxxxx################xxxxxxxxxxxxxxxxxxxoxxoxxxxxxxxxxx|xxxxxxxxoxx#xxx
xxx#xxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx
xxx#xxxxoxxxxxxxxxxxxxxxxxxxx##########xxxxx###################xxxx##########xxx
xxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#+++++#xxxxxxxxxxxxxxxxx#xxxx#xxxxxxxxxxxx
xxx###############xxxxooxxxxxx=oxoxoxx#######x###############x#xxxx#xxxxxxxxxxxx
xxxxx#xxxxxxxxxxxxxxxoxxoxxxxxxxxxxxxx#xxxxxxx#xxxxxx#xxxxxxxx#xxxx#xxxxxxxxxxxx
xxxxx#xxxxxxxxxxxxxxxxxxxx#############xx######x####x#x########xxxx########xxxxx
xxxxx#xxxxxxxxxxxxx########xxxxxxxxxxxxxx#xxxxxxxxxxx#x#xxxxxxxxxxxxxxxxxx#xxxxx
xxxxx#xxxxxxxxxx####xxxxxx####xxx#####################x#xxxxxxxxxxxxxxxxxx#xxxxx
xxxxx#xxxxxxxx###xxxxxxxxxxxx###xxxxxxxxxxxxxxxxxxxxxxx########xxxx########xxxxx
xxxxx#xxxxxxx##xxxxxxxxxxxxxxxx#########################xxxxxx#xxxx#xxxxxxxxxxxx
xxxxx#xxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxx#xxxxxxxxxxxx
xxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxx#xxxxxxxxxxxx
xxxxxxx#xxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxxxxx
xxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxx#xxxxxxxxxxxx
xxxxxxx#########xxxxxx###xxxxx############xxxxxxxxxxxxxxxxxxxxxxxxx##xxxxxxxxxxx
xxxxxxxxxxxxx#xxxxxxxxxxxxxxxxxx#xxxxxxxx#####xxxx#######xoxxxxxxxxx########xxxx
xxxxxxxxxxxxx#++++++++++++++++++#xxxxxxxxxxxx#xxxx#xxxxx#xxxxxxxxxxxxxxxxxx#xxxx
xxxxxxxxxxxxx#++++++++++++++++++#xxxxxxxxxx###xxxx###xxx####xoxxxxxxxxxxxxx#xxxx
xxxxxxxxxxxxx####################xxxxxxxxxx#xxxxxxxx#xxxxxx#xxxxx|xxxxxxxxx#xxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#++++++++#xxxxxx####xxxxxxxxxxxx#xxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#++++++++#xxxxxxxxx#xxxxxxxx@xxx#xxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#++++++++#xxxxxxxxx##############xxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##########xxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
`, `
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#++#xxxxxxxxxxxxxxxxxxxxxxxx#######xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#+#xx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#++#xxxxxxxxxxxxxxxxxxxxx####xxxxx####xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#+#xx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#++##########xxxxxxxxxxx##xxxxxxxxxxx##xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#+#xx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##++++++++++##xxxxxxxxx##xxxxxxxxxxxxx##xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#+#xx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##########++#xxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxoxxxoxxxoxx#+#xx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##+#xxxxxxxxx#xxxxxoxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##+#xx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#+#xxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx###############++#xx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#v#xxxxxxxxx#xxxxx#xxx#xxxxxxxxxxxxxxxxxxxxxxxx++++++++++++++##xx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xx|xxx|xxx|xx##xxxxxxxxxxxx#####################xxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##+++++++++++##xxxxxxxxxxxxvxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx####+++++####xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxx#xxxxxxxxxxxx#######xxxxxxxx###xxxxxxxxx###xxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxx#x#xxxxxxxxx#x#xxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxx#xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xxxxxxxx#xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxx#xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxx#xxxxxxoxxoxxxxx#xxx#xxxxxxxxx#xxxxxxxxx#xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxx#######xxxxxxxx###xxx###xxxxxxxx#xxxxx#xxxxxxxxxxxxxxx#xxx#xxxxxxxxx#xxxxxxxxx#xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxx##xxxxx##xxxxxxxxx#xxx#xxxxxxxxxx#xxxxx#xxxxx######xxxx#xxx#xxx#########xxxxxxx#xxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxx##xxxxxxx##xxxxxxxx#xox#xxxxxxxxxx#xxxx##xxxxxxxxxxxxxxx#xxx#xxx#xxxxxxxxxxxxxxx#xxxxxxxxxxxxxxxxxxxx
xxxxx@xxxxxxx#xxxxxxxxx#xxxxxxxx#xxx#xxxxxxxxxx#xxxxx#xxxxxxxxxxxxxxx#xxx#xxx#xxxxxxxxxxxxxxx#xxxxxxxxxxxxxxxxxxxx
xxxx###xxxxxx#xxxxxxxxx#xxxxxxxx#xxx#xxxxxxxxxx#xxxxx#xxxxxxxxxxxxxxx#xxx#####xxx######xxxxxx#xxxxxxxxxxxxxxxxxxxx
xxxx#x#xxxxxx#xxxxxxxxx#xxxxxxx##xox##xxxxxxxxx#xxxxx#xxxxxxxxxxxxxxx#xxxxxoxxxxx#x#xxxxxxxxx#xxxxxxxxxxxxxxxxxxxx
++++#x#++++++#xxxxxxxxx#++++++##xxxxx##++++++++##xxxx#++++++++++xxxxx#xxxxx=xxxxx#x#xxxxxxxxx#xxxxxxxxxxxxxxxxxxxx
++++#x#++++++#xxxxxxxxx#+++++##xxxxxxx##########xxxxx#+++++++##+xxxxx#############x##xxoxoxx##xxxxxxxxxxxxxxxxxxxx
++++#x#++++++#xxxxxxxxx#+++++#xxxxoxxxxxxxxxxxxxxxxx##++++++##x+xxxxxxxxxxxxxxxxxxxx##xxxxx##xxxxxxxxxxxxxxxxxxxxx
++++#x#++++++#xxxxxxxxx#+++++#xxxxxxxxxxxxxxxxxxxxx##++++++##xx+xxxxxxxxxxxxxxxxxxxxx#######xxxxxxxxxxxxxxxxxxxxxx
++++#x#++++++#xxxxxxxxx#+++++##xxxxxxx##############++++++##xxx+xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
++++#x#++++++#xxxxxxxxx#++++++#########++++++++++++++++++##xxxx+xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
++++#x#++++++#xxxxxxxxx#++++++++++++++++++++++++++++++++##xxxxx+xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
`, `
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#x#xxxxxxxxxxxxxxxxx+++xxxxxxxx+++xx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#x#xxxxxxxxxxxxxxxxx+#+xxxxxxxx+#+xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx###x###xxxxxxxxxxxxxxxx#xxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#xxxxxxxxxxxxxxxxx#xxxooooxxx#xxxxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#xxxxxxxxxxxxxxxxx#xxxxxxxxxx#xxxxxx#+++#xxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#xxxxxxxxxxxxxxxxx############xxxxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xxx##xxxxxx#xxx#xxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#########xxx########xxxxxxxxxxxxxx#x#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#xxxxxxxxxxx#xxxxxxxxxxxxxxxxxxxx#+++#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#xxxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xxx##xxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#=x=x=x=xxxx#xxxxxxxxxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#xxxxxxxxxxx#xxxxxxxxxxx#+++#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#xxxx=x=x=x=#xxxxxoxxxxxx###xxxxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xxx##xxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxx#+++#xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxoxxxoxxx#xxx#xxxxxxxxxxx#xxxxx#xxxxxxxxxxxxxxxx##vxxxxxxxx###xxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#xxxxxxxxxxx#xxxxxxxxxxxxxx#xxxxxxxxxxxxxxxxx#+++#xxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxx###x###x###x###xxxxxoxoxx#++++++++++++++#xxxxxxxxxxxxxxxxxxxv#xxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxx#x###x#x#x###x#xxxxxxxxxx#++++++++++++++#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxxxxxx#xxx#######################xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xxxxxxxxxxx##xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx###xxxxxxxxxxxxxxxxxxxxxx
xx###xxxxxxxxxxxxxxxxxxxxxxxxx#xxxxx#xxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#+++#xxxxxxxxxxxxxxxx###xx
xx#x#xxxxxxxxxxxxxxxxxxxxxxxxx#xxxx###xxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx###xxxxxxxxxxxxxxxxx#x#xx
xx#xxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxx###xxxx#######xxxxxxxxxxxxxxxxxxxxxxxx#####xxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xx
xx#xxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xx
xx#xxxxxxxxxxxxxxxxxxxxxxxxxxx##xxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#x#x#xxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xx
xx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxx|####|xxxx|####|xxxxx###x###xxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xx
xx#xxxxxxxxxxxxxxxx###xxxxxxxxxxxxxoxoxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxx###xxxxxxxxxxxxxxxxxxxxx#xx
xx#xxxxxxxxxxxxxxx#####xxxxxxx##xxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxx###xxxxxxx#+++#xxxxxxxxxx#xxxxxxxxx#xx
xx#xxxxxxxxxxxxxxxo###oxxxxxxx#xxxx###xxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxx#x#xxxxxxxx###xxxxxxxxxx###xxxxxxxx#xx
xx#xxxxxxxxxxxxxxxx###xxxxxxxx#############xx#xoox#xxxx#xoox#xxxx#xooxx##x##xxxxxxxxxxxxxxxxxxxx###xxxxxxxx#xx
xx#xxxxxx@xxxxxxxxxx#xxxxxxxxx#xxxxxxxxxxx#++#xxxx#++++#xxxx#++++#xxxx##xxx##xxxxxxxxxxxxxxxxxxxx#xxxxxxxxx#xx
xx#############################xxxxxxxxxxx#############################xxxxx################################xx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
`, `
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx###x#xxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#####xxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#x###xxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#x#x#xxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxoxoxo###x#xxxxxxx
xxxxxxxxxxxxxxxxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxx
xxxxxxx+xxoxx+xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#####x#####x#####x#####x#####x#####x#####xxxxxxx
xxxxxxx#xxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxx#x#xxx#x#xxx#x#xxx#x#xxx#x#xxx#x#xxxxxxxxxxx
xxxxxxx#=xoxx#xxxxxxxxxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx###x#x###x#x###x#x###x#x###x#x###x#x#####xxxxxxx
xxxxxxx#xxxxx#xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#x#xxx#x#xxx#x#xxx#x#xxx#x#xxx#x#xxxxx#xxxxxxx
xxxxxxx+xxoxx+xxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx####x#####x#####x#####x#####x#####x#######xxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxoxxxxxxxxxxxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxx###xxxxxxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxx#xxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx##xxxxx##xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxx###xxxxxxxxx###xxxxxxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxxxxxxxxxxx#xxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx||xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xx###########xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xx#xxxxxxxxx#xox#########xox#########xox##xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#xxxxxxxxxxxxxxxxxxx
xx#xxxxxxxxx#xxx#xxxxxxx#xxx#xxxxxxx#xxx#xxxxxxxxxxxxxxxxx||xxxxxxxxxxxxxxxxxx#xxxxx#xxxxxxxxxxxxxxxxxxxxxxxxx
xx#xx@xxxxxx#####xxxoxxx#####xxxoxxx#####xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xx#######xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx#####xxxxxxx##xxxxx##xxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxx#=xxxxxxxxxxxxxxxxxx=xxxxxxxxxxxxxxxx=#xxx#xxxxxxxxxxxxxxxxxxxxx###xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxx#######################################xxx#+++++++++++++++++++++###+++++++++++++++++++++++++++++++++++
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx############################################################
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
`];


if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
    module.exports = GAME_LEVELS;
if (typeof global != "undefined" && !global.GAME_LEVELS)
    global.GAME_LEVELS = GAME_LEVELS;