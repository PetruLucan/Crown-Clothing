const INITIAL_STATE = {
    sections :[
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://images.wallpaperscraft.com/image/single/sneakers_fence_shoes_166550_1024x768.jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'women',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/women'
    },
    {
        title: 'men',
        imageUrl: 'https://p4.wallpaperbetter.com/wallpaper/226/785/162/city-coffee-fashion-men-wallpaper-preview.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/men'
    }
]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;