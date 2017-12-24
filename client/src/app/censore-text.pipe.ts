import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'censoreText'})
export class CensoreTextPipe implements PipeTransform {
  transform(value: string, word: string): string {    
    return value.split(word).join('*'.repeat(word.length))
  }
}