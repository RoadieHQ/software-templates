import { writeFileSync } from "fs";

export const helloWorldScaffolderActionHandler = async (context) => {
  try {
    const greeting = `Hello, ${context.payload.body.name || 'world!'}`
    await context.log(greeting);
    writeFileSync(`${context.workspacePath}/greeting.txt`, greeting);
  } catch (e) {
    console.log('An error occurred');
  }
}
