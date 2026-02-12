import { Article } from '../models/article.model';

export const ARTICLES_DATA: Article[] = [
    {
        id: 1,
        name: 'Article1',
        imageUrl: 'assets/images/article1.jpg',
        price: 19.95,
        isOnSale: false,
        quantityInCart: 0
    },
    {
        id: 2,
        name: 'Article2',
        imageUrl: '',
        price: 6.15,
        isOnSale: true,
        quantityInCart: 0
    },
    {
        id: 3,
        name: 'Article3',
        imageUrl: 'assets/images/article3.jpg',
        price: 31.9,
        isOnSale: false,
        quantityInCart: 0
    }
];
