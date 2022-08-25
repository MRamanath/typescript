interface ErrorContainer {
    id: string; // also has to be string because of string prop type below
    [prop: string]: string; // property name has to be string and property value also has to be string
}

const errorBag: ErrorContainer = {
    id: 'A1',
    email: 'email is not a valid email address',
    username: 'username must be a valid username',
}