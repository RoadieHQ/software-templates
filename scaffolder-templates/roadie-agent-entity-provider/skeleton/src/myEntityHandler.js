/**
 * A fake payload example
 * Replace this with your own implementation to retrieve actual entity information from within your infrastructure
 */
const fakePayload = {
  type: 'full',
  entities: [
    {
      entity: {
        metadata: {
          namespace: 'default',
          annotations: {},
          name: 'locally-provided-group-entity',
          title: 'Locally provided entity',
          description:
            'Entity that is provided via Broker connection from an entity provider running on a separate machine',
        },
        apiVersion: 'backstage.io/v1alpha1',
        kind: 'Group',
        spec: {
          type: 'team',
          profile: {
            displayName: 'Locally provided group entity',
            email: 'team-alpha@example.com',
            picture:
              'https://avatars.dicebear.com/api/identicon/team-alpha@example.com.svg?background=%23fff&margin=25',
          },
          children: [],
        },
      },
    },
  ],
};

export const myEntityHandler = async (emit) => {
  await emit(fakePayload);
}

