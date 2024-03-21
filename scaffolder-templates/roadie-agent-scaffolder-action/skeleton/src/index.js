import { RoadieAgent, createRoadieAgentScaffolderAction } from '@roadiehq/roadie-agent';
import { myScaffolderActionHandler } from './myScaffolderActionHandler.js';

RoadieAgent.fromConfig({
    server: 'https://${{ values.tenant }}.broker.roadie.so',
    accept: `${process.cwd()}/config/accept.json`,
    identifier: process.env.BROKER_TOKEN
  })
  .addScaffolderAction(createRoadieAgentScaffolderAction({
    name: '${{ values.agent_name }}',
    handler: myScaffolderActionHandler
  }))
  .start();



