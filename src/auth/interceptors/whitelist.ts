export class OTPRequest {
    phone: string;
    code: number;
  }
  
  export const WHITELIST: OTPRequest[] = [
    { phone: '996000555555', code: 5555 },
    { phone: '996000777777', code: 7777 },
    { phone: '996000333333', code: 3333 },
    { phone: '996000666666', code: 6666 },
    { phone: '996000222222', code: 2222 },
    { phone: '996000444444', code: 4444 },
    { phone: '996000111111', code: 1111 },
    { phone: '996777777313', code: 1234 },
    { phone: '996999699235', code: 1234 },
  ];
  