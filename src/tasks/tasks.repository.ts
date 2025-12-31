import { readFile, writeFile } from "fs/promises";

export class TasksRepository {
  async findAll(): Promise<any> {}

  async findOne(id: number): Promise<any> {
    const data = await readFile('tasks.json', 'utf-8');
    const tasks = JSON.parse(data);

    return tasks.find((task: any) => task.id === id);
  }

  async create(task: string): Promise<any> {}
}