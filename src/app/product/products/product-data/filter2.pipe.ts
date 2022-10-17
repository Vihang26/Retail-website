import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe2  implements PipeTransform {
    
    transform(value: any, filterString : any):any {
        const resultArray = [];   
        if (value.length === 0 || filterString ===""){
            return value;
        } 
        filterString = filterString.toLowerCase();
        for(const item of value){
            if(item['name'].toLowerCase().includes(filterString) || 
                item['company'].toLowerCase().includes(filterString)){
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}