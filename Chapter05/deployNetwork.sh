#!/bin/bash
 
. ../common_OSX.sh

function printHelp ()
{
    printHeader
    echo ""
    echo -e "${RESET} options for this exec are: "
    echo -e "${GREEN}-h ${RESET}Print this help information" | indent
    echo -e "${GREEN}-n ${RESET}defaults to ${GREEN}zerotoblockchain-network${RESET}. use ${YELLOW}-n your-named-network ${RESET}if you are using a different network name"  | indent
    echo -e "\t\tyou will have to ensure that the name you use here is also the name you use in BOTH package.json files and in your application code" | indent
    echo ""
    echo ""
}

# print the header information for execution
function printHeader ()
{
    echo ""
    echo -e "${YELLOW}network deploy script for the Zero To Blockchain Series" | indent
    echo -e "${RED}This is for Mac OSX ONLY" | indent
    echo -e "${YELLOW}This script will create your Composer archive" | indent
    echo ""
}
# get the command line options

NETWORK_NAME="zerotoblockchain-network"

 while getopts "h:n:" opt; 
do
    case "$opt" in
        h|\?)
        printHelp
        exit 0
        ;;
        n)  showStep "option passed for network name is: '$OPTARG'" 
            if [[ $OPTARG != "" ]]; then 
                NETWORK_NAME=$OPTARG 
            fi
        ;;
    esac
 done

printHeader
echo  "Parameters:"
echo -e "Network Name is: ${GREEN} $NETWORK_NAME ${RESET}" | indent

showStep "deploying network"
cd network/dist
composer network deploy -a $NETWORK_NAME.bna -p hlfv1 -i PeerAdmin -s randomString