# Roadie Agent Scaffolder Action

See Roadie Agent documentation in https://github.com/RoadieHQ/roadie-agent.

## Usage

Configure your Roadie instance to allow traffic from the IP address this Agent service is running. 
Enable and register a Roadie Agent `scaffolder-action` connection type in Roadie. The token used by this agent service should be configured as environment variable `BROKER_TOKEN`, the name of the Agent action is `${{ values.agent_name }}`.

Modify the example scaffolder action handler in `src/myScaffolderActionHandler.js` to provide entities to your liking.

## Running

Locally: 
* `yarn`
* `yarn start`

## As a container

Build the container:
`docker build . --tag my-agent`

Run the container:
`docker run --env BROKER_TOKEN=my-broker-token my-agent `

