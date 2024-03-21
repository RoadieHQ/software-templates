import { writeFileSync } from "fs";

export const myScaffolderActionHandler = async ({ log, payload, workspacePath }) => {
  const greeting = `Hello, ${payload.body['name'] || 'world!'}`
  await log(greeting);
  writeFileSync(`${workspacePath}/greeting.txt`, greeting);
}

