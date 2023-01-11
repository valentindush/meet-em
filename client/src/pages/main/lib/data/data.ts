
import image2 from '../../../../assets/images/img2.png'

export interface Participant{
    name: string,
    email: string,
    video: boolean,
    audio: boolean,
    imageUrl: string,
}

export const participants: Participant[] = [
    {
        name: 'John Doe',
        email: 'johhdoe@gmail.com',
        video: true,
        audio: true,
        imageUrl: image2
    },
    {
        name: 'Anita Wine',
        email: 'anitawine@gmail.com',
        video: true,
        audio: false,
        imageUrl: image2
    },
    {
        name: 'Anita Wine',
        email: 'anitawine@gmail.com',
        video: false,
        audio: false,
        imageUrl: image2
    },
    {
        name: 'Ish Kevin',
        email: 'ishkevin@gmail.com',
        video: true,
        audio: false,
        imageUrl: image2
    },
    {
        name: 'Trizzie Ninety Six',
        email: 'trizzieninetysix@gmail.com',
        video: true,
        audio: true,
        imageUrl: image2
    },
    {
        name: 'Logan Joe',
        email: 'loganjoe@gmail.com',
        video: true,
        audio: true,
        imageUrl: image2
    },
    {
        name: 'Durk Derrick Banks',
        email: 'lildurk@gmail.com',
        video: true,
        audio: false,
        imageUrl: image2
    }
]

export type MessageType  = {
    name: string,
    imageUrl: string,
    message: string,
    time: Date
}

export const messages: MessageType[]  = [
    {
        name: "Ish Kevin",
        imageUrl: image2,
        message: "Hello guys, what's good ?",
        time: new Date(Date.now())
    },
    {
        name: "Trizzie ninety six",
        imageUrl: image2,
        message: "Ni poa poa BRO",
        time: new Date(Date.now())
    },
    {
        name: "What is this meeting up !",
        imageUrl: image2,
        message: "Ni poa poa BRO",
        time: new Date(Date.now())
    },
    {
        name: "Ish Kevin",
        imageUrl: image2,
        message: "Hello guys, what's good ?",
        time: new Date(Date.now())
    },
    {
        name: "Trizzie ninety six",
        imageUrl: image2,
        message: "Ni poa poa BRO",
        time: new Date(Date.now())
    },
    {
        name: "What is this meeting up !",
        imageUrl: image2,
        message: "Ni poa poa BRO",
        time: new Date(Date.now())
    }
]