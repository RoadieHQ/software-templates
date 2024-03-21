import { RoadieAgent, createRoadieAgentScaffolderAction } from '@roadiehq/roadie-agent';
import { myScaffolderActionHandler } from './myScaffolderActionHandler.js';

RoadieAgent.fromConfig({
    server: 'https://${{ values.tenant }}.broker.roadie.so',
    port: 7342,
    accept: `${process.cwd()}/config/accept.json`,
    agentPort: 7044,
    identifier: process.env.BROKER_TOKEN
  })
  .addScaffolderAction(createRoadieAgentScaffolderAction({
    name: '${{ values.agent_name }}',
    handler: myScaffolderActionHandler
  }))
  .start();



