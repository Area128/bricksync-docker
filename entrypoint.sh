#!/bin/sh

screen -d -L -Logfile /home/node/bricksync.log -m -S bricksync sh -c 'cd / && /bricksync'
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start bricksync: $status"
  exit $status
fi

npm start &
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start npm: $status"
  exit $status
fi

while sleep 15; do
  screen -ls | grep bricksync | grep -q -v grep
  PROCESS_1_STATUS=$?
  ps aux | grep npm | grep -q -v grep
  PROCESS_2_STATUS=$?
  # If the greps above find anything, they exit with 0 status
  # If they are not both 0, then something is wrong
  if [ $PROCESS_1_STATUS -ne 0 -o $PROCESS_2_STATUS -ne 0 ]; then
    echo "One of the processes has already exited."
    exit 1
  fi
done
