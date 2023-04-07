import { RoadieAgent, createRoadieAgentEntityProvider } from '@roadiehq/roadie-agent';
import { myEntityHandler } from './myEntityHandler.js';

RoadieAgent.fromConfig({
    server: 'https://${{ values.tenant }}.broker.roadie.so',
    port: 7342,
    accept: `${process.cwd()}/config/accept.json`,
    agentPort: 7044,
    identifier: process.env.BROKER_TOKEN
  })
  .addEntityProvider(createRoadieAgentEntityProvider({
    handler: myEntityHandler,
    name: '${{ values.agent_name }}'
  }))
  .start();



