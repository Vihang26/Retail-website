import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe  implements PipeTransform {
    
    transform(value: any, filterString : any):any {
        const resultArray = [];    
        if (value.length === 0 || filterString ===""){
            return value;
        } 
        for(const item of value){
            if(item['name']==filterString || item['id']==filterString || item['phoneNo']==filterString){
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}

// import { Pipe, PipeTransform } from '@angular/core';



// @Pipe({

//   name: 'filter'

// })

// export class FilterPipe implements PipeTransform {



//   transform(value: any, filterString : any): any[]{    

//     if(!filterString) {

//         return  [];

//     }

//     filterString = filterString.toLowerCase();

//    return value.filter(

//        (x: any) =>x.toLowerCase().includes(filterString)

//    )

//  }



// }