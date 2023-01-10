
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