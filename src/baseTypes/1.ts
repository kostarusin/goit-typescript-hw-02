// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.


type Age = number;
type Name = string;
type Toggle = boolean;
type Empty = null;
type NotInitialize = any;
type Callback = (arg: number) => number;

let age: Age = 50;
let name: Name = 'Max';
let toggle: Toggle = true;
let empty: Empty = null;
let notInitialize: NotInitialize;
let callback: Callback = (a) => { return 100 + a };


export {};
