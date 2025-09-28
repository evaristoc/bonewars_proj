#! /bin/bash

CURR_BRANCH=''
read -p "add comment: " COMMENT

if [[ ! -z "${COMMENT}" ]]
then
CURR_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
echo "${CURR_BRANCH} : ${COMMENT}"
git commit --verbose -m "${CURR_BRANCH} : ${COMMENT}"
else
echo "Please add comment"
exit 1
fi
exit 0;