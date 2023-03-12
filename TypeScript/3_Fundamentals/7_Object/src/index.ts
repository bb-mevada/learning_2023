let employee: {
    id: number;
    name: string;
    retire: (date: Date) => void;
} = { id: 1, name: "Bhavesh", retire: (date: Date) => console.log(date) };

// we can make property optional
// name?: string

// We can make property readonly so it will not modified
// readonly id: number

// There is a better way available in typescript to work with objects
