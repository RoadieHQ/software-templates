import { writeFileSync } from "fs";

export const myScaffolderActionHandler = async (context) => {
  try {
    const greeting = `Hello, ${JSON.parse(context.payload.body)['name'] || 'world!'}`
    await context.log(greeting);
    writeFileSync(`${context.workspacePath}/greeting.txt`, greeting);
  } catch (e) {
    console.log('An error occurred');
  }
}
