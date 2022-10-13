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
        filterString = filterString.toLowerCase();
        for(const item of value){
            if(item['name'].toLowerCase().includes(filterString) || 
                item['email'].toLowerCase().includes(filterString)|| 
                item['id'].toLowerCase().includes(filterString) || 
                item['phoneNo'].toLowerCase().includes(filterString)){
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