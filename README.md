## bricksync-docker

#### CLI version

To build:
`docker build . -f Dockerfile.cli -t bricksync`

To run:
`docker run -it -v ${PWD}/data:/data --rm --name bricksync bricksync`

#### Web UI version

A very basic web page that displays the terminal output of brycksync and has controls for running `blmaster on` & `blmaster off`.

To build Web UI version:
`docker build . -f Dockerfile.ui -t bricksync-ui`

To run:
`docker run -v ${PWD}/data:/data -p 8080:8080 --rm --name bricksync-ui bricksync-ui`

Access the UI at [http://127.0.0.1:8080]()
