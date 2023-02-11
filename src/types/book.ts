export interface BookMany {
    issueYear: string;
    rating?: number;
    title: string;
    authors: string[];
    image: Image;
    categories: string[];
    id: number;
    booking: Booking | null;
    delivery: Delivery | null;
    histories: History[] | null;
}

export interface BookOne {
    id: number;
    title: string;
    rating: number;
    issueYear: string;
    description: string;
    publish: string;
    pages: string;
    cover: string;
    weight: string;
    format: string;
    ISBN: string;
    producer: string;
    authors: string[];
    images: Image[];
    categories: string[];
    comments: Comment[];
    booking: Booking;
    delivery: Delivery;
    histories: History[];
}

export interface BookApiError {
    data: null;
    error: {
        status: number;
        name: string;
        message: string;
        detailks: object;
    };
}

export interface Delivery {
    id: number;
    handed: boolean;
    dateHandedFrom: Date;
    dateHandedTo: Date;
    recipientId: number;
    recipientFirstName: string;
    recipientLastName: string;
}

export interface Comment {
    id: number;
    rating: number;
    text: string;
    createdAt: Date;
    user: CommentUser;
}

export interface CommentUser {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl: string;
}

export interface Image {
    url: string;
}

export interface Booking {
    id: number;
    order: boolean;
    dateOrder: Date;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
}

export interface History {
    id: number;
    userId: number;
}
