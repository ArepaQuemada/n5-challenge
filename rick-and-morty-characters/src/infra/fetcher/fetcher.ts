export class Fetcher {
  constructor(private readonly baseUrl: string) {}

  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`);
    const data = await response.json();
    return data;
  }
}
