import { Pipe, PipeTransform } from '@angular/core';

/**
 * Пайп для преобразования времени Date в формат hh:mm:ss
 */
@Pipe({
  name: 'timePipe',
  pure: false
})
export class DateTimePipe implements PipeTransform {

  transform(datetime: Date | null): string {

    return datetime ? `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}` : ''
  }

}
