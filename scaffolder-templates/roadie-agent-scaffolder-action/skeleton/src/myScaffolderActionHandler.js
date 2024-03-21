import { writeFileSync } from "fs";

export const myScaffolderActionHandler = async (context) => {
  const greeting = `Hello, ${context.payload.body['name'] || 'world!'}`
  await log(context.greeting);
  writeFileSync(`${context.workspacePath}/greeting.txt`, greeting);
}

