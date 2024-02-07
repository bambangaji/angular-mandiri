import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage;
  constructor() {
    this.storage = localStorage; // You can change this to sessionStorage if needed
  }

  set(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
