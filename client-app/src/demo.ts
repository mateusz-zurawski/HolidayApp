let data:number|string;
data = 42;
export interface ICar{
    color: string
    nr?: number
}
const car: ICar = {
    color: "red"
}
const car2: ICar = {
    color: "white",
    nr: 123
}
export const cars = [car,car2];