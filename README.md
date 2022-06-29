### Introduction
This is the main server back end which provide API for brass app

## Install docker on Windows (It's really a challenges -_-)
You are able to follow this guidelines: https://docs.docker.com/desktop/windows/install/ and make sure that your OS is sufficiently new to install Docker on
Sumarize by following steps:
1. Turn off your anti-virus on your computer
2. Turn off all firewall
3. Install WSL 2 backend
4. Download and install Docker Desktop
5. Restart and enjoy
## Mock data
There are few mock data files in folder /mock, on development environment, developer can import into database to start app
1. import file icon.json to collection icons
2. get all icon.id
3. replace all appIcons in ExampleJson.json
4. import ExampleJson.json tôcllection interfaces
## Run and build
Run: `docker-compose up`
