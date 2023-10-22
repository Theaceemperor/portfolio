'use client'
import { PopperPopupState } from "@/app/components/modals";
import React from "react";
import { ProductPage6 } from "./ProductPage";

export default function MyGiftProducts() {

    const [ giftProducts, setGiftProducts ] = React.useState([
        { id: 1, product: 'Spades $5 gift', stock: 'In stock', amount: '$5', imagesrc: '/dollar-gift/2.png'},
        { id: 2, product: 'Spades $10 gift', stock: 'In stock', amount: '$10', imagesrc: '/dollar-gift/3.png'},
        { id: 3, product: 'Spades $15 gift', stock: 'In stock', amount: '$15', imagesrc: '/dollar-gift/4.png'},
        { id: 4, product: 'Spades $50 gift', stock: 'In stock', amount: '$50', imagesrc: '/dollar-gift/5.png'},
        { id: 5, product: 'Spades $100 gift', stock: 'In stock', amount: '$100', imagesrc: '/dollar-gift/6.png'},
        { id: 6, product: 'Spades $200 gift', stock: 'In stock', amount: '$200', imagesrc: '/dollar-gift/7.png'},
        { id: 7, product: 'Spades $500 gift', stock: 'In stock', amount: '$500', imagesrc: '/dollar-gift/8.png'},
    ])

    return (
        <main>
            <PopperPopupState buttonText={"View Available $ cards"}>
                <article className="flex flex-col lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 px-1 text-black">

                    {
                        giftProducts.map((item) => (
                            <ProductPage6 key={item.id} 
                            available={"available"}
                            name={"Name"}
                            price={"Price"}
                            product={item.product}
                            stock={item.stock}
                            amount={item.amount}
                            imageSrc={item.imagesrc}
                            />
                        ))
                    }
                </article>
            </PopperPopupState>
        </main>
    )
}

export function MyGiftProductsEuros() {
    const [ giftProducts, setGiftProducts ] = React.useState([
        { id: 1, product: 'Spades £5 gift', stock: 'In stock', amount: '£5', imagesrc: '/euro-card/2.png'},
        { id: 2, product: 'Spades £10 gift', stock: 'In stock', amount: '£10', imagesrc: '/euro-card/3.png'},
        { id: 3, product: 'Spades £15 gift', stock: 'In stock', amount: '£15', imagesrc: '/euro-card/4.png'},
        { id: 4, product: 'Spades £50 gift', stock: 'In stock', amount: '£50', imagesrc: '/euro-card/5.png'},
        { id: 5, product: 'Spades £100 gift', stock: 'In stock', amount: '£100', imagesrc: '/euro-card/6.png'},
        { id: 6, product: 'Spades £200 gift', stock: 'In stock', amount: '£200', imagesrc: '/euro-card/7.png'},
        { id: 7, product: 'Spades £500 gift', stock: 'In stock', amount: '£500', imagesrc: '/euro-card/8.png'},
    ])

    return (
        <main>
            <PopperPopupState buttonText={"View Available £ cards"}>
                <article className="flex flex-col lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 px-1 text-black">

                    {
                        giftProducts.map((item) => (
                            <ProductPage6 key={item.id} 
                            available={"available"}
                            name={"Name"}
                            price={"Price"}
                            product={item.product}
                            stock={item.stock}
                            amount={item.amount}
                            imageSrc={item.imagesrc}
                            />
                        ))
                    }
                </article>
            </PopperPopupState>
        </main>
    )
}