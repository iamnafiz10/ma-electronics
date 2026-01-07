export class HttpService {
  static async get(url: string) {
    const res = await fetch(url, {
      credentials: 'include',
    });
    return res.json();
  }

  static async post(url: string, body: any) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      credentials: 'include',
    });
    return res.json();
  }
}
