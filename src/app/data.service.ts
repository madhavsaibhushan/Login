import { Injectable } from '@angular/core';
import { DataInterface } from 'src/data.interface';


@Injectable()
export class DataService {
    public list = [
        { id: 0, name: 'Mr. Nice' },
        { id: 1, name: 'Narco' },
        { id: 2, name: 'Bombasto' },
        { id: 3, name: 'Celeritas' },
        { id: 4, name: 'Magneta' },
        { id: 5, name: 'RubberMan' },
        { id: 6, name: 'Dynama' },
        { id: 7, name: 'Dr IQ' },
        { id: 8, name: 'Magma' },
        { id: 9, name: 'Tornado' }
    ]
    getList() {
        return this.list;
    }


    update(id, updated) {
        let list = this.getList()
    
        console.log( (id))
        console.log(list[id],updated)
        this.list[id].name=updated;
        console.log(this.list[id])
    }
}