export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {lat: number, lng: number};
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}


export class User {


    constructor(
        public id: number,
        public name: string,
        public username: string,
        public age: number,
        public address: Address,
        public company: Company,
        public avatar?: string,
        public website?: string

    ) { }

     generateId = () => {
          const s4 = (): string => {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          };
      return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;

     }


}
