import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import './directory.styles.scss';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
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
                    imageUrl: 'https://images.wallpaperscraft.com/image/sneakers_purple_sports_118194_7360x4912.jpg',
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
                    imageUrl: 'https://lh3.googleusercontent.com/proxy/XUGdFSQQD3ppOAgCoPXZxBo3ZYumpJFjASTgOQfJpFiKbBcyA-2J3E65rQp8C6s5oZwYmRVfnxv7fIUFISkmMmKRf5kqVtLfAtdvZ2jLQjfuEoc3zi4Ybnwz9-7isQvfjgw8COcs3C1SIzns-w',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/men'
                }
            ]
        }
    }
render (){
    return (
        <div className='directory-menu'>
            {
                this.state.sections.map(({id, ...otherSectionProps}) =>(
                    <MenuItem key={id} {...otherSectionProps}></MenuItem>
                ))
            }
        </div>
    )
}

}

export default Directory;