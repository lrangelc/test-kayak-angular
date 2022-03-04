import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {

  transform(url: string, ...args: unknown[]): unknown {
    if (url.includes("http")) {
      const domain = new URL(url);
      return domain.hostname;
    } else {
      return url;
    }
  }

}
