import { RoadieAgent, createRoadieAgentEntityProvider } from '@roadiehq/roadie-agent';
import { myEntityHandler } from './myEntityHandler.js';

RoadieAgent.fromConfig({
    server: 'https://${{ values.tenant }}.broker.roadie.so',
    accept: `${process.cwd()}/config/accept.json`,
    identifier: process.env.BROKER_TOKEN
  })
  .addEntityProvider(createRoadieAgentEntityProvider({
    handler: myEntityHandler,
    name: '${{ values.agent_name }}'
  }))
  .start();



