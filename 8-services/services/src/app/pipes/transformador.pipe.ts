import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformador',
})
export class TransformadorPipe implements PipeTransform {
  transform(value: string, name: any, token: any, ...args: unknown[]): unknown {
    return `${
      value.charAt(0).toUpperCase() + value.slice(1)
    } - ${name} - ${token}`;
  }
}
